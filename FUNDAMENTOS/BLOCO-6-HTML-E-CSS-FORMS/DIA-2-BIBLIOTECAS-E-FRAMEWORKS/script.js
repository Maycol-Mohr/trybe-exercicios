/*
const validate = new JustValidate(
  '#form', 
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
);

function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  for (let index = 0; index < formElements.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    userInput.checked = false;
  }
  textArea.value = '';
};

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
  const agreement = document.querySelector('#agreement');
  submitBtn.disabled = !agreement.checked;
}

const picker = new Pikaday({
  field: document.getElementById('date'),
  format: 'D/M/YYYY',
  toString(date, format) {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
  },
  parse(dateString, format) {
      const parts = dateString.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
  }
});

validate
  .addField('#fullName', [
    {
      rule: 'required',
      errorMessage: 'O campo de nome é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O mínimo é de 10 caracteres.',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'O campo de email é obrigatório.',
    },
    {
      rule: 'email',
      errorMessage: 'O email digitado não é válido.',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.',
    },
  ])
  .addField('#why', [
    {
      rule: 'required',
      errorMessage: 'O campo de resposta é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres',
    },
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'O campo de data é obrigatório.',
    },
  ]);

window.onload = function() {
  const clearBtn = document.querySelector('#clear-btn');
  clearBtn.addEventListener('click', clearFields);
  const agreement = document.querySelector('#agreement');
  agreement.addEventListener('change', enableSubmit);
};
*/



//const INPUT_TEXT = document.querySelector("#enviar");

//function handleSubmit(event) {
  //  event.preventDefault();
 // }

 /*
window.onload = function () {
    const INPUT_TEXT = document.querySelector('#enviar');
    INPUT_TEXT.addEventListener('click', handleSubmit);
  };
*/
//INPUT_TEXT.addEventListener("click", function(event){
  //  event.preventDefault()
  //});

  /*
  window.onload = function () {
    const clearBtn = document.querySelector('#apagar');
    clearBtn.addEventListener('click', clearFields);
    const submitBtn = document.querySelector('#enviar');
    submitBtn.addEventListener('click', handleSubmit);
  };
*/



const validate = new JustValidate(
  '#form', 
  {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid red',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: 'red',
      textDecoration: 'underlined',
    },
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
    },
  },
);

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


  //bonus 1
  function enableSubmit() {
    const submitBtn = document.querySelector('#enviar');
    const agreement = document.querySelector('#agreement');
    submitBtn.disabled = !agreement.checked;
  }

  const picker = new Pikaday({
    field: document.getElementById('date'),
    format: 'D/M/YYYY',
    toString(date, format) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    },
    parse(dateString, format) {
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
  });


//bonus 2
  function textInputValidation() {

    const name = document.querySelector('#nome-completo').value.length;
    const invalidName = name < 10 || name > 40;

    const email = document.querySelector('#email-completo').value.length;
    const invalidEmail = email < 10 || email > 50;
  
    const reason = document.querySelector('#texto-1').value.length;
    const invalidReason = reason > 500;
  
    if (invalidEmail || invalidName || invalidReason) {
      return false;
    }
    else {
      return true;
    }
  }


  //exe 3 e bonus 2
  function handleSubmit(event) {
    event.preventDefault();
    const validation = textInputValidation();
    if (validation === false) {
      alert('Dados inválidos');
    } else {
      alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
    }
  }



  validate
  .addField('#nome-completo', [
    {
      rule: 'required',
      errorMessage: 'O campo de nome é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
      errorMessage: 'O limite é de 40 caracteres.',
    },
    {
      rule: 'minLength',
      value: 10,
      errorMessage: 'O mínimo é de 10 caracteres.',
    },
  ])
  .addField('#email-completo', [
    {
      rule: 'required',
      errorMessage: 'O campo de email é obrigatório.',
    },
    {
      rule: 'email',
      errorMessage: 'O email digitado não é válido.',
    },
    {
      rule: 'maxLength',
      value: 50,
      errorMessage: 'O limite é de 50 caracteres.',
    },
  ])
  .addField('#texto-1', [
    {
      rule: 'required',
      errorMessage: 'O campo de resposta é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 500,
      errorMessage: 'O limite é de 500 caracteres',
    },
  ])
  .addField('#date', [
    {
      rule: 'required',
      errorMessage: 'O campo de data é obrigatório.',
    },
  ]);


  //exe 3 - exe 4 - bonus 1
  window.onload = function() {
    const submitBtn = document.querySelector('#enviar');
    submitBtn.addEventListener('click', handleSubmit);
    const clearBtn = document.querySelector('#apagar');
    clearBtn.addEventListener('click', clearFields);
    const agreement = document.querySelector('#agreement');
    agreement.addEventListener('change', enableSubmit);
  };
  