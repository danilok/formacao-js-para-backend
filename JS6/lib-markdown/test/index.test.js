
import { pegaArquivoAsync } from '../index.js';

const arrayResult = [
  {
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
  }  
]

describe('pegaArquivo::', () => {
  it('deve ser uma função', () => {
    expect(typeof pegaArquivoAsync).toBe('function');
  })
  it('deve retornar o array com resultados', async () => {
    const resultado = await pegaArquivoAsync('./test/arquivos/texto1.md')
    expect(resultado).toEqual(arrayResult)
  })
  it('deve resolver a função com sucesso', async () => {
    await expect(pegaArquivoAsync('./test/arquivos/texto1.md')).resolves.toEqual(arrayResult)
  })
  it('deve retornar a string "não há links"', async () => {
    const resultado = await pegaArquivoAsync('./test/arquivos/texto1_semlinks.md')
    expect(resultado).toBe('não há links')
  })
  it('deve resolver a função com sucesso e retornar a string "não há links"', async () => {
    await expect(pegaArquivoAsync('./test/arquivos/texto1_semlinks.md')).resolves.toBe('não há links')
  })
  it('deve lançar um erro na falta de arquivo', async () => {
    await expect(pegaArquivoAsync('/home/juliana/Documents/alura/lib-markdown/test/arquivos')).rejects.toThrow(/ENOENT/)
  })
})