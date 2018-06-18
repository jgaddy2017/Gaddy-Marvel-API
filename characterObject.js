
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

const characterIndexingList = '<h4>A-Z character index based on characters first name</h4>\
                                <div class="characterIndexTable">\
                                <button class="characterIndex">A</button>\
                                <button class="characterIndex">B</button>\
                                <button class="characterIndex">C</button>\
                                <button class="characterIndex">D</button>\
                                <button class="characterIndex">E</button>\
                                <button class="characterIndex">F</button>\
                                <button class="characterIndex">G</button>\
                                <button class="characterIndex">H</button>\
                                <button class="characterIndex">I</button>\
                                <button class="characterIndex">J</button>\
                                <button class="characterIndex">K</button>\
                                <button class="characterIndex">L</button>\
                                <button class="characterIndex">M</button>\
                                <button class="characterIndex">N</button>\
                                <button class="characterIndex">O</button>\
                                <button class="characterIndex">P</button>\
                                <button class="characterIndex">Q</button>\
                                <button class="characterIndex">R</button>\
                                <button class="characterIndex">S</button>\
                                <button class="characterIndex">T</button>\
                                <button class="characterIndex">U</button>\
                                <button class="characterIndex">V</button>\
                                <button class="characterIndex">W</button>\
                                <button class="characterIndex">X</button>\
                                <button class="characterIndex">Y</button>\
                                <button class="characterIndex">Z</button>\
                            </div>';

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