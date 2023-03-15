function yesClick()
{
    alert("I love you so much <3");
}
function noHover()
{
    var x = Math.round(Math.random() * (window.innerWidth-212));
    var y = Math.round(Math.random() * (window.innerHeight-50));
    document.getElementById('btnNo').style.left = x + 'px';
    document.getElementById('btnNo').style.top = y + 'px';
}