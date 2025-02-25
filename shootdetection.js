/* global score */
/* global updateHUD */

AFRAME.registerComponent("shoot-detection", {
    init: function () {
      let camera = document.querySelector("#camera");
  
      window.addEventListener("mousedown", () => {
        let target = camera.components.raycaster.intersectedEls[0];
  
        if (target && target.classList.contains("clickable")) {
          console.log("✅ Shooting detected! Sending 'shoot' event.");
          target.emit("shoot"); // ✅ Fire the event
        } else {
          console.log("❌ No target detected.");
        }
      });
    }
  });
  