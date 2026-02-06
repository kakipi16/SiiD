export const test = () => {
    console.log("test");

    const reversArray = (arr: string[]):string[] => {
        const reversArray: string[] = [];
        let index:number = arr.length - 1;
        while(index >= 0 ){
            reversArray.push(arr[index]);
            index--;
        }
        return reversArray
    }
    console.log(reversArray(["a", "b", "c"]));
}