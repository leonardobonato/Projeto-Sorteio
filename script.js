function gerarNumero() {
    const primeiroNumero = Math.ceil(document.querySelector('.input-minimo').value)
    const segundoNumero = Math.floor(document.querySelector('.input-maximo').value)
    
    const resultado = Math.floor(Math.random () * (segundoNumero - primeiroNumero + 1)) + primeiroNumero

    alert(resultado)
  }
  