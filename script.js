class personagem{
    constructor(vida ,força, mana, ){
        this.força = força;
        this.vida = vida;
        this.mana = mana;
    }
}
class personagem extends mago  {
    constructor(força,vida,mana,magia){
        super(força,vida,mana);
        this.magia = magia;
    }
    BolaDeFogo(){
        console.log('magia profana....Salamaleko')
    }
}

class personagem extends guerreiro  {
    constructor(força,vida,mana,defesa){
        super(força,vida,mana);
        this.defesa = defesa;
    }
    defesa(){
        console.log('escudo protetor')
    }
}

class personagem extends arqueiro  {
    constructor(força,vida,mana,flechas){
        super(força,vida,mana); 
        this.flecha = this.flecha
    }
    atirar(){
        console.log('Flechada Sagrada')
    }
}
