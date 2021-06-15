let botao = document.getElementById("btn")
let resultado = 1

function clicar() {
  click()
  contador()
}
function click() {
  document.getElementById("resultado").innerHTML = resultado
  resultado++

}

function contador() {
  let tempoRestante = 10;
  let contagem = setInterval(function () {
    tempoRestante--
    document.getElementById("tempo").innerHTML = tempoRestante
    if (tempoRestante === 0) {
      clearInterval(contagem)
      document.getElementById("media").innerHTML = "Você fez " + ((resultado - 1) / 10) + " clicks por segundo"
      document.getElementById("tempo").innerHTML = "Acabou"
      document.getElementById("btn").disabled = true

    }
  }, 1000)
  contador = function () { }
}

function reset() {
  let botao = document.getElementById("btn")
  let resultado = 1

  function clicar() {
    click()
    contador()
  }
  function click() {
    document.getElementById("resultado").innerHTML = resultado
    resultado++

  }

  function contador() {
    let tempoRestante = 10;
    let contagem = setInterval(function () {
      tempoRestante--
      document.getElementById("tempo").innerHTML = tempoRestante
      if (tempoRestante === 0) {
        clearInterval(contagem)
        document.getElementById("media").innerHTML = "Você fez " + ((resultado - 1) / 10) + " clicks por segundo"
        document.getElementById("tempo").innerHTML = "Acabou"
        document.getElementById("btn").disabled = true

      }
    }, 1000)
    contador = function () { }
  }
}