const nameList = ['Leah Smith', 'Taylor Wells','Celina Wilson','Sena Cruz','Sara Johnson', 'Tyler Jones']
let names =  nameList[Math.floor(Math.random() * nameList.length)];
let apptList = ['Haircut','Shampoo', 'Braiding', 'Silk Press', 'Hair Dye']
let appt =  apptList[Math.floor(Math.random() * apptList.length)];
let cost = Math.floor(Math.random() * 10);
let timeSlot = ['11:00', '1:00', '3:00', '5:00', '8:00','12:00']
let time = timeSlot[Math.floor(Math.random() * timeSlot.length)];
let dateList =['Oct2021','Nov2021','Dec2021','Jan2021','Feb2021','Mar2021']
let slot = dateList[Math.floor(Math.random() * dateList.length)];

const payload = {
    email: 'temp@aolcom',
    fullname: names,
    appointmet: appt,
    cost: cost,
    time: time,
    date: slot
}

export {payload}