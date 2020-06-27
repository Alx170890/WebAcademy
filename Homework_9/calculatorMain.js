let btns = document.querySelectorAll("button");
      let input = document.querySelector("input");
      let number1 = "";
      let number2 = "";
      let znak = "";
      btns.forEach(function(item) {
        item.addEventListener("click", function() {
          if (item.value === "C") {
            input.value = "";
          } else if (item.value === "=") {
            input.value = calculator(number1, number2, znak);
            number1 = input.value;
            number2 = "";
            znak = "";
          } else if (
            item.value === "+" ||
            item.value === "-" ||
            item.value === "*" ||
            item.value === "/" ||
            item.value === "%"
          ) {
            znak = item.value;
            input.value = "";
          } else {
            if (znak === "") {
              input.value += item.value;
              number1 = input.value;
            } else {
              input.value += item.value;
              number2 = input.value;
            }
          }
        });
      });