/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 22;
let isStudent = true;
let ticketFare = 800;

if (age < 10) {
    console.log("Children: Free");
    ticketFare = 0;
} else if (isStudent) {
    // 50% discount
    console.log("Student: 50% Discount applied");
    ticketFare = ticketFare * 0.5;
} else if (age >= 60) {
    // 15% discount
    console.log("Senior Citizen: 15% Discount applied");
    ticketFare = ticketFare - (ticketFare * 0.15);
} else {
    console.log("Regular Ticket: No discount");
}

console.log("Final Ticket Fare: " + ticketFare + " tk");