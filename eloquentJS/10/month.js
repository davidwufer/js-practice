var month = function() {
  var months = ["January", "February", "March", "April",
                "May", "June", "July", "August", "September",
                "October", "November", "December"];

  return {
    name: function(index) { return months[index]; },
    number: function(month) { return months.indexOf(month); }
  }
}();

debug(month.name(2));
// → March
debug(month.number("November"));
// → 10
