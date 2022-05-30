const palindromes = function (text) {
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
    text = text.toLowerCase()
    text = text.replace(/ /g,'')
    let i = 0;
    let j = text.length - 1;
    while (i < text.length) {
        while (j >= 0) {
            if (text[i] != text[j]) {
                return false
            }
            i += 1
            j -= 1
        }
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
