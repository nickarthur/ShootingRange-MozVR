/**
 * Created by Mitchell Corish on 2015-01-24.
 */
// Connect to localhost and start getting frames
Leap.loop({enableGestures: true},
    function(frame) {
        if (frame.valid) {
            if (frame.gestures.length > 0) {
                frame.gestures.forEach(function (gesture) {
                    switch (gesture.type) {
                        case "circle":
                            console.log("Circle Gesture");
                            break;
                        case "keyTap":
                            console.log("Key Tap Gesture");
                            break;
                        case "screenTap":
                            console.log("Screen Tap Gesture");
                            break;
                        case "swipe":
                            console.log("Swipe Gesture");
                            break;
                    }
                });
            }
            if (frame.hands.length > 0) {
                var hand = frame.hands[0];
                var nameMap = ["thumb", "index", "middle", "ring", "pinky"];
                hand.pointables.forEach(function (pointable) {
                    if (pointable.tool) {
                        console.log("Tool");
                        var dart = pointable;
                    }//else
                        //console.log(nameMap[pointable.type]);
                });
            }
        }
    }
);

// Docs: http://leapmotion.github.io/leapjs-plugins/main/transform/
Leap.loopController.use('transform', {

    // This matrix flips the x, y, and z axis, scales to meters, and offsets the hands by -8cm.
    vr: true,

    // This causes the camera's matrix transforms (position, rotation, scale) to be applied to the hands themselves
    // The parent of the bones remain the scene, allowing the data to remain in easy-to-work-with world space.
    // (As the hands will usually interact with multiple objects in the scene.)
    effectiveParent: window.THREE_CAMERA,

});

// Docs: http://leapmotion.github.io/leapjs-plugins/main/bone-hand/
Leap.loopController.use('boneHand', {
    // If you already have a scene or want to create it yourself, you can pass it in here
    // Alternatively, you can pass it in whenever you want by doing
    // Leap.loopController.plugins.boneHand.scene = myScene.
    scene: window.THREE_SCENE,
    // Display the arm
    arm: true
});
