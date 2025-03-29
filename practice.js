class Electronics {
    #name;
    #model;
    #storage;
    #price;
    constructor(name, model, storage, price) {
        this.#name = name;
        this.#model = model;
        this.#storage = storage;
        this.#price = price
    }

    get info() {
        return {
            name: this.#name,
            model: this.#model,
            storage: this.#storage,
            price: this.#price
        }
    }
}

class Phone extends Electronics{
    #processor;
    #screen;
    #temp;
    constructor(processor, screen, ...args) {
        super(...args)
        this.#processor = processor;
        this.#screen = screen;
        this.#temp
    }

    getInfos() {
        this.#temp = this.info
        this.#temp['processor'] = this.#processor
        this.#temp['screen'] = this.#screen
        return this.#temp
    }
}
class Computer extends Electronics{
    #processor;
    #screen;
    #videocard;
    #temp;
    constructor(processor, screen, videocard, ...args) {
        super(...args)
        this.#processor = processor;
        this.#screen = screen;
        this.#videocard = videocard;
    }

    getInfos() {
        this.#temp = this.info;
        this.#temp['processor'] = this.#processor;
        this.#temp['screen'] = this.#screen;
        this.#temp["videocard"] = this.#videocard;
        return this.#temp
    }
}


class Playstation extends Electronics{
    #processor;
    #screen;
    #videocard;
    #numOfGames;
    #temp;
    constructor(processor, screen, videocard,numOfGames, ...args) {
        super(...args)
        this.#processor = processor;
        this.#screen = screen;
        this.#videocard = videocard;
        this.#numOfGames = numOfGames;
    }

    getInfos() {
        this.#temp = this.info
        this.#temp['processor'] = this.#processor
        this.#temp['screen'] = this.#screen
        this.#temp["videocard"] = this.#videocard;
        this.#temp['numOfGames'] = this.#numOfGames;
        return this.#temp
    }
}


class TV extends Electronics{
    #weight;
    #screen;

    #temp;
    constructor(weight, screen, ...args) { 
        super(...args)
        this.#weight = weight;
        this.#screen = screen;
        this.#temp
    }

    getInfos() {
        this.#temp = this.info
        this.#temp['weight'] = this.#weight
        this.#temp['screen'] = this.#screen
        return this.#temp
    }
}

let temp = new Phone(1,3,4,6,7,8)
let temp2 = new Playstation(1,3,4,6,7,8,2,4)
let temp3= new TV(1,3,4,6,7, 0)
let temp4 = new Computer(1,3,4,6,7,8, 0)
// console.log(temp.getInfos())
// console.log(temp2.getInfos())
// console.log(temp3.getInfos())
console.log(temp4.getInfos())


