let form = document.querySelector("form");
let fields = [];

form.addEventListener("submit", (event) => {

  event.preventDefault();
  fields.name = document.querySelector("input[name=name]").value;
  fields.email = document.querySelector("input[name=email]").value;
  fields.phone = document.querySelector("input[name=phone]").value;
  fields.message = document.querySelector("textarea[name=message]").value;
  fields.preferEmail = document.querySelector("input[name=contact-email]").checked;
  fields.preferTel = document.querySelector("input[name=contact-tel]").checked;
  
  console.log(fields);
})