class Animal {
    constructor(nome, tipo, brinquedos){
        this.nome = nome;
        this.tipo = tipo;
        this.brinquedos = brinquedos; 
    }

    ehGato(){
        return this.tipo.toLowerCase() === 'gato';
    }
}

export { Animal as Animal};