// Including this in the footer so that the bone hand plugin can create its canvas on the body

//
// CREATE THE SCENE
//
//

var scene = window.THREE_SCENE;
var camera = window.THREE_CAMERA;
var renderer = window.THREE_RENDERER;

renderer.setSize(window.innerWidth, window.innerHeight);

onResize = function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};
window.addEventListener('resize', onResize, false);


var light = new THREE.PointLight(0xffffff, 1, 1000);
scene.add(light);

axisHelper = new THREE.AxisHelper(0.12);
axisHelper.position.set(0,-0.03,-0.30);
scene.add(axisHelper);

gridHelper = new THREE.GridHelper(10,1);
gridHelper.position.set(0,-5,0);
scene.add(gridHelper);

// dart board wall and stuff
var backGeo = new THREE.PlaneBufferGeometry(0.7,0.7);
var texture = THREE.ImageUtils.loadTexture('images/dartboard.jpg', {}, function() {
    renderer.render(scene,camera);
});
var material = new THREE.MeshBasicMaterial({map: texture});
var dartBoard = new THREE.Mesh(backGeo, material);

dartBoard.position.set(0,0.3,-0.8);
scene.add(dartBoard);

//Attempting to add walls for a room

//Wall behind player
var topGeo = new THREE.PlaneBufferGeometry(0.7,-0.7);
var wallTexture = THREE.ImageUtils.loadTexture('images/wall.jpg', {}, function() {
    renderer.render(scene,camera);
});
var wallMaterial = new THREE.MeshBasicMaterial({map: wallTexture});
var wall = new THREE.Mesh(topGeo, wallMaterial);

wall.position.set(0,0.3,0.8);
scene.add(wall);


