import { Animal } from './Animal.js';

class Registro {
    // lista dos animais do abrigo 
    static animais = [];
    // registrar os animais 
    static registra(){
        Registro.animais =[
            new Animal('Rex','cão',['RATO','BOLA']),
            new Animal('Mimi','gato',['BOLA','LASER']),
            new Animal('Fofo','gato',['BOLA','RATO','LASER']),
            new Animal('Zero','gato',['RATO','BOLA']),
            new Animal('Bola','cão',['CAIXA','NOVELO']),
            new Animal('Bebe','cão',['LASER','RATO','BOLA']),
            new Animal('Loco','jabuti',['SKATE','RATO']),
        ];
    }
    
    static getAnimais(){
        return Registro.animais;
    }
    // buscar pelo nome
    static buscarAnimal(nome){
        const animal = Registro.animais.find(a => a.nome.toLowerCase() === nome.toLowerCase());
        return animal;
    }
    
}

export { Registro as Registro};