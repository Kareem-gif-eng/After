// --- Mobile App Quiz Script ---
        // --- Particle Background ---
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.2;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if(this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
            }
            draw() {
                ctx.fillStyle = `rgba(14, 165, 233, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            for(let i=0; i<80; i++) particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            requestAnimationFrame(animate);
        }

        // --- Quiz Data ---
        const questions = [
            {
                q: "ما هي التقنية التي تعتمد على مفهوم الـ 'Widgets' لكل شيء في الواجهة؟",
                opts: ["React Native", "Flutter", "SwiftUI", "Native Android"],
                correct: 1,
                info: "في Flutter، كل عنصر تراه هو عبارة عن Widget، سواء كان نصاً، صوراً، أو حتى تخطيط الصفحة."
            },
            {
                q: "أي لغة برمجة تعتبر 'الخيار الأول' حالياً لتطوير تطبيقات الأندرويد من قبل جوجل؟",
                opts: ["Java", "Kotlin", "C++", "Python"],
                correct: 1,
                info: "أعلنت جوجل في 2019 أن Kotlin هي اللغة المفضلة (Kotlin-First) لتطوير الأندرويد."
            },
            {
                q: "ما هي وظيفة الـ App Store Connect في عالم iOS؟",
                opts: ["كتابة الكود", "تصميم الواجهة", "رفع التطبيقات للمتجر وإدارتها", "اختبار سرعة الجهاز"],
                correct: 2,
                info: "App Store Connect هي المنصة السحابية التي يستخدمها المطورون لرفع تطبيقاتهم ومراجعة إحصائياتها."
            },
            {
                q: "ما هو الـ Hot Reload في تقنيات الموبايل الحديثة؟",
                opts: ["تبريد المعالج", "تحديث الكود ورؤية النتائج فوراً بدون إعادة تشغيل", "إرسال إشعارات للمستخدم", "حذف الكود القديم"],
                correct: 1,
                info: "يسمح Hot Reload للمطورين بتعديل الكود ورؤية التغيير في أقل من ثانية، مما يسرع عملية التطوير."
            }
        ];

        let currentIdx = 0;
        let scoreCount = 0;

        function loadQuestion() {
            const data = questions[currentIdx];
            document.getElementById('qText').innerText = data.q;
            const container = document.getElementById('optContainer');
            const infoPanel = document.getElementById('infoPanel');
            const nextBtn = document.getElementById('nextBtn');
            
            container.innerHTML = '';
            infoPanel.style.display = 'none';
            nextBtn.style.display = 'none';

            data.opts.forEach((opt, i) => {
                const btn = document.createElement('div');
                btn.className = 'opt-btn';
                btn.innerHTML = `<span>${opt}</span> <i class="far fa-circle"></i>`;
                btn.onclick = () => check(i, btn);
                container.appendChild(btn);
            });
        }

        function check(idx, element) {
            const data = questions[currentIdx];
            const allOpts = document.querySelectorAll('.opt-btn');
            const infoPanel = document.getElementById('infoPanel');
            const nextBtn = document.getElementById('nextBtn');

            // Disable all
            allOpts.forEach(b => b.style.pointerEvents = 'none');

            if(idx === data.correct) {
                element.classList.add('correct');
                element.querySelector('i').className = 'fas fa-check-circle';
                scoreCount++;
                updateLevel();
            } else {
                element.classList.add('wrong');
                element.querySelector('i').className = 'fas fa-times-circle';
                allOpts[data.correct].classList.add('correct');
                allOpts[data.correct].querySelector('i').className = 'fas fa-check-circle';
            }

            infoPanel.innerText = data.info;
            infoPanel.style.display = 'block';
            nextBtn.style.display = 'block';
        }

        function updateLevel() {
            const label = document.getElementById('score');
            if(scoreCount >= 3) label.innerText = "المستوى: مبرمج محترف 🚀";
            else if(scoreCount >= 1) label.innerText = "المستوى: مبرمج واعد 👍";
        }

        document.getElementById('nextBtn').onclick = () => {
            currentIdx = (currentIdx + 1) % questions.length;
            loadQuestion();
        };

        window.addEventListener('resize', resize);
        window.onload = () => {
            resize();
            initParticles();
            animate();
            loadQuestion();
        };
    