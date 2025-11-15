function fn(){
    let mensagemEscrita=''; contato=0; nome='';e_mail=''
    nome = document.getElementById('nome')
    e_mail= document.getElementById('e_mail')
    contato=document.getElementById('contato')
    mensagemEscrita= document.getElementById('mensagem')
    if(mensagemEscrita.value.trim()!=="" && contato.value>1111111111 && e_mail.value.trim()!="" && nome.value.trim()!=""){
        alert("Recebemos sua mensagem. Entraremos em contato o mais RAPIDO POSSIVEL no telefone " + contato.value)
    }else if (mensagemEscrita=value.trim()!= && contato.value<11111111110) {
        alert("Vamos entrar em contato pelo email " + e_mail)
        
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

