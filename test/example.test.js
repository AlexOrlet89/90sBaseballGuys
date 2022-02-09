// IMPORT MODULES under test here:

import { renderGuys } from '../render-utils.js';

// import { example } from '../example.js';

const test = QUnit.test;

test('renderGuys returns a rendered div', (expect) => {

    const expected = `<div class="Guy"><a href="./guys/?id=1"><img src="./assets/Randy Johnson.jpg"><h4>Randy Johnson</h4></a></div>`;
    

    const actual = renderGuys({
        name: `Randy Johnson`,
        id: `1`,
        hp: 8,
        quote: 0,
        quote2: 0,
    });


    expect.equal(actual.outerHTML, expected);
});
