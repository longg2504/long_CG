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

function bai7() {
    let  fee = 0 , sum = 0 , feeStand = 25000
    let minCall = +prompt('số phút gọi trong tháng : ')
    do {
        if(minCall < 0 || minCall == 0){
            minCall = +prompt('hãy nhập lại số phút bạn đã gọi trong tháng :')
        }
    }while(minCall < 0 || minCall == 0)
    if(minCall > 200) {
        fee = (minCall-200)*200+150*400+50*600
    }else if(minCall > 50){
        fee = (minCall-50)*400+50*600;
    }else {
        fee = minCall*600
    }
    sum = fee + feeStand
    alert('bạn đã gọi ' +minCall + ' phút số tiền bạn phải trả cho ' +minCall + ' phút là ' +sum)
}