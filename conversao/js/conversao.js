// dom

const real= document.querySelector('#real')
const calcular = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

// eventos
calcular.addEventListener('click',()=>{ 

    valor = real.value 
    dolar = valor/4.97
    resultado.textContent= `O valor em US$ ${dolar.toFixed(2)}`
    // `O valor em US$ ${dolar.toFixed(2)}` faz exibir frases com numeros.
    // toFixed(2) faz ter apénas 2 casas decimais.
})

// funções


