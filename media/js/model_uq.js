/**
 * Created by tkc on 7/05/15.
 */

/*=============
 Initialisation
 ==============*/

// Scene variables.
var WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight;

// Camera variables.
var VIEW_ANGLE = 75,
    ASPECT = WIDTH / HEIGHT,
    NEAR = 0.1,
    FAR = 1000;

var scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR),
    renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(WIDTH, HEIGHT);
document.body.appendChild(renderer.domElement);

renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Settings.
camera.position.z = 25;
//camera.position.y = 10;
//camera.lookAt(new THREE.Vector3(0, 0, 0));
renderer.setClearColor(0x0091D8, 1); //'Sky color'

// Enable Shadows.
renderer.shadowMapEnabled = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;


/*============
 Geometry
 ==============*/

// Initialise a plane.
var plane_geometry = new THREE.PlaneBufferGeometry(20, 20);
var plane_material = new THREE.MeshLambertMaterial({color: 0x539D3E});
var plane = new THREE.Mesh(plane_geometry, plane_material);
scene.add(plane);


var x, z;

for (x=-10; x<10; x++) {
    for (z=-10; z<10; z++) {
        var depth = 5 - 0.05*Math.pow(x, 2) - 0.05*Math.pow(z, 2);
        depth = Math.max(0.1, depth);

        var building_geometry = new THREE.BoxGeometry(0.75, 0.75, depth),
            building_material = new THREE.MeshLambertMaterial({color: 0xffffff});

        var building = new THREE.Mesh(building_geometry, building_material.clone());

        building.position.x += x + 0.5;
        building.position.y += z + 0.5;
        building.position.z += 1/2 * depth;

        building.material.color.setHSL(Math.random(), 1, 0.5);

        plane.add(building);
    }
}


/*=============
 Lighting
 ==============*/

//Initialise ambient light
light = new THREE.AmbientLight(0x666666);
scene.add( light );


var spotLight = new THREE.SpotLight(0xFFFFFF, 2, 100, 120);
spotLight.position.z = 50;
spotLight.position.y = 5;
spotLight.target.position.set(0, 0, 0);
spotLight.shadowCameraNear = 0.01;
spotLight.castShadow = true;
spotLight.shadowDarkness = 0.25;
//spotLight.shadowCameraVisible	= true;
scene.add(spotLight);

plane.receiveShadow = true;

/*==============
 Runtime
 ==============*/

plane.rotateX(-45 * Math.PI/180);

function render() {
    requestAnimationFrame(render);
    plane.rotateZ(0.01);

    renderer.render(scene, camera);
}

render();