// You are building a feature rollout system for a startup where 
// a FeatureToggle constructor function has properties: featureName 
// (string), isEnabled (boolean), and userGroupAccess (array of strings 
// like "betaTesters", "admins"), and you must use a prototype method 
// canAccess(userRole) to return true or false, a method toggleFeature(flag) 
// to enable or disable the feature, and simulate access attempts using if-else 
// and switch statements for different roles.

function FeatureToggle(featureName, isEnabled, userGroupAccess){
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;

}

FeatureToggle.prototype.canAccess = function(userRole){
    return this.isEnabled && this.userGroupAccess.includes(userRole);

}

FeatureToggle.prototype.toggleFeature = function(flag){
   if( this.isEnabled == flag){
    return enabled;

   } else {
    return false;
   }
}

const darkMode = new FeatureToggle('darkMode', 'true', ['betaTesters', 'admins', 'logins']);
console.log(darkMode);
console.log(darkMode.canAccess('student'));
console.log(darkMode.toggleFeature('student'));



// In a freelancer time-tracking platform, create a TimeLog
//  constructor function with properties: freelancerName (string),
//  projectDetails (object with name and hourlyRate), and logs (array
//  of objects with date, hoursWorked), then add prototype methods to
//  calculate total earnings, filter logs by date range, and determine
//  if weekly hours exceed 40 using if-else logic.

function TimeLog(freelancerName, projectDetails, logs){
    this.freelancerName = freelancerName;
    this.projectDetails = projectDetails;
    this.logs = []
};
 TimeLog.prototype.totalEarnings = function(){
    sum = 0;
    for ( const log of this.logs){
        sum += this.projectDetails.hourlyRate * this.logs.hoursWorked;

    }

 };

 TimeLog.prototype.filterLogs = function (startDate, endDate){
    return this.logs.filter(log => log.date >= startDate && log.date <= endDate);
 };

 TimeLog.prototype.exceedWeek = function(){
    if (this.logs.hoursWorked * 7 > 40){
        return 'Exceeded the weekly hours'
    } else {
        return 'Weekly hours not exceeded'
    };
 };

 const hiredFreelancer = new TimeLog('Bob', {name:'WebDeveloper', hourlyRate:400}, [{'2/1/2025': 7}])
 console.log(hiredFreelancer.totalEarnings());
 console.log(hiredFreelancer.exceedWeek());
 console.log(hiredFreelancer.filterLogs('2/1/2025'));
 



//You are developing a startup’s order management
//system where an Order constructor function should 
//contain customer (object with name and email), items
//(array of objects with productName, quantity, and 
//unitPrice), and status (string), then implement prototype 
//methods to compute total cost, update order status based on
//payment, and categorize order urgency using switch and
//conditional statements.

function Order(customer, items, status){
    this.customer = customer;
    this.items = items;
    this.status = status;
};

Order.prototype.totalCost = function(){
    return this.items.reduce((total, item) => total + item.quantity * item.unitPrice, 0)
};

Order.prototype.updateStatus= function(){
    switch (this.status){
        case 'paid': return 'High Priority';
        case 'pending': return 'Normal  Priority';
        case 'unpaid' : return 'Low Priority';
        default : return 'Review Priority';
    }
};

const firstOrder = new Order({name: 'Pierra Wahu', email:'wahupierra@gmail.com' },
    [{productName: 'Man Bag', quantity:3, unitPrice:1600},
      {productName: 'Apple Pods', quantity:1, unitPrice:4600},
      {productName: 'necklace earphones', quantity:2, unitPrice:1300},

    ], 'paid');

    console.log(firstOrder);
    console.log(firstOrder.totalCost());
    console.log(firstOrder.updateStatus());

//In a startup’s employee review tool, design an Employee 
//class with properties: id (number), name (string), 
//performanceMetrics (object with keys like communication,
//efficiency, and reliability), and feedback (array of strings), 
//then use prototypes to calculate an average score, classify 
//performance level using control flow, and add new feedback based 
//on conditions.

class Employee {
constructor(id, name, performanceMetrics) {
        this.id = id;
        this.name = name;
        this.performanceMetrics = performanceMetrics;
        this.feedback = [];
}
}

Employee.prototype.calculateAverageScore = function() {
        const scores = Object.values(this.performanceMetrics);
        return scores.reduce((sum, score) => sum + score, 0) / scores.length;
}

Employee.prototype.classifyPerformance = function() {
        const average = this.calculateAverageScore();
        return average >= 7 ? "Excellent" : 
               average >= 5 ? "Good" : "Needs Improvement";
               
}

Employee.prototype.addFeedback = function(newFeedback)  {
        if (newFeedback.length > 5) this.feedback.push(newFeedback);
};


const firstEmployee = new Employee(1, "Ariana Grande", { communication: 7, efficiency: 6, reliability: 5 });
console.log(firstEmployee.calculateAverageScore()); 
console.log(firstEmployee.classifyPerformance()); 
firstEmployee.addFeedback("Hardworking Employee");
console.log(firstEmployee.feedback); 


// Build a simple e-learning system where a Course class has properties:
//  title (string), instructor (object with name and expertise), and
// students (array of objects with name and completionStatus), then add 
// prototype methods to return names of students who completed the course,
//  count enrolled students by expertise area, and use control flow to 
// output different messages for instructors with more or less than 5 students.
class Course{
    constructor(tittle, instructor, students){
        this.tittle = tittle;
        this.instructor = instructor;
        this.students = students;                      
    }
}

Course.prototype.studentsWhoCompletedTheCourse = function(){
          if(this.students.completionStatus === completed){
            return this.students.name;
          } else {
            return 'Course not Completed'
          }
};


Course.prototype.enrolledStudents = function (expertise){
    if(this.instructor.expertise == expertise){
        return this.students.length;
    }

         
}

Course.prototype.instructorsMessage = function(){
    if(this.students.length > 5){
        return `Instructor ${this.instructor.name}, your class has ${this.students}`; 
    } else {
        return `Instructor ${this.instructor.name}, your class has students less than 5`;
    };
};

const pythonCourse = new Course ('Python', {name: 'Alma', expertise: 'Python'}, [{name: ''}])
console.log(pythonCourse.instructorsMessage());
console.log(pythonCourse.enrolledStudents());
console.log(pythonCourse);