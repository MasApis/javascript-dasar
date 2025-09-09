import * as variable from './anotherFile.mjs';
console.log(variable.name);
console.log(variable.email);
console.log(variable.age);
console.log(variable.name2);
console.log(variable.email2);
console.log(variable.age2);

// import sayGoodMorning from './anotherFile2.mjs';
// import sayEverything from './anotherFile2.mjs';
// sayGoodMorning();
// sayEverything();

import sayGoodMorningTo, {sayGoodEvening} from './anotherFile2.mjs';
sayGoodMorningTo();
sayGoodEvening();