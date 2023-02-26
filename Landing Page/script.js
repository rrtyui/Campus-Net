function smoothScroll(target) {
    const element = document.querySelector(target);
    const offsetTop = element.offsetTop;
    const scrollOptions = {
      top: offsetTop,
      behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
  }
  
  const links = document.querySelectorAll('.nav-links a');
  
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const target = this.getAttribute('href');
      smoothScroll(target);
    });
  });
  