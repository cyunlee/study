function arrElement<T>(a: T[], b: number): any {
    if(b>=a.length){
        return false;
    }else{
        return a[b];
    }
}

console.log(arrElement<string>(['a'], 0));
console.log(arrElement<string>(['a'], 1));


