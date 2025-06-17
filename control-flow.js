// Write a program that takes an array of days like "Mon", "Tue", and "Fri" and Add commentMore actions
// uses a switch statement to print what type of delivery is scheduled on each day.

function checkDeliverySchedule(days) {
    for (const day of days){
        let deliveryType;
        switch (day){
            case 'Mon':
                deliveryType = 'Standard Delivery';
                break;

                case 'Tue':
                    deliveryType = 'Express Delivery';
                    break;

                    case 'Wed':
                        deliveryType = 'Scheduled Delivery';
                        break;

                        case 'Thur':
                            deliveryType = 'Priority Delivery';
                            break;

                            case 'Fri':
                                deliveryType = 'Grocery Delivery';
                                break;


                            case 'Sat':
                            case 'Sun':
                                deliveryType = 'No Delivery';
                                break;

                                default :
                                deliveryType = 'Invalid Day';



        }
        console.log(` ${day} : ${deliveryType}`);
    }
}

const days = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Invalid'];
checkDeliverySchedule(days);


// Create a program that loops through an array of book statuses and prints 
// "Ready to lend" if the status is "available" or "Checked out" if the status is "borrowed".

function bookStatus(booksArray){
    for (let i = 0; i < booksArray.length; i++){
        const status = booksArray[i];
        if (status === 'available'){
            console.log('Ready to lend')
        } else if (status === 'borrowed'){
            console.log('Check Out')
        }
    }

}

const booksArray = ['available', 'borrowed', 'available', 'borrowed'];
bookStatus(booksArray);


// Given an array of customer ages, write a program that checks each age and prints 
// "Adult" if the age is 18 or above, and "Minor" otherwise.

function ageCategory(years) {
    for (let i = 0; i < years.length; i++){
        if ( years[i] >= 18 ){
            console.log('Adult');
        } else {
            console.log('Minor');
        }
    }

}

const years = [12, 19, 25, 8];
ageCategory(years);


// Write a program using a while loop that simulates a countdown of lives in a game 
// starting from 5 and prints "You have X lives left" on each loop until it reaches 0.

function livesCountDown(live) {
    
let lives =live;
    while (lives > 0) {
        console.log('You have ' + `${lives}` + 'lives left');
        lives -- ;
    }
}
livesCountDown(5)




// Using a do...while loop, write a program that loops through an array of user 
// feedback and prints each comment until the array is empty.

function userFeedback(feedBackArray) {
    do{
        if (feedBackArray.length > 0){
            const comment = feedBackArray.shift();
            console.log(comment);

        }
    } while (feedBackArray.length > 0);
}

const feedBackArray = [
    'I had a great exprience.',
    'I loved the website.',
    'The navigation bar is visible.'
];
userFeedback(feedBackArray);

// Write a program that loops through an array of user login statuses and prints 
// "Welcome back!" if the user is "logged in" or "Please log in" otherwise.

function loginStatuses(statuses){
    for (let i = 0; i<statuses.length; i++){
        if (statuses[i] === 'logged in'){
        console.log('Welcome back!');
    } else {
          console.log('Please log in');
    }

    }
}

const statuses = [
    'logged in',
    'logged out',
    'never used',
    'logged in',
    'pending'
];

loginStatuses(statuses);

 
// Write a program that processes an array of support ticket priorities using a switch statement to print
//  how quickly each one should be addressed based on whether the priority is "low", "medium", or "high".
function ticketPriorities(tickeits){
    for (const ticket of tickeits) {
        switch (ticket.priority) {
            case 'low':
                console.log( `Ticket "${ticket.title}" (priority: low) should be addressed between 1-2 days.`);
                break;

                case 'medium':
                    console.log( `Ticket "${ticket.title}" (priority: medium) should be addressed between 24-48 hours.`);
                    break;

                    case 'high':
                        console.log( `Ticket "${ticket.title}" (priority: high) should be addressed between 1-2 hours.`);
                        break;

                        default:
                            console.log(`Ticket '${ticket.title}' (priority: unknown) - please clarify`)
        }
    }
}

const tickeits =[
    {title : 'Browser compatibility issue', priority:'high'},

    {title : 'Security issue', priority:'medium'},

    {title : 'Failed authentication', priority:'low'},
    
    {title : 'major bug affecting users', priority:'high'},
     
];
ticketPriorities(tickeits);


// Create a while loop that simulates a quiz countdown 
// from 10 seconds, printing each number until it reaches 0.
 
function quizCountDown() {
    let timeLeft = 10;
    while (timeLeft >= 0) {
        console.log(timeLeft);
        timeLeft -- ;
    }
}

quizCountDown();