// Classe Funcionario
class Funcionario {
  constructor(nome, idade, cargo) {
    if (!nome || !idade || !cargo) {
      throw new Error("Todos os campos devem ser preenchidos.");
    }
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
  }

  seApresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
  }

  trabalhar() {
    return `${this.nome} está trabalhando.`;
  }
}

// Classe Gerente (herda de Funcionario)
class Gerente extends Funcionario {
  constructor(nome, idade, departamento) {
    super(nome, idade, 'Gerente');
    if (!departamento) {
      throw new Error("O campo 'departamento' deve ser preenchido.");
    }
    this.departamento = departamento;
  }

  gerenciar() {
    return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
  }
}

// Classe Desenvolvedor (herda de Funcionario)
class Desenvolvedor extends Funcionario {
  constructor(nome, idade, linguagem) {
    super(nome, idade, 'Desenvolvedor');
    if (!linguagem) {
      throw new Error("O campo 'linguagem' deve ser preenchido.");
    }
    this.linguagem = linguagem;
  }

  programar() {
    return `${this.nome} está programando em ${this.linguagem}.`;
  }
}

// Função para exibir erro
function exibirErro(mensagem) {
  const erroDiv = document.getElementById('erro');
  erroDiv.innerHTML = `<p style="color: red;">Erro: ${mensagem}</p>`;
}

// Função principal para criar os funcionários
function criarFuncionario() {
  // Limpando mensagens anteriores
  document.getElementById('resultado').innerHTML = '';
  document.getElementById('erro').innerHTML = '';

  try {
    // Obtendo valores do formulário
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const cargo = document.getElementById('cargo').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;

    let funcionario;

    // Verificando o cargo e criando a instância apropriada
    if (cargo.toLowerCase() === 'gerente') {
      funcionario = new Gerente(nome, idade, departamento);
    } else if (cargo.toLowerCase() === 'desenvolvedor') {
      funcionario = new Desenvolvedor(nome, idade, linguagem);
    } else {
      throw new Error("O cargo deve ser 'Gerente' ou 'Desenvolvedor'.");
    }

    // Exibindo as informações do funcionário na página
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
      <p>${funcionario.seApresentar()}</p>
      <p>${funcionario.trabalhar()}</p>
      <p>${cargo.toLowerCase() === 'gerente' ? funcionario.gerenciar() : funcionario.programar()}</p>
    `;

  } catch (error) {
    exibirErro(error.message);
  }
}
