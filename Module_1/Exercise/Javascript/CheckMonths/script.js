function check() {
    let numB = parseInt(document.getElementById('val').value)
    switch(numB) {
        case 1  :
        case 3  :
        case 5  :
        case 7  :
        case 8  :
        case 10 :
        case 12 : 
            document.getElementById('result').innerHTML =  "Tháng " + numB + " có 31 ngày"
            break
        case 4  :
        case 6  :
        case 9  :
        case 11 :
            document.getElementById('result').innerHTML = "Tháng " + numB + " có 30 ngày"
            break
        case 2  :
            document.getElementById('result').innerHTML = "Tháng " + numB + " có 28 hoặc 29 ngày"
            break
        default :
            document.getElementById('result').innerHTML = "Tháng bạn nhập vào không đúng!!!!!!"
            break
    }   
}