
      let display = document.getElementById('question');
      let result = document.getElementById('answer');

      function appendNumber(number) {
        display.value += number;
      }

      function appendOperator(operator) {
        display.value += operator;
      }

      function clearDisplay() {
        display.value = '';
        result.value = '';
      }

      function calculateResult() {
        
      }
