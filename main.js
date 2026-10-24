document.querySelectorAll('nav ul li a, .btn').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Memastikan link memiliki target id (diawali #)
    const targetId = this.getAttribute('href');
    
    if (targetId.startsWith('#')) {
      e.preventDefault(); // Mencegah lompatan instan bawaan browser
      
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        // Mengarahkan scroll secara halus ke posisi section
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});