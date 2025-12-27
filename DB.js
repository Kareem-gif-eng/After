// دالة تحميل البيانات من ملف JSON وعرضها في الصفحة
    // دالة إظهار النافذة
    function showDetails(title, description) {
        document.getElementById('modalTitle').innerText = title;
        document.getElementById('modalDesc').innerText = description;
        document.getElementById('modalOverlay').style.display = 'flex';
    }

    // دالة إغلاق النافذة
    function hideDetails() {
        document.getElementById('modalOverlay').style.display = 'none';
    }

    // إغلاق النافذة عند الضغط خارج المربع
    window.onclick = function(event) {
        let modal = document.getElementById('modalOverlay');
        if (event.target == modal) {
            hideDetails();
        }
    }

    // إعداد خلفية النجوم المتحركة (Three.js)
    let scene, camera, renderer, stars;

    function init() {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas-container').appendChild(renderer.domElement);

        const starGeo = new THREE.BufferGeometry();
        const starCount = 1500;
        const posArray = new Float32Array(starCount * 3);
        for(let i=0; i < starCount * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 10;
        }
        starGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const starMat = new THREE.PointsMaterial({ size: 0.005, color: 0x00ffcc });
        stars = new THREE.Points(starGeo, starMat);
        scene.add(stars);

        camera.position.z = 2;

        function animate() {
            requestAnimationFrame(animate);
            stars.rotation.y += 0.001;
            renderer.render(scene, camera);
        }
        animate();
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    window.onload = init;
