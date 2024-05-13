

// callback

// function makeGift(price) {
//     console.log("ready to buy gift at"+price+"rupees");
// }

// function birthDay(callback) {
//     console.log("send gift to my friend");
//     const price=50000
//     callback(price)
// }


// birthDay(makeGift)



// callbackhell
// function orderFood(callback) {
//     setTimeout(() => {
//         console.log("order food");
//         callback()
//     }, 3000);
// }

// function eventVenue(callback) {
//     setTimeout(() => {
//         console.log("venue decorated");
//         callback()
//     }, 3000);
// }

// function arrangeDj(callback) {
//     setTimeout(() => {
//         console.log("DJ arranged");
//         callback()
//     }, 3000);
// }
// eventVenue(()=>{
//     orderFood(()=>{
//         arrangeDj(()=>{
//             console.log("programm completed");
//         })
//     })
// })