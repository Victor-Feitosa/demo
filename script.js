// Função para consultar o CEP
function consultarCEP(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('Erro ao consultar CEP');
          }
          return response.json();
      })
      .then(data => {
          document.getElementById('validationCustom08').value = data.logradouro;
          document.getElementById('validationCustom10').value = data.bairro;
          document.getElementById('validationCustom11').value = data.localidade;
          document.getElementById('validationCustom12').value = data.uf;
      })
      .catch(error => {
          console.error('Erro:', error);
      });
}

document.getElementById('validationCustom07').addEventListener('blur', function() {
  const cep = this.value.replace(/\D/g, '');
  if (cep.length === 8) {
      consultarCEP(cep);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  const form = document.getElementById('atendimentoForm');

  form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add('was-validated');
      } else {
          event.preventDefault();

          const infoDisplay = document.getElementById('infoDisplay');
          const formData = new FormData(form);
          let displayContent = '<ul class="list-group">';

          formData.forEach((value, key) => {
              const labelElement = form.querySelector(`label[for="${key}"]`);
              const label = labelElement ? labelElement.innerText : key;
              displayContent += `<li class="list-group-item"><strong>${label}:</strong> ${value}</li>`;
          });

          displayContent += '</ul>';
          infoDisplay.innerHTML = displayContent;
      }
  });
});

