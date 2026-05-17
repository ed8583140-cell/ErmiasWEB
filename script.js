    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    themeToggle.addEventListener('click', () => {
      console.log('Theme button clicked');
      document.body.classList.toggle('dark');

      // Save Theme
      if(document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }

      if(document.body.classList.contains('dark')) {
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      } else {
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      }
    });

    // Mobile Menu Toggle
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Load Saved Theme
    window.addEventListener('load', () => {
      const savedTheme = localStorage.getItem('theme');

      if(savedTheme === 'dark') {
        document.body.classList.add('dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      } else {
        document.body.classList.remove('dark');
        themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      }
    });