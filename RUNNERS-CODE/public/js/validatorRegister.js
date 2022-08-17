window.onload = function () {
    // Input fields
    const nombre = document.querySelector("#nombre");
    const textUserRegisterName = document.querySelector('.div-name-errors')//error message
    const textUserRegisterCharacteres = document.querySelector('.div-name-characteres-errors')//error message
    const apellido = document.querySelector("#apellido");
    const textRegisterLastName = document.querySelector('.div-lastName-errors')//class
    const textRegisterLastNameCharacters = document.querySelector('.div-lastName-characteres-errors')//class
    const email = document.querySelector("#email");
    const textUserRegisterEmail = document.querySelector(".div-email-errors")//class
    const textUserRegisterEmailCharacter = document.querySelector(".div-email-character-errors")//class
    const password = document.querySelector("#password");
    const textUserRegisterPassword = document.querySelector('.div-password-errors')//class
    const textUserRegisterPasswordCharacter = document.querySelector('.div-password-character-errors')//class


    const image = document.querySelector("#image");
    const textUserRegisterImage = document.querySelector('.div-image-errors')
  
 
    // Forms
    const form = document.querySelector("#register-form");
  


    if (form != null) {
    
        form.addEventListener('submit', (e) => {
    
    
          if (nombre.value == ''){
            e.preventDefault()
            textUserRegisterName.innerHTML = 'Debes ingresar tu nombre'
            //nombre.classList.add("input-error");
    
          } else {
            textUserRegisterName.innerHTML = ""
            nombre.classList.remove("input-error");
          }
    
          if (nombre.value != "" && nombre.value.length < 2) {
            e.preventDefault()
            textUserRegisterCharacteres.innerHTML = 'El nombre debe contener mínimo 2 letras'
            //userRegisterName.classList.add("input-error-2");
    
          } else {
            textUserRegisterCharacteres.innerHTML = ""
            nombre.classList.remove("input-error-2");
          }
        })
    }
  
      
  if (form != null) {
    
      form.addEventListener('submit', (e) => {

      if (apellido.value == '') {
        e.preventDefault()
        textRegisterLastName.innerHTML = ' Debes ingresar tu apellido'
        apellido.classList.add("input-error");

      } else {
        textRegisterLastName.innerHTML = ''
        apellido.classList.remove("input-error");
      }

      if (apellido.value.length > 0 && apellido.value.length < 2) {
        e.preventDefault()
        textRegisterLastNameCharacters.innerHTML =' El apellido debe contener mínimo 2 letras'
        apellido.classList.add("input-error-2");

      } else {
        textRegisterLastNameCharacters.innerHTML = ''
        apellido.classList.remove("input-error-2");
      }
    })
  }


  


  if (form != null) {
    
    form.addEventListener('submit', (e) => {

      if (email.value == '') {
        e.preventDefault()
        textUserRegisterEmail.innerHTML =' Debes ingresar un correo electrónico'
        email.classList.add("input-error");
        
      } else {
        textUserRegisterEmail.innerHTML = ""
        email.classList.remove("input-error");
      }

      if (email.value != "" && !email.value.includes("@")) {
        e.preventDefault()
        textUserRegisterEmailCharacter.innerHTML ='Debes ingresar un correo electrónico valido'
        email.classList.add("input-error-2");

      } else {
        textUserRegisterEmailCharacter.innerHTML = ""
        email.classList.remove("input-error-2");
      }
    })
  }


    if (form != null) {
    
      form.addEventListener('submit', (e) => {
      if (password.value == "") {
        e.preventDefault()
        textUserRegisterPassword.innerHTML = ' Debes ingresar una contraseña'
        password.classList.add("input-error");

      } else {
        textUserRegisterPassword.innerHTML = ""
        password.classList.remove("input-error");
      }

      if (password.value != "" && password.value.length < 8) {
        e.preventDefault()
        textUserRegisterPasswordCharacter.innerHTML =' La contraseña debe tener mínimo 8 caracteres'
        password.classList.add("input-error-2");

      } else {
        textUserRegisterPasswordCharacter.innerHTML = ""
        password.classList.remove("input-error-2");
      }

    })
  }
  
  
    
  
     
  if (form != null) {
    
    form.addEventListener('submit', (e) => {

      if(image.files[0]){
        let userImageValue = image.files[0].name.split('.')
        let userImageExtension = userImageValue[1].toLowerCase()

        if(
          userImageExtension == "png" ||
          userImageExtension == "jpg" ||
          userImageExtension == "jpeg" ||
          userImageExtension == "gif"
        ) {
          textUserRegisterImage.innerHTML = ""
          image.classList.remove('input-error')

        } else {
          e.preventDefault()
          textUserRegisterImage.innerHTML =' La imagen debe ser con extensión jpg, png, jpeg o gif'
          image.classList.add('input-error')
        }
        
      } 
    })
  }

  
    
  };
  Foot