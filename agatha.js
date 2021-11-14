const result1El = document.querySelector('.result-1');
const result2El = document.querySelector('.result-2');
const tempResultEl = document.querySelector('.temp-result');
const numberEl = document.querySelectorAll('.number');
const operationEl = document.querySelectorAll('.operation');
const equalEl = document.querySelector('.equal');
const clearAllEl = document.querySelector('.all-clear');
const deleteEl = document.querySelector('.last-entity-clear');

let res1Num = '';
let res2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

numberEl.forEach((number) => {
    number.addEventListener('click', (e)=> {
        if(e.target.innerText === '.' && !haveDot) {
            haveDot = true;} 
        else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        res2Num += e.target.innerText;
        result2El.innerText = res2Num;

    })
});

operationEl.forEach( operation => {
    operation.addEventListener('click', (e)=> {
        if (!res2Num) result; 
        haveDot = false ;
        const operationName = e.target.innerText;
        if (res1Num && res2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(res2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

function clearVar(name = '') {
    res1Num += res2Num + ' ' + name + ' ';
    result1El.innerText = res1Num;
    result2El.innerText = '';
    res2Num = '';
    tempResultEl.innerText = result;
}

function mathOperation() {
    if (lastOperation === 'x') {
        result = parseFloat(result) * parseFloat(res2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(res2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(res2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(res2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(res2Num);
    }
}

equalEl.addEventListener('click', (e)=> {
    if (!res1Num || !res2Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    result2El.innerText = result;
    tempResultEl.innerText = '';
    res2Num = result;
    res1Num = '';
});

clearAllEl.addEventListener('click', (e)=> {
    result1El.innerText = '0';
    result2El.innerText = '0';
    res1Num = '';
    res2Num = '';
    result = '';
    tempResultEl.innerText = '0';
})

deleteEl.addEventListener('click', (e)=> {
    result2El.innerText = result2El.innerText.slice(0,-1);
    res2Num = result2El.innerText;
    
})

window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' || 
        e.key === '1' || 
        e.key === '2' || 
        e.key === '3' || 
        e.key === '4' || 
        e.key === '5' || 
        e.key === '6' || 
        e.key === '7' || 
        e.key === '8' || 
        e.key === '9' || 
        e.key === '.' 
    ) {
        clickButtonEl(e.key);
    } else if (
        e.key === '*' ||
        e.key === '+' ||
        e.key === '-' ||
        e.key === '%' 
    ){
        clickOperation(e.key);
    } else if (e.key === "*"){
        clickOperation ('x');
    } else if (e.key =='Enter' || e.key === "=") {
        clickEqual();
    }
})

function clickButtonEl(key) {
    numberEl.forEach ( button => {
        if (button.innerText === key ) {
            button.click();
        }
    } )
}

function clickOperation (key) {
    operationEl.forEach (button => {
        if (button.innerText === key) {
            button.click();
        }
    })
}

function clickEqual () {
    equalEl.click ();
}
