export class Tamago {
    constructor (name) {
        this.name = name; 
        this.food = 10;
        this.play = 10;
        this.sleep = 10;
        this.life = true;
    }

    setFood () {
        setInterval (()=> {
            if (this.food === 0) {
                this.life = false;
            }
            else {
                this.food--;       
            }
        }, 3000);    
    }

    setPlay () {
        setInterval (()=> {
            if (this.play === 0) {
                this.life = false;
            }
            else {
                this.play--;
            }       
        }, 5000);    
    }

    setSleep () {
        setInterval (()=> {
            if (this.sleep === 0) {
                this.life = false;
            }
            else {
                this.sleep--;
            }       
        }, 10000);    
    }

    isTamagoDead () {
        // if (this.food <= 0 || this.play <= 0 || this.sleep <= 0) {
        //     this.life = false;
        // } 
        return this.life;
    }

    foodMethod() {
        this.food++;
    }

    playMethod() {
        this.play++;
    }

    sleepMethod() {
        this.sleep++;
    }

    getFood() {
        return this.food;
    }
    
    getPlay() {
        return this.play;
    }

    getSleep() {
        return this.sleep;
    }

    getLife() {
        return this.life;
    }

    getName() {
        return this.name;
    }
} 