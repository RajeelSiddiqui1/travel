
// svg

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }
});

// svg

// alert

document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let emailInput = document.getElementById("validationCustom01");
  let email = emailInput.value;

  if (!emailInput.checkValidity()) {
    // If email is not valid, show Bootstrap validation
    emailInput.classList.add('is-invalid');
    return;
  }

  // SweetAlert confirmation
  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you want to subscribe with this email?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, subscribe!'
  }).then((result) => {
    if (result.isConfirmed) {
      // SweetAlert success message
      Swal.fire(
        'Subscribed!',
        'You are now subscribed.',
        'success'
      );
      
      // Here you can add your subscription logic or form submission
      console.log("Subscribed with email: " + email);

      // Reset the form after successful subscription
      document.getElementById("subscribeForm").reset();
      emailInput.classList.remove('is-invalid');
    } else {
      // SweetAlert error message
      Swal.fire({
        title: 'Subscription Cancelled',
        text: 'You have cancelled the subscription.',
        icon: 'error'
      });
    }
  });
});

// alert