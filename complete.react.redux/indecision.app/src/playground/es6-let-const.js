var nameVar = 'Andrei';
console.log('nameVar', nameVar);

let nameLet = 'Mihai';
// invalid to re-define a let
// let nameLet = 'Andrei';
console.log('nameLet', nameLet);

const nameConst = 'Radu';
// invalid to re-define a const
// const nameConst = 'Andrei';

// invalid to re-assigned a const
// nameConst = 'Andrei';

console.log('nameConst', nameConst);

// ***** [SCOPING] ****

// var scoping is restricted to the function
// enclosing the definition
function getPetName() {
  var petName = 'Spike';
  return petName;
}

console.log('Pet name: ', getPetName());

// cannot access the petName var
// console.log('Pet name: ', petName);

// let and const are also function-scoped
// but also block-scoped

var fullName = 'Andrei Fecioru';

if (fullName) {
  let tokens = fullName.split(' ');
  var firstName = tokens[0];
  let lastNameLet = tokens[1];
  const lastNameConst = tokens[1];

  console.log('[IN] First name (var): ', firstName);

  console.log('[IN] Last name (let): ', lastNameLet);
  console.log('[IN] Last name (const): ', lastNameConst);
}

// var is function-scoped (not blocked scoped)
console.log('[OUT] First name (var): ', firstName);

// let and const are block-based
// console.log('[OUT] Last name (let): ', lastNameLet);
// console.log('[OUT] Last name (const): ', lastNameConst);