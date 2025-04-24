class personagem{
    constructor(vida ,força, mana, ){
        this.força = força;
        this.vida = vida;
        this.mana = mana;
    }
}
class personagem extends mago  {
    constructor(bolaDeFogo){
        super(força,vida,mana);
        this.bolaDeFogo = bolaDeFogo;
    }
}

class personagem extends guerreiro  {
    constructor(defender){
        super(força,vida,mana);
        this.defender = defender;
    }
}

class personagem extends arqueiro  {
    constructor(atirar){
        super(força,vida,mana);
        this.atirar = atirar;
    }
}
