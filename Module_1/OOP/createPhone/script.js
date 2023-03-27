let Moblie = function (battery, memoryArea1, memoryArea2, memoryArea3) {
    this.battery = battery;
    this.memoryArea1 = memoryArea1;
    this.memoryArea2 = memoryArea2;
    this.memoryArea3 = memoryArea3;

    this.checkStatusOnOff = function () {

        if (this.battery > 0) {
            return true;
        } else {
            return false;
        }
    };

    this.turnOn = function () {
        alert("Điện Thoại đang bật");
    };

    this.turnOf = function () {
        alert("Điện thoại đang tắt");
    };

    this.charge = function () {
        alert("Sạc Pin" + this.battery++);

    };

    this.writeMessenger = function (message) {
       this.message = prompt("This is a messenger");

    };

    this.massengerL = function () { 
        alert(`tin nhắn đã gửi : ${this.message}`);
    };
    this.afterUse = function () {
        alert("Dung mot chuc nang :" + this.battery--);
    }

};
var mobile = new Moblie(30, 100, 100, 100);

function main() {
    mobile.turnOf();
}

function main1() {
    mobile.turnOn();
}

function main2() {
    mobile.charge();
}

function main3() {
    mobile.writeMessenger();
}

function main4() {
    mobile.massengerL();
}

function main5() {
    mobile.afterUse();

}