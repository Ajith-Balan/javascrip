// function asd(a) {
//     return `hello ${a}`
// }
// console.log(asd("anurag"));


// function asd(a,b) {
//     return a+b
// }
// x=asd(20,50)
// console.log(x);








// celsius to fahrenheit
// function asd(c) {
//     return (c* 9/5) + 32
// }
// c=50;

// f=asd(c)
// console.log(`${c} celsuis = ${(c* 9/5) + 32} fahrenheit`);


// odd or even
// function asd(a) {
//     if(a%2 === 0){
//         return "is even number"
//     }
//     else{
//         return "is odd number"
//     }
// }
// a=56
// console.log(`${a} ${asd(a)}`);





// find,map,foreach


// arr=[
//     {name:"aromal",mark:20,place:"kakkanad"},
//     {name:"ajith",mark:20,place:"vytla"},
//     {name:"abhi",mark:20,place:"vypin"},
//     {name:"rahul",mark:20,place:"thammanam"},
//     {name:"aju",mark:20,place:"palarivattom"},
//     {name:"ali",mark:20,place:"palakkad"}
// ]

// arr.forEach((value,index) => {
//     console.log(value.place);
// });




// arr=[
//     {name:"aromal",mark:20,place:"kakkanad"},
//     {name:"ajith",mark:20,place:"vytla"},
//     {name:"abhi",mark:20,place:"vypin"},
//     {name:"rahul",mark:20,place:"thammanam"},
//     {name:"aju",mark:20,place:"palarivattom"},
//     {name:"ali",mark:20,place:"palakkad"}
// ]

// arr.map((value,index) => {
//     console.log(value);
// });




// arr=[
//     {name:"aromal",mark:20,place:"kakkanad"},
//     {name:"ajith",mark:20,place:"vytla"},
//     {name:"abhi",mark:20,place:"vypin"},
//     {name:"rahul",mark:20,place:"thammanam"},
//     {name:"aju",mark:20,place:"palarivattom"},
//     {name:"ali",mark:20,place:"palakkad"}
// ]

// x=arr.find((value,index) => {
//     return value.name==="ajith"
// });
// console.log(x);





// arr=[
//     {name:"aromal",mark:20,place:"kakkanad"},
//     {name:"ajith",mark:20,place:"vytla"},
//     {name:"abhi",mark:20,place:"vypin"},
//     {name:"rahul",mark:20,place:"thammanam"},
//     {name:"ajith",mark:20,place:"palarivattom"},
//     {name:"ali",mark:20,place:"palakkad"}
// ]

// x=arr.filter((value,index) => {
//     return value.name==="ajith"
// });
// console.log(x);



// arr=[
//     {name:"aromal",mark:20,place:"kakkanad"},
//     {name:"ajith",mark:20,place:"vytla"},
//     {name:"abhi",mark:60,place:"vypin"},
//     {name:"rahul",mark:20,place:"thammanam"},
//     {name:"ajith",mark:20,place:"palarivattom"},
//     {name:"ali",mark:20,place:"palakkad"}
// ]

//  x=arr.reduce((total,value) => {
//     return total+=value.mark
// },0);
// console.log(x);

