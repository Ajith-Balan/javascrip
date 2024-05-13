

class product{
  
    constructor(name,price,taxrate){
        this.name=name;
        this.price=price;
        this.taxrate=taxrate;
    }
    calculatetotal(){
    // let   taxamount = (this.price * this.taxrate) / 100;
    //  let   totalprice = this.price + taxamount;
    //  let    return `The total price of the ${this.name} is ${totalprice} and the tax rate is ${taxamount}`;


        return `the total price of the ${this.name} is ${this.price+((this.price * this.taxrate)/100)} and the taxrate is ${this.price*this.taxrate/100} `
    }
}

tv=new product("TV",30000,18);




console.log(tv.calculatetotal());