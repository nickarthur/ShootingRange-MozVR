/**
 * Created by Mitchell Corish on 2015-01-24.
 */
// Connect to localhost and start getting frames
Leap.loop();

// Docs: http://leapmotion.github.io/leapjs-plugins/main/transform/
Leap.loopController.use('transform', {

    // This matrix flips the x, y, and z axis, scales to meters, and offsets the hands by -8cm.
    vr: true,

    // This causes the camera's matrix transforms (position, rotation, scale) to be applied to the hands themselves
    // The parent of the bones remain the scene, allowing the data to remain in easy-to-work-with world space.
    // (As the hands will usually interact with multiple objects in the scene.)
    effectiveParent: camera

});

// Docs: http://leapmotion.github.io/leapjs-plugins/main/bone-hand/
Leap.loopController.use('riggedHand', {
    dotsMode: false,
    parent: scene,
    renderFn: function(){
        renderer.render(scene, camera);
    }
});
