/*
* Question 1
*/
function sum(arg){
    const f = arg.filter(
        function(elem){
            return elem>20;
        }
    );

    const sum = f.reduce(
        function(total,num){
            return total+num;
        }
    ,0);

    return sum;
}
console.log(sum([21,21, 20, 20]));

/*
* Question 2
*/
const getNewArray = function(arg){
    const arr = arg.filter(
        function(elem){
            return elem.length>=5
        }
    );
    const ret = arr.filter(
        function(elem){
            return elem.includes('a')
        }
    );
    return ret;
}

console.log(getNewArray(['abc','abcd','abcde','abcdef','abcdefg']));

