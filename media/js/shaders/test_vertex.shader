// Share normals between fragment and vertex shaders.
varying vec3 vNormal;

void main() {

    vNormal = normal;

    gl_Position = projectionMatrix *
                  modelViewMatrix *
                  vec4(position, 1.0);
}