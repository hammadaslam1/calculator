
      let display = document.getElementById('question');
      let result = document.getElementById('answer');

      function appendNumber(number) {
          
        display.value += number;
      }


      function appendOperator(operator) {
        display.value += operator;
      }
      function backOperator() {
        if (display.value) {
          
          let val = display.value.split('');
          val.length = val.length-1;
          display.value = val.join('');
        }
      }

      function clearDisplay() {
        display.value = '';
        result.value = '';
      }

      function calculateResult() {
          try {
            let dV = display.value
              if(dV.indexOf('^')!==-1) {
                dV = display.value.replace('^', '**');
              }
              var execute = eval(dV)
              result.value = execute;
            } catch (ex) {
                result.value = "error"
            }
            
        }
