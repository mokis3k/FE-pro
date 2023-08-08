function wordToFormat() {
    word = prompt(`Enter word`)
    while (word === null || word.replaceAll(` `, ``) === ``) {
        word = prompt(`Enter word`)
    }
    word = word.replaceAll(` `, ``)

    wordFormat = prompt(
        `Choose how to format your word:\n
        1. Uppercase\n
        2. Lowercase\n
        3. Capitalize`
        )
    while (
        wordFormat === null
        || wordFormat.replaceAll(` `, ``) === ``
        || wordFormat.toLowerCase() !== `uppercase`
        && wordFormat.toLowerCase() !== `lowercase`
        && wordFormat.toLowerCase() !== `capitalize`
    ) {
        wordFormat = prompt(
            `Choose how to format your word:\n
            1. Uppercase\n
            2. Lowercase\n
            3. Capitalize`
            )
    }

    wordFormat = wordFormat.replaceAll(` `, ``).toLowerCase();
    if (wordFormat === `uppercase`) {
        word = word.toUpperCase()
    } else if (wordFormat === `lowercase`) {
        word = word.toLowerCase()
    } else {
        word = word.charAt(0).toUpperCase() + word.slice(1)
    }

    return word
}


answer = confirm(`Tell me three most important words`);
if (!answer == false) {
    firstWord = wordToFormat()
    secondWord = wordToFormat()
    thirdWord = wordToFormat()
    console.log(`${firstWord} ${secondWord} ${thirdWord}!`)
}