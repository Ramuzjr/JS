const calcular = document.getElementById('calcular');
 
function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !=='' && altura !=='' && peso !==''){
        //alert('Valor Preenchido!');
        const valorIMC = (peso / (altura * altura)).toFixed(1);
        
        let classificao = '';

        if(valorIMC < 18.5) {
            classificao =  'Abaixo do peso!';
        }else if (valorIMC < 25){
            classificao = 'com o Peso ideal. Muito bom.';
        }else if (valorIMC < 30){
            classificao = 'Levemente acima do peso';
        }else if (valorIMC < 35){
            classificao = 'com Obesidade grau I';
        }else if (valorIMC < 40){
            classificao = 'com Obesidade grau II';
        }else{
            classificao = 'com Obesidade grau III. Cuidado';
        }

        resultado.textContent= `${nome} seu IMC é ${valorIMC}, estas ${classificao}`;

    }else{
        resultado.textContent='Valor dos campos não Preenchidos!';
    }

}
calcular.addEventListener('click', imc);

