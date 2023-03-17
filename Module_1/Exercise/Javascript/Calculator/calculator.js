function Add() {
    let a = document.getElementById('numb1').value
    let b = document.getElementById('numb2').value
    let sum = 0 
    sum = Number(a) + Number (b)
    document.getElementById('Result').innerHTML = ('Result is :' + sum)
}

function Sub() {
    let a = document.getElementById('numb1').value
    let b = document.getElementById('numb2').value
    let sub = 0 
    sub = Number(a) - Number(b)
    document.getElementById('Result').innerHTML = ('Result is :' + sub)
}

function Mul() {
    let a = document.getElementById('numb1').value
    let b = document.getElementById('numb2').value
    let mul = Number(a) * Number(b)
    document.getElementById('Result').innerHTML = ('Result is :' + mul)
}

function Div() {
    let a = document.getElementById('numb1').value
    let b = document.getElementById('numb2').value
    let div = Number(a) / Number(b)
    document.getElementById('Result').innerHTML = ('Result is :' + div)
} 