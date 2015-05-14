/**
 * Created by tkc on 7/05/15.
 */

// Variables used as globals.
var container, stats;
var camera, controls, scene, renderer;

var buildings, spotLight, sun;

var settings = {
    width: window.innerWidth,
    height: window.innerHeight,
    view_angle: 75,
    near: 1,
    far: 10000
};
settings.aspect = settings.width / settings.height;


var clock = new THREE.Clock();

// Start the application.
init();
animate();


/**
 * Keep the frame rate consistent, update UI features and trigger a render call.
 */
function animate() {
    requestAnimationFrame(animate);
    render();
    controls.update();
    stats.update();
}


/**
 * Initialising function. Called to establish the scene, geometry, and lighting.
 */
function init() {
    camera = new THREE.PerspectiveCamera(settings.view_angle, settings.aspect, settings.near, settings.far);
    camera.position.set(250, 250, 250);

    controls = new THREE.OrbitControls(camera);
    controls.damping = 0.2;
    controls.addEventListener('change', render);

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0091D8, 0.0002);

    // WORLD:

    // Bottom plane.
    var plane_geometry = new THREE.PlaneBufferGeometry(2000, 2000);
    var plane_material = new THREE.MeshPhongMaterial({color: 0x5B9D3A});
    var plane = new THREE.Mesh(plane_geometry, plane_material);
    plane.rotateX(radians(-90)); // Rotate to flat.
    plane.receiveShadow = true;
    scene.add(plane); // Add it to the global scene.

    // Buildings.
    buildings = new THREE.Group(); // Make a group that contains all buildings.
    var building_material = new THREE.MeshPhongMaterial({color: 0xB59524});

    // Iterate building data (defined in data.js).
    for (var i=0; i<BUILDING_DATA.length; i++) {
        console.log('Adding building: ' + BUILDING_DATA[i].name);

        var extrudeSettings = { amount: BUILDING_DATA[i].levels * 7.5, bevelEnabled: false };

        var building_shape = new THREE.Shape(BUILDING_DATA[i].points);
        var building_geometry = new THREE.ExtrudeGeometry(building_shape, extrudeSettings);
        var building_mesh = new THREE.Mesh(building_geometry, building_material.clone());

        building_mesh.rotateX(radians(90)); // Stand upright from horizontal.
        building_mesh.rotateZ(radians(BUILDING_DATA[i].rotation));

        building_mesh.position.x = BUILDING_DATA[i].position.x - 1000; // Offset around origin.
        building_mesh.position.z = BUILDING_DATA[i].position.y - 1000; // Offset around origin.
        building_mesh.position.y += BUILDING_DATA[i].levels * 7.5; // Move up to ground level.

        building_mesh.castShadow = true;
        building_mesh.receiveShadow = true;

        buildings.add(building_mesh); // Add this building to the buildings group.
    }
    scene.add(buildings);

    sun = new THREE.Mesh(new THREE.SphereGeometry(10, 10, 10),
                         new THREE.MeshPhongMaterial({color: 0xFFFF66}));
    scene.add(sun);

    // LIGHTS:

    spotLight = new THREE.SpotLight(0xFFFFFF, 1);
    spotLight.position.set(500, 250, 500);
    spotLight.target.position.set(0, 0, 0);
    spotLight.castShadow = true;
    spotLight.shadowMapWidth = 1024*2;
    spotLight.shadowMapHeight = 1024*2;
    spotLight.shadowCameraNear = 1;
    spotLight.shadowCameraFar = 5000;
    spotLight.shadowCameraFov = 90;
    spotLight.shadowDarkness = 0.1;
    //spotLight.shadowCameraVisible = true;
    scene.add(spotLight);

    var ambientLight = new THREE.AmbientLight(0xDDDDDD);
    scene.add(ambientLight);

    // RENDERER:
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(scene.fog.color);
    renderer.setSize(settings.width, settings.height);

    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;

    renderer.shadowMapWidth = 1024;
    renderer.shadowMapHeight = 1024;

    // DOM MANIPULATION:
    container = document.getElementById('container');
    container.appendChild(renderer.domElement);

    // STATISTICS:
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    stats.domElement.style.zIndex = 100;
    container.appendChild(stats.domElement);

    // EVENTS:
    window.addEventListener('resize', onWindowResize, false);

    var building_start = {height_scale: 0.1, color: 0.0},
        building_target = {height_scale: 1, color: 0.8};
    var building_tween = new TWEEN.Tween(building_start).to(building_target, 5000);
    building_tween.easing(TWEEN.Easing.Sinusoidal.InOut);
    building_tween.onUpdate(function () {
        buildings.scale.y = building_start.height_scale;
        for (var i=0; i<buildings.children.length; i++) {
            buildings.children[i].material.color.setHSL(0.1, building_start.color, 0.6);
        }
    });
    building_tween.start();
}

/**
 * Resize the canvas when the window size is modified.
 */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    //camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / window.innerHeight);
    render();
}

function render() {
    TWEEN.update();
    spotLight.position.x = 500*Math.cos(clock.getElapsedTime() * 0.1);
    spotLight.position.z = 500*Math.sin(clock.getElapsedTime() * 0.1);
    spotLight.position.y = 200 + 50*Math.sin(clock.getElapsedTime());
    spotLight.lookAt(new THREE.Vector3(0, 0, 0));
    sun.position.set(spotLight.position.x, spotLight.position.y, spotLight.position.z);
    renderer.render(scene, camera);
}
