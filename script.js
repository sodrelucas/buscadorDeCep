const hide = document.querySelector('.hide')

const preencherForm = (endereco) =>{
    document.querySelector('.localidade').value = endereco.localidade
    document.querySelector('.bairro').value = endereco.bairro
    document.querySelector('.logradouro').value = endereco.logradouro
    document.querySelector('.uf').value = endereco.uf
    document.querySelector('.ddd').value = endereco.ddd
    
}

const buscarCep= async() => {
    const cep = document.querySelector('.cep').value;  
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    
    const dados = await fetch(url)
    const endereco = await dados.json()

    preencherForm(endereco)
    hide.classList.remove('hide')
}

document.querySelector('.buscar')
    .addEventListener('click', buscarCep);



