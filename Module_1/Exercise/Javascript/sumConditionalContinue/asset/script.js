function bai1() {
    let C = +prompt('nhập vào giá trị độ C cần chuyển đổi')
    let F = 0 ;
    F =  C * 9/5 + 32
    alert(C + 'Độ C bằng ' +F +' Độ F') 
}

function bai2() {
    let m = +prompt('nhập vào số mét cần chuyển đổi sang feet')
    let ft = 0
    ft = m * 3.2808
    alert(+m +' mét bằng ' +ft + ' feet' )
}

function bai3() {
    let a = +prompt('nhập vào chiều dài cạnh a = ')
    let s = 0 
    s = Math.pow(a,2)
    alert('diện tính hình vuông có chiều dài bằng ' +a +' là: ' +s)
}

function bai4() {
    let a = +prompt('nhập vào cạnh a')
    let b = +prompt('nhập vào cạnh b')
    let s = 0 
    s = a * b 
    alert('diện tính hình chữ nhật có cạnh a = ' +a +' và cạnh b = ' +b +' là ' +s)
}

function bai5() {
    let a = +prompt('nhập vào cạnh a')
    let b = +prompt('nhập vào cạnh b')
    let s = 0
    s = a*b/2
    alert('diện tính hình tam giác vuông là ' +s)
}

function bai6() {
    let a = +prompt('nhập vào hệ số a')
    let b = +prompt('nhập vào hệ số b')
    if(a == 0) {
        if(b == 0) {
            alert('phương trình vô số nghiệm')
        }
        if(b != 0) {
            alert('phương trình vô nghiệm')
        }  
    }
    if(a != 0) {
        let x = 0 
        x = -b/a
        alert('phương trình có nghiệm là ' +x)
    }
}

function bai7() {
    let a = +prompt('nhập hệ số a')
    let b = +prompt('nhập hệ số b')
    let c = +prompt('nhập hệ số c')

    if(a == 0)
    {
        if(b == 0)
        {
            if(c == 0) 
            {
                alert('phương trình có vô số nghiệm')
            }else {
                alert('phương trình vô nghiệm')
            }
        }else {
            let x = -c/b
            alert('phương trình có nghiệm duy nhất là ' +x)
        }
    }else {
        let d
        d = Math.pow(b,2)-4*a*c
        if(d < 0) {
            alert('Phương trình vô nghiệm')
        }else if(d == 0){
            let y = -b/(2*a) 
            alert('phương trình có nghiệm kép là ' +y)
        }else {
            let z1 , z2 
            z1 = (-b+sqrt(d))/(2*a)
            z2 = (-b-sqrt(d))/(2*a)
            alert('phương trình có 2 nghiệm phân biệt là x1 =  ' +z1 +' và x2 = ' +z2 )
        }
    }
}

function bai8() {
    let age = +prompt('nhập vào số')
    if(age > 0 && age < 120) {
        alert('đây là tuổi của một người ')
    } else {
        alert('đây không phải là tuổi một người')
    }
}

function bai9() {
    let a = +prompt('nhập cạnh a')
    let b = +prompt('nhập cạnh b')
    let c = +prompt('nhập cạnh c')

    if(a <= 0 || b <= 0 || c <= 0 ) {
        alert('cạnh phải lớn hơn không')
    }else if(a + b >c || a + c > b ||b + c > a) {
        alert('không phải 3 cạnh của tam giác')
    }else if(a == b && b == c && a == c) {
        alert('đây là 3 cạnh của tam giác đều')
    }else if(a == b || b == c || c == a){
        alert('đây là 3 cạnh của tam giác cân')
    }else if(Math.pow(a,2)+Math.pow(b,2) == Math.pow(c,2) || 
            a*c + Math.pow(c,2) == Math.pow(b,2) ||
            Math.pow(b,2)+Math.pow(c,2) == a*c) {
                alert('đây là 3 cạnh của tam giác vuông')
            }else {
                alert('đây là 3 cạnh của tam giác thường')
            }
}

function bai10() {
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

function bai11() {
    let salary = +prompt('nhập vào tiền lương của bạn')
    let insurancePremium = +prompt('nhập vào mức đóng bảo hiểm của bạn')
    let person = +prompt(' nhập vào số người phụ thuộc bạn')
    let GTBT = 11000000
    let insurancePrice = insurancePremium * 0.08 + insurancePremium *0.015 + insurancePremium *0.01
    let taxableIncome 
    let priceOption 
    let taxMoney
    
    priceOption = person * 4400000
    
    taxableIncome = salary - insurancePrice - GTBT - priceOption 

    if(taxableIncome < 0) {
        alert('bạn không phải đóng thuế')
    }else {
        if(taxableIncome <= 5000000 && taxableIncome > 0){
            taxMoney = taxableIncome * 0.05
        }else if(taxableIncome <= 10000000 && taxableIncome > 5000000) {
            taxMoney = taxableIncome*0.1 - 250000
        }else if(taxableIncome <=18000000 && taxableIncome > 10000000){
            taxMoney = taxableIncome*0.15 - 750000
        }else if(taxableIncome <= 32000000 && taxableIncome > 18000000){
            taxMoney = taxableIncome*0.2 - 1650000
        }else if(taxableIncome <=52000000 && taxableIncome > 32000000){
            taxMoney = taxableIncome*0.25 - 3250000
        }else if(taxableIncome <=80000000 && taxableIncome > 52000000){
            taxMoney = taxableIncome*0.3 - 5850000
        }else if(taxableIncome > 80000000){
            taxMoney = taxableIncome*0.35 - 9850000
        }
    }
    alert('số tiền thuế bạn phải đóng là : ' +taxMoney)
}

function bai12() {
    let a = +prompt('nhập vào số tiền vay')
    let b = +prompt('nhập vào số tháng vay')
    let c = +prompt('nhập vào lãi suất ngân hàng theo tháng(%)')

    let monthlyInterestRate = (c/100)/12 
    let monthlyInterest = a*monthlyInterestRate 
    let totalMonthlyPayment = a/12 + monthlyInterest

    alert('số tiền lãi phải trả hàng tháng là ' +monthlyInterest.toFixed(0) ) 
    alert('tổng số tiền phải trả hàng tháng là ' +totalMonthlyPayment.toFixed(0))

}