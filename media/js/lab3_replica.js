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
camera.position.z = 5;
renderer.setClearColor(0x0091D8, 1); //'Sky color'

// Enable Shadows.
renderer.shadowMapEnabled = true;
renderer.shadowMapType = THREE.PCFSoftShadowMap;


/*============
Geometry
==============*/

// Initialise a plane.
var plane_geometry = new THREE.PlaneGeometry(20, 20);
var plane_material = new THREE.MeshLambertMaterial({color: 0xCCCCCC});
var plane = new THREE.Mesh(plane_geometry, plane_material);
plane.rotateX(-45);
plane.position.y -= 3; // Lower below sphere and arrow.
scene.add(plane);

// Initialise a sphere.
var sphere_geometry = new THREE.SphereGeometry(1, 50, 50);
var sphere_material = new THREE.MeshPhongMaterial({color: 0x00AA00, shininess: 100});
var sphere = new THREE.Mesh(sphere_geometry, sphere_material);
scene.add(sphere);

// Initialise a cone.
var cone_geometry = new THREE.CylinderGeometry(0, 0.25, 0.5, 10, 10);
var cone_material = new THREE.MeshLambertMaterial({color: 0xAA0000});
var cone = new THREE.Mesh(cone_geometry, cone_material);
scene.add(cone);

//Initialise a cylinder (arrow stem) and add it as a child of the arrow.
var cylinder_geometry = new THREE.CylinderGeometry(0.125, 0.125, 1, 10, 10);
var cylinder_material = new THREE.MeshLambertMaterial({color: 0x0000AA});
var cylinder = new THREE.Mesh(cylinder_geometry, cylinder_material);
cylinder.position.y -= 0.75; // Offset height.
cone.add(cylinder);


/*=============
 Lighting
 ==============*/

//Initialise ambient light
light = new THREE.AmbientLight(0x666666);
scene.add( light );


var spotLight = new THREE.SpotLight(0xFFFFFF, 2, 10, 90);
spotLight.position.z = 5;
spotLight.position.y = 5;
spotLight.target.position.set(0, 0, 0);
spotLight.shadowCameraNear	= 0.01;
spotLight.castShadow		= true;
spotLight.shadowDarkness	= 0.25;
//spotLight.shadowCameraVisible	= true;
scene.add(spotLight);

plane.receiveShadow = true;
sphere.castShadow = true;
sphere.receiveShadow = true;
cone.castShadow = true;
cone.receiveShadow = true;
cylinder.castShadow = true;
cylinder.receiveShadow = true;

/*==============
 Runtime
 ==============*/

// Persistent variables.
var Theta = 0,
    Phi = 0,
    PhiSign = 1;

function render() {
    requestAnimationFrame(render);

    // Update cartesian coordinates.
    var r_xz = 1.25 * Math.cos(Phi * Math.PI/180);
    var y = 1.25 * Math.sin(Phi * Math.PI/180),
        z = r_xz * Math.cos(Theta * Math.PI/180),
        x = r_xz * Math.sin(Theta * Math.PI/180);

    // Update Cone.
    cone.position.set(x, y, z);
    cone.lookAt(new THREE.Vector3(0, 0, 0)); // Point at the origin.
    cone.rotateX(90 * Math.PI/180);

    // Update Angles.
    Theta += 1;
    Theta %= 360;

    Phi += PhiSign * 0.5;
    if (Phi > 90.0) {
        PhiSign = -1;
    } else if (Phi < -90.0) {
        PhiSign = 1;
    }
    Phi += PhiSign;

    renderer.render(scene, camera);
}

render();