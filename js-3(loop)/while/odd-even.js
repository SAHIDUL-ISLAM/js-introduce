/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

let oddNum = 61;
while(oddNum<=100){
    if(oddNum%2===1){
        console.log(oddNum);
    }
    oddNum++;
}

console.log("below even number");

let evenNum = 78;
while(evenNum<=98){
    if(evenNum%2===0){
        console.log(evenNum);
    }
    evenNum++;
}

