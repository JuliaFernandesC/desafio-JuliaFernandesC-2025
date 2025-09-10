import { Pessoa } from './Pessoa.js';
import { Registro } from './Registro.js';
import { Adocao } from './Adocao.js';
import { Validador } from './Validador.js';

class AbrigoAnimais {

  encontraPessoas(brinquedosP1, brinquedosP2, ordemA) {
    // inicializar o resgistro de animais 
    Registro.registra(); 
    // validar os brinquedos 
    const validacao = Validador.valida(brinquedosP1, brinquedosP2, ordemA);
    if(validacao.erro) return {erro: validacao.erro}; // retorna exatamente o tipo de erro que deu

    // criar as pessoas 
    const pessoa1 = new Pessoa(1, brinquedosP1.split(','));
    const pessoa2 = new Pessoa(2, brinquedosP2.split(','));

    // pegar animais 
    const nomes = ordemA.split(',');
    const animais = nomes.map(nome => Registro.buscarAnimal(nome));

    // lista que vai apresentar o resultado 
    const resultado = []; 
    
    // percorrer os animais na ordem de chegada 
    for(const animal of animais){
      //aplicar as regras de adocao
      const destino = Adocao.regras(pessoa1, pessoa2, animal);
      resultado.push(`${animal.nome} - ${destino}`); // colocar a lista no formato solicitado 
    } 

    // ordenar a lista 
    resultado.sort((p,q) => {
      const nomeP = p.split(' - ')[0].toLocaleLowerCase(); // .spit()[0] -> pegar apenas o nome do animal 
      const nomeQ = q.split(' - ')[0].toLocaleLowerCase();
      return nomeP.localeCompare(nomeQ); 
    });

    return { lista: resultado}; 
  }
}

export { AbrigoAnimais as AbrigoAnimais };
