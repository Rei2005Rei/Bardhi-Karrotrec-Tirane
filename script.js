'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


/* form */

const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    // 🔍 Kontrollo nëse të gjitha fushat janë plotësuar
    const inputs = this.querySelectorAll('input, textarea');
    let allFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === '') {
        allFilled = false;
      }
    });

    if (!allFilled) {
      Swal.fire({
        icon: 'warning',
        title: 'Fusha të paplotësuara!',
        text: 'Ju lutem, plotesoni te gjitha fushat!',
      });
      return;
    }

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_6x4fedh';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Send Email';
        Swal.fire({
          icon: 'success',
          title: 'Sukses!',
          text: 'Mesazhi u dergua me sukses!',
        });
        this.reset(); // 🧼 Pastron fushat pas dërgimit
      }, (err) => {
        btn.value = 'Send Email';
        Swal.fire({
          icon: 'error',
          title: 'Gabim!',
          text: 'Dergimi deshtoi. Provo perseri.',
        });
      });
  });



