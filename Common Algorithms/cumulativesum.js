// const sum = [1,3,5,7].reduce((acc,cur) => acc+cur, 0)

// console.log('Sum using reduce() method :', sum)

// without reduce()
function sum(arr) {
    let total = 0;
    for (let i=0; i<arr.length; i++){
        console.log(arr[i]);
        total += arr[i];
    }
    return total;
}
console.log('Sum using custom function :',sum([1,3,5,7]));