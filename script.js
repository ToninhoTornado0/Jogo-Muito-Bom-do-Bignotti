class personagem{
    constructor(vida ,força, mana, ){
        this.força = força;
        this.vida = vida;
        this.mana = mana;
    }
}
class personagem extends mago  {
    constructor(força,vida,mana){
        super(força,vida,mana);
        
    }
    BolaDeFogo(){
        console.log('magia profana....Salamaleko')
    }
}

class personagem extends guerreiro  {
    constructor(força,vida,mana,){
        super(força,vida,mana);
    }
    defesa(){
        console.log('escudo protetor')
    }
}

class personagem extends arqueiro  {
    constructor(força,vida,mana){
        super(força,vida,mana); 
    }
    atirar(){
        console.log('Flechada Sagrada')
    }
}
