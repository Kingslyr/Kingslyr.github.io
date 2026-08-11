// Wait for Three.js to load from CDN
function initAnimation() {
    if (typeof THREE === 'undefined') {
        console.warn('THREE not ready, retrying in 100ms...');
        setTimeout(initAnimation, 100);
        return;
    }

// Initialize Scene, Camera, and Renderer (attach to hero container)
const scene = new THREE.Scene();
let container = document.getElementById('canvas-container') || document.getElementById('earth-container') || document.getElementById('pak-map') || document.getElementById('canvas');
if (!container) container = document.body;
const rect = container.getBoundingClientRect ? container.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
const camera = new THREE.PerspectiveCamera(45, rect.width / rect.height, 0.1, 2000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.shadowMap.enabled = true;
// Attach renderer to the chosen container (fall back to body)
if (container && container !== document.body) container.appendChild(renderer.domElement); else document.body.appendChild(renderer.domElement);
function updateRendererSize() {
    const w = (container && container.clientWidth) || window.innerWidth;
    const h = (container && container.clientHeight) || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
}
updateRendererSize();
if (window.ResizeObserver && container) {
    new ResizeObserver(updateRendererSize).observe(container);
} else {
    window.addEventListener('resize', updateRendererSize);
}

// Add Scene Lighting
const ambientLight = new THREE.AmbientLight(0x9fdcff, 0.72);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0x8adfff, 1.05);
directionalLight.position.set(5, 3, 5);
directionalLight.castShadow = true;
scene.add(directionalLight);

const fillLight = new THREE.PointLight(0x3cbcff, 1.25, 40);
fillLight.position.set(-6, -1, 6);
scene.add(fillLight);

// Create Starry Particle Field Background
const PARTICLE_COUNT = 6000;
const particleGeometry = new THREE.BufferGeometry();
const particlePositions = new Float32Array(PARTICLE_COUNT * 3);
const particleVelocities = new Float32Array(PARTICLE_COUNT * 3);

for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
    particlePositions[i] = (Math.random() - 0.5) * 200;      // x
    particlePositions[i + 1] = (Math.random() - 0.5) * 200;  // y
    particlePositions[i + 2] = (Math.random() - 0.5) * 200;  // z
    
    particleVelocities[i] = (Math.random() - 0.5) * 0.05;
    particleVelocities[i + 1] = (Math.random() - 0.5) * 0.05;
    particleVelocities[i + 2] = (Math.random() - 0.5) * 0.05;
}

particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

const particleMaterial = new THREE.PointsMaterial({
    size: 0.22,
    color: 0x9feaff,
    transparent: true,
    opacity: 0.68,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
});

const starfield = new THREE.Points(particleGeometry, particleMaterial);
scene.add(starfield);

// Create Blue Earth with Network
const textureLoader = new THREE.TextureLoader();
const earthTexture = textureLoader.load('/earth.jpg', (texture) => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
});

// Earth Sphere
const earthGeometry = new THREE.SphereGeometry(3, 64, 64);
const earthMaterial = new THREE.MeshStandardMaterial({
    map: earthTexture,
    roughness: 0.38,
    metalness: 0.04,
    envMapIntensity: 0.9,
    emissive: new THREE.Color(0x0b2240),
    emissiveIntensity: 0.12
});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.castShadow = true;
earth.receiveShadow = true;
earth.userData.rotationSpeed = 0.0008;
scene.add(earth);

const haloGeometry = new THREE.SphereGeometry(3.42, 64, 64);
const haloMaterial = new THREE.MeshBasicMaterial({
    color: 0x49cfff,
    transparent: true,
    opacity: 0.1,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide
});
const halo = new THREE.Mesh(haloGeometry, haloMaterial);
earth.add(halo);

// Network Lines on Earth
const networkLineMaterial = new THREE.LineBasicMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.7,
    linewidth: 2,
    blending: THREE.AdditiveBlending
});

const latLngToVec3 = (lat, lng, radius = 3.2) => {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lng + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const y = radius * Math.cos(phi);
    const z = radius * Math.sin(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
};

const nodeLatLng = [
    [24, 67],   // Karachi, Pakistan
    [35, -120], // Los Angeles
    [-23, -46], // São Paulo
    [1, 103],   // Singapore
    [19, 72],   // Mumbai
    [51, 0],    // London
    [-1, 36],   // Nairobi
];

const links = [
    [0, 4], [4, 3], [3, 6], [6, 5], [5, 1], [0, 2], [2, 1]
];

const nodePositions = nodeLatLng.map(([lat, lng]) => latLngToVec3(lat, lng));

// Draw network lines
links.forEach(([a, b]) => {
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setFromPoints([nodePositions[a], nodePositions[b]]);
    const line = new THREE.Line(lineGeometry, networkLineMaterial);
    earth.add(line);
});

// Add pulsing network nodes
const nodeGeometry = new THREE.SphereGeometry(0.08, 16, 16);
const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const nodeRefs = [];

nodePositions.forEach((pos, idx) => {
    const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
    node.position.copy(pos);
    node.userData.basePulsePhase = idx;
    earth.add(node);
    nodeRefs.push(node);
});

// Position Camera (frame to container)
camera.position.z = 12;
camera.position.y = 2.6;
camera.lookAt(0, 0, 0);

// Add subtle hemisphere for natural sky/light
const hemi = new THREE.HemisphereLight(0x9fdcff, 0x08202a, 0.25);
scene.add(hemi);

// Slight rim directional light
const rim = new THREE.DirectionalLight(0xa6eaff, 0.6);
rim.position.set(-4, 3, -6);
scene.add(rim);

// Mouse Tracking
let mouseX = 0;
let mouseY = 0;
let scrollProgress = 0;

document.addEventListener('mousemove', (event) => {
    // compute relative to container for nicer parallax
    const rect = container ? container.getBoundingClientRect() : { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
    mouseX = ((event.clientX - rect.left) - rect.width / 2) / rect.width;
    mouseY = ((event.clientY - rect.top) - rect.height / 2) / rect.height;
});

window.addEventListener('scroll', () => {
    const scrollable = Math.max(document.body.scrollHeight - window.innerHeight, 1);
    scrollProgress = Math.min(window.scrollY / scrollable, 1);
});

// Animation Loop
let frameCount = 0;

function animate() {
    requestAnimationFrame(animate);
    frameCount++;
    
    const time = frameCount * 0.001;
    
    // Rotate Earth slowly and add subtle tilt
    earth.rotation.y += earth.userData.rotationSpeed;
    earth.rotation.x += (Math.sin(time * 0.3) * 0.12 - earth.rotation.x) * 0.02;
    
    // Pulsing network nodes
    nodeRefs.forEach((node, idx) => {
        const pulse = 1 + Math.sin(time * 2.5 + idx) * 0.35;
        node.scale.setScalar(pulse);
        const opacity = 0.4 + Math.sin(time * 1.8 + idx) * 0.3;
        node.material.opacity = opacity;
    });
    
    // Animate starfield
    for (let i = 0; i < PARTICLE_COUNT * 3; i += 3) {
        particlePositions[i] += particleVelocities[i];
        particlePositions[i + 1] += particleVelocities[i + 1];
        particlePositions[i + 2] += particleVelocities[i + 2];
        
        // Wrap around when particles go too far
        if (particlePositions[i] > 100) particlePositions[i] = -100;
        if (particlePositions[i] < -100) particlePositions[i] = 100;
        if (particlePositions[i + 1] > 100) particlePositions[i + 1] = -100;
        if (particlePositions[i + 1] < -100) particlePositions[i + 1] = 100;
        if (particlePositions[i + 2] > 100) particlePositions[i + 2] = -100;
        if (particlePositions[i + 2] < -100) particlePositions[i + 2] = 100;
    }
    particleGeometry.attributes.position.needsUpdate = true;
    
    // Starfield rotation
    starfield.rotation.y += 0.00008;
    starfield.rotation.x = Math.sin(time * 0.15) * 0.03;
    starfield.material.opacity = 0.58 + Math.sin(time * 0.9) * 0.08;
    
    // Smooth camera follow mouse (use container-relative mouse)
    camera.position.x += (mouseX * 4 - camera.position.x) * 0.06;
    camera.position.y += (-mouseY * 2 + 2.6 - camera.position.y) * 0.06;
    camera.position.z += (12 - scrollProgress * 4 - camera.position.z) * 0.04;
    
    camera.lookAt(earth.position);
    
    renderer.render(scene, camera);
}

// Ensure legacy resize events use the container-aware updater
// (we also use ResizeObserver when available)
window.addEventListener('resize', () => {
    try { updateRendererSize(); } catch (e) { /* ignore */ }
});

// Start Animation
animate();
} // End of initAnimation function

// Start animation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimation);
} else {
    initAnimation();
}

// Contact form handling
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
