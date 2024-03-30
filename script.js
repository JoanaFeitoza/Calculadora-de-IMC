function calcular(){
    var peso = document.getElementById('peso')
    var altura = document.getElementById('altura')
    var res = document.getElementById('resultado')
    var imc = document.getElementById('imc')

    var p = Number(peso.value)
    var a = Number(altura.value)

    var s = (p / (a*a)).toFixed(2)
    
    imc.innerHTML = `Seu imc: ${s}`
    imc.style.color = ''

    if (s < 16.9){
        res.innerHTML = `Muito abaixo do peso`
    }else if(s < 18.4){
        res.innerHTML = `Abaixo do peso`
    }else if(s < 24.9){ 
        res.innerHTML = `Peso normal`
    }else if(s < 29.9){
        res.innerHTML = "Acima do peso"
    }else if(s < 34.9){
        res.innerHTML = "Obesidade grau I"
    }else if(s < 40){
        res.innerHTML = "Obesidade grau II"
    }else {
        res.innerHTML = "Obesidade grau III"
    }
    }

/*function calcular(){
    var pe = document.getElementsById('peso')
    var al = document.getElementsById('altura')
    var bot = document.getElementsByClassName('bot')
    var res = document.getElementsByClassName('resultado')

    var p = Number(pe.value)
    var a = Number(al.value)

    var s = p + a
    res.innerHTML = `Resultado ${s}`


}*/