//1.Get your  Input
//1.2 Choose your Parser
//2. Parse your input
//3. Execute Input
//4. Return the data
//5. Repeat

const insertParser = require('./parser/insert');
const insertCommand=insertParser('INSERT { "A":1 } INTO test');
console.log(insertCommand);