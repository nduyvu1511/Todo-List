const historyValue = document.getElementById('history-value')
const  outputValue = document.getElementById('output-value')
function getHistory() {
   return historyValue.innerText
}
function printHistory(num) {
    historyValue.innerText = num
}
function getOutput() {
    return outputValue.innerText
}
function printOutput(num) {
    if(num == "") {
        outputValue.innerText=num
    }
    else{
        outputValue.innerText = 
        getFormattedNumber(num)
    }
}
function getFormattedNumber(num) {
    if(num == "-") {
        return ""
    }
    var n = Number(num)
    var value = n.toLocaleString("en")
    return value
}
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''))
}
var operator = document.getElementsByClassName("operator")
for(var i =0; i<operator.length; i++) {
    operator[i].addEventListener('click',function(e) {
        if(this.id ==='clear'){
            printHistory("")
            printOutput("")
        }
        else if(this.id == 'backSpace') {
            var output = reverseNumberFormat(getOutput()).toString()
            if(output) {
                output = output.substr(0,output.length-1)
                printOutput(output)
            }
        }
        else {
            var output = getOutput()
            var history = getHistory()
            if(output == "" && history!=""){
                if(isNaN(history[history.length-1])){
                    history = history.substr(0,history.length-1)
                }
            }
            if(output!="" || history!="") {
                output = output==""?output: reverseNumberFormat(output)
                history+=output
                if(this.id =="="){
                    var result = eval(history)
                    printOutput(result)
                    printHistory("")
                }
                else {
                    history+=this.id
                    printHistory(history)
                    printOutput("")
                }
            }
        }
    })
}

var number = document.getElementsByClassName("number")
for(var i =0; i<number.length; i++) {
    number[i].addEventListener('click',function(e) {
        var output = reverseNumberFormat(getOutput())
        if(output!=NaN) {
            output += this.id
            printOutput(output)
        }
    })
}