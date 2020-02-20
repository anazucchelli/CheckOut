
let inputCPF = document.getElementById('cpfUsuario');
let inputSenha = document.getElementById ('senhaUsuario');
let inputConfirmarSenha = document.getElementById('confirmarSenhaUsuario');
let inputCEP = document.getElementById('cepUsuario');
let inputTitularCPF = document.getElementById('titularcpf');
let inputNumCartao = document.getElementById('numCartao');
let inputCodSeguranca = document.getElementById('codSeguranca');
let inputEndereco = document.getElementById('enderecoUsuario');
let inputBairro = document.getElementById('bairroUsuario');
let inputCidade = document.getElementById('cidadeUsuario');
let selectEstado = document.getElementById('estadoUsuario')

// ---------------- Validando CPF ------------------
inputCPF.addEventListener('keyup', (event)=>{
    //validando se é somente número... e validando o tamanho do CPF
    if(isNaN(inputCPF.value)){
       inputCPF.value = inputCPF.value.substring(0,(inputCPF.value.length -1))
    }
    if(inputCPF.value.length >= 11){
        inputCPF.value = inputCPF.value.substring(0,11)
    }
} );

// ---------------- Validando Senha ------------------
inputConfirmarSenha.addEventListener('keyup', (event)=>{
    if(inputConfirmarSenha.value != inputSenha.value){
        inputConfirmarSenha.setAttribute('class', 'form-control is-invalid')
        inputSenha.setAttribute('class','form-control is-invalid')
    }else{
        inputConfirmarSenha.setAttribute('class', 'form-control is-valid')
        inputSenha.setAttribute('class','form-control is-valid')
    }
});

// ---------------- Validando CEP ------------------

function buscarCEP(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json`)
    .then(response => response.json())
    .then(dados => {
        if(dados.erro){
            return inputCEP.setAttribute('class', 'form-control is-invalid')
        }

        inputCEP.setAttribute('class', 'form-control is-valid')
        inputEndereco.value = dados.logradouro
        inputBairro.value = dados.bairro
        inputCidade.value = dados.localidade
        selectEstado.value = dados.uf
    })
}


inputCEP.addEventListener('keyup', (event)=>{
  
    if(isNaN(inputCEP.value)){
        inputCEP.value = inputCEP.value.substring(0,(inputCEP.value.length -1))
    }
    if(inputCEP.value.length >= 8){
        inputCEP.value = inputCEP.value.substring(0,8)
        buscarCEP(inputCEP.value)
    }
} );


// ---------------- Validando nº cartão ------------------
inputNumCartao.addEventListener('keyup', (event)=>{
    //validando se é somente número... e validando o tamanho do CPF
    
    if(isNaN(inputNumCartao.value)){
        inputNumCartao.value = inputNumCartao.value.substring(0,(inputNumCartao.value.length -1))
    }
    if(inputNumCartao.value.length >= 16){
        inputNumCartao.value = inputNumCartao.value.substring(0,16)
    }
} );

// ---------------- Validando cvv  ------------------
inputCodSeguranca.addEventListener('keyup', (event)=>{
    //validando se é somente número... e validando o tamanho do CPF
    
    if(isNaN(inputCodSeguranca.value)){
        inputCodSeguranca.value = inputCodSeguranca.value.substring(0,(inputCodSeguranca.value.length -1))
    }
    if(inputCodSeguranca.value.length >= 3){
        inputCodSeguranca.value = inputCodSeguranca.value.substring(0,3)
    }
} );

// ---------------- Validando CPF titular ------------------

inputTitularCPF.addEventListener('keyup', (event)=>{
    //validando se é somente número... e validando o tamanho do CPF
    
    if(isNaN(inputTitularCPF.value)){
        inputTitularCPF.value = inputTitularCPF.value.substring(0,(inputTitularCPF.value.length -1))
    }
    if(inputTitularCPF.value.length >= 11){
        inputTitularCPF.value = inputTitularCPF.value.substring(0,11)
    }
} );
