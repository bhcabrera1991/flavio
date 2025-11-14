function fn(){
    let recado ='';
    recado=document.getElementById('recado').value
    mensagemEscrita= document.getElementById('mensagem')
    if(mensagemEscrita.value.trim()!==""){
        alert("Recebemos sua mensagem. Entraremos em contato o mais RAPIDO POSSIVEL")
    }else{
        alert("Nao entendi sua pergunta. REENVIE NOVAMENTE ")
    }

   
}



/*function fnJogo(){
    let chute = 0, numeroMagico = Math.floor(Math.random()*10)
    chute=document.getElementById("valor").value
    if(chute == numeroMagico){
        document.getElementById("resultado").innerText="Acertou"
    }else{
        document.getElementById("resultado")
        alert("Errou " +numeroMagico)
    }
}*/

