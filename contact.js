// Form Validation
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "⚠ جميع الحقول مطلوبة!";
    formMessage.style.color = "#fff";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "⚠ البريد الإلكتروني غير صالح!";
    formMessage.style.color = "#fff";
    return;
  }

  formMessage.textContent = "✅ تم إرسال الرسالة بنجاح!";
  formMessage.style.color = "#fff";

  contactForm.reset();
});
const form = document.getElementById('creativeForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form Sent Successfully! 🎉');
  form.reset();
});


