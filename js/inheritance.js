



// single inheritance


// class Father{
//     singer(){
//     console.log("he is best singer");
//     }
// }
// class Child extends Father{
//     football(){
//         console.log("he is best player");
//     }
// }

// ch= new Child()

// ch.football()
// ch.singer()





// hierarchical inheritance

// class Father{
//     dancer(){
//         console.log("he is best dancer");
//     }

//     singer(){
//     console.log("he is best singer");
//     }
// }
// class Child extends Father{
//     football(){
//         console.log("he is best player");
//     }
// }

// class Child1 extends Father{
//     cricket(){
//         console.log("he is best cricket player");
//     }
// }

// class Child2 extends Father{
//     tennis(){
//         console.log("he is best tennis player");
//     }
// }

// ch= new Child();
// chi= new Child1();
// chil=new Child2()


// ch.football()
// ch.singer()

// chi.cricket()
// chi.dancer()

// chil.tennis()
// chil.singer()





// multiple level inheritance

// class Grandpa{
//     singer(){
//     console.log("he is best singer");
//     }
// }
// class Father extends Grandpa{
//     football(){
//         console.log("he is best player");
//     }
// }

// class Child extends Father{
//     cricket(){
//         console.log("he is best cricket player");
//     }
// }

// ch= new Child()

// ch.football()
// ch.singer()
// ch.cricket()






// class Grandpa{
//     constructor(){
//         this.name="alan"
//     }
//     singer(){
//     console.log("he is best singer");
//     }
// }
// class Father extends Grandpa{
//     constructor(){
//         super()
//         this.age=20
//     }
//     football(){
//         console.log("he is best player");
//     }
// }

// class Child extends Father{
//     cricket(){
//         console.log("he is best cricket player");
//     }
// }

// ch= new Child()
// console.log(ch.name,ch.age);


// ch.football()
// ch.singer()
// ch.cricket()
