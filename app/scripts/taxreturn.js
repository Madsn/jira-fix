// fill any fields marked as mandatory
var elements = document.getElementsByClassName('error-validation');
for (var i in elements) {
  var parent = elements[i].parentNode;
  console.log(parent);
  if (parent) {
    var inputElem = parent.getElementsByTagName('input')[0];
    if (inputElem.type == 'text') {
      console.log('Text field');
      inputElem.value = 0;
    } else if (inputElem.type == 'radio') {
      console.log('Radio button, field: ' + inputElem.classList);
      var options = parent.getElementsByTagName('input');
      console.log(options);
      if (options[0].classList.contains('099')){
        options[0].click();
      } else {
        options[options.length-1].click();
      }
    } else {
      console.log('Unknown input type: ');
      console.log(inputElem);
    }
  }
}
// click submit and wait
document.getElementById('nextAndSubmit').click();
