const arr = new Array();
Array.prototype.average = function(array){
    let value = 0;
    for(let x of array){
        value += x;
    }
    return value/array.length;
}

console.log(arr.average([1,2,3,4,5]));


const string = new String();
String.prototype.removeVow = function(string){
    let result = "";
    let c = 0;
    let vowel = ["a", "e", "i", "o", "u"];
    let input = string.toLowerCase();
    for(i=0; i<input.length; i++){
        if(vowel.includes(input[i])){
           c++;
        }
        else{
            result += input[i];
        }
    }
    return result;
}

console.log(string.removeVow("Iyyanar"));