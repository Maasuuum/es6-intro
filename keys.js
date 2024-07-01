const glass = {
    name: 'glass', 
    color: 'golden', 
    price: 12, 
    isCleaned: true
};
// name-keys/properties; glass - values
console.log(glass);
// all properties
const keys = Object.keys(glass);
// all propertiy value 
const values = Object.values(glass);

const entries = Object.entries(glass);

delete glass.isCleaned;
const {isCleaned, ...shortGlass} = glass;

// Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass)