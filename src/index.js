function addTimes(times) {
    let sumSeconds = 0;
    times.forEach(time => {
        const timeSplit = time.split(':');
        if(timeSplit.length === 2) {
            const min = timeSplit[0];
            const sec = timeSplit[1];
            sumSeconds += convertTimeToSeconds(sec, min);
        }
    });
    const [hours, minutes, seconds] = makeFormat(sumSeconds);
    const msg = `${hours}:${minutes}:${seconds}`;
    console.log(msg);
}

function makeFormat(seconds) {
    let hours = 0, minutes = 0;

    for(let i = 0; seconds > 59; i++) {
        minutes++;
        seconds -= 60;
    }
    for(let i = 0; minutes > 59; i++) {
        hours++;
        minutes -= 60;
    }
    return [hours, minutes, seconds];
}

function convertTimeToSeconds(_sec, _min, _h = 0) {
    let h = convertStringToNumber(_h);
    let min = convertStringToNumber(_min);
    let sec = convertStringToNumber(_sec);

    for(let i = 0; i < h; i++) min += 60;
    for(let i = 0; i < min; i++) sec += 60;

    return sec;
}

function convertStringToNumber(str) {
    return parseInt(str);
}

const test = new Array('25:15', '18:57');
addTimes(test);
