 
export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Brandon',
}

const passenger2: Passenger = {
    name: 'Kimberly',
    children: ['Zoe','Matias'],
}


const printChildren = (passenger: Passenger): number =>{

    // if( !passenger.children ) return 0;

    const howManyChildren = passenger.children?.length || 0;
    //const howManyChildren = passenger.children!.length;

    console.log( passenger.name, howManyChildren);

    return howManyChildren;

}

printChildren( passenger1);
printChildren( passenger2);


