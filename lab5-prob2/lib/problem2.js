function readInput() {
    const list = [];
    while (true) {
        const input = parseInt(prompt('Enter an integer(a negative integer to quit): '));
        if (input < 0) {
            return list;
        }
        if (!isNaN(input)) {
            list.push(input);
        }
    }
}

function displayStats(list) {
    const sum = list.reduce((acc, num) => acc + num, 0);
    const avg = (sum / list.length || 0).toFixed(2);
    const min = Math.min(...list) || 0;
    const max = Math.max(...list) || 0;
    
    alert(`For the list ${list}, the average is ${avg}, the minimum is ${min}, and the maximum is ${max}`);
}

const inputList = readInput();
displayStats(inputList);
