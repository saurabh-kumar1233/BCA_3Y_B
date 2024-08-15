function calculater(){
    let num1=parseFloat(document.getElementById("num1").value);

    let num2=parseFloat(document.getElementById("num1").value);
    let operater=parseFloat(document.getElementById("operater").value);
    let result;
    if(operater=="add"){
        result=num1+num2;
    }
    else if(operater=="subtract"){
        result=num1-num2
    }
    else if(operater=="multiple"){
        result=num1*num2
    }
    else if(operater=="divide")
    {
        result=num1/num2
    }
    document.getElementById("result").innerText="result:" +result;
}