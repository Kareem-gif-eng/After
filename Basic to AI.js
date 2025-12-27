// Basic to AI.js
        // --- 3D Background (Neural Links) ---
        let scene, camera, renderer, points, lines;
        const count = 1500;

        function init3D() {
            scene = new THREE.Scene();
            camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.1, 2000);
            camera.position.z = 800;

            renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg-canvas'), antialias: true, alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);

            const geo = new THREE.BufferGeometry();
            const pos = new Float32Array(count * 3);
            for(let i=0; i<count*3; i++) pos[i] = (Math.random() - 0.5) * 1500;
            geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

            const mat = new THREE.PointsMaterial({ size: 3, color: 0x00f2ff, transparent: true, opacity: 0.8 });
            points = new THREE.Points(geo, mat);
            scene.add(points);
        }

        function animate() {
            requestAnimationFrame(animate);
            points.rotation.y += 0.0008;
            points.rotation.x += 0.0004;
            renderer.render(scene, camera);
        }

        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth/window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

        // --- Expanded Quiz Data ---
        const advancedQuiz = [
            { q: "ما هو الـ 'Overfitting' في تعلم الآلة؟", ops: ["التعلم بسرعة فائقة", "حفظ البيانات بدقة تمنع النموذج من التوقع على بيانات جديدة", "تحسين جودة الصور تلقائياً", "مسح البيانات الزائدة"], corr: 1 },
            { q: "ما هي التقنية المسؤولة عن 'فهم السياق' في نماذج مثل GPT؟", ops: ["الجداول التقليدية", "آلية الانتباه (Attention Mechanism)", "الفلاتر الرسومية", "البحث اليدوي"], corr: 1 },
            { q: "أي مما يلي يعتبر تطبيقاً للتعلم غير الخاضع للإشراف؟", ops: ["تصنيف البريد المزعج", "تجميع العملاء لشرائح (Clustering)", "التنبؤ بأسعار المنازل", "ترجمة النصوص"], corr: 1 }
        ];

        let currentIdx = 0;

        function loadQ() {
            const item = advancedQuiz[currentIdx];
            document.getElementById('q-text').innerText = item.q;
            const container = document.getElementById('q-options');
            container.innerHTML = '';
            document.getElementById('next-q').style.display = 'none';

            item.ops.forEach((opt, i) => {
                const div = document.createElement('div');
                div.className = 'option-item';
                div.innerText = opt;
                div.onclick = () => {
                    const all = container.querySelectorAll('.option-item');
                    all.forEach(el => el.style.pointerEvents = 'none');
                    if(i === item.corr) {
                        div.style.background = "#059669";
                        div.style.borderColor = "#10b981";
                    } else {
                        div.style.background = "#991b1b";
                        all[item.corr].style.background = "#059669";
                    }
                    document.getElementById('next-q').style.display = 'block';
                };
                container.appendChild(div);
            });
        }

        function handleNext() {
            currentIdx++;
            if(currentIdx < advancedQuiz.length) loadQ();
            else {
                document.querySelector('.challenge-section').innerHTML = `
                    <h2 style="color:var(--primary-color)">مبروك! لقد أتممت المستوى المتقدم</h2>
                    <p>أنت الآن جاهز للانطلاق في مشاريعك الخاصة في عالم الذكاء الاصطناعي.</p>
                    <button class="option-item" style="margin: 20px auto; width: 150px; text-align:center" onclick="location.reload()">إعادة التحدي</button>
                `;
            }
        }

        window.onload = () => {
            init3D();
            animate();
            loadQ();
        }
    