function bai1() {
    let s
    let count = 99
    for (let i = 1; i <= count; i++) {
        document.write(i + '\n')
        if (i == count) {
            alert('đã hoàn thành việc đếm từ 1 đến 100')
        }
    }

}

function bai2() {
    let input = +prompt('xin hãy nhập vào nhiệt độ hiện tại ')
    do {
        if (input > 100) {
            input = +prompt('xin hãy giảm nhiệt độ hiện tại ')
        }
        if (input < 20) {
            input = +prompt('xin hãy tăng nhiệt độ hiện tại ')
        }
    } while (input > 100 || input < 20)
}

function bai3() {
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

function bai4(){
    // Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
    let F = 0 , F0= 0, F1=0
    let chia5 = ""
    let fibonacci = "";
    for (let i=0; i<20;i++){
        if(i==0){
            F=1
            F1=1
            fibonacci += F+ " "
        }else{

            F= F0+F1
            F0 = F1
            F1 = F
            fibonacci += F+ " "
            console.log(i +" = "+F)
            if(F%5==0){
                chia5 = F
                break
            }
        }
    }

    document.write("Sô chia hết cho 5 trong dãy là "+chia5)
}

function bai5() {
    // Tính tổng của 20 số đầu tiên trong dãy fibonacci.
    let F = 0 , F0= 0, F1=0, tong=0
    let fibonacci = "";
    for (let i=0; i<20;i++){
        if(i==0){
            F=1
            F1=1
            fibonacci += F+ " "
            tong +=F
        }else{
            F= F0+F1
            F0 = F1
            F1 = F
            fibonacci += F+ " "
            tong +=F
            console.log(i +" = "+F)
        }
    }
    document.write("Dãy Fibonacci là "+fibonacci+"<br>")
    document.write("Tổng của các số = "+tong)
}

function bai6() {
    let count = 0, tong =0
    let dayso =""
    for (let i=1; ; i++){
        if(i%7==0){
            dayso += i+" "
            console.log(dayso)
            tong += i
            count++
            if(count==30) break
        }
    }
    document.write(dayso+"<br>")
    document.write("Tổng bằng "+tong)
}

function bai7() {
    document.write("Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra \"Fizz\", 5 thì in ra \"Buzz\" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ \"FizzBuzz\".<br>")
    for (let i=1; i<=100; i++){
        if (i%3==0 && i%5 ==0){
            document.write(i+" FizzBuzz <br>")
        }else {
            if (i%3==0){
                document.write(i+" Fizz <br>")
            }
            else if(i%5==0){
                document.write(i+" Buzz <br>")
            }
        }
    }
}

function bai8() {
    let phamvi = Number(prompt("Trò chơi đoán số từ 0 - "))
    let nhapso = Number(prompt("Nhập vào số muốn đoán"))
    let soRamdom
    if(phamvi){
        soRamdom = Math.floor(Math.random()*phamvi)
        if(soRamdom == nhapso){
            alert("Bạn đã đoán đung")
        }else{
            while (soRamdom != nhapso){
                alert("Bạn đoán sai số đúng là "+soRamdom)
                nhapso = Number(prompt("Nhập vào số muốn đoán"))
            }
            alert("Bạn đoán đúng")
        }
    }
}