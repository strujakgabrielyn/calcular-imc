function calcularImc () {  
    const nome = document.querySelector('#nome');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const resultado = document.querySelector('.resultado');

    const imc =  (peso.value / (altura.value * altura.value)).toFixed(1);
    let tabela = '';

    if (imc < 18.5 ) {
        tabela = 'abaixo do peso';
    } else if (imc <24.9){
        tabela = 'Peso normal';
    } else if(imc <29.9){
        tabela ='Sobrepeso';
    } else if (imc <34.9){
        tabela = 'Obesidade grau 1';
    } else if(imc <39.9){
        tabela = 'Obesidade grau 2';
    } else if(imc >40){
        tabela = 'Obesidade grau 3';
    }
        
    resultado.innerText = (`${nome.value}, seu IMC é de ${imc}, ele é classificado como: ${tabela}`);
}


