function bai1() {
    let a =prompt('nhập vào số a')
    let b =prompt('nhập vào số b')

    if(a % b == 0 ) {
        alert('a chia hết cho b')
    }
    else {
        alert('a không chia hết cho b')
    }
}

function bai2() {
    let a = prompt('nhập vào số tuổi của học sinh ')
    if(Number(a) < 15) {
        alert('học sinh chưa đủ tuổi vào học lớp 10')
    }
    else {
        alert('học sinh đủ điều kiện vào học lớp 10')
    }
}

function bai3() {
    let a = prompt('nhập vào một số nguyên bất kỳ :')
    if(Number(a) < 0) {
        alert('số nguyên này nhỏ hơn 0')
    }
    else {
        alert('số nguyên này lớn hơn 0')
    }
}

function bai4() {
    let a = prompt('nhập vào số a :')
    let b = prompt('nhập vào số b :')
    let c = prompt('nhập vào số c :')

    numA = parseInt(a)
    numB = parseInt(b)
    numC = parseInt(c)

    if(numA > numB && numA > numB){
        alert('số a lớn nhất')
    } else if(numB > numC){
            alert('số b lớn nhất')
        }else {
            alert('số c lớn nhất')
        }
}

function bai5() {
    let a = prompt('nhập vào số điểm bài kiểm tra')
    let b = prompt('nhập vào điểm thi giữa kỳ')
    let c = prompt('nhập vào điểm thi cuối kỳ')

    let avg = (Number(a)+Number(b)+Number(c))/3
    if(avg > 8.5) {
        alert('học sinh xếp học lực giỏi')
    }else if(avg <= 8 && avg >= 6){
            alert('học sinh xếp học lực khá')
        }else if(avg < 6 && avg >=5) {
            alert('học sinh xếp học lực trung bình ')
        }else {
            alert('học sinh xếp học lực yếu')
        }
}

function bai6() { 
    let a = prompt('nhập vào doanh số bán hàng(đơn vị triệu đồng)')
    let price = 0
    if(Number(a) >= 10000000 && Number(a)< 50000000) {
        price = Number(a) * 0.05 
        alert('số tiền hoa hồng được nhận là :'  + price)
    }else if(Number(a) >= 50000000 && Number(a) < 100000000){
        price = Number(a) * 0.07 
        alert('số tiền hoa hồng được nhận là :' + price)
    }else if(Number(a)>= 100000000 && Number(a) < 250000000) {
        price = Number(a) * 0.1
        alert('số tiền hoa hồng được nhận là :' + price)
    }else if(Number(a) >= 250000000 && Number(a) < 300000000) {
        price = Number(a) * 0.15 
        alert('số tiền hoa hồng được nhân là :' + price)
    }else if(Number(a) < 10000000){
        alert('bạn chưa đủ doanh số để nhận tiền hoa hồng')
    }else {
        alert('chưa có trường hợp này')
    }
}

function bai7 () {
    let phi = 0
    let lv1=1678 , lv2 = 1734, lv3 = 2014 , lv4 = 2536 , lv5 = 2834 , lv6 = 2927 
    let inputA = +prompt('số chữ điện trong tháng :')

    do {
    if(inputA < 0 || inputA == 0){
        inputA = +prompt('hãy nhập lại số chữ điện trong tháng :')
    }
}while(inputA < 0 || inputA == 0)

    if(inputA <= 50 && inputA > 0) {
        phi = inputA*lv1
    }else if(inputA<=100 && inputA > 51) {
        phi = 50*lv1 + ((inputA - 50)*lv2)
    }else if(inputA<=200 && inputA > 101){
        phi = 50*lv1 + 50*lv2 + ((inputA-100)*lv3)
    }else if(inputA <= 300 && inputA > 201){
        phi = 50*lv1 + 50*lv2 + 100*lv3 + ((inputA-200)*lv4)
    }else if(inputA<=400 && inputA > 301) {
        phi = 50*lv1 + 50*lv2 + 100*lv3 + 100*lv4 + ((inputA-300)*lv5)
    }else if(inputA > 400) {
        phi = 50*lv1 + 50*lv2 + 100*lv3 + 100*lv4 + 100*lv5 +((inputA-400)*lv6)
    }
    alert('tổng số tiền phải trả cho' + inputA  +'chữ số điện là :' +phi)
}