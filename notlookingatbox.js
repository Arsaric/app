/* global AFRAME, BOX_NOT_SELECTED_COLOR */

AFRAME.registerComponent('not-looking-at-box', {

 dependencies: ['raycaster'],

 init: function () {
   this.el.addEventListener('raycaster-intersected-cleared', this.intersected.bind(this))
 },
  
 intersected: function () {
   let material = this.el.getAttribute('material')
   material.color = BOX_NOT_SELECTED_COLOR
   this.el.setAttribute('material', material)
 }
  
});
