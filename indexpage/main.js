
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

// register

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("flightForm");
  const validationMessage = document.getElementById("validationMessage");
  const bookNowBtn = document.getElementById("bookNowBtn");

  bookNowBtn.addEventListener("click", function(event) {
    event.preventDefault();
    event.stopPropagation();

    const flightSelect = document.getElementById("flightSelect");
    const peopleInput = document.getElementById("peopleInput");
    const budgetInput = document.getElementById("budgetInput");
    const totalCost = parseInt(flightSelect.options[flightSelect.selectedIndex].dataset.price) * parseInt(peopleInput.value);

    if (form.checkValidity() === false) {
      validationMessage.innerHTML = '<div class="alert alert-danger" role="alert">Please complete all fields correctly.</div>';
    } else if (totalCost > parseInt(budgetInput.value)) {
      validationMessage.innerHTML = '<div class="alert alert-danger" role="alert">Total cost exceeds budget. Please adjust the number of people or select a different flight.</div>';
    } else {
      // Form is valid, you can handle form submission here
      validationMessage.innerHTML = `<div class="alert alert-success" role="alert">Thank you for your visit! Your ticket will be processed within 3 days. Total Cost: $${totalCost}</div>`;
    }

    form.classList.add("was-validated");
  });
});

// register

// JSON
var d = document.getElementById("cardjs1");

fetch("script.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((item) => {
            if (item.type === "location") {
                d.innerHTML += `
                    <div class="col-3">
                        <div class="card">
                            <img src="../assets/${item.img}" class="card-img-top img-fluid" alt="">
                            <div class="card-body">
                                <h5 class="card-title text-center">${item.title}</h5>
                                <p class="card-text text-center">${item.desc}</p>
                                <div class="text-center">
                                    <a href="#" class="btn btn-primary">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });

var e = document.getElementById("cardjs2");

fetch("script.json")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.forEach((item) => {
            if (item.type === "package") {
                e.innerHTML += `
                    <div class="col pack-img">
                        <div class="card">
                            <img src="../assets/${item.img}" class="card-img-top img-fluid rounded-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${item.title}</h5>
                                <p class="card-text">${item.desc}</p>
                                <p class="card-text">(40 reviews)</p>
                                <p class="price">$660 <span>/ per person</span></p>
                                <a href="#" class="btn btn-primary">Book Now</a>
                            </div>
                        </div>
                    </div>`;
            }
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    

