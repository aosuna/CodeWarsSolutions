function towerBuilder(nFloors) {
    // build here
    let towers = [];
    for (let i = nFloors-1; i >= 0; i--) {
        if(i === nFloors-1) {
            towers.unshift('*'.repeat((2*i) + 1));
        } else {
            let spaces = (towers.length);
            console.log('number of spaces: ' + spaces);
            let floor = ' '.repeat(spaces) + 
                        '*'.repeat((2*i) + 1) + 
                        ' '.repeat(spaces);
            towers.unshift(floor);
        }
    }
    return towers;
}

console.log(towerBuilder(3));