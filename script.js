// Dark mode logic
const toggleBtn = document.getElementById('toggleTheme');
const userPref = localStorage.getItem('theme');

if (userPref === 'dark') {
  document.body.classList.add('dark');
}

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// Fade-in transitions
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section, header, footer').forEach(el => observer.observe(el));
