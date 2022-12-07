let inputAdultos = document.getElementById('adultos');
let inputCrianças = document.getElementById('crianças');
let inputDuraçao = document.getElementById('duraçao');
let resultado = document.querySelector(".resultados");
let resultadoAdultos = document.querySelector('.resultados_adultos');
let resultadoCrianças = document.querySelector('.resultados_crianças');
let resultadoDuraçao = document.querySelector('.resultados_duraçao');

let churrascoArea = document.querySelector('.churrasco_area');
let btn = document.querySelector('.btn');

function calcular () {
    let adultos = inputAdultos.value;
    let crianças = inputCrianças.value;
    let duraçao = inputDuraçao.value;

    let qtdTotalCarne = carnePP(duraçao) * adultos + (carnePP(duraçao) / 2 * crianças);
    let qtdTotalCerveja = cervejaPP(duraçao) * adultos;
    let qtdTotalBebidas = bebidasPP(duraçao) * adultos + (bebidasPP(duraçao) / 2 * crianças);

    resultadoAdultos.innerHTML = `${qtdTotalCarne / 1000}Kg de Carne`;
    resultadoCrianças.innerHTML = `${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja`;
    resultadoDuraçao.innerHTML = `${Math.ceil(qtdTotalBebidas / 2000)} Pets 2L de Bebidas`;
}

function carnePP(duraçao) {
    if (duraçao >= 6) {
        return 650;
    } else {
        return 400;
    }
}
function cervejaPP(duraçao) {
    if (duraçao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}
function bebidasPP(duraçao) {
    if (duraçao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

function show () {
    churrascoArea.style.height = "490px"
    resultado.style.display = "block"
}
btn.addEventListener('click', calcular)
btn.addEventListener('click', show) 