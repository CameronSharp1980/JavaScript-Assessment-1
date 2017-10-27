//1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
// careful not to uppercase the i in the word pair
var sentence = 'When i went to the mall i bought a pair of shoes.';

function capPronounI(sen) {
    //parse sentence for lowercase 'i' and make uppercase if: surrounded by spaces
    var out = ''
    for (var i = 0; i < sen.length; i++) {
        var character = sen[i];
        var prevChar = sen[i - 1]
        var nextChar = sen[i + 1]
        if (character == 'i') {
            if (prevChar == ' ' && nextChar == ' ') {
                out += character.toUpperCase()
                continue
            }
        }
        out += character
        // console.log(out)
    }
}
capPronounI(sentence)

//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';

function countA(sen) {
    var out = 0
    for (var i = 0; i < sen.length; i++) {
        var currentChar = sen[i];
        if (currentChar == 'a' || currentChar == 'A') {
            out++
            console.log(out)
        }
    }
}
// countA(jsHistory)

//3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
//I SCREAM, you SCREAM, we all SCREAM for icecream

var text = 'I scream, you scream, we all scream for icescream'; //works mid-word with icescream

function scream(sen) {
    var out = ''
    var searchStartIndex = 0
    for (var i = 0; i < sen.length; i++) {
        var index = sen.indexOf("scream", searchStartIndex)
        var character = sen[i];
        if (i == index) {
            out += "SCREAM"
            i += 5 //One less than length of inserted string because of for loop iterator adding 1
            searchStartIndex = sen.indexOf("scream") + i
            continue
        }
        out += character
    }
    return out
}

console.log(scream(text))