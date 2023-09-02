const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]


toggleButton.addEventListener('click', () =>{
    navbarLinks.classList.toggle('active')
})


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