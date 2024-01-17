var container = document.createElement("div");
container.setAttribute("class", "container");

var calculator = document.createElement("div");
calculator.setAttribute("class", "caculator");

var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholder", "0");
input.setAttribute("id", "result");

var button1 = document.createElement("button");
button1.setAttribute("class", "color1");
button1.setAttribute("onclick", "Clear()");

button1.innerHTML = "AC";

var button2 = document.createElement("button");
button2.setAttribute("class", "color1");
button2.setAttribute("onclick", "del()");
button2.innerHTML = "DEL";

var button3 = document.createElement("button");
button3.setAttribute("class", "color1");
button3.setAttribute("onclick", "display('%')");
button3.innerHTML = "%";

var button4 = document.createElement("button");
button4.setAttribute("class", "color2");
button4.setAttribute("onclick", "display('/')");
button4.innerHTML = "/";

var button5 = document.createElement("button");
button5.setAttribute("class", "color3");
button5.setAttribute("onclick", "display('7')");
button5.innerHTML = "7";

var button6 = document.createElement("button");
button6.setAttribute("class", "color3");
button6.setAttribute("onclick", "display('8')");
button6.innerHTML = "8";

var button7 = document.createElement("button");
button7.setAttribute("class", "color3");
button7.setAttribute("onclick", "display('9')");
button7.innerHTML = "9";

var button8 = document.createElement("button");
button8.setAttribute("class", "color2");
button8.setAttribute("onclick", "display('*')");
button8.innerHTML = "x";

var button9 = document.createElement("button");
button9.setAttribute("class", "color3");
button9.setAttribute("onclick", "display('4')");
button9.innerHTML = "4";

var button10 = document.createElement("button");
button10.setAttribute("class", "color3");
button10.setAttribute("onclick", "display('5')");
button10.innerHTML = "5";

var button11 = document.createElement("button");
button11.setAttribute("class", "color3");
button11.setAttribute("onclick", "display('6')");
button11.innerHTML = "6";

var button13 = document.createElement("button");
button13.setAttribute("class", "color2");
button13.setAttribute("onclick", "display('-')");
button13.innerHTML = "-";

var button14 = document.createElement("button");
button14.setAttribute("class", "color3");
button14.setAttribute("onclick", "display('1')");
button14.innerHTML = "1";

var button15 = document.createElement("button");
button15.setAttribute("class", "color3");
button15.setAttribute("onclick", "display('2')");
button15.innerHTML = "2";

var button16 = document.createElement("button");
button16.setAttribute("class", "color3");
button16.setAttribute("onclick", "display('3')");
button16.innerHTML = "3";

var button17 = document.createElement("button");
button17.setAttribute("class", "color2");
button17.setAttribute("onclick", "display('+')");
button17.innerHTML = "+";

var button18 = document.createElement("button");
button18.setAttribute("class", "zero");
button18.setAttribute("onclick", "display('0')");
button18.innerHTML = "0";

var button19 = document.createElement("button");
button19.setAttribute("class", "color3");
button19.setAttribute("onclick", "display('.')");
button19.innerHTML = ".";

var button20 = document.createElement("button");
button20.setAttribute("class", "color2");
button20.setAttribute("onclick", "calculate()");
button20.innerHTML = "=";

calculator.append(input);
calculator.append(button1);
calculator.append(button2);
calculator.append(button3);
calculator.append(button4);
calculator.append(button5);
calculator.append(button6);
calculator.append(button7);
calculator.append(button8);
calculator.append(button9);
calculator.append(button10);
calculator.append(button11);
calculator.append(button13);
calculator.append(button14);
calculator.append(button15);
calculator.append(button16);
calculator.append(button17);
calculator.append(button18);
calculator.append(button19);
calculator.append(button20);

container.append(calculator);
document.body.append(container);

let outputScreen = document.getElementById("result");
function display(num) {
  outputScreen.value += num;
}

function calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (err) {
    alert("Ah Ah Ahhhh Invalid!!!!!");
  }
}

function Clear() {
  outputScreen.value = "";
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}
