const removePunctuation = a => {
    let b = a.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'');
    return b.replace(/ /g,'');
}

const palindromes = string => {
    const reverseString = Array.from(string).reverse();
    const combinedString = reverseString
                            .join('')
                            .toLowerCase();
    return removePunctuation(string.toLowerCase()) == removePunctuation(combinedString);
};

// Do not edit below this line
module.exports = palindromes;
