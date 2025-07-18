import * as Three from 'three';

// Scene
const scene = new Three.Scene();

// Geometry
const geometry = new Three.BoxGeometry(1, 1, 1);

// Material
const material = new Three.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

// Mesh
const cube = new Three.Mesh(geometry, material);

// Add mesh to scene
scene.add(cube);

// Camera
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
scene.add(camera);

// Renderer
const renderer = new Three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
