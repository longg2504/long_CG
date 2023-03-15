function yesClick()
{
    alert("Yes. you are right ");
}
function noHover()
{
    var x = Math.round(Math.random() * (window.innerWidth-212));
    var y = Math.round(Math.random() * (window.innerHeight-50));
    document.getElementById('btnNo').style.left = x + 'px';
    document.getElementById('btnNo').style.top = y + 'px';
}