AFRAME.registerComponent("mouse-look", {
    schema: { sensitivity: { type: "number", default: 0.2 } },
    init: function () {
      this.pitch = 0;
      this.yaw = 0;
      this.isLocked = false;
  
      this.onMouseMove = this.onMouseMove.bind(this);
      this.onClick = this.onClick.bind(this);
      this.onPointerLockChange = this.onPointerLockChange.bind(this);
  
      document.addEventListener("pointerlockchange", this.onPointerLockChange);
      document.addEventListener("click", this.onClick);
    },
    onClick: function () {
      if (!this.isLocked) {
        document.body.requestPointerLock();
      }
    },
    onPointerLockChange: function () {
      if (document.pointerLockElement === document.body) {
        this.isLocked = true;
        window.addEventListener("mousemove", this.onMouseMove);
      } else {
        this.isLocked = false;
        window.removeEventListener("mousemove", this.onMouseMove);
      }
    },
    onMouseMove: function (event) {
      if (!this.isLocked) return;
  
      let sensitivity = this.data.sensitivity;
      this.yaw -= event.movementX * sensitivity;
      this.pitch -= event.movementY * sensitivity;
      this.pitch = Math.max(-90, Math.min(90, this.pitch));
  
      this.el.setAttribute("rotation", { x: this.pitch, y: this.yaw, z: 0 });
    },
    remove: function () {
      document.removeEventListener("pointerlockchange", this.onPointerLockChange);
      document.removeEventListener("click", this.onClick);
      window.removeEventListener("mousemove", this.onMouseMove);
    }
  });
  