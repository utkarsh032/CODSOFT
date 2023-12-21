document.addEventListener("DOMContentLoaded", function () {
  let display = document.querySelector(".calc");
  let buttons = document.querySelectorAll("button");
  let equals = document.querySelector(".equals");
  let allClear = document.querySelector(".all-clear");

  let lastInputIsOperator = false;

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      let buttonText = button.textContent;

      if (button.classList.contains("all-clear")) {
        display.textContent = "";
        lastInputIsOperator = false;
      } else if (button.classList.contains("equals")) {
        try {
          let expression = display.textContent;
          if (!expression.includes('/0')) {
            let result = eval(expression);
            display.textContent = result;
            lastInputIsOperator = false;
          } else {
            display.textContent = "Error: Division by zero";
          }
        } catch (error) {
          display.textContent = "Error";
        }
      } else if (button.classList.contains("operation")) {
        if (!lastInputIsOperator) {
          display.textContent += buttonText;
          lastInputIsOperator = true;
        }
      } else if (button.classList.contains("number")) {
        // Avoid adding a standalone zero
        if (!(buttonText === '0' && display.textContent === '')) {
          display.textContent += buttonText;
          lastInputIsOperator = false;
        }
      } else {
        display.textContent += buttonText;
        lastInputIsOperator = false;
      }
    });
  });
});
