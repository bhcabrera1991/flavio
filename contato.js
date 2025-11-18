function fn(){
    let mensagemEscrita='';
    let contato= 0
    contato= document.getElementById('contato')      
    mensagemEscrita= document.getElementById('mensagem')
    if(mensagemEscrita.value.trim()!=="" && contato.value >11111111111){
        alert("Recebemos sua mensagem. Entraremos em contato o mais RAPIDO POSSIVEL no telefone " + contato.value)
    }else{
        alert("Os campos nao foram completamente preenchido. NAO RECEBEMOS SUA DUVIDA. Tente novamente")
    }

   
}

