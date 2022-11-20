class Aluno {
    nome;
    matricula;
    nota1;
    nota2;
    nota3;

    constructor (nome, matricula, nota1, nota2, nota3) {
        this.nome = nome;
        this.matricula = matricula;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }  

    calculaMedia() {
        return ((Number(this.nota1) + Number(this.nota2 )+ Number(this.nota3)) / 3).toFixed(1)
    }

}
