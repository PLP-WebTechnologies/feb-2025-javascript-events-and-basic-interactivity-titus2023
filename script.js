// Button Click, Double Click, Long Press
const button = document.getElementById('funButton');
const secret = document.getElementById('secretMessage');
let pressTimer;

button.addEventListener('click', () => {
  button.textContent = "You clicked me!";
  button.style.backgroundColor = '#4CAF50';
});

button.addEventListener('dblclick', () => {
  secret.classList.remove('hidden');
});

button.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    secret.classList.remove('hidden');
  }, 1500);
});

button.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

// Image Slideshow
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];
let currentIndex = 0;
const gallery = document.getElementById("galleryImage");

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  gallery.src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  gallery.src = images[currentIndex];
}

// Tabs
function openTab(id) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('show'));
  document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
  document.getElementById(id).classList.add('show');
  event.target.classList.add('active');
}

// Form Validation
const form = document.getElementById("signupForm");

form.addEventListener("input", () => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  document.getElementById("nameFeedback").textContent = name.value ? "" : "Name required.";
  document.getElementById("emailFeedback").textContent = /^[^@]+@[^@]+\.[^@]+$/.test(email.value) ? "" : "Invalid email.";
  document.getElementById("passwordFeedback").textContent = password.value.length >= 8 ? "" : "Min 8 characters.";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form Submitted Successfully!");
});
