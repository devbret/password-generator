function main() {
    //Primary program variables.
    const userInput = document.querySelector(`#userInput`);
    const charLength = document.querySelector(`#charLength`);
    const generate = document.querySelector(`#generate`);
    const output = document.querySelector(`#output`);
    const library = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`,`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`];
    //Updating the total characters to be generated, based on user input.
    userInput.addEventListener(`input`, function(){
        charLength.innerText = `${userInput.value} Characters`;
    });
    //Generating a random string of numbers and letters, to a specific length chosen by the user.
    generate.addEventListener(`click`, function(){
        //Creating the main answer array.
        let answer = [];
        //Looping through the library as many times as the user has specified.
        for (let i = 0; i < Number(userInput.value); i++) {
            //Choosing random numbers for determining which character will be used, and whether it will be uppercase or lowercase (if applicable).
            const rN = Math.random();
            const choice = Math.floor(Math.random() * library.length);
            //Assigning the character to a variable and then adding it to the answer array.
            const solved = (rN < .5) ? library[choice].toLowerCase() : library[choice].toUpperCase();
            answer.push(solved);
        }
        //Updating the output variable with final answer array, as joined into a string.
        output.innerText = answer.join(``);
        //Making sure that the final output can fit within the dimensions of the app by allowing run-on words to break onto a new row/line.
        output.style.wordBreak = `break-all`;
    });
    //Making sure the charLength value is correctly displayed on page reloads.
    window.addEventListener(`load`, function(){
        charLength.innerText = `${userInput.value} Characters`;
    })
}
main();