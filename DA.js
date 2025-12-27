// Populate Technologies Table

        const technologies = [
            { name: "Tauri", engine: "Rust / WRY", field: "Desktop Apps", status: "Lightweight" },
            { name: "Electron", engine: "Node / Chrome", field: "Desktop Apps", status: "Full Support" },
            { name: "React", engine: "JavaScript / V8", field: "Web Frontend", status: "Popular" },
            { name: "Flutter", engine: "Dart / Skia", field: "Mobile / Multi", status: "High Perf" },
            { name: "Go (Golang)", engine: "Compiled", field: "Backend / Cloud", status: "Fast" },
            { name: "Docker", engine: "Go / Containerd", field: "DevOps", status: "Essential" },
            { name: "Kubernetes", engine: "Go / API", field: "Orchestration", status: "Enterprise" },
            { name: "Next.js", engine: "React / Node", field: "Fullstack Web", status: "SEO Friendly" },
            { name: "Rust", engine: "LLVM", field: "System / WASM", status: "Memory Safe" },
            { name: "Swift", engine: "LLVM", field: "iOS / MacOS", status: "Native" },
            { name: "Kotlin", engine: "JVM", field: "Android", status: "Modern" },
            { name: "PostgreSQL", engine: "C / SQL", field: "Database", status: "Reliable" },
            { name: "MongoDB", engine: "C++ / NoSQL", field: "Database", status: "Scalable" },
            { name: "Redis", engine: "C", field: "Caching", status: "Ultra Fast" },
            { name: "TensorFlow", engine: "Python / C++", field: "AI / ML", status: "Heavyweight" },
            { name: "PyTorch", engine: "Python / C++", field: "AI / ML", status: "Research" },
            { name: "GraphQL", engine: "Query Language", field: "API", status: "Flexible" },
            { name: "Solidity", engine: "EVM", field: "Blockchain", status: "Smart Contracts" },
            { name: "Laravel", engine: "PHP", field: "Backend Web", status: "Elegant" },
            { name: "Django", engine: "Python", field: "Backend Web", status: "Secure" },
            { name: "Svelte", engine: "Compiler", field: "Web Frontend", status: "No Virtual DOM" },
            { name: "Three.js", engine: "WebGL", field: "3D Graphics", status: "Immersive" },
            { name: "Unreal Engine", engine: "C++", field: "Game Dev", status: "AAA Quality" },
            { name: "Unity", engine: "C#", field: "Game Dev", status: "Versatile" },
            { name: "Terraform", engine: "HCL / Go", field: "Infrastructure", status: "IaC" },
            { name: "Apache Kafka", engine: "Java / Scala", field: "Data Streams", status: "High Volume" },
            { name: "Zig", engine: "LLVM", field: "Systems", status: "Next Gen C" },
            { name: "Bun", engine: "Zig / JSC", field: "JS Runtime", status: "Hyper Fast" },
            { name: "Deno", engine: "Rust / V8", field: "JS Runtime", status: "Secure" },
            { name: "Vite", engine: "esbuild / Rollup", field: "Build Tool", status: "Fast Refresh" }
        ];

        // Populate Table
        const techBody = document.getElementById('techBody');
        technologies.forEach(t => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>
                    <div class="tech-info">
                        <div class="tech-icon"><i class="fas fa-microchip"></i></div>
                        <div style="font-weight:700">${t.name}</div>
                    </div>
                </td>
                <td class="engine-text">${t.engine}</td>
                <td style="color:var(--text-dim)">${t.field}</td>
                <td><span class="tag">${t.status}</span></td>
            `;
            techBody.appendChild(row);
        });

        // Matrix Background Logic
        const canvas = document.getElementById('codeCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const fontSize = 16;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);

        function drawMatrix() {
            ctx.fillStyle = "rgba(10, 10, 12, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#00f2ff";
            ctx.font = fontSize + "px 'JetBrains Mono'";
            for (let i = 0; i < drops.length; i++) {
                const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            }
        }
        setInterval(drawMatrix, 50);

        // Challenge Logic
        let answered = false;
        function handleSelect(btn, isCorrect) {
            if (answered) return;
            answered = true;
            
            const resultBox = document.getElementById('resultBox');
            resultBox.style.display = 'block';

            if (isCorrect) {
                btn.classList.add('correct');
                resultBox.innerHTML = "✅ أحسنت! Flutter تعتمد على لغة Dart ومحرك الرسوميات Skia الخاص بها بعيداً عن JS.";
                resultBox.style.background = "rgba(16, 185, 129, 0.1)";
                resultBox.style.color = "var(--success)";
            } else {
                btn.classList.add('wrong');
                resultBox.innerHTML = "❌ إجابة خاطئة. Flutter هي الوحيدة في القائمة التي تستخدم Dart ولا تعتمد على JS للواجهات.";
                resultBox.style.background = "rgba(244, 63, 94, 0.1)";
                resultBox.style.color = "var(--error)";
                
                document.querySelectorAll('.opt-btn').forEach(b => {
                    if (b.innerText === "Flutter (Dart)") b.classList.add('correct');
                });
            }
        }

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
