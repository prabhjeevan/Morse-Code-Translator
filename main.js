let btn = document.createElement('button')
btn.textContent = "Translate"
let x = document.querySelector('body')
x.appendChild(btn)

btn.addEventListener('click', translateText)

let alphabet = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 
    'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----',
    '2': '..---', '3': '...--', '4': '....-', '5': '.....', 
    '6': '-....', '7': '--...', '8': '---..', '9': '----.', 
    " ":"/", "!":"-·-·--", ".":"·-·-·-", ",":"--··--"
}

function translateText(evt){
    let inputText = document.getElementById("myInput").value
    console.log(inputText)  
    let arr = inputText.split('')
    console.log(arr)
    let res = arr.map(function(e){return alphabet[e.toUpperCase()]})
    result = res.join('')
    console.log(result)
    let y = document.getElementById("myspan")
    y.innerHTML = result
}

