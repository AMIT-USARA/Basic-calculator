let btn = document.querySelectorAll(".inner-btn");
let container = document.querySelector(".container");
let input = document.querySelector(".input");
let input1 = document.querySelector(".input1");
let input2 = document.querySelector(".input2");
let dot = document.querySelector("#dot");
let inputvalue = input.value;
let sign = 0;

btn.forEach((innerbtn) => {
  innerbtn.addEventListener("click", () => {
    let inputvalue = input.value;
    let input1value = input1.value;
    if (input.value == 0) {
      input1.value = 0;
      input2.value = "";
    }
    if (innerbtn.value == "AC") {
      input.value = 0;
      input1.value = 0;
      input2.value = "";
      dot.disabled = false;
      input.disabled = false;
      input1.disabled = true;
    } else if (innerbtn.value == "DEL") {
        let sub = inputvalue.substring(0,inputvalue.length-1);
        input.value = sub;
        

    } else if (innerbtn.value == "%") {
      sign = innerbtn.value;
      input.disabled = true;
      dot.disabled = false;
      input2.value = sign;
    } else if (innerbtn.value == "/") {
      sign = innerbtn.value;
      input.disabled = true;
      dot.disabled = false;
      input2.value = sign;
    } else if (innerbtn.value == "*") {
      sign = innerbtn.value;
      input.disabled = true;
      dot.disabled = false;
      input2.value = sign;
    } else if (innerbtn.value == "-") {
      input.disabled = true;
      sign = innerbtn.value;
      dot.disabled = false;
      input2.value = sign;
    } else if (innerbtn.value == "+") {
      sign = innerbtn.value;
      input.disabled = true;
      dot.disabled = false;
      input2.value = sign;
    } else if (innerbtn.value == "=") {
      if (sign == "%") {
        input1.value = input.value % input1.value;
      } else if (sign == "*") {
        input1.value = input.value * input1.value;
      } else if (sign == "/") {
        input1.value = input.value / input1.value;
      } else if (sign == "+") {
        let x = eval(inputvalue);
        let y = eval(input1value);
        let z = x + y;
        input1.value = z;
      } else if (sign == "-") {
        input1.value = input.value - input1.value;
      }
      input.value = 0;
      dot.disabled = false;
      input.disabled = false;
      input1.disabled = true;
    } else if (innerbtn.value == ".") {
      if (input.disabled == true) {
        input1.value = input1.value + innerbtn.value;
      } else {
        input.value = input.value + innerbtn.value;
      }
      dot.disabled = true;
    } else {
      if (input.value == "0" || input.value == "00") {
        input.value = innerbtn.value;
      } else if (
        (input1.value == "0" && input.disabled == true) ||
        (input1.value == "00" && input.disabled == true)
      ) {
        input1.value = innerbtn.value;
        input.disabled = true;
      } else {
        if (input.disabled == true) {
          input1.value = input1.value + innerbtn.value;
        } else {
          input.value = input.value + innerbtn.value;
        }
      }
    }
  });
});
