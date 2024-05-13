// 1.




for(i=0; i<=4; i++){
    str="";
    for(j=1; j<=i; j++){
str+="   *"
    }
    console.log(str);
}

for(i=3; i>=0; i--){
    str="";
    for(j=1; j<=i; j++){
str+="   *"
    }
    console.log(str);
}
// 2.
for(i=1; i<=5; i++){
    str="";
    for(j=1; j<=6-i; j++){
str+="  ";
    }
    for(k=1; k<=i; k++){
        str+="   *"
    }
    console.log(str);
}




// 3.

for(i=0; i<=4; i++){
    str="";
    for(j=1; j<=5-i; j++){
str+="  ";
    }
    for(k=1; k<=i; k++){
        str+="   *"
    }
    console.log(str);
}

for(i=5; i>=0; i--){
    str="";
    for(j=1; j<=5-i; j++){
str+="  ";
    }
    for(k=1; k<=i; k++){
        str+="   *"
    }
    console.log(str);
}



// 4.

for(i=0; i<=5; i++){
    str="";
    for(j=1; j<=5-i; j++){
        str+=" "+j;
    }
    console.log(str);
}


// 5.
k=1
for(i=0; i<=4; i++){
    str="";
    for(j=1; j<=i; j++){
        str+= " "+k++;
    }
    console.log(str);
}
