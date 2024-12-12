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


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission
  
  const form = event.target;
  const formData = new FormData(form); // Collect form data
  
  // Add debugging statement
  console.log("Form is being submitted...");

  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => response.json()).then(result => {
      console.log("Response received:", result); // Debugging: Log the result
      if (result.success) {
          document.getElementById('result').textContent = "Thank you! Your message has been sent successfully.";
          form.reset(); // Reset the form after successful submission
      } else {
          document.getElementById('result').textContent = "Oops! Something went wrong. Please try again.";
      }
  }).catch(error => {
      console.log("Error occurred:", error); // Debugging: Log the error
      document.getElementById('result').textContent = "Oops! There was an error submitting the form.";
  });
});


// typing test code

const typed = new Typed ('.multiple-text',{
  strings:['Physical Fitness','Weight Gain', 'Strength Training','Fat Lose','Weight Lifting', 'Running'], typingSpeed:60,
  backSpeed:60,
  backDelay:1000,
  loop:true,

});
















// booking section

function submitForm(event) {
    event.preventDefault();
    
    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLSezTCGQQl1boIdPsKTCVrFt4lxR98hpCak3VLJMdF3Th5_ItQ/formResponse";
    
    const formData = new FormData();
    formData.append("entry.2005620554", document.getElementById("name").value);
    formData.append("entry.1045781291", document.getElementById("email").value);
    formData.append("entry.1065046570", document.getElementById("phone").value);
    formData.append("entry.1166974658", document.getElementById("appointmentDate").value);

    fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: formData
    }).then(() => {
        alert("Appointment Booked Successfully!");
        document.getElementById("appointmentForm").reset();
    }).catch((error) => {
        alert("There was an error booking your appointment.");
        console.error("Error:", error);
    });
}
