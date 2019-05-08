var secsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;

var secsPerDay = secsPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secsPerDay + " seconds in a day.\n");

var yearsAlive = 31;

var secsInYearsAlive = yearsAlive * weeksPerYear * daysPerWeek * hoursPerDay * minsPerHour * secsPerMin;

// yearsAlive * weeksPerYear * daysPerWeek * hoursPerDay * minsPerHour * secsPerMin * secPerMin

document.write("\n" + secsInYearsAlive + " seconds have elapsed in the " + yearsAlive + " years I've been alive.");