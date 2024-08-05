export const database = {
    category:{
        javascript: {
        data: [
            {
                question: `let a = {}, b = {}
                console.log(a == b)
                console.log(a === b)`,
                options: {
                    a: "false false",
                    b: "false true",
                    c: "true false",
                    d: "true true"
                },
                correctAnswer: "a"
            },
            {
                question: `let a = [1, 2, 3], b = [1, 2, 3]
                console.log(a == b)
                console.log(a === b)`,
                options: {
                    a: "false false",
                    b: "false true",
                    c: "true false",
                    d: "true true"
                },
                correctAnswer: "a"
            },
            {
                question: `let a = 10;
                console.log(++a)
                console.log(a++)`,
                options: {
                    a: "11 11",
                    b: "11 10",
                    c: "10 11",
                    d: "10 10"
                },
                correctAnswer: "a"
            },
            {
                question: `let a = 5;
                let b = "5";
                console.log(a == b)
                console.log(a === b)`,
                options: {
                    a: "true true",
                    b: "true false",
                    c: "false true",
                    d: "false false"
                },
                correctAnswer: "b"
            },
            {
                question: `function test() {
                    console.log(this);
                }
                test();`,
                options: {
                    a: "undefined",
                    b: "null",
                    c: "window or global object",
                    d: "error"
                },
                correctAnswer: "c"
            },
            {
                question: `let a = null;
                console.log(typeof a);`,
                options: {
                    a: "null",
                    b: "object",
                    c: "undefined",
                    d: "boolean"
                },
                correctAnswer: "b"
            },
            {
                question: `let a = "Hello" + 1 + 2;
                console.log(a);`,
                options: {
                    a: "Hello12",
                    b: "Hello3",
                    c: "NaN",
                    d: "undefined"
                },
                correctAnswer: "a"
            },
            {
                question: `let a = "2" + 2 - 1;
                console.log(a);`,
                options: {
                    a: "21",
                    b: "3",
                    c: "NaN",
                    d: "undefined"
                },
                correctAnswer: "a"
            },
            {
                question: `console.log(0.1 + 0.2 === 0.3);`,
                options: {
                    a: "true",
                    b: "false",
                    c: "undefined",
                    d: "NaN"
                },
                correctAnswer: "b"
            },
            {
                question: `let a;
                console.log(a + 1);`,
                options: {
                    a: "1",
                    b: "undefined",
                    c: "NaN",
                    d: "Error"
                },
                correctAnswer: "c"
            }
        ]
    }
    }
    
}

