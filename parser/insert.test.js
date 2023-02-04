const parseInsertCommand=require('./insert');
describe("With A Valid Command",()=>{
    const command='INSERT {"a":1,"b":2} INTO table';
    test("It returns correct InsertCommand",()=>{
        const insertCommand=parseInsertCommand(command);
        expect(insertCommand.record).toEqual({a:1,b:2});
        expect(insertCommand.tableName).toBe("table");
    })
})
describe("With An Invalid Record",()=>{
    const command='INSERT {abcdef} INTO table';
    test("It returns undefined",()=>{
        const insertCommand=parseInsertCommand(command);
        expect(insertCommand).toBeUndefined();
    })
})
describe("With An Invalid TableName",()=>{
    const command='INSERT {"a":1,"b":2} INTO';
    test("It returns undefined",()=>{
        const insertCommand=parseInsertCommand(command);
        expect(insertCommand).toBeUndefined();
    })
})
describe("With An No Insert clause",()=>{
    const command='{"a":1,"b":2} INTO table';
    test("It returns undefined",()=>{
        const insertCommand=parseInsertCommand(command);
        expect(insertCommand).toBeUndefined();
    })
})
describe("With An No INTO clause",()=>{
    const command='INSERT {"a":1,"b":2} table';
    test("It returns undefined",()=>{
        const insertCommand=parseInsertCommand(command);
        expect(insertCommand).toBeUndefined();
    })
})