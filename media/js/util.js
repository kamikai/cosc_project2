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
    var water_shader_material = new THREE.ShaderMaterial({
        // Load shader code from scripts in index.html.
        vertexShader: document.getElementById('water-vertex-shader').innerHTML,
        fragmentShader: document.getElementById('water-fragment-shader').innerHTML,
        side: THREE.DoubleSide
    });

    THREE.log(water_shader_material);

    return water_shader_material;
}
