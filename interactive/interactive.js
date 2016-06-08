var turf = require('turf');
// var docsjs = require('documentation');


var select = document.getElementById('turf-select');
select.addEventListener('change', setup);
var exec;

// build nav
for (var func in turf) {
  var elem = document.createElement('option');
  elem.value = elem.innerHTML = func;
  select.appendChild(elem);
}

function setup() {
  value = this.options[this.selectedIndex].innerHTML;
  exec = turf[value];
}

var inputCode = document.getElementById('input-code');
var outputCode = document.getElementById('output-code');
inputCode.addEventListener('keyup', execute);

function execute() {
  console.log(func);
  if (!exec) console.error('Please select a turf function!');

  console.log(this.value);
  try {
    var value = JSON.parse(this.value);
  } catch (err) {
    console.info('Not a valid JSON');
  }

  try {
    var result = exec(value);
    var pretty = JSON.stringify(result);
    outputCode.value = pretty;
  } catch (err) {
    console.info('there was a turf error');
  }

}