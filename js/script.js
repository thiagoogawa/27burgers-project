document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileMenuItems = document.querySelector('.mobile-menu-items');

  mobileMenuToggle.addEventListener('click', function() {
    mobileMenuItems.classList.toggle('active');
    
    // Alterna entre ícone de hambúrguer e X
    const icon = this.querySelector('i');
    if (mobileMenuItems.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Fecha o menu ao clicar em um link
  const mobileLinks = document.querySelectorAll('.mobile-menu-list a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuItems.classList.remove('active');
      const icon = mobileMenuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });

  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });
});
