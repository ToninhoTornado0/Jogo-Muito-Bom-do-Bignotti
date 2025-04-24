class personagem{
    constructor(vida ,força, mana, ){
        this.força = força;
        this.vida = vida;
        this.mana = mana;
    } 
    ataqueBase(){
        console.log('ataque base')
    }
}
class personagem extends mago  {
    constructor(força,vida,mana){
        super(força,vida,mana);
        
    }
    ataqueBase(){
        console.log('bolaDeFogo')
    }
}

class personagem extends guerreiro  {
    constructor(força,vida,mana,){
        super(força,vida,mana);
    }
    ataqueBase(){
        console.log('Martelada')
    }
}

class personagem extends arqueiro  {
    constructor(força,vida,mana){
        super(força,vida,mana); 
    }
    ataqueBase(){
        console.log('Flechada Sagrada')
    }
}
