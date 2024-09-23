// Your code goes here
const rapid=(string)=>{
    let stringArray=Array.from(string)
    const vowels="aeiouAEIOU"
    let newArray=[]
    for(let i=0;i<stringArray.length;i++){
        if (vowels.includes(stringArray[i]))
            continue
        else newArray.push(stringArray[i])
    }
    return newArray.join("").toUpperCase()
}

// Work above this line; do not change code below
let str = "Jhon";
console.log(rapid(str));
