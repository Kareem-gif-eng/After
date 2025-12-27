// --- تهيئة المشهد ثلاثي الأبعاد باستخدام Three.js ---
        // --- إعداد المشهد ثلاثي الأبعاد ---
        let scene, camera, renderer, stars, grid;

        function init3D() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('canvas-container').appendChild(renderer.domElement);

            const starGeometry = new THREE.BufferGeometry();
            const starCount = 2000;
            const posArray = new Float32Array(starCount * 3);
            for(let i=0; i < starCount * 3; i++) posArray[i] = (Math.random() - 0.5) * 15;
            starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
            
            const starMaterial = new THREE.PointsMaterial({ size: 0.005, color: 0x6366f1, transparent: true, opacity: 0.8 });
            stars = new THREE.Points(starGeometry, starMaterial);
            scene.add(stars);

            grid = new THREE.GridHelper(30, 60, 0x6366f1, 0x0a0f1d);
            grid.position.y = -3;
            scene.add(grid);

            camera.position.z = 5;
            animate();
        }

        function animate() {
            requestAnimationFrame(animate);
            stars.rotation.y += 0.0005;
            grid.position.z += 0.02;
            if (grid.position.z > 1) grid.position.z = 0;
            renderer.render(scene, camera);
        }

        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;
            stars.rotation.x = y * 0.1;
            stars.rotation.y = x * 0.1;
        });

        // --- بيانات التقنيات ---
        const technologies = [
            { name: "Flutter", lang: "Dart", desc: "إطار عمل من جوجل لبناء تطبيقات Android و iOS.", icon: "fa-rocket" },
            { name: "React Native", lang: "JavaScript", desc: "تطوير تطبيقات الهواتف باستخدام React.", icon: "fa-atom" },
            { name: "SwiftUI", lang: "Swift", desc: "أحدث طريقة لبناء واجهات تطبيقات Apple.", icon: "fa-apple" },
            { name: "Kotlin Multiplatform", lang: "Kotlin", desc: "مشاركة كود المنطق بين أندرويد و iOS.", icon: "fa-layer-group" }
        ];

        // --- بيانات التحدي ---
        const quizData = [
            {
                question: "أي لغة برمجة يستخدمها إطار عمل Flutter بشكل أساسي؟",
                options: ["Java", "Swift", "Dart", "JavaScript"],
                correct: 2
            },
            {
                question: "ما هي الشركة المطورة للغة البرمجة Swift؟",
                options: ["Google", "Apple", "Microsoft", "Meta"],
                correct: 1
            },
            {
                question: "في React Native، ما هو المكون المسؤول عن تحويل كود JS إلى واجهات Native؟",
                options: ["The Bridge", "Compiler", "The Tunnel", "Virtual DOM"],
                correct: 0
            },
            {
                question: "ما هي ميزة الـ 'Hot Reload' في تطوير الهواتف؟",
                options: ["زيادة سرعة المعالج", "تحديث التطبيق دون إعادة تشغيله", "حذف الكود القديم", "تبريد الهاتف"],
                correct: 1
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        let answered = false;

        function loadQuestion() {
            answered = false;
            const q = quizData[currentQuestion];
            document.getElementById('questionText').innerText = q.question;
            document.getElementById('feedbackMsg').innerText = "";
            document.getElementById('nextBtn').classList.remove('visible');
            
            const optionsGrid = document.getElementById('optionsGrid');
            optionsGrid.innerHTML = q.options.map((opt, index) => `
                <button class="option-btn" onclick="checkAnswer(${index}, this)">${opt}</button>
            `).join('');
        }

        function checkAnswer(index, btn) {
            if (answered) return;
            answered = true;
            
            const q = quizData[currentQuestion];
            const allBtns = document.querySelectorAll('.option-btn');
            
            if (index === q.correct) {
                btn.classList.add('correct');
                score += 10;
                document.getElementById('scoreValue').innerText = score;
                document.getElementById('feedbackMsg').innerHTML = "<span style='color: var(--success)'>إجابة صحيحة! أحسنت.</span>";
            } else {
                btn.classList.add('wrong');
                allBtns[q.correct].classList.add('correct');
                document.getElementById('feedbackMsg').innerHTML = "<span style='color: var(--error)'>إجابة خاطئة! حاول في السؤال القادم.</span>";
            }
            
            document.getElementById('nextBtn').classList.add('visible');
        }

        function loadNextQuestion() {
            currentQuestion++;
            if (currentQuestion >= quizData.length) {
                currentQuestion = 0;
                // يمكن إضافة رسالة "انتهى التحدي" هنا
            }
            loadQuestion();
        }

        function renderCards(data) {
            const gridEl = document.getElementById('techGrid');
            gridEl.innerHTML = data.map(t => `
                <div class="card" onclick="openModal('${t.name}')">
                    <h3><i class="fas ${t.icon}" style="color: var(--accent-glow)"></i> ${t.name}</h3>
                    <p style="color: var(--text-secondary); margin-top:10px">${t.desc}</p>
                </div>
            `).join('');
        }

        function openModal(name) {
            const tech = technologies.find(t => t.name === name);
            document.getElementById('modalName').innerText = tech.name;
            document.getElementById('modalDesc').innerText = tech.desc;
            document.getElementById('modal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }

        window.onload = () => {
            init3D();
            renderCards(technologies);
            loadQuestion();
        };
    