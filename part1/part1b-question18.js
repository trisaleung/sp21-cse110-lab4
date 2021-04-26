setInterval(set_time, 1000);

function set_time() {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time);
};