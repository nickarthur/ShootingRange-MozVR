/**
 * Created by Mitchell Corish on 2015-01-24.
 */
// Moves (translates and rotates) the camera
var vrControls = new THREE.VRControls(camera);

var vrEffect = new THREE.VREffect(renderer);


var onkey = function(event) {
    if (event.key === 'z') {
        vrControls.zeroSensor();
    }
    if (event.key === 'f') {
        return vrEffect.setFullScreen(true);
    }
};

window.addEventListener("keypress", onkey, true);
