function concatenateNow(){
var result=document.getElementById("first-letter").value;
result=result+document.getElementById("second-letter").value;
document.getElementById("result").value=result;
return false;
}