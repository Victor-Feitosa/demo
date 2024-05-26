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



          const infoDisplay2 = document.getElementById('infoDisplay2');
          let displayContent2 = '<span>';

          const nome = document.getElementById('validationCustom01').value + ' ' + document.getElementById('validationCustom02').value;
          const email = document.getElementById('validationCustomUsername').value;
          const CPF = document.getElementById('validationCustom03').value;
          const RG = document.getElementById('validationCustom04').value;
          const telefone = document.getElementById('validationCustom05').value;
          const tipoAtendimento = document.getElementById('validationCustom06').value;
          const CEP = document.getElementById('validationCustom07').value;
          const logradouro = document.getElementById('validationCustom08').value;
          const numero = document.getElementById('validationCustom09').value;
          const bairro = document.getElementById('validationCustom10').value;
          const cidade = document.getElementById('validationCustom11').value;
          const estado = document.getElementById('validationCustom12').value;
          const endereco = `${logradouro}, N° ${numero}, ${bairro}, na cidade de ${cidade}-${estado}`;
          const dataAtual = new Date();
          const dia = dataAtual.getDay();
          const mes = dataAtual.getMonth();
          const ano = dataAtual.getFullYear();
          console.log(dia);
          console.log(mes);
          console.log(ano);

          displayContent2 += `<strong>CONTRATO DE USO DE IMAGEM</strong><br>

          <strong>Pelo presente instrumento particular de Contrato de Uso de Imagem, de um lado:</strong><br>
          
          <strong>Nome Completo:</strong> ${nome}<br>
          <strong>RG:</strong> ${RG}<br>
          <strong>CPF:</strong> ${CPF}<br>  
          <strong>Endereço:</strong> ${endereco}<br>
          
          <strong>E, de outro lado:</strong><br>
          
          <strong>Nome Completo:</strong> Victor Gabriel<br>  
          <strong>RG:</strong> 12.345.678-90  <br>
          <strong>CPF:</strong> 123.456.789-01  <br>
          <strong>Endereço:</strong> Rua ABC, N° 12, Jardim dos jardins, Indaiatuba<br>
          <br>
          <strong>Têm entre si justo e acertado o presente Contrato de Uso de Imagem, que se regerá pelas seguintes cláusulas e condições:<strong><br>
          <br>
          <strong>CLÁUSULA 1 - DO OBJETO</strong><br>
          <br>          
          O presente contrato tem por objeto a autorização do uso da imagem do(a) Sr(a). ${nome} para propaganda de teste.<br>
          <br>
          <strong>CLÁUSULA 2 - DA AUTORIZAÇÃO</strong><br>
          <br>
          O(a) Titular da Imagem autoriza, sem quaisquer ônus, o uso de sua imagem, conforme descrito na Cláusula 1, pelo período de 40 (quarenta) anos.<br>
          <br>        
          <strong>CLÁUSULA 3 - DO USO E VEICULAÇÃO</strong><br>
          <br>
          A imagem poderá ser utilizada em redes sociais, observando-se os limites deste contrato e a legislação vigente.<br>
          <br>
          <strong>CLÁUSULA 4 - DOS DIREITOS E OBRIGAÇÕES</strong><br>
          <br>
          O(a) Titular da Imagem se compromete a não reivindicar quaisquer direitos ou remunerações adicionais pelo uso de sua imagem, conforme as condições aqui estabelecidas. O(a) Contratante se compromete a utilizar a imagem exclusivamente para os fins estabelecidos neste contrato.<br>
          <br>
          <strong>CLÁUSULA 5 - DA RESCISÃO</strong><br>
          <br>
          O presente contrato poderá ser rescindido por qualquer das partes mediante aviso prévio de 30 dias, por escrito.<br>
          <br>
          <strong>CLÁUSULA 6 - DO FORO</strong><br>
          <br>
          Fica eleito o foro da Comarca de ${cidade}, Estado ${estado}, para dirimir quaisquer dúvidas ou litígios decorrentes deste contrato, com renúncia de qualquer outro, por mais privilegiado que seja.<br>
          <br>
          E, por estarem assim justos e contratados, assinam o presente contrato em 2 (duas) vias de igual teor e forma, na presença das testemunhas abaixo.<br>
          <br>
          <strong>${cidade}, ${dia} de ${mes} de ${ano}.</strong><br>
          <br>
          <strong>_________________________________________</strong>  <br>
          <strong>${nome}</strong>  <br>
          <strong>RG: ${RG}</strong>  <br>
          <strong>CPF: ${CPF}</strong><br>
          <br>
          <strong>_________________________________________</strong>  <br>
          <strong>Victor Gabriel</strong>  <br>
          <strong>RG: 12.345.678-90</strong>  <br>
          <strong>CPF: 123.456.789-01 </strong><br>
          <br>
          <strong>Testemunhas:</strong><br>
          <br>
          <strong>1._______________________________________</strong>  <br>
          <strong>Nome:</strong>  <br>
          <strong>RG:</strong><br>
          <br>
          <strong>2._______________________________________</strong>  <br>
          <strong>Nome:</strong>  <br>
          <strong>RG:</strong>`
          

          displayContent2 += '</span>';
          infoDisplay2.innerHTML = displayContent2;

      }
  });
});

