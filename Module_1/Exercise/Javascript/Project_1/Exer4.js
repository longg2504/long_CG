//bài tập 4
let input = prompt('bạn muốn nhập Đường kính hay Bán Kính Đường tròn D/R?')
if(input == 'd' || input == 'D') {
    let inputD = prompt('mời bạn nhập đường kính hình tròn:')
    let d = parseFloat(inputD)
    let C = d*Math.PI

    document.write('chu vi hình tròn là :' +C)
}
else {
    let inputR = prompt('mời bạn nhập bán kính hình tròn:')
    let r = parseFloat(inputR)
    let C = (r*2)*Math.PI 

    document.write('chu vi hình tròn là :' +C)
}


