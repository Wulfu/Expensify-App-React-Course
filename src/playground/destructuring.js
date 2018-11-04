const person = {
  // name: 'mati',
  age: 27,
  location: {
    city: 'warsaw',
    temp: 10
  }
};

const { name: firstName = 'Anonymus', age } = person;
const { city, temp: temperature } = person.location;

console.log(`${firstName} is ${age}`);

if(city && temperature){
  console.log(`its ${temperature} in ${city}`);
}

const book = {
  title: 'miszczu i malgosia',
  author: 'buchacz',
  publisher: {
    name: 'pwn'
  }
};

const {
  title,
  author,
} = book;

const { name: publisherName = 'self-published'} = book.publisher;

console.log(title);
console.log(author);
console.log(publisherName);


const address = ['1299 S Juniper Street', 'Philadelfia', 'Pennsylvania', '19147'];
const [, cityName, state = 'New York'] = address;
console.log(`you are in ${cityName}, ${state}`);

const item = ['Coffee (iced)', '$2.00', '$3.00'];
const [name, , medium] = item;
console.log(`A medium ${name} costs ${medium}`);