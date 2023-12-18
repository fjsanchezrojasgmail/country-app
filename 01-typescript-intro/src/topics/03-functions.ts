function addNumbers(a:number,b:number){

    return a + b;

}

const addNumberArrow = (a:number,b:number): number =>  {
    return a + b ;
}

const addNumberArrowString = (a:number,b:number): string =>  {
    return  `${a + b}` ;
}

function  multiply(firstNumber: number, secondNumber?: number, base: number = 2) {

    return firstNumber * base;

}

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}



/* const result: number = addNumbers(1,2);
const result2: number = addNumberArrow(1,2);
const result3: string = addNumberArrowString(1,2);
const multiplyResult: number = multiply(1,2);
 */
//console.log({result,result2, result3, multiplyResult});

const healCharacter = (character: Character, amount: number) => {

    if(character.hp + amount < 100){
        character.hp += amount;
     }else if(character.hp + amount >= 100){
        character.hp = 100;
     }
}
const strider: Character = {

    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida : ${ this.hp }`);
        
    }

}


healCharacter(strider,10);
healCharacter(strider,100);



strider.showHp();

export {}