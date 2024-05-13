// regular expressions

text="41654"
text1="cat eats rat"
text2="rat eat wheat"

ptn=/\d/
console.log(ptn.test(text));
console.log(ptn.test(text1));
console.log(ptn.test(text2));
