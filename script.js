const prodType = document.querySelectorAll('.type');

class Products{
    #id;

    constructor(id, title, manufacture, price) {
        this.#id = id;
        this._title = title;
        this._manufacture = manufacture;
        this._price = price;
        this._id = id;
    }

    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get manufacture() {
        return this._manufacture;
    }
    get price() {
        return this._price;
    }

    set title(value) {

        this._title = value;
    }
    set manufacture(value) {
        this._manufacture = value;
    }
    set price(value) {
        this._price = value;
    }
}

class Milk extends Products{
    
    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this._fat = fat;
    }

    get fat() {
        return this._fat;
    }

    set fat(value) {
        this._fat = value;
    }
}

class Chocolate extends Products{

    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this._kind = kind;
    }

    get kind() {
        return this._kind;
    }

    set kind(value) {
        this._kind = value;
    }
}

class Wine extends Products {

    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this._alcohol = alcohol;
    }

    get alcohol() {
        return this._alcohol;
    }

    set alcohol(value) {
        this._alcohol = value;
    }
}

class MyStorage {

    constructor() {
        this.products = [];
    }
    addProduct(product){
        if (this.products.find(p => p.id === product.id)){
            return false;
        }else{
            this.products.push(product);
        }

    }
    getAllProducts(){
        return [...this.products]
    }
//???????
    //  getByTypeProduct(){
    //    document.getElementById('btn').addEventListener('click', ev => {
    //        if (prodType.value === this.products.constructor.name){
    //            return console.log(this.products);
    //        }
    //    })
    // }

}
const products = new MyStorage();
const milk = new Milk(182772, 'Tara', 'Israel', 7.80, 3.2);
const milk2 = new Milk(6724447, 'Danone', 'Israel', 9.60, 2.5);
const chocolate = new Chocolate(975426, 'Milka', 'Switzerland', 14.30, 'Alpine Milk');
const chocolate2 = new Chocolate(976540, 'Milka', 'Switzerland', 16.30, 'Milka and Oreo');
const wine = new Wine(365472, 'Red wine', 'Italy', 60.90, 14.2);
const wine2 = new Wine(764678, 'White wine', 'Italy', 99.90, 18.3);

products.addProduct(milk);
products.addProduct(milk2);
products.addProduct(chocolate);
products.addProduct(chocolate2);
products.addProduct(wine);
products.addProduct(wine2);

products.getAllProducts().forEach(item => console.log(item))

//products.getByTypeProduct();