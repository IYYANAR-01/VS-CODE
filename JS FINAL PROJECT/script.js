
function adminLogin(){                                                                  
    let adminNames = document.getElementById("adminName").value;
    let adminNos = document.getElementById("adminNo").value;
    let adminPasss = document.getElementById("adminPassword").value;
    let ans = document.getElementById("adminAnsBox");
    

    if((adminNames=="Iyyanar")&&(adminNos==9344527032)&&(adminPasss=="zoho")){
        window.location.href = "adminPage.html";
        
    }
    else{
        ans.innerText = "invalid";
    }
}






function newElection(){

    let removeVoters = window.localStorage.getItem("userNum1")?window.localStorage.getItem("userNum1").split(","):[];

    for(let i=0; i<removeVoters.length; i++){

        window.localStorage.removeItem(removeVoters[i]);
    }

    window.localStorage.setItem("whatElect", 0);

    window.localStorage.removeItem("party");
    window.localStorage.removeItem("leader");
    window.localStorage.removeItem("symbol");
    window.localStorage.removeItem("whatElect");
    window.localStorage.removeItem("userNum1");
    window.localStorage.removeItem("alreadyVoted");
    window.localStorage.removeItem("pollCount");
    window.localStorage.removeItem("voteCount");

    window.location.href = "electionType.html";
 
}



function creative(){

   let electHeads = document.createElement("div");
    electHeads.setAttribute("id", "electHead");
    document.body.appendChild(electHeads);
    electHeads.style.display="flex";
    

   let electName = document.createElement("h1");
    electName.setAttribute("id", "electName");
    document.getElementById("electHead").appendChild(electName);
    electName.style.display="flex";
    document.getElementById("electHead").innerHTML ="Lok Sabha Election";
    
    
    
   let addParty = document.createElement("div");
    addParty.setAttribute("id", "addParty");
    document.body.appendChild(addParty);
    document.getElementById("addParty").innerHTML  =  "+ Add Party ";
    addParty.style.display="flex";
    addParty.addEventListener("click", addparties)


  let addPartyList = document.createElement("div");
    addPartyList.setAttribute("id", "addPartyList");
    document.body.appendChild(addPartyList);
    addPartyList.style.display="flex";
    

   let cancelElect = document.createElement("div");
    cancelElect.setAttribute("id", "cancelElect");
    document.body.appendChild(cancelElect);
    document.getElementById("cancelElect").innerHTML  =  "Cancel";
    document.getElementById("cancelElect").addEventListener("click", cancel);
    cancelElect.style.display="flex";

   let startElect = document.createElement("div");
    startElect.setAttribute("id", "startElect");
    document.body.appendChild(startElect);
    document.getElementById("startElect").innerHTML  =  "Start";
    startElect.style.display="flex";
    document.getElementById("startElect").addEventListener("click", start);
    startElect.style.display="flex";

    popUpBox = document.getElementById("popup");
    document.getElementById("electionSet")?.appendChild(popUpBox);
    popUpBox.style.display="none";

}










    function parliamentElect(){


        window.localStorage.setItem("whatElect", 1);
        creative();

        document.getElementById("parliamentBut").style.display="none";
        document.getElementById("legislativeBut").style.display="none";
        document.getElementById("electChoose").style.display="none";
        document.getElementById("electionTypePage").style.display="none";
        document.getElementById("back").style.display="none";

     
    }


    function cancel(){
        document.getElementById("parliamentBut").style.display="flex";
        document.getElementById("legislativeBut").style.display="flex";
        document.getElementById("electChoose").style.display="flex";
        document.getElementById("electionTypePage").style.display="flex";
        document.getElementById("back").style.display="flex";
        document.getElementById("popup").style.display="none";



           let a= document.querySelector("#electHead");
            let c=document.querySelector("#addParty");
            let d=document.querySelector("#addPartyList");
            let e=document.querySelector("#cancelElect");
            let f=document.querySelector("#startElect");

            a.remove();
            c.remove();
            d.remove();
            e.remove();
            f.remove();
    
        
    
        partyArray.splice(0, partyArray.length);
        leaderArray.splice(0, leaderArray.length);
        symbolArray.splice(0, symbolArray.length);
        voteCountArray.splice(0, voteCountArray.length);
        console.log(partyArray);
        console.log(leaderArray);
        console.log(symbolArray);
    
      window.localStorage.setItem("whatElect", 0);
    
    }

    


    







function cancelState(){
    document.getElementById("parliamentBut").style.display="flex";
    document.getElementById("legislativeBut").style.display="flex";
    document.getElementById("electChoose").style.display="flex";
    document.getElementById("electionTypePage").style.display="flex";
    document.getElementById("back").style.display="flex";


    
            let g= document.querySelector("#stateHead");
            let h= document.querySelector("#states");
            let i= document.querySelector("#cancelStates");

            
            g.remove();
            h.remove();
            i.remove();

   
}





function legislativeElect(){

let stateHead = document.createElement("h1");
stateHead.setAttribute("id", "stateHead");
document.getElementById("electionTypePage").appendChild(stateHead);
document.getElementById("stateHead").innerHTML  =  "Choose the State";
stateHead.style.display="flex";


 let states = document.createElement("div");
states.setAttribute("id", "states");
document.getElementById("electionTypePage").appendChild(states);
states.style.display="flex";


let cancelStates = document.createElement("div");
cancelStates.setAttribute("id", "cancelStates");
document.getElementById("electionTypePage").appendChild(cancelStates);
document.getElementById("cancelStates").innerHTML  =  "Cancel";
document.getElementById("cancelStates").addEventListener("click", cancelState);
cancelStates.style.display="flex";


let stateName = ["Tamil Nadu", "Maharashtra", "Delhi", "Andhra Pradesh", "Karnataka", "Kerala", "Punjab", "Utter Pradesh", "West Bengal", "Gujarat", "Assam"];


for(i=0; i<11; i++){
     let stateBox = document.createElement("div");
    stateBox.setAttribute("id", "state"+i);
    stateBox.setAttribute("class", "state");
    document.getElementById("states").appendChild(stateBox);
    document.getElementById("state"+i).innerHTML = stateName[i];
}


document.getElementById("parliamentBut").style.display="none";
    document.getElementById("legislativeBut").style.display="none";
    document.getElementById("electChoose").style.display="none";
    document.getElementById("back").style.display="none";

    

    for(let j=0; j<11; j++){
        document.getElementById("state" + j).addEventListener("click", ()=>{
            legisAssembly(j,stateName);
        });
        
        }

}





function legisAssembly(j,stateName){

    console.log(j);

    document.getElementById("stateHead").style.display="none";
    document.getElementById("states").style.display="none";
    document.getElementById("cancelStates").style.display="none";
    document.getElementById("electionTypePage").style.display="none";

    

    creative();


    let g= document.querySelector("#stateHead");
    let h= document.querySelector("#states");
    let i= document.querySelector("#cancelStates");


            g.remove();
            h.remove();
            i.remove();


    document.getElementById("electHead").innerText = "Legislative Assembly Election of " + stateName[j] ;
    document.getElementById("electHead").style.display="flex";
    window.localStorage.setItem("whatElect", 2);
}






function addparties(){
    let popUpBox = document.getElementById("popup")
    popUpBox.style.display="flex";
}




function addCancel(){
    let popUpBox = document.getElementById("popup")
    popUpBox.style.display="none";
}






var partyCount = 0;
var leaderCount = 0;
var symbolCount = 0;
var pattiyalList = 0;

var regex = /[A-z]/g;

var partyArray = [];
var leaderArray = [];
var symbolArray = [];
var voteCountArray = [];

function addCandidate(){

popUpBox.style.display="none";

    let katchiPeyar = document.getElementById("katchiName").value;
    let thalaivarPeyar = document.getElementById("leaderName").value;
    // let chinnam = document.getElementById("symbol");
    // console.log(chinnam);

    if((katchiPeyar != "")&&(regex.test(katchiPeyar))&&(thalaivarPeyar != "")&&(regex.test(thalaivarPeyar))){

       // window.localStorage.setItem("katchi" + partyCount, katchiPeyar);
        partyArray.push(katchiPeyar);
       // window.localStorage.setItem("thalaivar" + leaderCount, thalaivarPeyar);
        leaderArray.push(thalaivarPeyar);
       // window.localStorage.setItem("chinnam" + symbolCount, chinnam);

       
       
        
        // symbolArray.push(chinnam);

        voteCountArray.push(0);

        let pattiyalDiv = document.createElement("div");
        pattiyalDiv.setAttribute("id", "pattiyalDiv" +pattiyalList);
        pattiyalDiv.setAttribute("class", "pattiyalDiv");
        
        let a=document.createElement("button");
        pattiyalDiv.appendChild(a);
        a.setAttribute("class","removeParty");
        a.setAttribute("onclick","myfunction(this)");
        pattiyalDiv.setAttribute("class", "pattiyalDiv" );
        document.getElementById("addPartyList").appendChild(pattiyalDiv);
        a.textContent = "Remove";


        let pattiyal = document.createElement("span");
        pattiyal.setAttribute("id", "pattiyal");
        document.getElementById("pattiyalDiv" + pattiyalList).appendChild(pattiyal);
        pattiyal.innerHTML = katchiPeyar.toUpperCase();




        document.getElementById("katchiName").value="";
        document.getElementById("leaderName").value="";
        document.getElementById("symbol").value="";
        partyCount++;
        leaderCount++;
        symbolCount++;
        pattiyalList++;

    

    }
    else{
        
        alert("Please fill the valid details");
        document.getElementById("katchiName").value="";
        document.getElementById("leaderName").value="";
        document.getElementById("symbol").value="";
        symbolArray.splice(symbolArray.length-1, 1);
    }
}


  document.getElementById("symbol")?document.getElementById("symbol").addEventListener("change", function(){
    var newImage = "";
   const reader = new FileReader();
   reader.addEventListener("load", ()=>{
        newImage = reader.result;
        symbolArray.push(newImage);
        console.log(newImage);
        // window.localStorage.setItem("symbol",JSON.stringify(symbolArray));
   });
   reader.readAsDataURL(this.files[0]);
   
   }):0;





function myfunction(x){
   
    var letter = (x.nextSibling.innerText.toLowerCase());
    console.log(x.parentNode.remove())
    console.log(partyArray);
    var indexOfParty = partyArray.indexOf(letter);
    console.log(indexOfParty);
    partyArray.splice(indexOfParty, 1);
    console.log(partyArray);
    leaderArray.splice(indexOfParty, 1);
    console.log(leaderArray);
    symbolArray.splice(indexOfParty, 1);
    console.log(symbolArray);
    voteCountArray.splice(indexOfParty, 1);
}







function start(){

    window.localStorage.removeItem("pollCount");

    if(partyArray.length >= 2){
    window.localStorage.setItem("party", partyArray);
    window.localStorage.setItem("leader", leaderArray);
    window.localStorage.setItem("symbol",JSON.stringify(symbolArray));
    window.localStorage.setItem("voteCount", voteCountArray);

    

    window.location.href = "adminPage.html";
    }
    else{
        alert("Minimum two candidates for start the election");
    }

}


function view(){
    document.getElementById("view").style.display="none";


    let whatElect = Number(window.localStorage.getItem("whatElect"))
    if(whatElect==1){
        document.getElementById("curElectName").innerHTML = "Lok Sabha Election";
    }
    else if(whatElect==2){
        document.getElementById("curElectName").innerHTML = "Legislative Assembly Election";
    }
    else{
        document.getElementById("curElectName").innerHTML = "No election yet";
    }


    if((whatElect==1)||(whatElect==2)){
    
    
    
    let a = window.localStorage.getItem("party").split (",");
    let b = window.localStorage.getItem("leader").split (",");
    let c = window.localStorage.getItem("pollCount")?window.localStorage.getItem("pollCount").split (","):window.localStorage.getItem("voteCount").split(",");


    



    let serialNoDiv = document.createElement("div");
    serialNoDiv.setAttribute("id", "serialNoDiv");
    document.body.appendChild(serialNoDiv);

    let serialNoHead = document.createElement("h1");
    serialNoHead.setAttribute("id", "serialNoHead");
    document.getElementById("serialNoDiv").appendChild(serialNoHead);
    serialNoHead.innerHTML = "S.no";


    let partyNameDiv = document.createElement("div");
    partyNameDiv.setAttribute("id", "partyNameDiv");
    document.body.appendChild(partyNameDiv);

    let partyNameHead = document.createElement("h1");
    partyNameHead.setAttribute("id", "partyNameHead");
    document.getElementById("partyNameDiv").appendChild(partyNameHead);
    partyNameHead.innerHTML = "Party Name";


    let leaderNameDiv = document.createElement("div");
    leaderNameDiv.setAttribute("id", "leaderNameDiv");
    document.body.appendChild(leaderNameDiv);

    let leaderNameHead = document.createElement("h1");
    leaderNameHead.setAttribute("id", "leaderNameHead");
    document.getElementById("leaderNameDiv").appendChild(leaderNameHead);
    leaderNameHead.innerHTML = "Leader Name";


    let totalVoteDiv = document.createElement("div");
    totalVoteDiv.setAttribute("id", "totalVoteDiv");
    document.body.appendChild(totalVoteDiv);

    let totalVoteHead = document.createElement("h1");
    totalVoteHead.setAttribute("id", "totalVoteHead");
    document.getElementById("totalVoteDiv").appendChild(totalVoteHead);
    totalVoteHead.innerHTML = "Total Votes";



    for(i=0; i<a.length; i++){

        let serialDiv = document.createElement("div");
        serialDiv.setAttribute("class", "serialDiv");
        document.getElementById("serialNoDiv").appendChild(serialDiv);
        serialDiv.innerText = i + 1;

        let partyDiv = document.createElement("div");
        partyDiv.setAttribute("class", "partyDiv");
        document.getElementById("partyNameDiv").appendChild(partyDiv);
        partyDiv.innerText = a[i].toUpperCase();

        let leaderDiv = document.createElement("div");
        leaderDiv.setAttribute("class", "leaderDiv");
        document.getElementById("leaderNameDiv").appendChild(leaderDiv);
        leaderDiv.innerText = b[i].toUpperCase();

        let voteDiv = document.createElement("div");
        voteDiv.setAttribute("class", "voteDiv");
        document.getElementById("totalVoteDiv").appendChild(voteDiv);
        voteDiv.innerText = c[i];
    }

}


}













// for....user....................................




function regisHere(){

    document.getElementById("userContainer").style.display="none";
    document.getElementById("regisContainer").style.display="flex";

}

function logHere(){
    window.location.reload();
    document.getElementById("userContainer").style.display="flex";
    document.getElementById("regisContainer").style.display="none";
}


function userAuthenticate(){
    let whatElect = Number(window.localStorage.getItem("whatElect"));
    if(whatElect==0){
        alert("No Election Yet")
    }
    else{
        window.location.href = "user.html";
    }
}


function adminAuthenticate(){
    window.location.href = "admin.html";
}



// already user check........................

let userNumberArray = window.localStorage.getItem("userNum1")?window.localStorage.getItem("userNum1").split(","):[];




function register(){

    window.localStorage.setItem("userNum1", userNumberArray);



     let userName = document.getElementById("userName").value;
     let userNumber = document.getElementById("userNumber").value;
     let userPassword = document.getElementById("userPassword").value;
     let userVoterId = document.getElementById("userVoterId").value;
   

     let regexUserName = /[A-z]{3,20}/g;
     let regexUserNum = /[0-9]{10}/g;
     let regexUserPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/g;


     let userNum = (userNumber).split("");
     let voter = userName + userNum[0]+ userNum[1]+ userNum[2]+ userNum[3]+ userNum[4];

     let a = window.localStorage.getItem("userNum1").split(",");
     
     if((regexUserName.test(userName))&&(regexUserNum.test(userNumber))&&(regexUserPassword.test(userPassword))&&(voter==userVoterId)){
        console.log("valid");
        
        if(userNumberArray.includes(userNumber)){

            alert("already registered");
            
        }
        else{
            console.log(userNumber,userNumberArray);
            userNumberArray.push(userNumber);
            window.localStorage.setItem("userNum1", userNumberArray);
            console.log(userNumberArray);


            let userObject = {

                name : userName,
                password : userPassword,
                voterId : userVoterId,
             
            }

            console.log(userObject.name);

            window.localStorage.setItem(userNumber, JSON.stringify(userObject));

            alert("Successfully Registered");

            logHere();

        }
     }
     else{
        alert("invalid");
     }

//      let f = window.JSON.parse(localStorage.getItem(userNumber));

// console.log(JSON.parse(localStorage.getItem(userNumber)).password);
     
}



let votedMember = window.localStorage.getItem("alreadyVoted")?window.localStorage.getItem("alreadyVoted").split(","):[]; 





function userLogin(){

    let loginNumber = (document.getElementById("userlogNo").value).toString();
    let loginPassword = document.getElementById("userlogPassword").value;

    if(window.localStorage.getItem(loginNumber)?false:true){
        console.log("yes");
        alert("Please register your voter Id");
    return 0;
    
}

    if((JSON.parse(localStorage.getItem(loginNumber)).password)==(loginPassword)){

        console.log("super");

        if(votedMember.includes(loginNumber.toString())){

            console.log("great");

            alert("Already voted");
        }
        else{

        document.getElementById("userContainer").style.display = "none";

   

        let votePageHeadDiv = document.createElement("div");
        votePageHeadDiv.setAttribute("id", "votePageHeadDiv");
        document.getElementById("userLogPage").appendChild(votePageHeadDiv);

        let headLogo = document.createElement("img");
        headLogo.setAttribute("src", "logo.png");
        headLogo.setAttribute("id", "headLogo");
        document.getElementById("votePageHeadDiv").appendChild(headLogo);

        let votePageHead = document.createElement("h1");
        votePageHead.setAttribute("id", "votePageHead");
        document.getElementById("votePageHeadDiv").appendChild(votePageHead);
        votePageHead.innerHTML = "Election Commission of India";

        let logoutBut = document.createElement("div");
        logoutBut.setAttribute("id", "logoutBut");
        document.getElementById("votePageHeadDiv").appendChild(logoutBut);
        logoutBut.innerHTML = "Logout";
        document.getElementById("logoutBut").addEventListener("click", ()=> {
            window.location.reload();
        });







        
        let userProfileDiv = document.createElement("div");
        userProfileDiv.setAttribute("id", "userProfileDiv");
        document.getElementById("userLogPage").appendChild(userProfileDiv);

        let profileHead = document.createElement("h1");
        document.getElementById("userProfileDiv").appendChild(profileHead);
        profileHead.innerHTML = "Profile";

        let profilePic = document.createElement("img");
        profilePic.setAttribute("src", "profilePic.png");
        profilePic.setAttribute("id", "profilePic");
        document.getElementById("userProfileDiv").appendChild(profilePic);


        let proNameDiv = document.createElement("div");
        proNameDiv.setAttribute("id", "proNameDiv");
        document.getElementById("userProfileDiv").appendChild(proNameDiv);

        let proName = document.createElement("h1");
        proName.setAttribute("id", "proName");
        document.getElementById("proNameDiv").appendChild(proName);
        proName.innerHTML = "Name : ";

        let nameValue = document.createElement("span");
        document.getElementById("proNameDiv").appendChild(nameValue);
        nameValue.innerHTML = (JSON.parse(localStorage.getItem(loginNumber)).name);


        let proNumDiv = document.createElement("div");
        proNumDiv.setAttribute("id", "proNumDiv");
        document.getElementById("userProfileDiv").appendChild(proNumDiv);

        let proNum = document.createElement("h1");
        proNum.setAttribute("id", "proNum");
        document.getElementById("proNumDiv").appendChild(proNum);
        proNum.innerHTML = "Number : ";

        

        let NumValue = document.createElement("span");
        NumValue.setAttribute("id","NumValue");
        document.getElementById("proNum").appendChild(NumValue);
        NumValue.innerHTML = loginNumber;


        let proIdDiv = document.createElement("div");
        proIdDiv.setAttribute("id", "proIdDiv");
        document.getElementById("userProfileDiv").appendChild(proIdDiv);

        let proId = document.createElement("h1");
        proId.setAttribute("id", "proId");
        document.getElementById("proIdDiv").appendChild(proId);
        proId.innerHTML = "Voter Id : ";

        let IdValue = document.createElement("span");
        document.getElementById("proIdDiv").appendChild(IdValue);
        IdValue.innerHTML = (JSON.parse(localStorage.getItem(loginNumber)).voterId);


        // let proStatusDiv = document.createElement("div");
        // proStatusDiv.setAttribute("id", "proStatusDiv");
        // document.getElementById("userProfileDiv").appendChild(proStatusDiv);

        // let proStatus = document.createElement("h1");
        // proStatus.setAttribute("id", "proStatus");
        // document.getElementById("proStatusDiv").appendChild(proStatus);
        // proStatus.innerHTML = "Status : ";

        // let StatusValue = document.createElement("span");
        // document.getElementById("proStatusDiv").appendChild(StatusValue);
        // StatusValue.innerHTML = "iyyanar";




        let votingDiv = document.createElement("div");
        votingDiv.setAttribute("id", "votingDiv");
        document.getElementById("userLogPage").appendChild(votingDiv);

        let votingHead = document.createElement("h1");
        votingHead.setAttribute("id", "votingHead");
        document.getElementById("votingDiv").appendChild(votingHead);


        let whatElect = Number(window.localStorage.getItem("whatElect"))
        if(whatElect==1){
            document.getElementById("votingHead").innerHTML = "Lok Sabha Election";
        }
        else if(whatElect==2){
            document.getElementById("votingHead").innerHTML = "Legislative Assembly Election";
        }
        else{
            document.getElementById("votingHead").innerHTML = "No election yet";
        }


        let summa = JSON.parse(localStorage.getItem("symbol").split(","));

        console.log(summa);

        if((whatElect==1)||(whatElect==2)){
    
            let a = window.localStorage.getItem("party").split (",");
            let b = window.localStorage.getItem("leader").split (",");
            let c = window.localStorage.getItem("symbol").split (",");

            for(let i=0; i<a.length; i++){

            let main = document.createElement("div");
            main.setAttribute("id", "mains" + i );
            main.setAttribute("class", "mains");
            document.getElementById("votingDiv").appendChild(main);


            let mainText = document.createElement("div");
            mainText.setAttribute("id", "mainTexts" +i);
            mainText.setAttribute("class", "mainTexts");
            document.getElementById("mains"+i).appendChild(mainText);


            let partyDiv = document.createElement("div");
            partyDiv.setAttribute("id", "partyDiv"+i);
            partyDiv.setAttribute("class", "partyDivs");
            document.getElementById("mainTexts"+i).appendChild(partyDiv);

            let partyName = document.createElement("h2");
            partyName.setAttribute("id", "partyName"+i);
            partyName.setAttribute("class", "partyName");
            document.getElementById("partyDiv"+i).appendChild(partyName);
            partyName.innerHTML = "Party Name : ";

            let partyValue = document.createElement("span");
            partyValue.setAttribute("id", "partyValue"+i);
            partyValue.setAttribute("class", "partyValue");
            document.getElementById("partyDiv"+i).appendChild(partyValue);
            partyValue.innerHTML = a[i].toUpperCase();



            let leadDiv = document.createElement("div");
            leadDiv.setAttribute("id", "leadDiv"+i);
            leadDiv.setAttribute("class", "partyDivs");
            document.getElementById("mainTexts"+i).appendChild(leadDiv);

            let leadName = document.createElement("h2");
            leadName.setAttribute("id", "leadName"+i);
            leadName.setAttribute("class", "partyName");
            document.getElementById("leadDiv"+i).appendChild(leadName);
            leadName.innerHTML = "Leader Name : ";

            let leadValue = document.createElement("span");
            leadValue.setAttribute("id", "leadValue"+i);
            leadValue.setAttribute("class", "partyValue");
            document.getElementById("leadDiv"+i).appendChild(leadValue);
            leadValue.innerHTML = b[i].toUpperCase();


            let symbolDiv = document.createElement("div");
            symbolDiv.setAttribute("id", "symbolDiv"+i);
            symbolDiv.setAttribute("class", "symbolDiv");
            document.getElementById("mains"+i).appendChild(symbolDiv);

            document.querySelector("#symbolDiv"+i).style.backgroundImage = "url("+summa[i]+")"
            // let pic = window.localStorage.getItem("symbol").split(",");

            // let symbolPic = document.createElement("img");
            // symbolPic.setAttribute("src", pic[0]);
            // document.getElementById("symbolDiv"+i).appendChild(symbolPic);

            let voteBox = document.createElement("div");
            voteBox.setAttribute("id", "voteBox"+i);
            voteBox.setAttribute("class", "voteBox");
            document.getElementById("mains"+i).appendChild(voteBox);
            voteBox.innerHTML = "Vote";


            document.getElementById("voteBox"+i).addEventListener("click", ()=> {

                    pollVote(i,loginNumber);
                });
            

                hide();

                document.getElementById("insIconDiv").style.display = "none";

            }
        }
    }

    }

    else{
        alert("invalid");
    }



}





function pollVote(i,loginNumber){


    let pollCount = window.localStorage.getItem("pollCount")?window.localStorage.getItem("pollCount").split(","):window.localStorage.getItem("voteCount").split(",");

let counting = [];


    document.getElementById("votingDiv").style.display = "none";
    document.getElementById("userProfileDiv").style.display = "none";



    let confirmPopup = document.createElement("div");
confirmPopup.setAttribute("id", "confirmPopup");
document.body.appendChild(confirmPopup);
document.getElementById("confirmPopup").style.display = "flex";

let confirmHead = document.createElement("h1");
confirmHead.innerHTML = "confirm ?";
confirmHead.setAttribute("id", "confirmHead")
document.getElementById("confirmPopup").appendChild(confirmHead);
document.getElementById("confirmHead").style.display = "flex";

let confirmOption = document.createElement("div");
confirmOption.setAttribute("id", "confirmOption");
document.getElementById("confirmPopup").appendChild(confirmOption);
document.getElementById("confirmOption").style.display = "flex";

let noBut = document.createElement("div");
noBut.setAttribute("id", "noBut");
document.getElementById("confirmOption").appendChild(noBut);
noBut.innerHTML = "No";
document.getElementById("noBut").style.display = "flex";
// document.getElementById("confirmPopup").style.zIndex="3"
// document.body.style.backgroundColor="#606060";



document.getElementById("noBut").addEventListener("click", ()=> {
    
    document.getElementById("noBut").style.display = "none";
    document.getElementById("yesBut").style.display = "none";

    document.getElementById("votingDiv").style.display = "flex";
    document.getElementById("userProfileDiv").style.display = "flex";

    confirmPopup.querySelectorAll("#confirmPopup");
    confirmPopup.remove();
});




let yesBut = document.createElement("div");
yesBut.setAttribute("id", "yesBut");
document.getElementById("confirmOption").appendChild(yesBut);
yesBut.innerHTML = "Yes";
document.getElementById("yesBut").style.display = "flex";

document.getElementById("yesBut").addEventListener("click", ()=> {

    for(let x=0; x<pollCount.length; x++){
    
        counting[x] = Number(pollCount[x]);
  
     }
     counting[i]++;
     
     window.localStorage.setItem("pollCount", counting);

   
    confirmPopup.querySelectorAll("#confirmPopup");
    confirmPopup.remove();
   

    let successDiv = document.createElement("div");
successDiv.setAttribute("id", "successDiv");
document.body.appendChild(successDiv);

let ticPic = document.createElement("img");
ticPic.setAttribute("src", "tick.png");
ticPic.setAttribute("id", "ticPic");
document.getElementById("successDiv").appendChild(ticPic);

let successHead = document.createElement("h1");
document.getElementById("successDiv").appendChild(successHead);
successHead.innerHTML = "Successfully Voted!";

let successEnd = document.createElement("p");
successDiv.appendChild(successEnd);
successEnd.innerHTML = "Thankyou for your participation!";


     votedMember.push(loginNumber);
     window.localStorage.setItem("alreadyVoted", votedMember);
});



}





document.getElementById("insIconDiv")?document.getElementById("insIconDiv").addEventListener("click", show):0;

function show(){

    document.getElementById("instructDiv").style.display = "flex";
}


document.getElementById("instDivHide")?document.getElementById("instDivHide").addEventListener("click", hide):0;

function hide(){

    document.getElementById("instructDiv").style.display = "none";

}









    
