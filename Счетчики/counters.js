var buttons = document.getElementsByClassName('myButton');

var addClickListener = function (button) 
{
    var clicks = 0;
    button.addEventListener('click', function() {
        clicks++;
        button.textContent = "Число кликов: " + clicks;
    });
}
for (var i=0; i<buttons.length; i++) {
    var button = buttons[i];
    addClickListener(button);
}