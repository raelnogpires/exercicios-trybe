let names = ['José', 'Joana', 'Nádia', 'Fernanda', 'Cairo', 'Michael Jackson'];

function biggerName(names) {
    let lgth = 0;
    let longest;

    for (let index = 0; index < names.length; index += 1) {
        if (names[index].length > lgth) {
            lgth = names[index].length;
            longest = names[index];
        }
    }

    console.log(longest);
}

biggerName(names);
