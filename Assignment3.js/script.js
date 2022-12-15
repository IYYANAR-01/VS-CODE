

// string recreate..........

// 1.............

String.prototype.char_At = function(index){
    for(let i=0; i<this.length; i++){
        if(i==index){
            return this[i];
        }
    }
    return -1;
}

let string1 = "iyyanar";

console.log(string1.char_At(19));



// 2............

String.prototype.index_Of = function(str){
    for(let i=0; i<this.length; i++){
        if(this[i]===str){
            return i;
        }
    }
    return -1;
}

let string2 = "iyyanar";

console.log(string2.index_Of("a"));



// 3........

String.prototype.len_gth = function(){
    let word = this.split("");
    let count = 0;
    for(let x in word){
        count += 1;
    }
    return count;
}


let string3 = "iyyanar";

console.log(string3.len_gth());


// 4............

String.prototype.sub_String = function(startIndex,endIndex){
    let result="";
    if((startIndex<0)||(endIndex>this.length)){
        return "stupid";
    }
    else{
    for(let i=startIndex; i<endIndex-1; i++){
         result += this[i]; 
    }
    return result;
    }
}

let string4 = "iyyanar";

console.log(string4.sub_String(2,7));


// 5..............

String.prototype.con_cat = function(str){
    let result = this + str;
    return result;
}

let string5 = "hello";

console.log(string5.con_cat("World"));




// Array recreate.............

// 1.........


Array.prototype.in_cludes = function(a){
    let y = 0;
    for(let x of this){
        if(x==a){
            y++;
            return true;
        }
    }
    if(y==0){
        return false;
    }
}

let Array1 = ["a","e","i","o","u"];
console.log(Array1.in_cludes("i"));



// 2.............


Array.prototype.sort_Num = function(){
    this.sort(function(a,b){return a-b});
    return this;
}

let Array2 = [3,4,2,5,8,0];
console.log(Array2.sort_Num());


// 3......................



Array.prototype.push_in = function(x){
    let arr = [] 
    for(let i=0; i<this.length+1; i++){
        if(i==this.length){
            arr[i] = x;
            return arr;
        }
        else{
            arr[i] = this[i]
        }
    }
    
}

let Array3 = [3,4,5,8,0];
console.log(Array3.push_in(9));


// 4..................


Array.prototype.join_in = function(){
    let result = "";
    for(let x of this){
        result += x;
    }
    return result;
}


let Array4 = ["a","e","i","o","u"];
console.log(Array4.join_in());


// 5.................


Array.prototype.re_verse = function(){
    let arr = [];
    for(let i=this.length-1; i>=0; i--){
        arr.push(this[i]);
    }
    return arr;
}


let Array5 = ["a","e","i","o","u"];
console.log(Array5.re_verse());





// Math recreate....................

// 1..............

Math.power = function(a,b){
    let x = 1;
    for(let i=0; i<b; i++){
        x *= a; 
    }
    return x;
}

console.log(Math.power(2,3));


// 2...............

Math.Sign = function(x){
    if(x>=0){
        return 1;
    }
    else{
        return -1;
    }
}

console.log(Math.Sign(3));

// 3...............

Math.square = function(x){
    return Math.pow(x,2);
}

console.log(Math.square(8));

// 4................

Math.absolute = function(x){
    if(x<0){
        return x * -1;
    }
    else{
        return x;
    }
}

console.log(Math.absolute(-4));

// 5................

Math.Floor = function(x){
    let b = "";
    if(x<0){
        x = x-1;
        let a = x.toString().split(".");
        b += a[0];
        return Number(b);
    }
    else{
        let a = x.toString().split(".");
        b += a[0];
        return Number(b);
    }
}

console.log(Math.Floor(-6.5));