$(document).ready(function() {
    var array = [];
    var monthlySalary = 0;



    $('#employeeinfo').on('submit', function(event) {
      event.preventDefault();

      // initialize a new variable as an empty object
      var values = {};

      // convert the form inputs into an array
      var fields = $('#employeeinfo').serializeArray();

      // iterate over the array and transfer each index into a new property on an object with the value of what was entered.
      fields.forEach(function(element, index, array) {
        // review index notation vs. dot notation on objects
        // here, dot notation wouldn't work
        values[element.name] = element.value;
      });

      console.log(values);

      // clear out inputs
      $('#employeeinfo').find('input[type=text]').val('');

      // append to DOM
      appendDom(values);
    });

    function appendDom(empInfo) {
      $('#tableContainer').append('<tr class="person"></tr>');
      var $el = $('#tableContainer').children().last();

      $el.append('<td>' + empInfo.employeefirstname + '</td>');
      $el.append('<td>' + empInfo.employeelastname + '</td>');
      $el.append('<td>' + empInfo.employeeID + '</td>');
      $el.append('<td>' + empInfo.jobTitle + '</td>');
      $el.append('<td>' + empInfo.annualSalary + '</td>');
      $el.append('<td id="deleteButton">' + '<input type="button" id="delete" name="delete" value="delete">' + '</td>');

    // function calculateMonthlySalaries() {
    monthlySalary += parseInt(empInfo.annualSalary);
      monthlySalary = Math.round(monthlySalary / 12);
      $('#salMonth').text(monthlySalary);
        console.log(monthlySalary);
    }

// console.log(monthlySalary);

})
