document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();

const targetId = this.getAttribute('href');
const targetElement = document.querySelector(targetId);

if (targetElement) {
targetElement.scrollIntoView({
behavior: 'smooth'
});
}
});
});

const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', function() {
if (window.scrollY > 300) {
backToTopBtn.classList.remove('hidden');
} else {
backToTopBtn.classList.add('hidden');
}
});

backToTopBtn.addEventListener('click', function() {
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm && formMessage) {
contactForm.addEventListener('submit', function(event) {
event.preventDefault();

console.log('Form submitted!');
console.log('Name:', document.getElementById('name').value);
console.log('Email:', document.getElementById('email').value);
console.log('Message:', document.getElementById('message').value);

formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
formMessage.classList.remove('hidden');
formMessage.classList.remove('bg-red-100', 'text-red-700', 'border-red-300');
formMessage.classList.add('bg-green-100', 'text-green-700', 'border-green-300');

contactForm.reset();

setTimeout(() => {
formMessage.classList.add('hidden');
}, 5000);
});
}
});