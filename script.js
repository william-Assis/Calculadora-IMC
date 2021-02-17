
const calcular = document.getElementById('calcular')

function imc (){
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')
    let totalIMC = (peso / (altura * altura)).toFixed(1)
    let classificacao = ''

    if (nome !== '' && altura !== '' && peso !== ''){
        let totalIMC = (peso / (altura * altura)).toFixed(1)
        let classificacao = ''
        if(totalIMC < 18.5 && peso < 53.5){
            classificacao = 'Magreza'
        }else if(totalIMC < 24.9 && peso < 72){
            classificacao = 'Normalidade'
        }else if(totalIMC < 30 && peso < 86.7){
            classificacao = 'Sobrepeso'           
        }else if(totalIMC > 30 && peso > 86.7){
            classificacao = 'Obesidade'	
        }
        
        resultado.textContent = `${nome} seu IMC e ${totalIMC}kg/m2 e você está em estado de ${classificacao}.`        
    }
    else{
        alert('Por favor preencha todos os campos!!!')
    }
}

calcular.addEventListener('click', imc)