let englishmarks=document.getElementById("english");
let mathsmarks=document.getElementById("maths");
let chemistrymarks=document.getElementById("chemistry");
let physicsmarks=document.getElementById("physics");
let computermarks= document.getElementById("computer");

function validator(){
    if(englishmarks.value>100||englishmarks.value<0){
        alert("Mark should be between 100 and 0")
        return true;
    }
    else if(mathsmarks.value>100||mathsmarks.value<0){
        alert("Mark should be between 100 and 0")
        return true;
    }
    else if(chemistrymarks.value>100||chemistrymarks.value<0){
        alert("Mark should be between 100 and 0")
        return true;
    }
    else if(physicsmarks.value>100||physicsmarks.value<0){
        alert("Mark should be between 100 and 0")
        return true;
    }
    else if(computermarks.value>100||computermarks.value<0){
        alert("Mark should be between 100 and 0")
        return true;
    }
}
let totalmarks=0;
function gettotal(){
  if((englishmarks.value===""||englishmarks.value<=35)||(mathsmarks.value===""||mathsmarks.value<=35)||(chemistrymarks.value===""||chemistrymarks.value<=35)||(physicsmarks.value===""||physicsmarks.value<=35)||(computermarks.value===""||computermarks.value<=35)){
    if(englishmarks.value===""){
        englishmarks.value=0;
    }
    if(mathsmarks.value===""){
        mathsmarks.value=0;
    }
    if(physicsmarks.value===""){
        physicsmarks.value=0;
    }
    if(chemistrymarks.value===""){
        chemistrymarks.value=0;
    }
     if(computermarks.value===""){
        computermarks.value=0;
    }
    totalmarks = parseInt(englishmarks.value)+parseInt(mathsmarks.value)+parseInt(physicsmarks.value)+parseInt(chemistrymarks.value)+parseInt(computermarks.value);
    console.log(totalmarks)
    return [totalmarks,false];
  }
  else{
    totalmarks = parseInt(englishmarks.value)+parseInt(mathsmarks.value)+parseInt(physicsmarks.value)+parseInt(chemistrymarks.value)+parseInt(computermarks.value);
    return [totalmarks,true];
  }
}
function gradecalculator(){
    if(!validator()){
    let [total,check] = gettotal();
     if(!check){
        let avg = parseInt(total/5);
        document.getElementById("total-ans").innerHTML= `<h3> Total marks are :${total}<h3>`
        document.getElementById("average-ans").innerHTML= `<h3>${avg}<h3>`
        document.getElementById("grade-ans").innerHTML = `<h3>You got F Grade</h3>`;
     }
     else{
        let avg = parseInt(total/5);
        document.getElementById("total-ans").innerHTML= `<h3> Total marks are :${total}<h3>`
        document.getElementById("average-ans").innerHTML= `<h3> Your Average Marks are :${avg}<h3>`
        if(avg>=90){
            document.getElementById("grade-ans").innerHTML= `<h3>You got A Grade<h3>`
        }
        else if(avg>=80 && avg<=89){
            document.getElementById("grade-ans").innerHTML= `<h3>You got B Grade<h3>`
        }
        else if(avg>=70 && avg<=79){
            document.getElementById("grade-ans").innerHTML= `<h3>You got C Grade<h3>`
        }
        else if(avg>=60 && avg<=69){
            document.getElementById("grade-ans").innerHTML= `<h3>You got D Grade<h3>`
        }
        else{
            document.getElementById("grade-ans").innerHTML= `<h3>You got F Grade<h3>`
        }
     }
    }
}