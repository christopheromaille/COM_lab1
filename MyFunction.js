function wordCount(word) {
    var count = word.replace(/s/g, "").length;
    return count;
}
var myCount = wordCount("Test 1");
console.log(myCount);
function str_len_both(value, spaces) {
    //note ? for optional parameter,
    //so will default to false due to
    //code in the function, but I could
    //change from optional and provide
    //a default to the parameter by writing
    //the signature as
    //function str_len_both(value: string, spaces: boolean=false): number{
    var num;
    if (spaces) {
        num = value.replace(/\s+/, "").length;
    }
    else {
        num = value.length;
    }
    return num;
}
console.log("Function combined: String length with spaces and all is:" + str_len_both("test 1", false));
console.log("Function combined: String length with spaces not includedin the count: " + str_len_both("test 1", true));
console.log("Function combined: String length with spaces and all is, notsetting spaces parameter so will default to false: " + str_len_both("test 1"));
