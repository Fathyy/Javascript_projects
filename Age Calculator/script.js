const userInput = document.getElementById("date");
let result = document.getElementById("result");

// add a condition: you can only select today's date or a past date
userInput.max = new Date().toISOString().split("T")[0];

// calculate age
function calculateAge(){
    // user input: when the user was born
    let birthDate = new Date(userInput.value);

    // get the date
    let d1 = birthDate.getDate();
    // month starts from 0 so we will add 1 to rep January and so on
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    // store today's date in a variable to get the difference from birthday
    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // add 3 other variables where you can save the difference

    let d3, m3, y3;

    y3 = y2 - y1;

    // if today's month is bigger than the birth month subtract the 2 to get difference
    if (m2 >= m1) {
        m3 = m2 - m1;    
    }
    // if birthmonth is bigger, reduce the year by one
    else{
        y3--;
        m3 = 12 + m2 -m1;
    }

    // calculate the day difference: if today is greater than birth day
    if (d2 >= d1) {
        d3=  d2 - d1;
    }
    // if birthday is less
    else{
        // decrease month by 1
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }
    // suppose the month is negative
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
}

// function to get the exact number of days
function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
}