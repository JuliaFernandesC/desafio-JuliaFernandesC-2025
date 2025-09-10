class Pessoa {
    constructor(num, brinquedos){
        this.num = num;
        this.brinquedos = brinquedos; // array de strings
        this.adotados = 0; // numero de adocoes
        this.blocks = new Set();
    }

    temCondicao(animal){ // boolean 
        const brinqA = animal.brinquedos;
        const brinqP = this.brinquedos; 
        let i = 0; // indice para brinqA

        // tem que ter todos os briquedos em ordem 
        for(const brinquedo of brinqP){
            if(brinquedo === brinqA[i] && !this.blocks.has(brinquedo)){
                i++;
                // condicao de parada
                if(i === brinqA.length) return true;
            }
        }
        return false
    }

    adota(animal){ // boolean
        // testar se pode adotar 
        if(!this.temCondicao(animal)) return false; 
        //testar o num de adocoes
        if(this.adotados < 3){
            this.adotados += 1;
        } 
        return true; 
    }

    bloqueia(animal) {
        animal.brinquedos.forEach(b => this.blocks.add(b));
    }
}

export { Pessoa as Pessoa};