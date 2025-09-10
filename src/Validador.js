import { Registro } from './Registro.js';

// checar essa classe (na parte que testa se existe ou não)
class Validador {
    static validaBrinquedos(brinquedos){
        const lista = brinquedos.split(',');
        const duplicados = new Set(lista).size !== lista.length; // set para não ter repetidos
        if (duplicados) return false;
        return true; 
    }

    static validaAnimais(animais){
        const lista = animais.split(',');
        const duplicados = new Set(lista).size !== lista.length;
        if (duplicados) return false;

        for (const nome of lista) {
            if (!Registro.buscarAnimal(nome)) return false; // não existe no registro
        }
        return true;
    }

    static valida(brinquedosP1, brinquedosP2, animais){
        // testar os parametros recebidos 
        if (!Validador.validaBrinquedos(brinquedosP1)) return { erro: 'Brinquedo inválido' };
        if (!Validador.validaBrinquedos(brinquedosP2)) return { erro: 'Brinquedo inválido' };
        if (!Validador.validaAnimais(animais)) return { erro: 'Animal inválido' };
        return { valido: true };
    }
}

export { Validador as Validador};