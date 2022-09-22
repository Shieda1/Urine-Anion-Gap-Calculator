// https://www.omnicalculator.com/health/urine-anion-gap

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const urineaniongapRadio = document.getElementById('urineaniongapRadio');
const naRadio = document.getElementById('naRadio');
const kRadio = document.getElementById('kRadio');
const clRadio = document.getElementById('clRadio');

let urineaniongap;
let na = v1;
let k = v2;
let cl = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

urineaniongapRadio.addEventListener('click', function() {
  variable1.textContent = 'Na';
  variable2.textContent = 'K';
  variable3.textContent = 'Cl';
  na = v1;
  k = v2;
  cl = v3;
  result.textContent = '';
});

naRadio.addEventListener('click', function() {
  variable1.textContent = 'Urine anion gap';
  variable2.textContent = 'K';
  variable3.textContent = 'Cl';
  urineaniongap = v1;
  k = v2;
  cl = v3;
  result.textContent = '';
});

kRadio.addEventListener('click', function() {
  variable1.textContent = 'Urine anion gap';
  variable2.textContent = 'Na';
  variable3.textContent = 'Cl';
  urineaniongap = v1;
  na = v2;
  cl = v3;
  result.textContent = '';
});

clRadio.addEventListener('click', function() {
  variable1.textContent = 'Urine anion gap';
  variable2.textContent = 'Na';
  variable3.textContent = 'K';
  urineaniongap = v1;
  na = v2;
  k = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(urineaniongapRadio.checked)
    result.textContent = `Urine anion gap = ${computeurineaniongap().toFixed(2)}`;

  else if(naRadio.checked)
    result.textContent = `Na = ${computena().toFixed(2)}`;

  else if(kRadio.checked)
    result.textContent = `K = ${computek().toFixed(2)}`;

  else if(clRadio.checked)
    result.textContent = `Cl = ${computecl().toFixed(2)}`;
})

// calculation

// urineaniongap = na + k − cl

function computeurineaniongap() {
  return Number(na.value) + Number(k.value) - Number(cl.value);
}

function computena() {
  return Number(urineaniongap.value) - Number(k.value) + Number(cl.value);
}

function computek() {
  return Number(urineaniongap.value) - Number(na.value) + Number(cl.value);
}

function computecl() {
  return Number(na.value) + Number(k.value) - Number(urineaniongap.value);
}