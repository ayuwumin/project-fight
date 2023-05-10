const char = createKnight ('Knight')
const monster = littleMonster()


stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
)

