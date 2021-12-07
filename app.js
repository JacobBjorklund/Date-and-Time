function currentTime() {
    let date = new Date();
    let yyyy = date.getFullYear();
    let yy = date.getMonth() + 1;
    let dd = date.getDate();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    dd = (dd < 10) ? '0' + dd : dd;
    yy = (yy < 10) ? '0' + yy : yy;

    let time = hh + ':' + mm + ':' + ss;
    let datum = yyyy + ':' + dd + ':' + yy;

    document.getElementById("tid").innerText = time;
    var t = setTimeout(function () { currentTime() }, 1000);
    document.getElementById('datum').innerText = datum;

}

currentTime();