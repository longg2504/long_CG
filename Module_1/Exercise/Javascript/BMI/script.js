function Check() {
    let weight = document.getElementById('wt').value
    let height = document.getElementById('ht').value
    let get = weight / ( Math.pow(height, 2) )
    let bmi = get.toFixed(4)
    let result = " "

    if (bmi < 16) 
        result = "Gầy độ 3. Ăn thật nhiều vào nhé" + "<img src = 'https://i.pinimg.com/originals/3b/97/63/3b97635b6bd4a5bfc436fbd3908f05e0.gif' width='100' height= '100'>";
    else if (bmi < 17)
        result = "Gầy độ 2"
    else if (bmi < 18.5)
        result = "Gầy độ 1"
    else if (bmi < 25)
        result = "Bình thường"
    else if (bmi < 30)
        result = "Thừa cân"
    else if (bmi < 35)
        result = "Béo phì độ 1" 
    else if (bmi < 40)
        result = "Béo phì độ 2" 
    else
        result = "Béo phì độ 3" + "<img src = 'https://i.pinimg.com/originals/73/4d/11/734d11cc677595ce3c3e5e3bba02721f.gif' width='100' height= '100'>"

    document.getElementById("rs").innerHTML = "Chỉ số BMI là: " + bmi + ". Bạn " + "<b>"+ result + "</b>";
}


