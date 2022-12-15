function length(value){
    document.getElementById("lenValue").innerText = value;
}


document.getElementById("generate").addEventListener("click", generate);


function generate(){

    let strengthCount = 0;
    let length = 0;
    let spliting = 0;
    let array1 = "";
    let array2 = "";
    let array3 = "";
    let array4 = "";

            document.getElementById("point1").style.backgroundColor = "black";
            document.getElementById("point2").style.backgroundColor = "black";
            document.getElementById("point3").style.backgroundColor = "black";
            document.getElementById("point4").style.backgroundColor = "black";
    
    const checkBox = document.querySelectorAll(".checkBox");

    let upperCaseCheck = checkBox[0].checked;
    if(upperCaseCheck){
        strengthCount++;
         array1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    let lowerCaseCheck = checkBox[1].checked;
    if(lowerCaseCheck){
        strengthCount++;
        array2 = "abcdefghijklmnopqrstuvwxyz";
    }

    let numberCheck = checkBox[2].checked;
    if(numberCheck){
        strengthCount++;
        array3 = "01234567890987654321";
    }

    let symbolCheck = checkBox[3].checked;
    if(symbolCheck){
        strengthCount++;
        array4 = "!@#$%^&*():;<>?,./";
    }

    if(strengthCount==0){
            document.getElementById("point1").style.backgroundColor = "black";
            document.getElementById("point2").style.backgroundColor = "black";
            document.getElementById("point3").style.backgroundColor = "black";
            document.getElementById("point4").style.backgroundColor = "black";
        alert("please select the check box");
    }
    else{
        // passArr = suffle(passArr)
        // console.log(passArr)
        // console.log(strengthCount);

        length = document.getElementById("rangeValue").value;

        spliting = Math.floor(length/strengthCount);

        array1?array1=suffle(array1):0;
        array2?array2=suffle(array2):0;
        array3?array3=suffle(array3):0;
        array4?array4=suffle(array4):0;

        let totalSuff = "";

            for(let j=0; j<spliting; j++){
                if(array1!=""){
                    totalSuff += array1[j];
                }
                if(array2!=""){
                    totalSuff += array2[j];
                }
                if(array3!=""){
                    totalSuff += array3[j];
                }
                if(array4!=""){
                    totalSuff += array4[j];
                }
                
            }
            
            let extra = totalSuff.length;

            // console.log(extra)
            // console.log(length);

            let arr = totalSuff.split("");

            if(extra<length){
                let extras = length - extra;
                let x = Math.floor(Math.random()*extra)
                console.log(x);
                for(let i=0; i<extras; i++){
                    totalSuff += arr[x];
                }
                console.log(totalSuff)
            }

            document.getElementById("point1").style.backgroundColor = "black";
            document.getElementById("point2").style.backgroundColor = "black";
            document.getElementById("point3").style.backgroundColor = "black";
            document.getElementById("point4").style.backgroundColor = "black";

             totalSuff = suffle(totalSuff);

         document.getElementById("displayText").innerText = totalSuff;

         totalSuff="";

         if(strengthCount==1){
            document.getElementById("point1").style.backgroundColor = "#F64A4A";
         }
         if(strengthCount==2){
            document.getElementById("point1").style.backgroundColor = "#FB7C58";
            document.getElementById("point2").style.backgroundColor = "#FB7C58";
         }
         if(strengthCount==3){
            document.getElementById("point1").style.backgroundColor = "#F8CD65";
            document.getElementById("point2").style.backgroundColor = "#F8CD65";
            document.getElementById("point3").style.backgroundColor = "#F8CD65";
         }
         if(strengthCount==4){
            document.getElementById("point1").style.backgroundColor = "#A4FFAF";
            document.getElementById("point2").style.backgroundColor = "#A4FFAF";
            document.getElementById("point3").style.backgroundColor = "#A4FFAF";
            document.getElementById("point4").style.backgroundColor = "#A4FFAF";
         }

    }


    navigator.clipboard.writeText(document.getElementById("displayText").innerText);

}


function suffle(arr){
    arr = arr.split("");
    let array = "";
    for(let i=arr.length-1; i>0; i--){
        let x = Math.floor(Math.random()*(i+1));
        [arr[x],arr[i]] = [arr[i],arr[x]];
    }
    for(let x of arr){
        array += x;
    }
    return array;
}