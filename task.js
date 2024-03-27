//Task - 1 
//Print odd numbers in an array Anonymous 
/*
let fin = [];
let ano = function (arr) {
    for (var i = 0; i < arr.length; i++){

        if (arr[i] % 2 !== 0) {
            fin.push(arr[i])
        }
    }
    return fin;
}
console.log(ano([1,2,3,14,23,13,24,22,55,67,88])); */

                        //IIFE Function 
 /*
 let fin2=[];
 (function(arr){
    for (var i = 0; i < arr.length; i++){

        if (arr[i] % 2 !== 0) {
            fin2.push(arr[i])
        }
    }
 }
 )([1,2,3,4,5,6,7,8,9,11])
 console.log(fin2)*/

                                //Arrow function 
 /*
 let fin3=[]
 let valu = (arr)=>{
    arr.forEach(ele => {  
        if(ele%2!==0){fin3.push(ele)}  
    })
    return fin3
 };console.log(valu([1,2,3,4,5]));*/



   //2.Convert all the strings to title caps in a string array
                        // Anonymous function
/*
 let result=""
 let strarr = function(str){
    let words = str.toLowerCase().split(' ')
    for (let i=0;i<words.length;i++){
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1)+" "
    }
    return result
 };console.log(strarr("The quick brown fox jumps over the lazy dog."));
 */

                                //IFFE Function 
/*
let result2="";
(function(str){
    let words = str.toLowerCase().split(' ')
    for (let i=0;i<words.length;i++){
        result2 += words[i].charAt(0).toUpperCase() + words[i].slice(1)+" "
    }
})("The quick brown fox jumps over the lAzy dog.")
console.log(result2);*/

                                //Arrow Function
                                /*
let result3="";
let arrow = (arrstr3)=>{
    let result=""
    let words = arrstr3.toLowerCase().split(' ')
    for (let i=0;i<words.length;i++){
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1)+" "
    }
    return result;
};console.log(arrow("The quick brown fox jumps over the lAzy dog."));
*/

            // Sum of all numbers in an array
                //Anonymous
                /*
let sums = function(arr){
    let summ=0;
    for(let i=0; i<arr.length; i++){
        summ+=arr[i]
    }
    return summ
};console.log(sums([1,2,3,4,5,6,7,8]));
        */

                    // IFFE Function
    /*
(
    function(arr){
        let summ2=0;
        arr.forEach(ele => {
            summ2+=ele;
        });
        console.log(summ2);
    }
)([1,2,3,4,5,6,7])
*/
                    // Arrow Function
                    /*
let summ3 =0;
let finish3 = (arr)=>{
    arr.forEach(element => {
        summ3+=element;
    });
    return summ3
};console.log(finish3([1,2,3,4,5,6,7,8,9]))
*/

                                    //Return all the prime numbers in an array
                                    //Anonymous Function
/*
let Arr4=[];
let obj=function(arr){
    for (const key of arr) {
        if(key%2!==0){
            Arr4.push(key)
        }
    }return Arr4
};console.log(obj([41,52,6,7,82,13,17]));
*/
                                    //IFFE Function
/*
(
    function(arr){
        let Arr4 = [];
        for (const Key2 of arr) {
            if( Key2%2!==0){
                Arr4.push(Key2)
            }
        }
        console.log(Arr4);
    }
)([3,5,7,14,15,18,40,43,47])
*/
                            // Arrow Function
/*
let prim = (arr)=>{
    let Arr4 = []
    for (const Key2 of arr) {
        if( Key2%2 !== 0){
            Arr4.push(Key2)
        }
    }return Arr4;
};console.log(prim([3,5,7,14,15,18,40,43,51]));
*/

                        // Return all the palindromes in an array
                        // Anonymous Function
/*
let arr5=[];
let palindrome;
let pali = function (arr) {
    for(let i =0; i<arr.length; i++){
        palindrome=([...arr[i]].reverse().join(""))
        if(palindrome===arr[i]){
            arr5.push(arr[i])
        }   
    }
    return arr5
};console.log(pali(["ara","abc","madam","bob","baby"]));
*/
                            // IFFE Function
/*
(
    function (arr){
        let arr5=[];
        let palindrome; 
        for(let i =0; i<arr.length; i++){
            palindrome=([...arr[i]].reverse().join(""))
            if(palindrome===arr[i]){
                arr5.push(arr[i])
            }
        }
        console.log(arr5);
    }
)(["ara","abc","madam","bob","baby"])

*/

                        // Arrow Function
/*
let arr5=[];
let palid = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        const palindrome=([...arr[i]].reverse().join(""))
        if(palindrome===arr[i]){
            arr5.push(arr[i])
        }
    }
    return arr5;
};console.log(palid(["ara","abc","madam","bob","baby"]));
*/

                    //Return median of two sorted arrays of the same size.
                    // Anonymous
/*
let anony = function (ar1,ar2){
    function compareFn(a, b) {
        return a - b;
      }
        ar1=ar1.sort(compareFn)
        ar2=ar2.sort(compareFn)
        console.log(`Sorted First Array${ar1}`);
        console.log(`Sorted Second Array${ar2}`);
        let ar3=ar1.concat(ar2)
        let prev_index = Math.floor(ar3.length/2)-1
        let next_index = Math.floor(ar3.length/2)
        let median = (ar3[prev_index]+ar3[next_index])/2;
        return median
};
console.log(anony([6,4,67,4,8,3],[17,12,13,4,5,61]));
*/

                    // IFFE Function
 /*
(
    function (ar1,ar2){
        function compareFn(a, b) {
        return a - b;
        }
        console.log(`Sorted First Array${ar1}`);
        console.log(`Sorted Second Array${ar2}`);
        ar1=ar1.sort(compareFn)
        ar2=ar2.sort(compareFn)
        let ar3=ar1.concat(ar2)
        let prev_index = Math.floor(ar3.length/2)-1
        let next_index = Math.floor(ar3.length/2)
        let median = (ar3[prev_index]+ar3[next_index])/2;
        console.log(`median value is ${median}`);
    }
)([6,4,67,4,8,3],[17,12,13,4,5,61])
*/

                    //Remove duplicates from an array
                    // Anonymous
/*
let dup = function (Arr) {
    return [...new Set(Arr)]
    
}
console.log(dup(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl","Carl","Adam"]));
*/
                    //IFFE - //Remove duplicates from an array
/*
(
    function (Arr) {
        console.log([...new Set(Arr)]);        
    }
)(["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl","Carl","Adam"])

*/


                    // Rotate the Array for K Times
                    // Anonymous
/*
let rot = function (Arra,k) {
    let n = Arra.length
    k = k % n;
    console.log(`No of Rotations ${k} No of length ${n}`);
    let rotated = [];
    for (let i = 0; i < n; i++) {
        rotated[(i + k) % n] = Arra[i];
    }
    for (let i = 0; i < n; i++) {
        Arra[i] = rotated[i];
    }
    return Arra

// } ;console.log(rot([1,2,3,4,5],2));
*/

                    // IFFE Function 
/*
(
    function(Arra,k){
        let n = Arra.length
        k = k % n;
        let rotated = [];
        for (let i = 0; i < n; i++) {
            rotated[(i + k) % n] = Arra[i];
        }
        for (let i = 0; i < n; i++) {
            Arra[i] = rotated[i];
        }
        console.log(Arra);
    }
)([1,2,3,4,5],2)
*/

 