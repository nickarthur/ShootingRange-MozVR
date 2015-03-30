/**
 * Created by Mitchell Corish on 2015-01-24.
 */
var oldVelocity = 0, acceleration = 0;
// Connect to localhost and start getting frames
Leap.loop({enableGestures: true},
    function(frame) {
        if (frame.valid) {
            if (frame.gestures.length > 0) {
                frame.gestures.forEach(function (gesture) {
                    /*
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
                    */
                });
            }
            //if (frame.hands.length > 0) {
            //    var oldVelocity = 0;
            //    var acceleration = 0;
            //    var hand = frame.hands[0];
            //    var nameMap = ["thumb", "index", "middle", "ring", "pinky"];
            //    frame.pointables.forEach(function (pointable) {
            //        if (nameMap[pointable.type] === "index" || nameMap[pointable.type] === "thumb") {
            //            var newVelocity = pointable.tipVelocity;
            //            console.log(newVelocity);
            //            acceleration = (oldVelocity - newVelocity)/10;
            //            oldVelocity = newVelocity;
            //            console.log(acceleration);
            //        }
            //    });
            //}
            if (frame.tools.length > 0) {
                //var tool = frame.tools[0];
                frame.tools.forEach(function(tool, i) {
                    console.log('tool id: ' + i);
                    var newVelocity = tool.tipVelocity;
                    //console.log(newVelocity);
                    acceleration = {
                        x: (newVelocity.x - oldVelocity.x) / 10,
                        y: (newVelocity.y - oldVelocity.y) / 10,
                        z: (newVelocity.z - oldVelocity.z) / 10
                    };
                    //acceleration = (newVelocity - oldVelocity) / 10;
                    oldVelocity = newVelocity;
                    console.log('acceleration:');
                    console.log(acceleration);

                    var dir = tool.direction;
                    console.log('direction: ');
                    console.log(dir);
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
    effectiveParent: window.THREE_CAMERA

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


