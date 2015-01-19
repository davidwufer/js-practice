<!doctype html>
<script src="code/mountains.js"></script>
<script src="code/chapter/13_dom.js"></script>

<h1>Heading with a <span>span</span> element.</h1>
<p>A paragraph with <span>one</span>, <span>two</span>
  spans.</p>

<script>
  function byTagName(node, tagName) {
    var elements = [];
    var nodes = [node];
    while (nodes.length != 0) {
      var elem = nodes.shift();
      if (elem.tagName == tagName.toUpperCase()) {
        elements.push(elem);
      }
      for (var index = 0; index < elem.childNodes.length; index += 1) {
	      nodes.push(elem.childNodes[index]);
      }
    }
    return elements;
  }

  console.log(byTagName(document.body, "h1").length);
  // → 1
  console.log(byTagName(document.body, "span").length);
  // → 3
  var para = document.querySelector("p");
  console.log(byTagName(para, "span").length);
  // → 2
</script>
