//alert("page working");

let nums = [2,3,4,5,6,7,8,9,10,11,12];

let result={even:[],odd:[]};

for(let num of nums ){
    if(num % 2==0){
        result.even.push(num);
    }else{
        result.odd.push(num);
    }
    
}
console.log(result);
//
 let num  =["one","two","three","four"];

 console.log(num.sort());

 console.log(num.reverse());

 console.log(num.indexOf(""));

 console.log(num.find());

 console.log(num.concat());

