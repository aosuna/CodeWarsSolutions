function list(names) {
    const listNames = names.map(x => x.name);
    if(listNames.length < 2) {
        return listNames[0] || '';
    } 
    return listNames.slice(0, -1).join(', ') + 
           ' & ' + listNames.slice(listNames.length-1);
};

console.log(list([{name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'}, {name: 'Homer'}, {name: 'Marge'}]));
console.log(list([{name: 'Bart'}, {name: 'Lisa'}]));
console.log(list([{name: 'Bart'}]));
console.log(list([]));
