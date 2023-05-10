// KNIGHT OR SORCERER 
// LITTLEMONSTER OR BIGMONSTER

// class Character {
//     _life = 1
//     maxLife = 1
//     attack = 0
//     defense = 0

//     constructor(name){
//         this.name = name
//     }

//     get life(){
//         return this._life
//     }

//     set life(newLife){
//         this._life = newLife < 0 ? 0 : newLife
//     }
// }

// class Knight extends Character {
//     constructor(name){
//         super(name)
//             super(name)
//             this.life = 100
//             this.attack = 10
//             this.defense = 8
//             this.maxLife = this.life
//         }
// }


// class Sorcerer extends Character {
//     constructor(name){
//         super(name)
//             super(name)
//             this.life = 80
//             this.attack = 15
//             this.defense = 3
//             this.maxLife = this.life
//         }
// }


// class littleMonster extends Character {
//     constructor(){
//         super('Little Monster')
//         this.life = 40
//         this.attack = 4
//         this.defense = 4
//         this.maxLife = this.life
//     }
// }

// class bigMonster extends Character {
//     constructor(){
//         super('Big Monster')
//         this.life = 120
//         this.attack = 16
//         this.defense = 6
//         this.maxLife = this.life
//     }
// }

// class Stage {
//     constructor(fighter1, fighter2, fighterEl, fighterEl2, logObject){
//         this.fighter1 = fighter1
//         this.fighter2 = fighter2
//         this.fighterEl = fighterEl
//         this.fighterEl2 = fighterEl2
//         this.log = logObject
//     }

//     start(){
//         //  evento do botão de atacar.
//         this.update()

//         this.fighter1El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter1, this.fighter2))
//         this.fighter2El.querySelector('.attackButton').addEventListener('click', () => this.doAttack(this.fighter2, this.fighter1))
//     }

//     update(){
//        // fighter1
//        this.fighterEl.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
//        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100
//        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`
       
//        // fighter2
//        this.fighter2El.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
//        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100
//        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`
//     }

//     doAttack(attacking, attacked){
//         if(attacking.life <= 0 || attacked.life <= 0){
//             this.log.addMessage(`Atacando player morto.`)
//             return
//         }

//         let attackFactor = (Math.random() * 2).toFixed(2)
//         let defenseFactor = (Math.random() * 2).toFixed(2)

//         let actualAttack = attacking.attack * attackFactor
//         let actualDefense = attacked.defense * defenseFactor

//         if(actualAttack > actualDefense){
//             attacked.life -= actualAttack
//             this.log.addMessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)
//         } else {
//             this.log.addMessage(`${attacked.name} conseguiu defender`)
//         }

//         //console.log(`${attacking.name} is attacking ${attacked.name}`)
//         this.update()
//     }
// }


// class log {
//     list = []

//     constructor(listEl){
//         this.listEl = listEl
//     }

//     addMessage(msg){
//         this.list.push(msg)
//         this.render()
//     }

//     render(){
//        this.listEl.innerHTMLq = ''

//        for(let i in this.list){
//         this.listEl.innerHTML += `<li>${this.list[i]}</li>`
//        }
//     }
// }