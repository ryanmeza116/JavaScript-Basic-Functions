// print odd numbers 1-20
for(var i = 0; i<=20;i++){
    if(i % 2 === 1){
        console.log(i + " Is an odd number");
    }
};
//decreasing multiples of 3
for(var i = 100; i > 0; i --){
    if(i % 3 === 0){
        console.log(i);
    }
};
// js sequence 
var arr = [4, 2.5, 1, -0.5, -2, -3.5];
for(var i = 0; i <= 5; i++){
    console.log(arr[i]);
};
// sigma
var sum = 0; 
for(var i = 1; i<=100; i++){
    sum = sum + i; 
}
console.log(sum);
//factorial
var product = 1; 
for(var i = 1; i<=12; i++){
    product = product * i; 
}
console.log(product);