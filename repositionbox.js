/* global AFRAME*/

AFRAME.registerComponent('repositionbox', {

  tick: function (time, delta) {
    let position = this.el.getAttribute('position')
    position.y = (position.y) % 360
    this.el.setAttribute('position', position)
  },
  
});
