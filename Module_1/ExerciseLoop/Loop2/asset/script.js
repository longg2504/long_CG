function bai1() {
        let number = +prompt('Enter the number of terms: ');
        let n1 = 0, n2 = 1, nextTerm;
    
       alert('Fibonacci Series:');
    
        for (let i = 1; i <= number; i++) {
            alert(n1 + "  ");
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
}

function bai2() {
let x = +prompt('nhập vào số nguyên dương cần tính giai thừa')
let result = 1
  for(let i = 1  ; i <= x   ; i++){
     result *= i 
  }
  alert(result)
         
}
function bai3() {
    str = ''

    for(let i = 0 ; i < 5 ; i++){
        for(let j = 0 ; j<=i ; j++) {
            str += "*"
    }
    str += '\n'
}
    console.log(str)
    str = ''
    for(let i = 0 ; i <= 5 ; i++){
        for(let j = 0 ; j<=5 ; j++){
            if(j>5-1-i) {
            str += ' '
            } else {
            str += '*'
            }   
        }
        str +='\n'

    }
    console.log(str)

    str = ''
    for(let i = 1 ; i<=5 ; i++){
        for(let j = 1 ; j<=5 ; j++){
            if(j<=5-i) {
                str +=(' ')
            }else str += ('*')
        }
        str +='\n' 
    }
    console.log(str)

    str=''
    for(let i = 1 ; i<=5 ; i++){
        for(let j = 1 ; j<=5 ; j++){
            if(j<i) {
                str+= ' '
            }else str+= '*'
        }
        str+='\n'
    }
    console.log(str)

}


function bai4() {
    str = ''
    let m = +prompt('nhap m')
    let n = +prompt('nhap n')
     for(let i = 0 ; i<m ; i++){
        for(let j = 0 ; j<n ; j++){
            if(i == 0 || j == 0 || i == m-1 || j == n-1){
                str += ' * '
            }else{
                str += '   '
            }
        }
        str += '\n'
        
     }
     console.log(str)


}

function bai5() {
    let a = +prompt('nhập vào số tiền vay')
    let b = +prompt('nhập vào số tháng vay')
    let c = +prompt('nhập vào lãi suất ngân hàng theo tháng(%)')

    let monthlyInterestRate = (c/100)/12 
    let monthlyInterest = a*monthlyInterestRate 
    let totalMonthlyPayment = a/12 + monthlyInterest

    alert('số tiền lãi phải trả hàng tháng là ' +monthlyInterest.toFixed(0) ) 
    alert('tổng số tiền phải trả hàng tháng là ' +totalMonthlyPayment.toFixed(0))

}

function bai6() {
    var R = 48;
    var p = -16;
    var D = 60;
    var o = 0;
    var tab = "<table>";
    for (var i = 1; i <= R; i++) {
        tab = tab + "<tr>";
        for (var j = 1; j <= D; j++) {
            if (i <= 3) {
                tab = tab + "<td></td>";
            } else if (i <= D / 4) {
                if ((j >= D / 4 - o && j <= D / 4 + o) || (j >= D * 3 / 4 - o && j <= D * 3 / 4 + o)) {
                    tab = tab + "<td>*</td>";
                } else {
                    tab = tab + "<td></td>";
                }
            } else if (i == D / 4 + 1) {
                tab = tab + "<td>*</td>";
            } else if (i != R) {
                if (j >= 1 + p && j <= D - p) {
                    tab = tab + "<td>*</td>";
                } else {
                    tab = tab + "<td></td>";
                }
            } else {
                tab = tab + "<td></td>";
            }
        }
        p++;
        o++;
        tab = tab + "</tr>"
    }
    // console.log(p);
    tab = tab + "</table>"
    document.write(tab)
}