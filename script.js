let alt = document.querySelector('#altura')
let peso = document.querySelector('#peso')

let res = document.querySelector('#res')


function calcular(A, P) {
    if (A == 0 || P == 0) {
        res.innerHTML = 'faltam dados!'
        res.style.margin = '25px'
    } else {
        let imc = P / (A^2)
        if (imc < 17) {
            res.innerHTML = 'Muito abaixo do peso <br>'
            res.append(`IMC: ${imc}`)
        } else if (imc >= 18 && imc <= 18.5) {
            res.innerHTML = 'Abaixo do peso <br>'
            res.append(`IMC: ${imc}`)
        } else if (imc >= 18.6 && imc <= 25) {
            res.innerHTML = 'Peso ideal (parabéns) <br>'
            res.append(`IMC: ${imc}`)
        } else if (imc >= 25.1 && imc <= 29) {
            res.innerHTML = 'Levemente acima do peso <br>'
            res.append(`IMC: ${imc}`)
        } else if (imc >= 30 && imc <= 34.9) {
            res.innerHTML = 'Obesidade <br>'
            res.append(`IMC: ${imc}`)
        } else if (imc >= 35 && imc <= 39.9) {
            res.innerHTML = 'Obesidade severa <br>'
            res.append(`IMC: ${imc}`)
        } else {
            res.innerHTML = 'Obesidade mórbida <br>'
            res.append(`IMC: ${imc}`)
        }
    }
    calcular(Number(alt.value), Number(peso.value))
}
