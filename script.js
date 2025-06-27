 // Menu toggle code (unchanged)
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("hidden");
  });

  // Image hover effect - fixed version
  const img = document.getElementById('profileImage');
  const originalSrc = "photoportfoliocopy.jpg";
  const hoverSrc = "photo.jpg";

  if (img) {  // Safety check
    img.addEventListener('mouseenter', () => {
      img.src = hoverSrc;
    });

    img.addEventListener('mouseleave', () => {
      img.src = originalSrc;
    });
  }