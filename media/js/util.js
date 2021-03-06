/**
 * Utility Module
 * ==============
 *
 * Contains useful helper functions.
 *
 */

/**
 * Utility function for converting degrees to radians.
 * @param {Number} deg - The quantity of degrees to be converted.
 * @return {Number}
 */
function radians(deg) {
    return deg * (Math.PI/180);
}

/**
 * Initialise the shader material used as a realistic water material.
 *
 * @return {THREE.ShaderMaterial} object.
 */
function load_water_material() {

    var water_texture = THREE.ImageUtils.loadTexture('media/images/terrain/water.png'),
        noise_texture = THREE.ImageUtils.loadTexture('media/images/terrain/noise.png');
    water_texture.wrapS = water_texture.wrapT = THREE.RepeatWrapping;
    noise_texture.wrapS = noise_texture.wrapT = THREE.RepeatWrapping;
    water_texture.transparent = true;

    // Set to the global water_uniforms object, so the time can be updated later.
    water_uniforms = {
        waterTexture: {type: 't', value: water_texture},
        waterSpeed: {type: 'f', value: 1.001},
        noiseTexture: {type: 't', value: noise_texture},
        noiseScale: {type: 'f', value: 0.8},
        alpha: {type: 'f', value: 0.5},
        time: {type: 'f', value: 1.0}
    };

    var water_shader_material = new THREE.ShaderMaterial({
        uniforms: water_uniforms, // Inject the variables used as shader uniforms.
        // Load shader code from scripts in index.html.
        vertexShader: document.getElementById('water-vertex-shader').textContent,
        fragmentShader: document.getElementById('water-fragment-shader').textContent,
        side: THREE.DoubleSide // Render the other side (lakes face down by default).
    });

    water_shader_material.transparent = true;

    return water_shader_material;
}
