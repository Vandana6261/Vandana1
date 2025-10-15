let num=12212;

function isPalandrome(num)
{
    let num1 = num.toString().split('').reverse().join('');
    if(num.toString()===num1)
        console.log("palandrome");
    else
        console.log("not palandrome");
}

isPalandrome(num);