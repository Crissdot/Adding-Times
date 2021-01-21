function addTimes(times) {
    times.forEach(time => {
        const timeSplit = time.split(':');
        if(timeSplit.length === 2) {
            const min = timeSplit[0];
            const sec = timeSplit[1];
        }
    });
}

const test = new Array('25:15', '18:57');
addTimes(test);
