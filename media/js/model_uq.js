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
render();


/**
 * ???
 */
function animate() {
    requestAnimationFrame(animate);
    controls.update();
}


/**
 * Initialising function. Called to establish the scene, geometry, and lighting.
 */
function init() {
    camera = new THREE.PerspectiveCamera(settings.view_angle, settings.aspect, settings.near, settings.far);
    camera.position.set(8, 2, -8);

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
    plane.receiveShadow = true;
    scene.add(plane);

    // Buildings.
    buildings = new THREE.Group();

    var b_amp = 5,
        b_min = 0.1,
        sig_x = 3,
        sig_z = 3;

    var building_geometry = new THREE.BoxGeometry(0.75, 1, 0.75),
        building_material = new THREE.MeshPhongMaterial({color: 0x6600AA});

    for (var x=-10; x<10; x++) {
        for (var z=-10; z<10; z++) {
            // Calculate a new random height based on a normal distribution.
            var height = b_amp * Math.exp(- ((Math.pow(x, 2)/(2*Math.pow(sig_x, 2))) + (Math.pow(z, 2)/(2*Math.pow(sig_z, 2)))) );
            height = Math.max(b_min, height) + Math.random();

            // Create a new building object (clone the material so it can be independently colored.
            var building = new THREE.Mesh(building_geometry, building_material.clone());
            building.material.color.setHSL(Math.random(), 1, 0.5); // Set a random color.
            building.scale.y *= height;

            // Position the building on the grid.
            building.position.x = x + 0.5;
            building.position.y += 1/2 * height; // Offset to ground.
            building.position.z = z + 0.5;

            building.castShadow = true;
            building.receiveShadow = true;

            // Add the building to the buildings group.
            buildings.add(building);
        }
    }

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

    render();
    animate();
}

/**
 * Resize the canvas when the window size is modified.
 */
function onWindowResize() {
    camera.aspect = settings.aspect;
    camera.updateProjectionMatrix();
    renderer.setSize(settings.width, settings.height);
    render();
}

function render() {
    renderer.render(scene, camera);
    stats.update();
}
