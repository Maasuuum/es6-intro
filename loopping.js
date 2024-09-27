// for of use on array or string not in object
// for in use on object

const numbers = [1, 3, 5, 7, 0];
// for(let i = 0; i < numbers.length; i++){}
// while

// for of
for(const num of numbers){
    // console.log(num);
}

const nobab = 'Sraj Ud Doula';
for(const char of nobab){
    // console.log(char);
}

// for in
const cigerattee = { 
    name: 'benson', 
    color: 'golden', 
    price: 12, 
    isCleaned: true
};

for(const key in cigerattee){
    const value = cigerattee[key];
    console.log(key, value);
}