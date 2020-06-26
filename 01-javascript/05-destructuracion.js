const alex = {
    name: "Alex",
};
const francisco = {
    lastname: "Carrera",
};
const array_one = [1,2,3,4,5];
const array_two = [6,7,8,9,10];

const alex_francisco = {
    ...alex,
    ...francisco,
};
alex_francisco.name = "johanna";
console.log('Alex Francisco', alex_francisco);
console.log('Orignial alex',alex);

const super_array = [
    ...array_one,
    ...array_two
];

super_array[0] = 100;
console.log('Super arreglo', super_array);
console.log('Array 1 Original', array_one);