

export function whtasMyType<T>( argument: T ) : T {

    return argument
}


let amIString = whtasMyType<string>('Hola Mundo');
let amINumber = whtasMyType<number>(100);
let amIArray = whtasMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split);
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));


