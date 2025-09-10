import { Pessoa } from './Pessoa.js';
import { Animal } from './Animal.js' 

// classe responsavel por aplicar as regras de adocao
class Adocao {
    static regras(pessoa1, pessoa2, animal){ 
        // lista construida no final 
        // retorna a lista resultado
        const p1 = pessoa1.temCondicao(animal) && pessoa1.adotados < 3;
        const p2 = pessoa2.temCondicao(animal) && pessoa2.adotados < 3; 

        //inicializar o resultado com vazio 
        let res = ''; 
        
        // testar as possibilidades 
        if(p1 && p2) {
            res = 'abrigo';
        } else if(p1){
            pessoa1.adota(animal);
            res = 'pessoa 1';
            if(animal.ehGato()) pessoa1.bloqueia(animal);
        } else if(p2){
            pessoa2.adota(animal);
            res = 'pessoa 2';
            if (res === 'pessoa 2') pessoa2.bloqueia(animal);
        } else {
            res = 'abrigo'
        }

        return res;
    }

    /*
    bloqueia(animal, pessoa){
        pessoa.brinquedos = pessoa.brinquedos.filter(
            brinquedo => !animal.brinquedos.includes(brinquedo)
        );
    }
    */
}
export { Adocao as Adocao};