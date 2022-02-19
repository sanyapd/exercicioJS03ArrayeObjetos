class Usuario{
    constructor(nomecompleto, genero, profissao){
        this.nomecompleto = nomecompleto
        this.genero = genero
        this.profissao = profissao
    }
};

function cadastroUsuarios(){
    
    let usuariosCadastradosArray = [];

    let usuariosCadastrados = parseInt(prompt("Quantos usuários deseja cadastrar?"));

    for (let index = 1 ; index <= usuariosCadastrados; index++) {
        alert("Cadastrar usuario: "+String(index))
        let nomecompleto = prompt("Informe o nome completo do usuário: ")
        let genero = prompt("Informe o gênero do usuário: ")
        let profissao = prompt("Informe a profissao do usuário: ")

        
        let variavelDeClasseUsuario = new Usuario(nomecompleto, genero, profissao) 

        usuariosCadastradosArray.push(variavelDeClasseUsuario)  
    }

    usuariosCadastradosArray.forEach(function(usuariosCadastradosArray) {
    document.writeln('O(s) nome(s) digitado(s):'+ usuariosCadastradosArray.nomecompleto + "<br />");
    document.writeln('O(s) gênero(s) do(s) usuario(s) são:' + usuariosCadastradosArray.genero + "<br />");
    document.writeln('A(s) profissão(ões) digitada(s) foram:' + usuariosCadastradosArray.profissao + "<br />");
});
}