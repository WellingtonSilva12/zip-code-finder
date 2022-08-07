'use strict'

const inputText = document.querySelector('.cep')
const result = document.querySelector('.content')
const btnRes = document.querySelector('.btn')

btnRes.addEventListener('click', searchZipCode)

async function searchZipCode() {
  const zipCode = inputText.value
  const url = `https://viacep.com.br/ws/${zipCode}/json/`
  if (zipCode.length === 0) {
    result.innerHTML = `<p class="error">
    <i class='bx bxs-error-alt'></i> Campo obrigatório! - Digite um CEP
  </p>`
  } else if (zipCode.length === 8) {
    await fetch(url).then(response =>
      response.json().then(data => {
        // console.log(data.erro)
        if (data.erro === 'true') {
          result.innerHTML = `<p class="error">
                                <i class='bx bxs-error-alt'></i> Cep não encontrado!</p>`
        } else {
          result.innerHTML = `            
          <div>
          <h2>
            CEP: <span> ${data.cep} </span> DDD: <span> ${data.ddd} </span>
          </h2>
            <h2>
              Endereço: <span> ${data.logradouro}  </span>
            </h2>
          </div>
          <div>
            <h2>Bairro: <span> ${data.bairro}</span></h2>
          </div>
          <div class="group-city">
            <h2>Cidade: <span> ${data.localidade}</span></h2>
            <h2>UF: <span> ${data.uf}</span></h2>
          </div>
`
        }
      })
    )
  } else {
    result.innerHTML = `<p class="warning">
    <i class='bx bxs-error-alt'></i> Digite um Cep válido!  </p>`
  }
}

document.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    searchZipCode()
  }
})
