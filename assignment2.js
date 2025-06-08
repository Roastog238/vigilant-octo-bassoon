function countFrequency(array) {
    let frequency = {};

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        frequency[num] = (frequency[num] || 0) + 1;
    }
for (let key in frequency) {
        let count = frequency[key];
        

        if (count === 4) {
            category = "frequent";
        } else if (count === 3) {
            category = "common";
        } else if (count === 1) {
            category = "rare";
        } else {
            category = "other";
        }

        console.log(`Number ${key} is ${category}`);
    }
}

// Test it
countFrequency([1, 2, 3, 4, 5, 1, 1]);
