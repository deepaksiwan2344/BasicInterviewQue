function longestCommonPrefix(arr) {
   if(arr?.length === 0){
       return ""
   }
   let prefix = ""
   for(let i = 0; i < arr?.length; i++){
       let currentChar = arr[0][i];
       for(let j = 1; j < arr?.length; j++){
           if(i >= arr[j].length || arr[j][i] !== currentChar){
               return prefix;
           }
       }
       prefix += currentChar
   }
   return prefix;
}
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
//fl