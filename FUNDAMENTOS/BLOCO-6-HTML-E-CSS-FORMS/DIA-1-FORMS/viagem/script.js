//const INPUT_TEXT = document.querySelector("#enviar");


function handleSubmit(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }


//function handleSubmit(event) {
  //  event.preventDefault();
 // }

window.onload = function () {
    const INPUT_TEXT = document.querySelector('#enviar');
    INPUT_TEXT.addEventListener('click', handleSubmit);
  };

//INPUT_TEXT.addEventListener("click", function(event){
  //  event.preventDefault()
  //});




  //4
  function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }

  window.onload = function () {
    const clearBtn = document.querySelector('#apagar');
    clearBtn.addEventListener('click', clearFields);
    const submitBtn = document.querySelector('#enviar');
    submitBtn.addEventListener('click', handleSubmit);
  };


  //bonus
  function enableSubmit() {
    const submitBtn = document.querySelector('#enviar');
    const agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
  }

  window.onload = function() {
    const clearBtn = document.querySelector('#apagar');
    clearBtn.addEventListener('click', clearFields);
    const submitBtn = document.querySelector('#enviar');
    submitBtn.addEventListener('click', handleSubmit);
    const agreement = document.querySelector('#agreement');
    agreement.addEventListener('change', enableSubmit);
  };


//bonus 2
  function textInputValidation() {
    const email = document.querySelector('#email-completo').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const name = document.querySelector('#nome-completo').value.length;
    const invalidName = name < 10 || name > 40;
  
    const reason = document.querySelector('#texto-1').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
  }

