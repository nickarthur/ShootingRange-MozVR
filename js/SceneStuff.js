// Including this in the footer so that the bone hand plugin can create its canvas on the body

//
// CREATE THE SCENE
//
//

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    10000
);

var canvas = document.getElementById('scene');
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.style.left = 0;

var renderer = new THREE.WebGLRenderer({
    antialias: true,
    canvas: canvas
});

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

//
// ADD CUBES (blah blah)
//
//
// dart board wall and stuff
var backGeo = new THREE.PlaneGeometry(0.7,0.7);
var texture = THREE.ImageUtils.loadTexture('images/dartboard.jpg', {}, function() {
    renderer.render(scene);
});
var material = new THREE.MeshBasicMaterial({map: texture});
var dartBoard = new THREE.Mesh(backGeo, material);

dartBoard.position.set(0,0.3,-0.8);
scene.add(dartBoard);