/**
 * Created by tkc on 7/05/15.
 */

// Variables used as globals.
var container, stats;
var camera, controls, scene, renderer;

var buildings;

var settings = {
    width: window.innerWidth,
    height: window.innerHeight,
    view_angle: 75,
    near: 0.1,
    far: 1000
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
    camera.position.set(0, 10, 10);

    controls = new THREE.OrbitControls(camera);
    controls.damping = 0.2;
    controls.addEventListener('change', render);

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0091D8, 0.002);

    // WORLD:

    // Show an axis reference.
    //var axis_helper = new THREE.AxisHelper(3);
    //axis_helper.position.x += 10;
    //scene.add(axis_helper);

    // Bottom plane.
    var plane_geometry = new THREE.PlaneBufferGeometry(20, 20);
    var plane_material = new THREE.MeshLambertMaterial({color: 0x539D3E});
    var plane = new THREE.Mesh(plane_geometry, plane_material);
    plane.rotateX(radians(-90));
    plane.receiveShadow = true;
    scene.add(plane);

    // Buildings.
    buildings = new THREE.Group();
    var building_material = new THREE.MeshPhongMaterial({color: 0xB59524});


    for (var i=0; i<BUILDING_DATA.length; i++) {
        console.log('Adding building: ' + BUILDING_DATA[i].name);

        var extrudeSettings = { amount: BUILDING_DATA[i].levels * 0.5, bevelEnabled: false };

        var building_shape = new THREE.Shape(BUILDING_DATA[i].points);
        var building_geometry = new THREE.ExtrudeGeometry(building_shape, extrudeSettings);
        var building_mesh = new THREE.Mesh(building_geometry, building_material.clone());

        building_mesh.rotateX(radians(90)); // Stand upright from horizontal.

        building_mesh.position.x = BUILDING_DATA[i].position.x;
        building_mesh.position.z = BUILDING_DATA[i].position.y;
        building_mesh.position.y += BUILDING_DATA[i].levels * 0.5; // Move up to ground level.

        building_mesh.castShadow = true;
        building_mesh.receiveShadow = true;

        buildings.add(building_mesh); // Add to the buildings group.
    }
    scene.add(buildings);


    // LIGHTS:

    var spotLight = new THREE.SpotLight(0xFFFFFF, 2);
    spotLight.position.set(20, 20, 20);
    spotLight.target.position.set(0, 0, 0);
    spotLight.castShadow = true;
    spotLight.shadowMapWidth = 1024;
    spotLight.shadowMapHeight = 1024;
    spotLight.shadowCameraNear = 0.1;
    spotLight.shadowCameraFar = 100;
    spotLight.shadowCameraFov = 30;
    scene.add(spotLight);

    var ambientLight = new THREE.AmbientLight(0x666666);
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
}

/**
 * Resize the canvas when the window size is modified.
 */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth / window.innerHeight);
    //render();
}

function render() {

    for (var i=0; i<buildings.children.length; i++) {
        buildings.children[i].rotateZ(0.01);
    }

    buildings.rotateY(-0.01);

    renderer.render(scene, camera);
}
