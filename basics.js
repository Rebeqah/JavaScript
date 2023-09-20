var myString = "I am a 'fun ninja' string"

console.log(myString.length)

var mySecond = "I am second"

console.log(mySecond.indexOf("second"))

document.write(mySecond)

if (myString.indexOf("ninja") === -1){
    console.log("The word doesnt exist")
} else{
    console.log("The word ninja atarts at position "+ myString.indexOf("ninja"))
}

var string1 = "abc"
var string2 = "bcd"

console.log(string1 > string2)