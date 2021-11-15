function sendMail(params){
    var tempParams={
        from_name:"Jayant",
        to_name:document.getElementById("name").ariaValueMax,
        message:"Thank you for Joining and we will try our best on your fitness."
    };
    emailjs.send("service_114ztc3","template_58geag7",tempParams).then(function(res){console.log("Success",res.status)});
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
console.log("Thank you");
  document.getElementById("contact-button").addEventListener("click",function(){
      alert("Thank you for contacting.");
  });