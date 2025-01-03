let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Toggle icon change
    navbar.classList.toggle('active'); // Toggle navbar visibility
}

// Close menu when a link is clicked
navbar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active'); // Hide navbar
        menu.classList.remove('bx-x'); // Reset icon
    });
});

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}


// swiper section code

new Swiper('.card-wraper', {
   
  loop: true,
  spaceBetween:60,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints:{
    0:{ 
      slidesPerView: 1

    },
    768:{ 
      slidesPerView: 2

    },
    1024:{ 
      slidesPerView: 3

    },
  }
});





new Swiper('.review-wraper', {
   
  loop: true,
  spaceBetween:60,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints:{
    0:{ 
      slidesPerView: 1

    },
    768:{ 
      slidesPerView: 2

    },
    1024:{ 
      slidesPerView: 3

    },
  }
});


// review section code
let currentIndex = 0;
const reviewSlides = document.querySelectorAll(".review-slide");
const totalSlides = reviewSlides.length;
const container = document.querySelector(".review-container");
const reviewsPerPage = 3; // Number of reviews visible at a time

function showReview() {
    container.style.transform = `translateX(-${currentIndex * (100 / reviewsPerPage)}%)`;
}

document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentIndex < totalSlides - reviewsPerPage) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to start
    }
    showReview();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - reviewsPerPage; // Go to the last set of reviews
    }
    showReview();
});




// contact us section 



  //       const form = document.getElementById("contactForm");
  //       form.addEventListener("submit", function (event) {
  //         event.preventDefault(); // Prevent form submission

          
  //        // Clear previous errors
  //         document.getElementById("nameError").textContent = "";
  //         document.getElementById("emailError").textContent = "";
  //         document.getElementById("phoneError").textContent = "";
  //         document.getElementById("messageError").textContent = "";
    
  //         // Get form values
  //         const name = document.getElementById("name").value.trim();
  //         const email = document.getElementById("email").value.trim();
  //         const phone = document.getElementById("phone").value.trim();
  //         const message = document.getElementById("message").value.trim();
    
  //         let isValid = true;
    
  //         // Validate Name
  //         if (name === "") {
  //           document.getElementById("nameError").textContent = "Name is required.";
  //           document.getElementById("name").classList.add('error');
  //           isValid = false;
  //         } else if (name.length < 3) {
  //           document.getElementById("nameError").textContent = "Name must be at least 3 characters long.";
  //           isValid = false;
  //         }
    
  //         // Validate Email
  //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //         if (email === "") {
  //           document.getElementById("emailError").textContent = "Email is required.";
  //           isValid = false;
  //         } else if (!emailRegex.test(email)) {
  //           document.getElementById("emailError").textContent = "Please enter a valid email address.";
  //           isValid = false;
  //         }
    
  //         // Validate Phone
  //         const phoneRegex = /^[0-9]{10}$/;
  //         if (phone === "") {
  //           document.getElementById("phoneError").textContent = "Phone number is required.";
  //           isValid = false;
  //         } else if (!phoneRegex.test(phone)) {
  //           document.getElementById("phoneError").textContent = "Phone number must contain only digits and be at least 10 digits long.";
  //           isValid = false;
  //         }
    
  //         // Validate Message
  //         if (message === "") {
  //           document.getElementById("messageError").textContent = "Message is required.";
  //           isValid = false;
  //         } else if (message.length < 10) {
  //           document.getElementById("messageError").textContent = "Message must be at least 10 characters long.";
  //           isValid = false;
  //         }
    
  //   //       fetch(form.action, {
  //   //       method: form.method,
  //   //       body: formData,
  //   //       headers: {
  //   //           'Accept': 'application/json'
  //   //       }
  //   //   }).then(response => response.json()).then(result => {
  //   //       console.log("Response received:", result); // Debugging: Log the result
  //   //       if (result.success) {
  //   //           document.getElementById('result').textContent = "Thank you! Your message has been sent successfully.";
  //   //           form.reset(); // Reset the form after successful submission
  //   //       } else {
  //   //           document.getElementById('result').textContent = "Oops! Something went wrong. Please try again.";
  //   //       }
  //   //   }).catch(error => {
  //   //       console.log("Error occurred:", error); // Debugging: Log the error
  //   //       document.getElementById('result').textContent = "Oops! There was an error submitting the form.";
  //   //   });
  //     if (isValid) {
          
  //       const form = event.target;
  // const formData = new FormData(form); // Collect form data
  
  // // Add debugging statement
  // console.log("Form is being submitted...");

  // fetch(form.action, {
  //     method: form.method,
  //     body: formData,
  //     headers: {
  //         'Accept': 'application/json'
  //     }
  // }).then(response => response.json()).then(result => {
  //     console.log("Response received:", result); // Debugging: Log the result
  //     if (result.success) {
  //         document.getElementById('result').textContent = "Thank you! Your message has been sent successfully.";
  //         form.reset(); // Reset the form after successful submission
  //       setTimeout(() => {
  //           document.getElementById('result').style.display = 'none';
  //       }, (2000)); 
  //     } else {
  //         document.getElementById('result').textContent = "Oops! Something went wrong. Please try again.";
  //     }
  // }).catch(error => {
  //     console.log("Error occurred:", error); // Debugging: Log the error
  //     document.getElementById('result').textContent = "Oops! There was an error submitting the form.";
  // });
  //         } 
  //       });
  



 // FAQ toggle logic
 document.querySelectorAll('.question').forEach(button => {
  button.addEventListener('click', () => {
    const faq = button.closest('.faq');
    faq.classList.toggle('active');
  });
});



// booking section
