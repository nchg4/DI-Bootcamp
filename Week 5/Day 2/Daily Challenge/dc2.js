function stars(rows) {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += '*  ';
        }
        console.log(line);
    }
}
stars(6);

