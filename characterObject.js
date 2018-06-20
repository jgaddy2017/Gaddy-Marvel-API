
const characterGroupObject = {
    A: "",
    B: "",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
    J: "",
    K: "",
    L: "",
    M: "",
    N: "",
    O: "",
    P: "",
    Q: "",
    R: "",
    S: "",
    T: "",
    U: "",
    V: "",
    W: "",
    X: "",
    Y: "",
    Z: ""
}

let characterIndexingList = '<h4>A-Z character index based on characters first name</h4>\
                                <p class="indexingInformation">Red is disabled due to not recieving data yet</p>\
                                <p class="indexingInformation">White is enabled and ready to be clicked</p>\
                                <p class="indexingInformation">Feel free to use your keyboard to select the letter index</p>\
                                <div class="characterIndexTable">\
                                <button class="indexbutton characterIndexDisabled" id="A" disabled>A</button>\
                                <button class="indexbutton characterIndexDisabled" id="B" disabled>B</button>\
                                <button class="indexbutton characterIndexDisabled" id="C" disabled>C</button>\
                                <button class="indexbutton characterIndexDisabled" id="D" disabled>D</button>\
                                <button class="indexbutton characterIndexDisabled" id="E" disabled>E</button>\
                                <button class="indexbutton characterIndexDisabled" id="F" disabled>F</button>\
                                <button class="indexbutton characterIndexDisabled" id="G" disabled>G</button>\
                                <button class="indexbutton characterIndexDisabled" id="H" disabled>H</button>\
                                <button class="indexbutton characterIndexDisabled" id="I" disabled>I</button>\
                                <button class="indexbutton characterIndexDisabled" id="J" disabled>J</button>\
                                <button class="indexbutton characterIndexDisabled" id="K" disabled>K</button>\
                                <button class="indexbutton characterIndexDisabled" id="L" disabled>L</button>\
                                <button class="indexbutton characterIndexDisabled" id="M" disabled>M</button>\
                                <button class="indexbutton characterIndexDisabled" id="N" disabled>N</button>\
                                <button class="indexbutton characterIndexDisabled" id="O" disabled>O</button>\
                                <button class="indexbutton characterIndexDisabled" id="P" disabled>P</button>\
                                <button class="indexbutton characterIndexDisabled" id="Q" disabled>Q</button>\
                                <button class="indexbutton characterIndexDisabled" id="R" disabled>R</button>\
                                <button class="indexbutton characterIndexDisabled" id="S" disabled>S</button>\
                                <button class="indexbutton characterIndexDisabled" id="T" disabled>T</button>\
                                <button class="indexbutton characterIndexDisabled" id="U" disabled>U</button>\
                                <button class="indexbutton characterIndexDisabled" id="V" disabled>V</button>\
                                <button class="indexbutton characterIndexDisabled" id="W" disabled>W</button>\
                                <button class="indexbutton characterIndexDisabled" id="X" disabled>X</button>\
                                <button class="indexbutton characterIndexDisabled" id="Y" disabled>Y</button>\
                                <button class="indexbutton characterIndexDisabled" id="Z" disabled>Z</button>\
                            </div>';

/*
let openingRemarks = `<p class="openingStatements">Thank you from visiting my <span class="importantOpeningStatement">Marvel API Application!</span><p>
                      <p class="openingStatements">To begin: on the <span class="importantOpeningStatement">top left</span> 
                      you will find a <span class="importantOpeningStatement">
                      character button</span>. Clicking on this button will give you an A-Z index. Use this index to access a list of Marvel characters.
                      Characters are listed by their first names.</p>
                      <p class="openingStatements">Example: If you want information on <span class="importantOpeningStatement">Captain America</span>, 
                       <span class="importantOpeningStatement">click on the "C"</span> from the index. For easier accessibily, you can also <span class="importantOpeningStatement">
                      click the letter on your keyboard</span>.</p>
                      <p class="openingStatements">These characters are being accessed from the <span class="importantOpeningStatement">Marvel API</span>.</p>
                      <p class="openingStatements">You will notice that the <span class="importantOpeningStatement">character button is disabled </span>as soon as you get 
                      to the site, thereby enabling all characters to <span class="importantOpeningStatement">load in at one time</span>. 
                      This ensures a smoother user experience. Loading Process below:</p>
                      <p class="dataTimer"><span id="loader">0</span> out of 26<p>
                      <p class="openingStatements">The statistics and background of each character is accessed from the Super Hero API, so <span class="importantOpeningStatement">not all characters will have information</span></p>
                      <p class="openingStatements">An interesting <span class="importantOpeningStatement">list of characters</span> to begin with would include:</p>
                      <p class="importantOpeningStatement">Deadpool</p>
                      <p class="importantOpeningStatement">Thanos</p>
                      <p class="importantOpeningStatement">Iron Man</p>
                      <p class="importantOpeningStatement">Cable</p>
                      <p class="importantOpeningStatement">Darkhawk</p>`;
*/
let openingRemarks = `<p class="openingStatements">Thank you from visiting my <span class="importantOpeningStatement">Marvel API Application!</span><p>
                      <p class="openingStatements">An interesting <span class="importantOpeningStatement">list of characters</span> to begin with would include:</p>
                      <p class="importantOpeningStatement">Deadpool</p>
                      <p class="importantOpeningStatement">Thanos</p>
                      <p class="importantOpeningStatement">Iron Man</p>
                     <img src="showMarvelApp.gif" class="gifInstruction moblePhone" alt="showing marvel application">`;