
        // Extended Database for HTML, CSS, and JS (50+ items)
        const dataLibrary = [
            {
                category: { ar: "وسوم HTML الأساسية", en: "HTML Core Tags" },
                icon: "fa-html5",
                type: "html",
                items: [
                    { t: "<div>", d: { ar: "حاوية لتقسيم الصفحة", en: "Generic container" } },
                    { t: "<span>", d: { ar: "حاوية للنصوص بداخل السطر", en: "Inline container" } },
                    { t: "<a>", d: { ar: "رابط تشعبي", en: "Hyperlink" } },
                    { t: "<img>", d: { ar: "إدراج صورة", en: "Image tag" } },
                    { t: "<form>", d: { ar: "نموذج إدخال", en: "Form container" } },
                    { t: "<ul>", d: { ar: "قائمة غير مرتبة", en: "Unordered list" } },
                    { t: "<ol>", d: { ar: "قائمة مرتبة", en: "Ordered list" } },
                    { t: "<li>", d: { ar: "عنصر في القائمة", en: "List item" } },
                    { t: "<button>", d: { ar: "زر ضغط", en: "Button element" } },
                    { t: "<h1>", d: { ar: "عنوان رئيسي", en: "Main heading" } }
                ]
            },
            {
                category: { ar: "أهم خصائص CSS", en: "Key CSS Properties" },
                icon: "fa-css3-alt",
                type: "css",
                items: [
                    { t: "color", d: { ar: "تغيير لون النص", en: "Text color" } },
                    { t: "background-color", d: { ar: "تغيير لون الخلفية", en: "Background color" } },
                    { t: "font-size", d: { ar: "تغيير حجم الخط", en: "Font size" } },
                    { t: "margin", d: { ar: "المساحة الخارجية", en: "Outer spacing" } },
                    { t: "padding", d: { ar: "المساحة الداخلية", en: "Inner spacing" } },
                    { t: "border", d: { ar: "تنسيق حدود العنصر", en: "Element border" } },
                    { t: "width / height", d: { ar: "العرض والارتفاع", en: "Dimensions" } },
                    { t: "display: flex", d: { ar: "نظام تنظيم العناصر المرن", en: "Flexbox layout" } },
                    { t: "justify-content", d: { ar: "محاذاة العناصر أفقياً", en: "Horizontal alignment" } },
                    { t: "align-items", d: { ar: "محاذاة العناصر عمودياً", en: "Vertical alignment" } },
                    { t: "flex-direction", d: { ar: "اتجاه ترتيب العناصر", en: "Direction of flex items" } },
                    { t: "position", d: { ar: "طريقة تحديد موقع العنصر", en: "Positioning method" } },
                    { t: "top / left / right", d: { ar: "تحديد إزاحة الموقع", en: "Position offsets" } },
                    { t: "z-index", d: { ar: "ترتيب ظهور الطبقات", en: "Stack order" } },
                    { t: "box-shadow", d: { ar: "إضافة ظل للعنصر", en: "Element shadow" } },
                    { t: "text-shadow", d: { ar: "إضافة ظل للنص", en: "Text shadow" } },
                    { t: "border-radius", d: { ar: "جعل الحواف مستديرة", en: "Rounded corners" } },
                    { t: "opacity", d: { ar: "درجة الشفافية", en: "Transparency level" } },
                    { t: "transition", d: { ar: "تأثير الحركة التدريجية", en: "Smooth transitions" } },
                    { t: "transform: scale()", d: { ar: "تغيير الحجم عند التفاعل", en: "Resizing transform" } },
                    { t: "transform: rotate()", d: { ar: "تدوير العنصر", en: "Rotation transform" } },
                    { t: "cursor: pointer", d: { ar: "تغيير شكل الماوس ليد", en: "Change mouse cursor" } },
                    { t: "overflow", d: { ar: "التحكم بالمحتوى الزائد", en: "Handling overflow content" } },
                    { t: "font-weight", d: { ar: "تحديد سمك الخط", en: "Font thickness" } },
                    { t: "text-align", d: { ar: "محاذاة النص", en: "Text alignment" } }
                ]
            },
            {
                category: { ar: "أساسيات JavaScript", en: "JavaScript Essentials" },
                icon: "fa-js",
                type: "js",
                items: [
                    { t: "alert()", d: { ar: "إظهار نافذة تنبيه", en: "Alert message" } },
                    { t: "console.log()", d: { ar: "طباعة بيانات للمبرمج", en: "Console logging" } },
                    { t: "prompt()", d: { ar: "طلب إدخال من المستخدم", en: "User prompt input" } },
                    { t: "confirm()", d: { ar: "طلب تأكيد من المستخدم", en: "Confirmation dialog" } },
                    { t: "let / const", d: { ar: "تعريف المتغيرات", en: "Variable declarations" } },
                    { t: "if / else", d: { ar: "الجمل الشرطية", en: "Conditional logic" } },
                    { t: "function()", d: { ar: "تعريف دالة برمجية", en: "Defining a function" } },
                    { t: "document.getElementById()", d: { ar: "اختيار عنصر بواسطة ID", en: "Select element by ID" } },
                    { t: "document.querySelector()", d: { ar: "اختيار عنصر بواسطة CSS Selector", en: "Select by CSS selector" } },
                    { t: ".innerText", d: { ar: "تغيير محتوى النص للعنصر", en: "Change text content" } },
                    { t: ".innerHTML", d: { ar: "تغيير كود الـ HTML للعنصر", en: "Change HTML content" } },
                    { t: ".style.color", d: { ar: "تغيير لون العنصر برمجياً", en: "Change style via JS" } },
                    { t: "addEventListener('click')", d: { ar: "تنفيذ أمر عند الضغط", en: "Click event listener" } },
                    { t: "setTimeout()", d: { ar: "تنفيذ أمر بعد وقت محدد", en: "Delay execution" } },
                    { t: "setInterval()", d: { ar: "تكرار أمر بانتظام", en: "Repeat execution" } },
                    { t: "Array [ ]", d: { ar: "تعريف مصفوفة بيانات", en: "Defining an array" } },
                    { t: ".push()", d: { ar: "إضافة عنصر للمصفوفة", en: "Add item to array" } },
                    { t: ".pop()", d: { ar: "حذف آخر عنصر من المصفوفة", en: "Remove last item" } },
                    { t: "Math.random()", d: { ar: "توليد رقم عشوائي", en: "Generate random number" } },
                    { t: "Math.floor()", d: { ar: "تقريب الرقم للأصغر", en: "Round down number" } },
                    { t: "return", d: { ar: "إرجاع قيمة من الدالة", en: "Return value from function" } },
                    { t: "classList.add()", d: { ar: "إضافة كلاس CSS للعنصر", en: "Add CSS class via JS" } },
                    { t: "classList.remove()", d: { ar: "حذف كلاس CSS من العنصر", en: "Remove CSS class" } },
                    { t: "for loop", d: { ar: "تكرار برمجى", en: "Looping through code" } },
                    { t: "window.onload", d: { ar: "تنفيذ أمر عند تحميل الصفحة", en: "Execute on page load" } }
                ]
            }
        ];

        let currentLang = 'ar';

        // Clipboard function
        function copyToClipboard(text) {
            const el = document.createElement('textarea');
            el.value = text;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            
            const toast = document.getElementById('copyToast');
            toast.innerText = currentLang === 'ar' ? `تم نسخ [ ${text} ]` : `Copied [ ${text} ]`;
            toast.style.display = 'block';
            setTimeout(() => { toast.style.display = 'none'; }, 2000);
        }

        // Render sections based on filter
        function renderContent(filter = '') {
            const container = document.getElementById('content-container');
            container.innerHTML = '';

            dataLibrary.forEach(section => {
                const filteredItems = section.items.filter(item => 
                    item.t.toLowerCase().includes(filter.toLowerCase()) || 
                    item.d[currentLang].toLowerCase().includes(filter.toLowerCase())
                );

                if (filteredItems.length > 0) {
                    const card = document.createElement('div');
                    card.className = 'section-card';
                    
                    let html = `<h3><i class="fab ${section.icon}"></i> ${section.category[currentLang]}</h3><table>`;
                    html += `<thead><tr><th>${currentLang === 'ar' ? 'العنصر' : 'Item'}</th><th>${currentLang === 'ar' ? 'الوصف' : 'Description'}</th></tr></thead><tbody>`;
                    
                    filteredItems.forEach(item => {
                        const displayText = section.type === 'html' ? item.t.replace(/</g, '&lt;').replace(/>/g, '&gt;') : item.t;
                        html += `<tr>
                            <td><code onclick="copyToClipboard('${item.t}')">${displayText}</code></td>
                            <td>${item.d[currentLang]}</td>
                        </tr>`;
                    });

                    html += `</tbody></table>`;
                    card.innerHTML = html;
                    container.appendChild(card);
                }
            });
        }

        // Live Editor Logic
        const codeEditor = document.getElementById('codeEditor');
        const previewFrame = document.getElementById('previewFrame');

        codeEditor.oninput = () => {
            const content = codeEditor.value;
            const doc = previewFrame.contentDocument || previewFrame.contentWindow.document;
            doc.open();
            doc.write(content);
            doc.close();
        };

        // UI Initialization
        function init(lang) {
            currentLang = lang;
            const isAr = lang === 'ar';
            document.getElementById('main-html').dir = isAr ? 'rtl' : 'ltr';
            document.getElementById('langToggle').innerHTML = isAr ? '<i class="fas fa-globe"></i> English' : '<i class="fas fa-globe"></i> العربية';
            
            document.getElementById('hero-title').innerText = isAr ? 'موسوعة الويب المتكاملة' : 'Full Stack Encyclopedia';
            document.getElementById('hero-desc').innerText = isAr ? 'مرجعك الشامل لـ HTML و CSS و JavaScript. تعلم، انسخ الكود، وجربه مباشرة!' : 'Your complete guide to HTML, CSS, and JS. Learn, copy code, and test it live!';
            document.getElementById('searchInput').placeholder = isAr ? 'ابحث عن وسم، خاصية، أو دالة...' : 'Search for a tag, property, or function...';
            document.getElementById('playground-title').innerText = isAr ? 'معمل التجارب البرمجية (Live Lab)' : 'Live Programming Lab';

            const nav = document.getElementById('nav-links');
            const navItems = isAr ? ['الرئيسية', 'الموسوعة', 'المحاكي', 'تواصل معنا'] : ['Home', 'Encyclopedia', 'Playground', 'Contact'];
            nav.innerHTML = navItems.map(item => `<li><a href="#">${item}</a></li>`).join('');

            renderContent(document.getElementById('searchInput').value);
        }

        // Toggle Events
        document.getElementById('langToggle').onclick = () => init(currentLang === 'ar' ? 'en' : 'ar');
        document.getElementById('sidebarToggle').onclick = () => document.getElementById('sidebar').classList.toggle('active');
        document.getElementById('searchInput').oninput = (e) => renderContent(e.target.value);

        // Window Load
        window.onload = () => {
            VANTA.NET({
                el: "#vanta-bg",
                mouseControls: true,
                touchControls: true,
                color: 0x38bdf8,
                backgroundColor: 0x0f172a,
                points: 15.0,
                spacing: 16.0
            });
            
            setTimeout(() => {
                gsap.to("#intro-screen", { opacity: 0, duration: 1, onComplete: () => document.getElementById('intro-screen').remove() });
            }, 1500);

            // Starter Template for Editor
            codeEditor.value = `<!-- اكتب كودك هنا لتجربته -->
<style>
  body { text-align: center; font-family: sans-serif; padding-top: 50px; }
  h1 { color: #38bdf8; transition: 0.3s; }
  h1:hover { transform: scale(1.1); color: #818cf8; }
  .box { width: 120px; height: 120px; background: #fbbf24; margin: 30px auto; border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.2); transition: 0.5s; }
  .box.active { transform: rotate(180deg); background: #22c55e; border-radius: 50%; }
</style>

<h1>كريم أكاديمية</h1>
<div class="box" id="myBox"></div>
<button onclick="toggleShape()" style="padding:10px 20px; border-radius:8px; border:none; background:#38bdf8; color:white; cursor:pointer;">تغيير الشكل</button>

<script>
  function toggleShape() {
    const box = document.getElementById('myBox');
    box.classList.toggle('active');
  }
<\/script>`;
            codeEditor.dispatchEvent(new Event('input'));
            init('ar');
        };