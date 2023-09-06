const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})


//FOR GOOGLE SHEET SUBMIT FORM

window.addEventListener("load", function() {
    const form = document.getElementById('submit-to-google-sheets');
    const msg = document.getElementById("msg")
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const data = new FormData(form);
      const action = e.target.action;
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(response => {
        msg.innerHTML = "Message Sent successfully!"
        setTimeout(function(){msg.innerHTML = ""}, 5000);
    })
    form.reset()
    });
  });

//FOR SCROLL TO TOP FUNCTION

  // Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}