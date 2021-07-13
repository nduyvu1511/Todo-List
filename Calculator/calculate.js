const historyValue = document.getElementById('history-value')
const outputValue = document.getElementById('output-value')

function getHistory() {
    return historyValue.innerText
}

function printHistory(number) {
    return historyValue.innerText = number
}

function getOutput() {
    return outputValue.innerText
}

function printOutput(number) {
    if(number =="") {
        return outputValue.innerText = number
    } else {
        return outputValue.innerText = getFormattedNumber(number)
    }
}

function getFormattedNumber(number) {
    if(number == "-") {
        return ""
    }
    var value = Number(number).toLocaleString("en")
    return value
}

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''))
}

var operator = document.getElementsByClassName('operator')
for(var i = 0; i<operator.length; i++) {
    operator[i].addEventListener('click', function(event) {
        if(this.id == "clear") {
            console.log(this.id)
            printHistory("")
            printOutput("")
        }
        else if(this.id =='backSpace') {
            var output = reverseNumberFormat(getOutput()).toString()
            if(output) {
                output =output.substr(0,output.length-1)
                printOutput(output)
            }
        }
        else {
            var output = getOutput()
            var history = getHistory()
            if(history!="" && output ==""){
                if(isNaN(reverseNumberFormat(output))){
                    history = history.substr(0,history.length-1)
                }
            }
            if(history!="" || output!= "") {
                output = output=="" ? output: reverseNumberFormat(output)
                history+=output
                if(this.id =="=") {
                    printHistory("")
                    printOutput(eval(history))
                }
                else {
                    history+= this.id
                    printHistory(history)
                    printOutput("")
                }
            }
        }
    })
}

var number = document.querySelectorAll(".number")
for(var i = 0; i<number.length; i++) {
    number[i].addEventListener('click',function(event) {
        var output = reverseNumberFormat(getOutput())
        if(output!= NaN){
            output += this.id
            printOutput(output)
        }
    })
}







