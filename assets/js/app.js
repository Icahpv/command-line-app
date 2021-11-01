const { DateTime } = require("luxon");
// console.log(process.argv)

const args = process.argv.slice(2)
const info = args[0];
const name = args[1];

const today = DateTime.now().toFormat('MMMM dd, yyyy')
const tomorrow = DateTime.now().plus({ days: 1 }).toFormat('MMMM dd, yyyy')
const yesterday = DateTime.now().minus({ days: 1 }).toFormat('MMMM dd, yyyy')
const time = DateTime.now().toLocaleString(DateTime.TIME_SIMPLE)
const month = DateTime.now().monthLong
const year = DateTime.now().year
const timeZone = DateTime.now().zoneName


function date(name, info = `today`) {
  if (info === 'today') {
    console.log(`Hi ${name}, Today's date is ${today} at ${time}, ${timeZone} timezone`)
  } else if (info === `tomorrow`) {
    console.log(`Hi ${name}, Tomorrow's date is ${tomorrow}`)
  } else if (info === `yesterday`) {
    console.log(`Hi ${name}, Yesterday's date is ${yesterday}`)
  } else if (info === `time`){
    console.log(`The time is ${time}`)
  } else if (info === `month`) {
    console.log(`The current month is ${month}`) 
  } else if (info === `year`){
    console.log(`The current year is ${year}`)
  } else if (info === `timezone`) {
    console.log(`Hi, you are in ${timeZone} timezone.`)
  } else (
    console.log('Time not defined')
  )
}

date(name, info)