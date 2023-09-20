var num1, num2, ans, state;

function fn0() {
  var Pnum = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = Pnum + 0;
}

function fn1() {
  var Pnum = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = Pnum + 1;
}

function fn2() {
  var Pnum = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = Pnum + 2;
}
function fn3() {
  var Pnum = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = Pnum + 3;
}
function fn4() {
  var Pnum = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = Pnum + 4;
}
function fn5() {
  var Pnum = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = Pnum + 5;
}
function fn6() {
  var Pnum = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = Pnum + 6;
}
function fn7() {
  var Pnum = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = Pnum + 7;
}
function fn8() {
  var Pnum = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = Pnum + 8;
}
function fn9() {
  var Pnum = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = Pnum + 9;
}

function fnadd() {
  num1 = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = "";
  state = "add";
}

function fnsub() {
  num1 = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = "";
  state = "sub";
}

function fndiv() {
  num1 = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = "";
  state = "div";
}

function fnmul() {
  num1 = document.getElementById("number").innerHTML;
  document.getElementById("number").innerHTML = "";
  state = "mul";
}

function feql() {
  num2 = document.getElementById("number").innerHTML;

  num1=parseInt(num1);
  num2=parseInt(num2);
  if (state == "add") {
    ans = num1 + num2;
  } else if (state == "sub") {
    ans = num1 - num2;
  } else if (state == "div") {
    ans = num1 / num2;
  } else if (state == "mul") {
    ans = num1 * num2;
  }

  document.getElementById("number").innerHTML=ans;
}

function fnclr() {
  var Pnum = document.getElementById("number").innerHTML;
  var cl = Pnum.slice(0, -1);
  document.getElementById("number").innerHTML = cl;
}

function faclr(){
    document.getElementById("number").innerHTML=0;
    state="";
    
}