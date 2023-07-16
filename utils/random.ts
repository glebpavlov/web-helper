export function randomItemArray<T extends any>(array: Array<T>): T {
    return array[Math.floor(Math.random() * array.length)]
}


export function randomInteger(min:number, max: number): number {
    return randomItemArray<any>((new Array(max).fill(null, min+1, max+1)).map((_element, index) => index + 1).filter((_) => !!_));
}