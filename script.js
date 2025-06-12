document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('toggleTheme');

  if (!toggleBtn) {
    console.error('Toggle button not found: Make sure it has id="toggleTheme"');
    return;
  }

  // Load saved theme
  const userPref = localStorage.getItem('theme');
  if (userPref === 'dark') {
    document.body.classList.add('dark');
  }

  // Toggle on click
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
  });

  // Animate sections as they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section, header, footer').forEach(el => observer.observe(el));
});
