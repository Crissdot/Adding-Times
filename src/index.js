function addTimes(times) {
    times.forEach(time => {
        const timeSplit = time.split(':');
        if(timeSplit.length === 2) {
            const min = timeSplit[0];
            const sec = timeSplit[1];
            console.log(convertTimeToSeconds(sec, min));
        }
    });
}

function convertTimeToSeconds(_sec, _min, _h = 0) {
    let h = convertStringToNumber(_h);
    let min = convertStringToNumber(_min);
    let sec = convertStringToNumber(_sec);

    for(let i = 0; i < h; i++) {
        min += 60;
    }
    for(let i = 0; i < min; i++) {
        sec += 60;
    }
    return sec;
}

function convertStringToNumber(str) {
    return parseInt(str);
}

const test = new Array('25:15', '18:57');
addTimes(test);
