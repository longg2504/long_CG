let browser = prompt('Enter browser name!')
switch(browser) {
    case 'Edge' :
        alert("You're got the Edge!")
        break;
    case 'Chrome':
    case 'FireFox' :
    case 'Safari' :
        alert("Okay we support these browsers too")
    default :
        alert("We hope that this page looks ok!")
}
