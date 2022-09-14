let square = (num: number) => {
    // num.toUpperCase() -> will throw error
    
    // num() -> will throw error

    return num * num
}


let greet = (person: string) => {
    person * person
    return `Hello there, ${person}`
}

// example of function with multiple parameters and with different types
let doSomething = (person: string, age: number, isFunny: boolean) => {}

// example of function working with default parameters
let greet2 = (person: string = 'stranger') => {
    return `Hello there, ${person}!`
}

square(3)
// square('asd') -> will throw error
// square(true) -> will throw error

greet('Michael')
// greet(true) -> will throw error

doSomething('Chickenman', 50, true)
// doSomething('ok') -> will throw error (expects 3 arguments, only got 1)

greet2()


