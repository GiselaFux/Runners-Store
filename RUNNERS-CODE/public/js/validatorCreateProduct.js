
window.onload = function () {
  //get product form
  const form = document.querySelector("#productCreate");
  // name fields
  const productName = document.querySelector("#productName");
  const textName = document.querySelector(".input-product-name-error");
  const productDescription = document.querySelector("#productDescription");
  const textDescription = document.querySelector(".input-product-description-error");
  const productImage = document.querySelector("#image");

  // if product name is empty
          
  if (form != null) {
    form.addEventListener("submit", (e) => {
      if (productName.value == "") {
        e.preventDefault();
        // product name
        textName.innerHTML = " Este campo no puede estar vacío";
        productName.classList.add("input-error");
        // if product name is less than 5 characters
      } else if (productName.value.length < 5) {
        e.preventDefault();
        textName.innerHTML =" Este campo debe tener mínimo 5 caracteres";
        productName.classList.add("input-error");
      } else {
        //class remove for productName
        productName.classList.remove("input-error");
        textName.innerHTML = "";
      }
    })
  }
  

  // if product description is empty
  if (form != null) {
    form.addEventListener("submit", (e) => {
      if (productDescription.value == "") {
        e.preventDefault();
        textDescription.innerHTML =" Este campo no puede estar vacío";
        productDescription.classList.add("input-error");
        // if product description is less than 20 characters
      } else if (productDescription.value.length < 20) {
        e.preventDefault();
        textDescription.innerHTML = " Este campo debe tener mínimo 20 caracteres";
        productDescription.classList.add("input-error");

      }

      //if all fields meet criteria
      else {
        //class remove for productDescription
        productDescription.classList.remove("input-error");
        textDescription.innerHTML = "";
      }
    })
  }
  
  
 //image fields

  if (form != null) {
    form.addEventListener("submit", (e) => {
      if (productImage.files[0]) {
        let productImageValue = productImage.files[0].name.split(".");
        let imageExtension = productImageValue[1].toLowerCase();
        let textImage = document.querySelector(".input-product-image-error");

        if (
          imageExtension == "png" ||
          imageExtension == "jpg" ||
          imageExtension == "jpeg"||
          imageExtension == "gif"
        ) {
          productImage.classList.remove("input-error");
          textImage.innerHTML = "";
        } else {
          e.preventDefault();
          textImage.innerHTML =" La imagen debe ser con extensión jpg, png, jpeg o gif";
          productImage.classList.add("input-error");
        }
      } else {
        let textImage = document.querySelector(".input-product-image-error");
        e.preventDefault();
        textImage.innerHTML =" Debes adjuntar una imagen";
        productImage.classList.add("input-error");
        console.log("no hay archivo");
      }
    })
  }
}