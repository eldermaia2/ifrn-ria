import { Administrador, Cliente } from './gerenciamento_usuarios';

describe('Testando classes Administrador e Cliente', () => {
  test('Administrador: deve exibir os detalhes corretamente', () => {
    const admin = new Administrador('Carlos', 5);
    expect(admin.exibirDetalhes()).toBe('Administrador: Carlos, Nível de Acesso: 5');

    // Alterando atributos
    admin.nivelAcesso = 10;
    admin.nome = 'Ana';
    expect(admin.exibirDetalhes()).toBe('Administrador: Ana, Nível de Acesso: 10');
  });

  test('Cliente: deve exibir os detalhes corretamente', () => {
    const cliente = new Cliente('Mariana', 1500.75);
    expect(cliente.exibirDetalhes()).toBe('Cliente: Mariana, Saldo: R$1500.75');

    // Alterando atributos
    cliente.saldo = 2000.5;
    cliente.nome = 'João';
    expect(cliente.exibirDetalhes()).toBe('Cliente: João, Saldo: R$2000.50');
  });
});
