
        // مصفوفة الـ 20 درساً
        const lessons = [
            { id: 1, title: "سيكولوجية الألوان", desc: "كيف تؤثر الألوان على قرارات الشراء؟", icon: "fa-palette", content: "الألوان الدافئة (أحمر، برتقالي) تحفز الحركة والجوع، بينما الباردة (أزرق) تعطي ثقة وأمان." },
            { id: 2, title: "قانون هيك (Hick's Law)", desc: "بساطة الاختيارات تزيد السرعة.", icon: "fa-bolt", content: "كلما زادت الخيارات المعروضة للمستخدم، زاد الوقت المطلوب لاتخاذ القرار. البساطة هي الحل." },
            { id: 3, title: "التسلسل الهرمي البصري", desc: "توجيه عين المستخدم بذكاء.", icon: "fa-eye", content: "استخدام الحجم، التباين، والمكان لتوضيح ما هو أهم أولاً (مثل زر الشراء)." },
            { id: 4, title: "الشبكات (Grid Systems)", desc: "سر التوازن في التصميم.", icon: "fa-table-cells", content: "استخدام نظام 12 عموداً يساعد في محاذاة العناصر بشكل رياضي مريح للعين." },
            { id: 5, title: "الخطوط الرقمية (Typography)", desc: "فن اختيار الخط المناسب.", icon: "fa-font", content: "لا تستخدم أكثر من نوعين من الخطوط. الخطوط ذات الحواف (Serif) للكتب، وبدون الحواف (Sans) للشاشات." },
            { id: 6, title: "قانون فيتس (Fitts's Law)", desc: "حجم الأهداف وسهولة النقر.", icon: "fa-mouse", content: "كلما كان الزر أكبر وأقرب لمسار الفأرة أو الإبهام، كان استخدامه أسهل وأسرع." },
            { id: 7, title: "التباين (Contrast)", desc: "وضوح المحتوى للجميع.", icon: "fa-circle-half-stroke", content: "يجب أن يكون النص متبايناً جداً مع الخلفية (نسبة 4.5:1 على الأقل) لضمان سهولة القراءة." },
            { id: 8, title: "النماذج الأولية (Prototyping)", desc: "حول الفكرة إلى واقع تفاعلي.", icon: "fa-vial", content: "بناء نموذج قابل للنقر قبل البرمجة يوفر 50% من وقت التطوير ويكتشف الأخطاء مبكراً." },
            { id: 9, title: "مبادئ الجشطالت", desc: "كيف يرى الدماغ الأشكال ككتلة؟", icon: "fa-shapes", content: "مبادئ مثل 'القرب' و'التشابه' تفسر لماذا نرى العناصر القريبة من بعضها كمجموعة واحدة." },
            { id: 10, title: "الواجهات المظلمة (Dark Mode)", desc: "موضة أم ضرورة طبية؟", icon: "fa-moon", content: "الوضع المظلم يقلل إجهاد العين في الإضاءة الخافتة ويوفر بطارية شاشات OLED." },
            { id: 11, title: "الاستجابة (Responsiveness)", desc: "تصميم يعمل على كل الشاشات.", icon: "fa-mobile-screen", content: "استخدام وحدات مرنة (rem, %) بدلاً من الثابتة (px) ليتكيف التصميم تلقائياً." },
            { id: 12, title: "تطبيقات الويب التقدمية (PWA)", desc: "مواقع تعمل كأنها تطبيقات.", icon: "fa-cloud-arrow-down", content: "تقنيات تسمح للموقع بالعمل بدون إنترنت وإرسال إشعارات كأنه تطبيق موبايل أصلي." },
            { id: 13, title: "الخرائط الذهنية للمستخدم", desc: "فهم رحلة المستخدم داخل الموقع.", icon: "fa-map-location-dot", content: "رسم مسار المستخدم من لحظة الدخول حتى إتمام الهدف يقلل من نسب الخروج (Bounce Rate)." },
            { id: 14, title: "الأيقونات التعبيرية", desc: "لغة عالمية لا تحتاج ترجمة.", icon: "fa-icons", content: "الأيقونات يجب أن تكون مألوفة (مثل أيقونة البيت للرئيسية) لتسريع الفهم البصري." },
            { id: 15, title: "المسافات البيضاء (White Space)", desc: "إعطاء التصميم مساحة للتنفس.", icon: "fa-maximize", content: "المسافات الفارغة ليست ضياعاً للمساحة، بل وسيلة لتركيز انتباه المستخدم على المحتوى المهم." },
            { id: 16, title: "التحقق من البيانات (Validation)", desc: "تقليل أخطاء المستخدم في النماذج.", icon: "fa-check-double", content: "إظهار رسائل الخطأ فوراً أثناء الكتابة بدلاً من الانتظار حتى ضغط زر الإرسال." },
            { id: 17, title: "شاشات الهيكل (Skeleton Screens)", desc: "خدعة ذكية لسرعة التحميل.", icon: "fa-rectangle-list", content: "عرض هيكل رمادي للمحتوى قبل تحميله يجعل المستخدم يشعر أن الموقع أسرع بمرتين." },
            { id: 18, title: "التعاطف في التصميم (Empathy)", desc: "التصميم من أجل البشر.", icon: "fa-heart", content: "ضع نفسك مكان المستخدم؛ هل هذا الزر محير؟ هل هذا اللون مزعج؟ اهتم بمشاعره." },
            { id: 19, title: "تأثير الـ Glassmorphism", desc: "جماليات الزجاج في الواجهات.", icon: "fa-window-restore", content: "نمط يعتمد على الشفافية والضبابية (Blur) لخلق طبقات بصرية عميقة وحديثة." },
            { id: 20, title: "اختبارات A/B", desc: "القرار بناءً على البيانات لا الرأي.", icon: "fa-flask", content: "تقديم نسختين مختلفتين من التصميم لمجموعتين من المستخدمين لمعرفة أيهما يحقق نتائج أفضل." }
        ];

        // مصفوفة الأسئلة
        const database = [
            { q: "ماذا يقترح قانون هيك (Hick's Law)؟", options: ["زيادة الألوان", "تقليل عدد الخيارات لتسريع القرار", "تكبير الخطوط", "استخدام الصور"], correct: "تقليل عدد الخيارات لتسريع القرار" },
            { q: "ما فائدة المسافات البيضاء في التصميم؟", options: ["توفير الحبر", "تشتيت المستخدم", "إراحة العين وتركيز الانتباه", "إطالة الصفحة"], correct: "إراحة العين وتركيز الانتباه" },
            { q: "أي لون يوحي بالثقة والأمان في التصميم؟", options: ["الأحمر", "الأصفر", "الأزرق", "الأسود"], correct: "الأزرق" },
            { q: "ما هي نسبة التباين المثالية للنصوص العادية؟", options: ["1:1", "4.5:1", "10:1", "2:1"], correct: "4.5:1" }
        ];

        let xp = 0;
        let level = 1;

        // توليد قائمة الدروس
        function generateLessons() {
            const grid = document.getElementById('lessonsGrid');
            lessons.forEach(lesson => {
                const div = document.createElement('div');
                div.className = 'lesson-item';
                div.onclick = () => showLesson(lesson);
                div.innerHTML = `
                    <div class="lesson-icon"><i class="fa-solid ${lesson.icon}"></i></div>
                    <div>
                        <div style="font-weight:bold; font-size:0.95rem;">${lesson.id}. ${lesson.title}</div>
                        <div style="font-size:0.75rem; color:var(--text-dim);">${lesson.desc}</div>
                    </div>
                `;
                grid.appendChild(div);
            });
        }

        function showLesson(lesson) {
            const area = document.getElementById('actionArea');
            area.innerHTML = `
                <div class="quiz-box" style="text-align:right">
                    <h3 style="color:var(--primary)"><i class="fa-solid ${lesson.icon}"></i> ${lesson.title}</h3>
                    <p style="font-size:0.9rem; line-height:1.6;">${lesson.content}</p>
                    <div style="margin-top:20px; border-top:1px solid var(--border); padding-top:15px;">
                        <span style="font-size:0.8rem; color:var(--gold);">🎁 مكافأة القراءة: +10 XP</span>
                    </div>
                    <button class="btn-main" style="width:100%; margin-top:15px;" onclick="addReadingXP()">تم استيعاب الدرس</button>
                </div>
            `;
        }

        function addReadingXP() {
            updateXP(10);
            initQuiz();
        }

        function initQuiz() {
            const q = database[Math.floor(Math.random() * database.length)];
            const area = document.getElementById('actionArea');
            area.innerHTML = `
                <div class="quiz-box" style="text-align:right">
                    <div style="font-size:0.8rem; color:var(--primary); margin-bottom:10px;">سؤال تقييمي سريع:</div>
                    <h4 style="margin-bottom:20px;">${q.q}</h4>
                    <div class="options-grid" id="opts"></div>
                </div>
            `;
            const opts = document.getElementById('opts');
            q.options.forEach(opt => {
                const b = document.createElement('button');
                b.className = 'opt-btn';
                b.innerText = opt;
                b.onclick = () => checkAns(opt, q.correct, b);
                opts.appendChild(b);
            });
        }

        function checkAns(selected, correct, btn) {
            if(selected === correct) {
                btn.classList.add('correct');
                updateXP(30);
                setTimeout(initQuiz, 1000);
            } else {
                btn.classList.add('wrong');
                setTimeout(initQuiz, 1500);
            }
        }

        function updateXP(amount) {
            xp += amount;
            const nextLvl = level * 150;
            if(xp >= nextLvl) {
                level++;
                xp = xp - nextLvl;
                document.getElementById('levelLabel').innerText = `المستوى ${level}`;
            }
            const perc = (xp / (level * 150)) * 100;
            document.getElementById('xpBar').style.width = `${perc}%`;
            document.getElementById('xpStatus').innerText = `${xp} / ${level * 150} XP`;
            document.getElementById('scoreBox').innerHTML = `<i class="fa-solid fa-star"></i> XP: ${xp + (level-1)*150}`;
        }

        window.onload = () => {
            generateLessons();
            VANTA.GLOBE({
                el: "#vanta-canvas",
                mouseControls: true,
                touchControls: true,
                color: 0x748ffc,
                color2: 0x4dabf7,
                backgroundColor: 0x0a0a0b,
                size: 0.7
            });
        };