/* function validatePQRForm() {
  document.querySelector(".sendPqrButton").disabled = true;
  const name = document.querySelector("#mc-name");
  const email = document.querySelector("#mc-email");
  const message = document.querySelector("#mc-message");

  if (!name.value || name.length < 1) document.querySelector(".invalid-pqr-name").classList.remove("hide");
  else document.querySelector(".invalid-pqr-name").classList.add("hide");
  if (!email.value || email.length < 1 || !email.value.match(".+@.+[.][a-z][a-z]+"))
    document.querySelector(".invalid-pqr-email").classList.remove("hide");
  else document.querySelector(".invalid-pqr-email").classList.add("hide");
  if (!message.value || message.length < 1) document.querySelector(".invalid-pqr-message").classList.remove("hide");
  else document.querySelector(".invalid-pqr-message").classList.add("hide");

  if (document.querySelectorAll(".invalid-pqr.hide").length == 3) {
    document.querySelector(".sendPqrButton").classList.add("invisible");
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    fetch("https://api.guruh.com.co/api/v1/pqrs/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        document.querySelector(".subscribe-form").classList.add("hide");
        document.querySelector(".thanks-pqrs").classList.remove("hide");
      })
      .catch((err) => {
        console.log(err);
        document.querySelector(".subscribe-form").classList.add("hide");
        document.querySelector(".error-pqrs").classList.remove("hide");
      });
  }
  else {
    document.querySelector(".sendPqrButton").disabled = false;
  }
} */

/* function newForm() {
  document.querySelector(".subscribe-form").classList.remove("hide");
  document.querySelector(".thanks-pqrs").classList.add("hide");
  document.querySelector("#mc-form").reset();
  document.querySelector(".sendPqrButton").classList.remove("invisible");
  document.querySelector(".sendPqrButton").disabled = false;
} */

function validateGuritoForm() {
  const name = document.querySelector("#registerGuritoFormModal #nombre");
  const lastname = document.querySelector("#registerGuritoFormModal #apellido");
  const phone = document.querySelector("#registerGuritoFormModal #numTelefono");
  const email = document.querySelector("#registerGuritoFormModal #correo");
  const country = $("#registerGuritoFormModal #pais").val();
  const degrees = $("#registerGuritoFormModal #carrera").val();
  const channel = $("#registerGuritoFormModal #canal").val();
  const group = document.querySelector("#registerGuritoFormModal #agrupal");

  if (!name.value) document.querySelector("#registerGuritoFormModal .invalid-name").classList.remove("hide");
  else document.querySelector("#registerGuritoFormModal .invalid-name").classList.add("hide");
  if (!lastname.value) document.querySelector("#registerGuritoFormModal .invalid-lastname").classList.remove("hide");
  else document.querySelector("#registerGuritoFormModal .invalid-lastname").classList.add("hide");
  if (!phone.value) document.querySelector("#registerGuritoFormModal .invalid-phone").classList.remove("hide");
  else document.querySelector("#registerGuritoFormModal .invalid-phone").classList.add("hide");
  if (!email.value || !email.value.match(".+@.+[.][a-z][a-z]+")) document.querySelector("#registerGuritoFormModal .invalid-email").classList.remove("hide");
  else document.querySelector("#registerGuritoFormModal .invalid-email").classList.add("hide");
  if (!country || country.length < 1) document.querySelector("#registerGuritoFormModal .invalid-country").classList.remove("hide");
  else document.querySelector("#registerGuritoFormModal .invalid-country").classList.add("hide");
  if (!degrees || degrees.length < 1) document.querySelector("#registerGuritoFormModal .invalid-degree").classList.remove("hide");
  else document.querySelector("#registerGuritoFormModal .invalid-degree").classList.add("hide");
  if (!channel || channel.length < 1) document.querySelector("#registerGuritoFormModal .invalid-canal").classList.remove("hide");
  else document.querySelector("#registerGuritoFormModal .invalid-canal").classList.add("hide");

  clickTerms();

  console.log(document.querySelectorAll("#registerGuritoFormModal .invalid-feedback.hide"))
  if (document.querySelectorAll("#registerGuritoFormModal .invalid-feedback.hide").length == 8 && document.querySelector("#registerGuritoFormModal #terminos").checked) {
    document.querySelector(".sendGuritoButton").classList.add("invisible");
    const data = {
      firstName: name.value,
      lastName: lastname.value,
      interestedDegree: degrees,
      country: country,
      email: email.value,
      phone: phone.value,
      canal: channel,
      groups: group.checked
    };
    console.log(data)
    fetch("https://api.guruh.com.co/api/v1/guritos/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        document.querySelector("#registerGuritoFormModal").classList.add("hide");
        document.querySelector(".thanks-gurito").classList.remove("hide");
      })
      .catch((err) => {
        console.log(err);
        document.querySelector("#registerGuritoFormModal").classList.add("hide");
        document.querySelector(".error-gurito").classList.remove("hide");
      });
  }
}


function validateGuruhForm() {
  const name = document.querySelector("#registerGuruhFormModal #nombreG");
  const lastname = document.querySelector("#registerGuruhFormModal #apellidoG");
  const phone = document.querySelector("#registerGuruhFormModal #numTelefonoG");
  const email = document.querySelector("#registerGuruhFormModal #correoG");
  const degrees = $("#registerGuruhFormModal #carrera2").val();
  const semester = $("#registerGuruhFormModal #semestre").val();
  const university = $("#registerGuruhFormModal #universidad").val();
  const liking = $("#registerGuruhFormModal #gusto").val();
  const channel = $("#registerGuruhFormModal #canal2").val();

  if (!name.value) document.querySelector("#registerGuruhFormModal .invalid-name").classList.remove("hide");
  else document.querySelector("#registerGuruhFormModal .invalid-name").classList.add("hide");
  if (!lastname.value) document.querySelector("#registerGuruhFormModal .invalid-lastname").classList.remove("hide");
  else document.querySelector("#registerGuruhFormModal .invalid-lastname").classList.add("hide");
  if (!phone.value) document.querySelector("#registerGuruhFormModal .invalid-phone").classList.remove("hide");
  else document.querySelector("#registerGuruhFormModal .invalid-phone").classList.add("hide");
  if (!email.value || !email.value.match(".+@.+[.][a-z][a-z]+")) document.querySelector("#registerGuruhFormModal .invalid-email").classList.remove("hide");
  else document.querySelector("#registerGuruhFormModal .invalid-email").classList.add("hide");
  if (!degrees || degrees.length < 1) document.querySelector("#registerGuruhFormModal .invalid-degree").classList.remove("hide");
  else document.querySelector("#registerGuruhFormModal .invalid-degree").classList.add("hide");
  if (!semester || semester.length < 1) document.querySelector("#registerGuruhFormModal .invalid-semester").classList.remove("hide");
  else document.querySelector("#registerGuruhFormModal .invalid-semester").classList.add("hide");
  if (!university || university.length < 1) document.querySelector("#registerGuruhFormModal .invalid-university").classList.remove("hide");
  else document.querySelector("#registerGuruhFormModal .invalid-university").classList.add("hide");
  if (!liking || liking.length < 1) document.querySelector("#registerGuruhFormModal .invalid-liking").classList.remove("hide");
  else document.querySelector("#registerGuruhFormModal .invalid-liking").classList.add("hide");
  if (!channel || channel.length < 1) document.querySelector("#registerGuruhFormModal .invalid-canal").classList.remove("hide");
  else document.querySelector("#registerGuruhFormModal .invalid-canal").classList.add("hide");

  clickTermsGuruh();

  if (document.querySelectorAll("#registerGuruhFormModal .invalid-feedback.hide").length == 10 && document.querySelector("#registerGuruhFormModal #terminosG").checked) {
    document.querySelector(".sendGuruhButton").classList.add("invisible");
    const data = {
      firstName: name.value,
      lastName: lastname.value,
      university: university,
      degree: degrees,
      semester: semester,
      email: email.value,
      phone: phone.value,
      degreeLove: liking,
      canal: channel
    };
    fetch("https://api.guruh.com.co/api/v1/guruhs/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((resp) => {
        document.querySelector("#registerGuruhFormModal").classList.add("hide");
        document.querySelector(".thanks-guruh").classList.remove("hide");

      })
      .catch((err) => {
        console.log(err);
        document.querySelector("#registerGuruhFormModal").classList.add("hide");
        document.querySelector(".error-guruh").classList.remove("hide");
      });
  }
}
function clickTerms() {
  const terms = document.querySelector("#registerGuritoFormModal #terminos");
  if (terms.checked) document.querySelector("#registerGuritoFormModal .invalid-terms").classList.add("hide");
  else document.querySelector("#registerGuritoFormModal .invalid-terms").classList.remove("hide");
}

function clickTermsGuruh() {
  const terms = document.querySelector("#registerGuruhFormModal #terminosG");
  if (terms.checked) document.querySelector("#registerGuruhFormModal .invalid-terms").classList.add("hide");
  else document.querySelector("#registerGuruhFormModal .invalid-terms").classList.remove("hide");
}
function updateForm() {
  const form = document.querySelector(`.login-html`);
  const tabGurito = document.querySelector(`#tab-1`);
  const tabGuruh = document.querySelector(`#tab-2`);
  if (tabGurito.checked) {
    document.querySelector(`#registerGuritoFormModal`).style.cssText = 'backface-visibility: visible; -webkit-backface-visibility:visible;';
    document.querySelector(`#registerGuruhFormModal`).style.cssText = 'backface-visibility: hidden; -webkit-backface-visibility:hidden;';
    document.querySelector("#registerGuritoFormModal").classList.remove("hide");
    document.querySelector(".thanks-gurito").classList.add("hide");
    document.querySelector('.sendGuritoButton').classList.remove('invisible');
    document.querySelector('.sendGuritoButton').classList.add('active');
    setTimeout(function () { form.style.height = "130%" }, 500);
  }
  if (tabGuruh.checked) {
    document.querySelector(`#registerGuritoFormModal`).style.cssText = 'backface-visibility: hidden; -webkit-backface-visibility:hidden;';
    document.querySelector(`#registerGuruhFormModal`).style.cssText = 'backface-visibility: visible; -webkit-backface-visibility:visible;';
    document.querySelector("#registerGuruhFormModal").classList.remove("hide");
    document.querySelector(".thanks-guruh").classList.add("hide");
    document.querySelector('.sendGuruhButton').classList.remove('invisible');
    document.querySelector('.sendGuruhButton').classList.add('active');
    setTimeout(function () { form.style.height = "144%" }, 500);
  }
  clearResults();
}


function clearResults() {
  document.querySelector(".thanks-guruh").classList.add("hide");
  document.querySelector(".error-guruh").classList.add("hide");
  document.querySelector(".thanks-gurito").classList.add("hide");
  document.querySelector(".error-gurito").classList.add("hide");
}