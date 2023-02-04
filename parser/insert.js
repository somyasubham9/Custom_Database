// INSERT {"A":"1"} INTO TEST
const InsertCommand=require('../commands/InsertCommand');

const INSERT_COMMAND = 'INSERT';
const BEFORE_TABLE_COMMAND = 'INTO';
const REGEX = new RegExp(
  `${INSERT_COMMAND}\\s+(?<record>{.*})\\s+${BEFORE_TABLE_COMMAND}\\s+(?<tableName>\\S+)`
);
function parseInsertCommand(commandString) {
  const regexMatch = commandString.match(REGEX);
  if (regexMatch === null) 
  return;
const safeParseJSON=(s)=>{
    try {
        return JSON.parse(s);
    } catch (error) {
        return undefined;
    }
}

  const record = safeParseJSON(regexMatch.groups.record);
  if(record===null || record===undefined)return;

  const tableName = regexMatch.groups.tableName;
  

  
  return new InsertCommand({
    record,
    tableName,
  });
}
module.exports=parseInsertCommand;