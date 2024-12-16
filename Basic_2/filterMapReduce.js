

// map : maps each element

const myArr = [1,2,3,4];

const result = myArr.map((element) => element + 1);

console.log("result values : ",result);

console.log("my Arr Value",myArr);

// filter : condition 

const filterResult = myArr.filter((element)=>{
    return element < 5;
});

console.log("FilterResult value", filterResult);


// reduce 

const reduceResult = myArr.reduce((acc,value)=>{
    return acc + value;
},0);

console.log(reduceResult);


const myArr1 = [1,2,3,4,5,6,7,8,9];

const result1 = myArr1.filter((item)=>{
    return item % 2 == 0;
}).reduce((acc,val)=>{
    return acc + val;
},0) 

console.log(result1);
