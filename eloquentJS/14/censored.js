<!doctype html>

<input type="text">
<script>
var field = document.querySelector("input");
field.addEventListener("keypress", function(event) {
  var disallowedChars = ["q", "w", "x"];
  var input = String.fromCharCode(event.charCode);
  if (disallowedChars.join("").indexOf(input.toLowerCase()) >= 0) {
    event.preventDefault();
  }
});
</script>
