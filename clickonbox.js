/* global AFRAME */
/* global score */
/* global updateHUD */

AFRAME.registerComponent("shootable", {
  init: function () {
    this.shootTarget = this.shootTarget.bind(this);
    this.el.addEventListener("shoot", this.shootTarget);
  },
  shootTarget: function () {
    console.log("🔫 Target hit! Adding score...");
    addScore(10); // ✅ Updates score
    this.moveTarget();
  },
  moveTarget: function () {
    let newX = (Math.random() - 0.5) * 6;
    let newY = Math.random() * 2 + 1;
    let newZ = -3;

    setTimeout(() => {
      console.log(`New target position: x=${newX}, y=${newY}, z=${newZ}`)
      this.el.setAttribute("position", { x: newX, y: newY, z: newZ });

      let scene = document.querySelector("a-scene");
      let cursor = scene.querySelector("[cursor]");
      if (cursor && cursor.components.raycaster) {
        cursor.components.raycaster.refreshObjects();
      }
    }, 50);
  }
});