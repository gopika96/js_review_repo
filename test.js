cwebTestFunction();

//define
function cwebTestFunction(){
    var name = "C Fulton";
    var subject = "Web Tooling Class";
    var meetingTime, semesterLength;
    var daysOfWeek = "M,W,F"

    meetingTime = "4pm";
    semesterLength = "16"

    console.log('Name:${name} Subject: ${subject} Meeting Time: ${meetingTime} Meeting Days: ${daysOfWeek}');
    console.log('Semester Length is ${semesterLength}');
}


var getInstructor = ()=>{
    console.log("Who is the instructor");
