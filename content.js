// Function to invert colors on the web page
function invertColors() {
  const css = 'body {-webkit-filter: invert(100%); filter: invert(100%); }';
  const head = document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  // Append the CSS rule to invert colors
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));

  head.appendChild(style);
}

// Call the function to invert colors
invertColors();
