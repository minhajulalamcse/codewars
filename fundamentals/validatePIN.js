function validatePIN(pin) {
    //return true or false
    let regex = /^[0-9]+$/;
    if (regex.test(pin))
        return pin.length === 4 || pin.length === 6 ? true : false;
    return false;
}
