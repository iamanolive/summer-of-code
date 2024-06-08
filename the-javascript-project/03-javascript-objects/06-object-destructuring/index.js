const band = {
    bandName: "led zeppelin",
    famousSong: "stairway to heaven",
    yearFormed: 1968,
    anotherSong: "kashmir"
};

const var1 = band.bandName;
const var2 = band.famousSong;
console.log(var1);
console.log(var2);

const { bandName, famousSong } = band;
console.log(bandName);
console.log(famousSong);

const { bandName: variable1, famousSong: variable2, ...restProps } = band;
console.log(variable1);
console.log(variable2);
console.log(restProps);