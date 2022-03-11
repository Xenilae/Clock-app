const loadTime = () => {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(loadTime, 1000);
}

const checkTime = (i) => {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}