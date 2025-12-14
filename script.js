// Tabs Menu
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabContents.forEach(tc => tc.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Contact Form WhatsApp
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  const name = this.name.value;
  const email = this.email.value;
  const message = this.message.value;
  const whatsappMsg = `Bonjour! Je suis ${name}. ${message} (Email: ${email})`;
  const encoded = encodeURIComponent(whatsappMsg);
  window.open(`https://wa.me/212643540399?text=${encoded}`, '_blank');
  this.reset();
});
