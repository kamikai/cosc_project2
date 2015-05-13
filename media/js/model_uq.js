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
 * ???
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
    camera.position.set(10, 0, -15);

    controls = new THREE.OrbitControls(camera);
    controls.damping = 0.2;
    controls.addEventListener('change', render);

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0091D8, 0.002);

    // WORLD:

    // Bottom plane.
    var plane_geometry = new THREE.PlaneBufferGeometry(20, 20);
    var plane_material = new THREE.MeshLambertMaterial({color: 0x539D3E});
    var plane = new THREE.Mesh(plane_geometry, plane_material);
    plane.rotateX(radians(-90));
    scene.add(plane);

    // Buildings.
    buildings = new THREE.Group();
    var building_material = new THREE.MeshPhongMaterial({color: 0xB59524});


    for (var i=0; i<BUILDING_DATA.length; i++) {
        console.log('Adding building: ' + BUILDING_DATA[i].name);

        var extrudeSettings = { amount: BUILDING_DATA[i].levels, bevelEnabled: false };

        var building_shape = new THREE.Shape(BUILDING_DATA[i].points);
        var building_geometry = new THREE.ExtrudeGeometry(building_shape, extrudeSettings);
        var building_mesh = new THREE.Mesh(building_geometry, building_material.clone());

        building_mesh.rotateX(radians(-90));

        building_mesh.position.x = BUILDING_DATA[i].position.x;
        building_mesh.position.z = BUILDING_DATA[i].position.y;

        buildings.add(building_mesh);
    }

    //buildings.rotateX(radians(-90)); // Position upright.
    //buildings.rotateZ(radians(180)); // Position North.
    scene.add(buildings);

    // LIGHTS:

    var spotLight = new THREE.SpotLight(0xFFFFFF, 2, 100, 90);
    spotLight.position.set(20, 20, 20);
    spotLight.target.position.set(0, 0, 0);
    scene.add(spotLight);

    var ambientLight = new THREE.AmbientLight(0x666666);
    scene.add(ambientLight);

    // RENDERER:
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(scene.fog.color);
    renderer.setSize(settings.width, settings.height);

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
    camera.aspect = settings.aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(settings.width, settings.height);
    //render();
}

function render() {

    buildings.rotateY(0.01);
    buildings.scale.y = Math.max(0.1, 0.5+0.5*Math.sin(clock.getElapsedTime()));

    renderer.render(scene, camera);
}
