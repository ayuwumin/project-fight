let log = new log(document.querySelector('.log'))
let char = new Knight('Kaveh')
let monster = new littleMonster()


const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
)

stage.start()