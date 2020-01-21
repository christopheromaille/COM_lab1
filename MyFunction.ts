function wordCount(word:string):number{
    let count:number=word.replace(/s/g,"").length;
    return count;
}

let myCount:number = wordCount("Test 1");
console.log(myCount);




function str_len_both(value: string, spaces?: boolean): number{
    //note ? for optional parameter,
    //so will default to false due to
    //code in the function, but I could
    //change from optional and provide
    //a default to the parameter by writing
    //the signature as
//function str_len_both(value: string, spaces: boolean=false): number{
let num: number;
if(spaces){
num = value.replace(/\s+/, "").length;
}else{
num = value.length;
}
return num;
}
console.log("Function combined: String length with spaces and all is:"+str_len_both("test 1",false));
console.log("Function combined: String length with spaces not includedin the count: "+str_len_both("test 1", true));
console.log("Function combined: String length with spaces and all is, notsetting spaces parameter so will default to false: "+str_len_both("test 1"));

