// KNIGHT OR SORCERER 
// LITTLEMONSTER OR BIGMONSTER

class Character {
    _life = 1
    maxLife = 1
    attack = 0
    defense = 0

    constructor(name){
        this.name = name
    }

    get life(){
        return this._life
    }

    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife
    }
}

class Knight extends Character {
    constructor(name){
        super(name)
            super(name)
            this.life = 100
            this.attack = 10
            this.defense = 8
            this.maxLife = this.life
        }
}


class Sorcerer extends Character {
    constructor(name){
        super(name)
            super(name)
            this.life = 80
            this.attack = 15
            this.defense = 3
            this.maxLife = this.life
        }
}


class littleMonster extends Character {
    constructor(){
        super('Little Monster')
        this.life = 40
        this.attack = 4
        this.defense = 4
        this.maxLife = this.life
    }
}

class bigMonster extends Character {
    constructor(){
        super('Big Monster')
        this.life = 120
        this.attack = 16
        this.defense = 6
        this.maxLife = this.life
    }
}

class Stage {
    constructor(fighter1, fighter2, fighterEl, fighterEl2){
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighterEl = fighterEl
        this.fighterEl2 = fighterEl2
    }

    start(){
        this.update()
        // TODO evento do botão de atacar.
    }

    update(){
       // fighter1
       this.fighterEl.querySelector('.name').innerHTML = this.fighter1.name
       
       //fighter2
       this.fighter2El.querySelector('.name').innerHTML = this.fighter2.name
    }
}