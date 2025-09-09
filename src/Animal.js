class Animal {
    constructor(nome, tipo, brinquedos){
        this.nome = nome;
        this.tipo = tipo;
        this.brinquedos = brinquedos; 
    }

    ehGato(){
        return this.especie.toLowerCase() === 'gato';
    }

    ehBrinquedo(brinquedo){
        return this.brinquedos.includes(brinquedo);
    }
}

export { Animal };