const { consultaCep } = require('./consultaCep');

test('Verifica se retorna o logradouro', async {} => {
    expect(await consultaCep('30130010')).toEqual('Praça Sete de Setembro');
});