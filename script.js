const formAgenda = document.getElementById("form_agenda");
const contato = [];
const telefone = [];
const regiao = [];
let linhas = '';

formAgenda.addEventListener("submit", function(e) {
    e.preventDefault();

    addLinhas();
    attTabela();
});

function addLinhas(){
    const nomeContato = document.getElementById("nome_contato");
    const phoneContato = document.getElementById("phone_contato");
    const dddNumber = document.getElementById("ddd_number");

    if(telefone.includes(phoneContato.value)){
        alert(`O telefone ${phoneContato.value} já existe!`);
    }
    else{
        contato.push(nomeContato.value);
        telefone.push(phoneContato.value);
        regiao.push(dddNumber.value);
        
        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${dddNumber.value}</td>`
        linha += `<td>${phoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }
    
    nomeContato.value = '';
    dddNumber.value = '';
    phoneContato.value = '';
}

function attTabela(){
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

