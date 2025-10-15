// for(let i=1; i<=10; i++){
//     console.log(i)
// }


// for(let i=1; i<=20; i++){
//     if(i%2==0) console.log(i)
// }


// let sum = 0;
// for(let i=1; i<=100; i++){
//     sum += i
// }
// console.log(sum)



// let n = 4; 
// let fact = 1;
// for(let i=1; i<=n; i++){
//     fact *= i
// }
// console.log(fact)




// let arr = [10, 20, 30, 40, 50];
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }



// let num = 17; 
// let Prime = true;
// for(let i=2; i<=num-1; i++){
//     if(num%i==0){
//         Prime = false
//         break;
//     }
// }
// if(Prime) console.log("Num is Prime")
// else console.log("Num is not prime")



// for(let i=1; i<=5; i++){
//     let row = "";
//     for(let j=1; j<=i; j++){
//         row += "*";
//     }
//     console.log(row)
// }



for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        process.stdout.write("*");
    }
    // console.log();
    process.stdout.write("\n");
}