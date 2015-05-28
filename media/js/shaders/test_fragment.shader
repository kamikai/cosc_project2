// Import normals shared from vertex shader.
varying vec3 vNormal;

void main() {
    //Calculate dot product and clamp:

    vec3 light = vec3(0.5, 0.2, 1.0);
    // Ensure it's normalised (converted into unit space).
    light = normalize(light);
    // Calculate dot product.
    float dProd = max(0.0, dot(vNormal, light));

    // Feed to the fragment color.
    gl_FragColor = vec4(dProd, dProd, dProd, 1.0);
}