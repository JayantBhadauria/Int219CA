function sendMail(params){
 
  
  var temParams={
      from_name: "Jayant Bhadauria",
      to_name: document.getElementById("validationCustom01").value,
      msg: "Thank for Registring , we will send your confirmation letter soon.",
  };
  emailjs.send('service_114ztc3','template_58geag7',temParams).then(function(res){
      console.log("Success",res.status);
  });
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