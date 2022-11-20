function adicionarAluno() {
    let nome = prompt("Digite o nome do aluno: ");
    let matricula = prompt("Digita a matricula do aluno: ");
    let nota1 = prompt("Digite a primeira nota: ");
    let nota2 = prompt("Digite a segunda nota: ");    
    let nota3 = prompt("Digite a terceira nota: ");

    let novoAluno = new Aluno(nome, matricula, nota1, nota2, nota3);

    inserirAluno(novoAluno)
};

function inserirAluno(aluno) {
    const tableBody = document.querySelector('table tbody');
    let row = tableBody.insertRow();

    let cellnome = row.insertCell(0);
    cellnome.innerHTML = aluno.nome;

    let cellmatricula = row.insertCell(1);
    cellmatricula.innerHTML = aluno.matricula;
    
    let cellnota1 = row.insertCell(2);
    cellnota1.innerHTML = aluno.nota1;
    
    let cellnota2 = row.insertCell(3);
    cellnota2.innerHTML = aluno.nota2;
    
    let cellnota3 = row.insertCell(4);
    cellnota3.innerHTML = aluno.nota3;
    
    let cellmedia = row.insertCell(5);
    cellmedia.innerHTML = aluno.calculaMedia();
    
    let cellbotao = row.insertCell(6);
    const botaoDeletarAluno = document.createElement('button')
    botaoDeletarAluno.innerText = 'X'
    botaoDeletarAluno.setAttribute('class', 'botao')
    cellbotao.appendChild(botaoDeletarAluno)
    
    deletarAluno()
};

function deletarAluno() {
    const botoesParaDeletar = document.querySelectorAll('.botao')
    botoesParaDeletar.forEach(botao => {
        botao.addEventListener('click', () => {
            let elementoTr = botao.closest('tr')
            if(confirm(`Deseja remover o aluno ${elementoTr.firstChild.innerText}?`)) {
                elementoTr.remove()
            }
        })
    })
}