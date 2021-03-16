interface Person {
    name: string;
    age: number;
}
interface Car {
    brand: string;
    wheel: number;
}

const isPerson = (obj: any): obj is Person => {
    return obj.name !== undefined;
}
//
// const hello = (obj: Person | Car) => {
//     if(isPerson(obj)) {
//         obj.
//     } else {
//     }
// }
//

const str = 'asdf2';
console.log(str);
