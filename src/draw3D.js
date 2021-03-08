

// I HAVE TO FIGURE OUT HOW TO MAKE THIS FILE WAIT UNTIL PLAYER.JS FINISHES LOADING.
// window.onload = init;
console.log('Where am I => ' + document.getElementById('#player_mwdk'));
// -----------------------------------------------------------------------------

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xcccccc);

const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(0, 0, 10);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', function () {
	camera.aspect = window.innerWidth / window.innerWidth;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}, false);

// const controls = new THREE.OrbitControls(camera, renderer.domElement);

const geometry = new THREE.BoxGeometry(2, 4, 8);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = false;
cube.position.set(0, 0, 0);
scene.add(cube);

const animate = function () {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;

	renderer.render(scene, camera);
}

animate();

