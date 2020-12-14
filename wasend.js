function() {
    var phoneNumber = prompt("Please enter the phone number including country code (don't enter any symbol like +", "e.g. 919999999999");

    function isNumber(num) {
        return /^\d+$/.test(num)
    }

    if (phoneNumber != null && isNumber(phoneNumber)) {
        window.open("https://wa.me/" + phoneNumber);
    } else {
        alert("Please input numeric values only!")
    }
}
