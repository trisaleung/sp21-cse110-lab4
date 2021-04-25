let d = new Date();

function set_time(d) {
    let time = d.toLocaleDateString();
    console.log(time);
}

let interval = window.setInterval(set_time, 1000, d);