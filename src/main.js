import * as THREE from 'three';
// removed postprocessing imports to disable bloom/glow for a crisp, bright Earth
import '../public/style.css';

function initAnimation() {
	const canvasContainer = document.getElementById('canvas-container');
	if (!canvasContainer) return;

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 2000);
	const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	renderer.outputColorSpace = THREE.SRGBColorSpace;
	renderer.physicallyCorrectLights = true;
	// Use linear tone mapping for a brighter, truer result (no filmic compression)
	renderer.toneMapping = THREE.LinearToneMapping;
	renderer.toneMappingExposure = 2.0;
	renderer.setClearColor(0x040812, 0);
	renderer.shadowMap.enabled = false;
	canvasContainer.appendChild(renderer.domElement);

	// Render directly to keep the scene crisp and without bloom/glow

	const ambientLight = new THREE.AmbientLight(0x9fdcff, 1.6);
	scene.add(ambientLight);

	const directionalLight = new THREE.DirectionalLight(0xffffff, 3.0);
	directionalLight.position.set(5, 3, 5);
	scene.add(directionalLight);

	const hemisphereLight = new THREE.HemisphereLight(0xbfefff, 0x0b1220, 1.1);
	scene.add(hemisphereLight);

	const fillLight = new THREE.PointLight(0x7fdcff, 1.7, 80);
	fillLight.position.set(-6, -1, 6);
	scene.add(fillLight);

	// Starfield
	const PARTICLE_COUNT = 8000;
	const particleGeometry = new THREE.BufferGeometry();
	const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
	const particleVelocities = new Float32Array(PARTICLE_COUNT * 3);

	for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
		particlePositions[i] = (Math.random() - 0.5) * 200;
		particlePositions[i + 1] = (Math.random() - 0.5) * 200;
		particlePositions[i + 2] = (Math.random() - 0.5) * 200;

		particleVelocities[i] = (Math.random() - 0.5) * 0.05;
		particleVelocities[i + 1] = (Math.random() - 0.5) * 0.05;
		particleVelocities[i + 2] = (Math.random() - 0.5) * 0.05;
	}

	particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

	const particleMaterial = new THREE.PointsMaterial({
		size: 0.28,
		color: 0x9fe9ff,
		transparent: true,
		opacity: 0.9,
		sizeAttenuation: true,
		blending: THREE.AdditiveBlending,
	});

	const starfield = new THREE.Points(particleGeometry, particleMaterial);
	scene.add(starfield);

	const textureLoader = new THREE.TextureLoader();
	const earthTexture = textureLoader.load('/earth.jpg', (texture) => {
		if (texture && texture.isTexture) {
			texture.encoding = THREE.sRGBEncoding;
			texture.anisotropy = 16;
			texture.minFilter = THREE.LinearMipMapLinearFilter;
		}
	});

	// Earth material tuned for realistic shading
	const earthGeometry = new THREE.SphereGeometry(3, 96, 96);
	const earthMaterial = new THREE.MeshPhysicalMaterial({
		map: earthTexture,
		roughness: 0.35,
		metalness: 0.0,
		clearcoat: 0.04,
		clearcoatRoughness: 0.12,
		emissive: new THREE.Color(0x000000),
		emissiveIntensity: 0.0,
		envMapIntensity: 1.4,
	});

	const earth = new THREE.Mesh(earthGeometry, earthMaterial);
	scene.add(earth);

	// Subtle atmosphere glow using shader
	// Remove atmospheric shader and glow for a crisp, realistic Earth presentation

	// Network visualization (kept subtle)
	const latLngToVec3 = (lat, lng, radius = 3.2) => {
		const phi = (90 - lat) * (Math.PI / 180);
		const theta = (lng + 180) * (Math.PI / 180);
		const x = -(radius * Math.sin(phi) * Math.cos(theta));
		const y = radius * Math.cos(phi);
		const z = radius * Math.sin(phi) * Math.sin(theta);
		return new THREE.Vector3(x, y, z);
	};

	const nodeLatLng = [[24,67],[35,-120],[-23,-46],[1,103],[19,72],[51,0],[-1,36]];
	const links = [[0,4],[4,3],[3,6],[6,5],[5,1],[0,2],[2,1]];
	const nodePositions = nodeLatLng.map(([lat,lng]) => latLngToVec3(lat,lng));

	const networkLineMaterial = new THREE.LineBasicMaterial({ color: 0x55f3ff, transparent: true, opacity: 0.65, blending: THREE.AdditiveBlending });
	links.forEach(([a,b]) => {
		const lineGeometry = new THREE.BufferGeometry().setFromPoints([nodePositions[a], nodePositions[b]]);
		const line = new THREE.Line(lineGeometry, networkLineMaterial);
		earth.add(line);
	});

	const nodeGeometry = new THREE.SphereGeometry(0.06, 12, 12);
	const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
	const nodeRefs = [];
	nodePositions.forEach((pos, idx) => {
		const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
		node.position.copy(pos);
		earth.add(node);
		nodeRefs.push(node);
	});

	camera.position.z = 10.2;
	camera.position.y = 2.2;
	camera.lookAt(0,0,0);

	let mouseX = 0, mouseY = 0, scrollProgress = 0, frameCount = 0;
	document.addEventListener('mousemove', (e) => { mouseX = (e.clientX - window.innerWidth/2) * 0.0015; mouseY = (e.clientY - window.innerHeight/2) * 0.0015; });
	window.addEventListener('scroll', () => { const scrollable = Math.max(document.body.scrollHeight - window.innerHeight,1); scrollProgress = Math.min(window.scrollY/scrollable,1); });

	function animate(){
		requestAnimationFrame(animate);
		frameCount += 1;
		const t = frameCount * 0.001;

		earth.rotation.y += 0.0009;
		earth.rotation.x = Math.sin(t*0.28)*0.08;

		nodeRefs.forEach((n, i) => { const pulse = 1 + Math.sin(t*2.5 + i) * 0.35; n.scale.setScalar(pulse); n.material.opacity = 0.5 + Math.sin(t*1.8 + i)*0.25; });

		for (let i=0;i<PARTICLE_COUNT*3;i+=3){
			particlePositions[i] += particleVelocities[i];
			particlePositions[i+1] += particleVelocities[i+1];
			particlePositions[i+2] += particleVelocities[i+2];
			if(particlePositions[i]>100) particlePositions[i]=-100; if(particlePositions[i]<-100) particlePositions[i]=100;
			if(particlePositions[i+1]>100) particlePositions[i+1]=-100; if(particlePositions[i+1]<-100) particlePositions[i+1]=100;
			if(particlePositions[i+2]>100) particlePositions[i+2]=-100; if(particlePositions[i+2]<-100) particlePositions[i+2]=100;
		}
		particleGeometry.attributes.position.needsUpdate = true;

		starfield.rotation.y += 0.00008;
		starfield.material.opacity = 0.45 + Math.sin(t*0.9)*0.05;

		camera.position.x += (mouseX*8 - camera.position.x) * 0.05;
		camera.position.y += (-mouseY*6 + 2.6 - camera.position.y) * 0.05;
		camera.position.z += (12 - scrollProgress*4 - camera.position.z) * 0.04;
		camera.lookAt(earth.position);

		renderer.render(scene, camera);
	}

	window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });

	animate();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initAnimation); else initAnimation();

// Contact form handling (unchanged)
const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');

if (contactForm && contactStatus) {
	contactForm.addEventListener('submit', async (event) => {
		event.preventDefault();

		const formData = new FormData(contactForm);
		const payload = Object.fromEntries(formData.entries());
		const endpoint = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
			? 'http://localhost:3001/api/contact'
			: '/api/contact';

		contactStatus.textContent = 'Sending your inquiry...';
		contactStatus.className = 'contact-status contact-status--pending';

		try {
			const response = await fetch(endpoint, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || 'Submission failed');
			}

			contactForm.reset();
			contactStatus.textContent = result.message || 'Thanks! Your inquiry has been sent.';
			contactStatus.className = 'contact-status contact-status--success';
		} catch (error) {
			contactStatus.textContent = error.message || 'Unable to send your inquiry right now.';
			contactStatus.className = 'contact-status contact-status--error';
		}
	});
}
