'use strict'

let fillForm = address => {
  document.getElementById('endereco').innerHTML = address.logradouro
  document.getElementById('bairro').innerHTML = address.bairro
  document.getElementById('cidade').innerHTML = address.localidade
  document.getElementById('estado').innerHTML = address.uf
}

let pesquisarCep = async () => {
  let cep = document.getElementById('cep').value
  let url = `https://viacep.com.br/ws/${cep}/json/`
  // fetch(url).then(response => response.json().then(console.log))
  let data = await fetch(url)
  let address = await data.json()

  if (address.hasOwnProperty('erro')) {
    alert('CEP NÃO ENCONTRADO!')
  } else {
    fillForm(address)
  }

  console.log(address)
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep)
