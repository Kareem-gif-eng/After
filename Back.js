
let currentLang = 'ar';

const backendTech = [
  { name: "Node.js", cat: "Environment", desc: "بيئة تشغيل JavaScript على السيرفر.", descEn: "JavaScript runtime built on Chrome's V8.", cmd: "node -v" },
  { name: "Express.js", cat: "Framework", desc: "إطار عمل بسيط وسريع لبناء الـ APIs.", descEn: "Minimal and flexible web application framework.", cmd: "npm install express" },
  { name: "MongoDB", cat: "Database", desc: "قاعدة بيانات NoSQL تعتمد على نظام الوثائق.", descEn: "Source-available cross-platform document-oriented database.", cmd: "mongosh" },
  { name: "PostgreSQL", cat: "Database", desc: "قاعدة بيانات SQL قوية وعلاقية.", descEn: "Powerful, open source object-relational database system.", cmd: "psql" },
  { name: "Redis", cat: "Caching", desc: "تخزين البيانات في الذاكرة لزيادة السرعة.", descEn: "In-memory data structure store, used as a database/cache.", cmd: "redis-cli" },
  { name: "Docker", cat: "DevOps", desc: "تغليف التطبيقات في حاويات (Containers).", descEn: "OS-level virtualization to deliver software in packages.", cmd: "docker build" },
  { name: "JWT", cat: "Security", desc: "نظام التوثيق باستخدام التوكن المشفر.", descEn: "JSON Web Token for secure information exchange.", cmd: "jsonwebtoken" },
  { name: "GraphQL", cat: "API Style", desc: "لغة استعلام متطورة لجلب البيانات بدقة.", descEn: "Query language for APIs and runtime for fulfilling queries.", cmd: "apollo-server" },
  { name: "Socket.io", cat: "Real-time", desc: "التواصل اللحظي بين السيرفر والمستخدم.", descEn: "Enables real-time, bi-directional communication.", cmd: "io.on('connection')" },
  { name: "Nginx", cat: "Web Server", desc: "خادم ويب وموازن أحمال (Load Balancer).", descEn: "Web server that can also be used as a reverse proxy.", cmd: "nginx -s reload" },
  { name: "Docker Compose", cat: "DevOps", desc: "تشغيل عدة حاويات معاً بسهولة.", descEn: "Tool for defining and running multi-container applications.", cmd: "docker-compose up" },
  { name: "FastAPI", cat: "Framework", desc: "إطار عمل Python فائق السرعة للـ APIs.", descEn: "Modern, fast web framework for building APIs with Python.", cmd: "pip install fastapi" },
  { name: "Django", cat: "Framework", desc: "إطار عمل Python متكامل وشامل.", descEn: "High-level Python web framework that encourages rapid development.", cmd: "python manage.py runserver" },
  { name: "Firebase", cat: "BaaS", desc: "منصة سحابية متكاملة من جوجل للـ Backend.", descEn: "Platform developed by Google for creating mobile and web apps.", cmd: "firebase init" },
  { name: "AWS S3", cat: "Storage", desc: "تخزين الملفات والصور بشكل سحابي آمن.", descEn: "Scalable storage in the cloud by Amazon Web Services.", cmd: "aws s3 sync" },
  { name: "Microservices", cat: "Architecture", desc: "تقسيم التطبيق الكبير إلى خدمات مستقلة.", descEn: "An architectural style that structures an app as services.", cmd: "arch-pattern" },
  { name: "Kubernetes", cat: "DevOps", desc: "إدارة وتوسيع حاويات Docker آلياً.", descEn: "Open-source system for automating deployment and scaling.", cmd: "kubectl get pods" },
  { name: "Stripe API", cat: "Payments", desc: "دمج بوابات الدفع الإلكتروني في تطبيقك.", descEn: "Suite of payment APIs that powers commerce for businesses.", cmd: "stripe-sdk" },
  { name: "Passport.js", cat: "Auth", desc: "مكتبة سهلة لعمل تسجيل دخول بجوجل وفيسبوك.", descEn: "Authentication middleware for Node.js.", cmd: "passport.authenticate()" },
  { name: "Swagger", cat: "Documentation", desc: "توثيق الـ APIs بشكل تفاعلي وجميل.", descEn: "Set of open-source tools built around the OpenAPI Specification.", cmd: "swagger-ui-express" }
];

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  const html = document.documentElement;
  const btn = document.getElementById('langToggle');
  const searchInput = document.getElementById('techSearch');

  html.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  html.lang = currentLang;
  btn.innerHTML = currentLang === 'ar' ? '<i class="fas fa-globe" style="margin-left: 8px;"></i> English' : '<i class="fas fa-globe" style="margin-right: 8px;"></i> العربية';
  searchInput.placeholder = currentLang === 'ar' ? 'ابحث عن تقنية (مثال: Redis, Docker, JWT)...' : 'Search for technology (e.g., Redis, Docker, JWT)...';

  document.querySelectorAll('.lang-txt').forEach(el => {
    el.innerText = el.getAttribute(`data-${currentLang}`);
  });

  renderTech(backendTech);
}

function renderTech(data) {
  const body = document.getElementById('techBody');
  body.innerHTML = data.map(t => `
                <tr>
                    <td><span class="tech-tag">${t.name}</span></td>
                    <td>${t.cat}</td>
                    <td>${currentLang === 'ar' ? t.desc : t.descEn}</td>
                    <td>
                        <div class="btn-group">
                            <button class="icon-btn copy-btn" onclick="copyText('${t.cmd}')" title="${currentLang === 'ar' ? 'نسخ الكود' : 'Copy Code'}">
                                <i class="fas fa-copy"></i>
                            </button>
                            <button class="icon-btn ai-btn" onclick="openTutor('${t.name}')" title="${currentLang === 'ar' ? 'شرح التقنية' : 'Explain Tech'}">
                                <i class="fas fa-robot"></i>
                            </button>
                        </div>
                    </td>
                </tr>
            `).join('');
}

window.addEventListener('DOMContentLoaded', () => {
  VANTA.GLOBE({
    el: "#vanta-canvas",
    mouseControls: true,
    touchControls: true,
    color: 0x38bdf8,
    backgroundColor: 0x020617,
    size: 0.9
  });

  setTimeout(() => {
    const intro = document.getElementById('intro-screen');
    intro.style.opacity = '0';
    setTimeout(() => intro.remove(), 800);
  }, 2000);

  renderTech(backendTech);
  animateCounter('usersCount', 3450);
});

document.getElementById('techSearch').oninput = (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = backendTech.filter(t =>
    t.name.toLowerCase().includes(term) ||
    t.cat.toLowerCase().includes(term) ||
    (t.descEn && t.descEn.toLowerCase().includes(term)) ||
    t.desc.toLowerCase().includes(term)
  );
  renderTech(filtered);
};

const ctx = document.getElementById('trafficChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [{
      label: 'Traffic',
      data: [30, 55, 40, 80, 60, 95, 85],
      borderColor: '#38bdf8',
      tension: 0.4,
      fill: true,
      backgroundColor: 'rgba(56, 189, 248, 0.1)'
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { display: false } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.05)' } }
    }
  }
});

function animateCounter(id, target) {
  let count = 0;
  const element = document.getElementById(id);
  const interval = setInterval(() => {
    count += Math.ceil(target / 40);
    if (count >= target) {
      element.innerText = target.toLocaleString();
      clearInterval(interval);
    } else {
      element.innerText = count.toLocaleString();
    }
  }, 30);
}

function copyText(text) {
  const temp = document.createElement('textarea');
  temp.value = text;
  document.body.appendChild(temp);
  temp.select();
  document.execCommand('copy');
  document.body.removeChild(temp);
  const toast = document.getElementById('copyToast');
  toast.innerText = currentLang === 'ar' ? 'تم نسخ الكود بنجاح!' : 'Code copied successfully!';
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 2500);
}

function openTutor(name) {
  const modal = document.getElementById('aiModal');
  const title = document.getElementById('tutorTitle');
  const text = document.getElementById('tutorText');
  const item = backendTech.find(t => t.name === name);

  if (currentLang === 'ar') {
    title.innerText = `روبوت المعلم: ما هو ${name}؟`;
    text.innerText = `${item.desc} \n\n يمكنك البدء باستخدامه فوراً عبر هذا الأمر في الـ Terminal: \n [ ${item.cmd} ]`;
  } else {
    title.innerText = `AI Tutor: What is ${name}?`;
    text.innerText = `${item.descEn} \n\n You can start using it immediately via this terminal command: \n [ ${item.cmd} ]`;
  }
  modal.style.display = 'flex';
}

function closeTutor() {
  document.getElementById('aiModal').style.display = 'none';
}
