/**
 * Created by tkc on 7/05/15.
 */

$(document).ready(makeApp);


function radians(deg) {
    return deg * (Math.PI/180);
}


function makeApp() {
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

    var $container = $('#container'); // Get container div with jQuery.

    renderer.setSize(WIDTH, HEIGHT);
    $container.append(renderer.domElement); // Add the render element to the page.

    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    // Settings.
    camera.position.z = 25;
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


    // Initialise buildings.
    var x, z;

    var b_amp = 5,
        sig_x = 3,
        sig_z = 3;

    for (x=-10; x<10; x++) {
        for (z=-10; z<10; z++) {
            //var depth = 5 - 0.05*Math.pow(x, 2) - 0.05*Math.pow(z, 2);
            var depth = b_amp * Math.exp(- ((Math.pow(x, 2)/(2*Math.pow(sig_x, 2))) + (Math.pow(z, 2)/(2*Math.pow(sig_z, 2)))) );
            depth = Math.max(0.1, depth);

            var building_geometry = new THREE.BoxGeometry(0.75, 0.75, depth),
                building_material = new THREE.MeshLambertMaterial({color: 0xffffff});

            var building = new THREE.Mesh(building_geometry, building_material.clone());

            building.position.x += x + 0.5;
            building.position.y += z + 0.5;
            building.position.z += 1/2 * depth;

            building.material.color.setHSL(Math.random(), 1, 0.5);
            building.receiveShadow = true;
            building.castShadow = true;

            plane.add(building);
        }
    }


    /*=============
     Lighting
     ==============*/

    //Initialise ambient light
    ambientLight = new THREE.AmbientLight(0xAAAAAA);
    scene.add(ambientLight);


    var spotLight = new THREE.SpotLight(0xFFFFFF, 2, 100, 120);
    spotLight.position.x = 20;
    spotLight.position.z = 20;
    spotLight.position.y = 0;
    spotLight.target.position.set(0, 0, 0);
    spotLight.shadowCameraNear = 0.01;
    spotLight.castShadow = true;
    spotLight.shadowDarkness = 0.5;
    //spotLight.shadowCameraVisible	= true;
    scene.add(spotLight);

    plane.receiveShadow = true;



    /*==============
     UI/Interaction
    ==============*/
    function setupMouseCamera() {
        //Setup mouse camera movement
        var mouseDown = false;
        var startMouseX, startMouseY;
        var rot = Math.PI/3;

        $container.on('mousedown', function (ev){
            mouseDown = true;
            startMouseX = ev.clientX;
            startMouseY = ev.clientY;
        });

        $container.on('mouseup', function(){
            mouseDown = false;
        });

        $container.on('mousemove', function(ev) {
            if (mouseDown) {
                var dx = ev.clientX - startMouseX;
                var dy = ev.clientY - startMouseY;
                rot += dx*0.005;
                camera.position.x = Math.cos(rot)*5;
                camera.position.z = Math.sin(rot)*5;
                //Maximum vertical position is 50 units
                camera.position.y = Math.max(5, camera.position.y+dy);
                startMouseX += dx;
                startMouseY += dy;
                camera.lookAt(new THREE.Vector3(0, 0, 0));
            }
        });
    }
    //Setup our mouse camera controls
    setupMouseCamera();


    /*==============
     Runtime
     ==============*/

    plane.rotateX(radians(-90));

    function render() {
        requestAnimationFrame(render);

        //camera.position.y += Math.sin(clock.getElapsedTime());
        //camera.lookAt(new THREE.Vector3(0, 0, 0));

        renderer.render(scene, camera);
    }

    render();

}
