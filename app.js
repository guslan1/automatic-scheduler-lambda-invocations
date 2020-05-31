const concurrently = require('concurrently')
var schedule = require('node-schedule')

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC1MorningColdstart = new schedule.RecurrenceRule()
UC1MorningColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC1MorningColdstart.hour = 08
UC1MorningColdstart.minute = 30

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC1AfternoonColdstart = new schedule.RecurrenceRule()
UC1AfternoonColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC1AfternoonColdstart.hour = 14
UC1AfternoonColdstart.minute = 30

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC1EveningColdstart = new schedule.RecurrenceRule()
UC1EveningColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC1EveningColdstart.hour = 20
UC1EveningColdstart.minute = 30

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC1NightColdstart = new schedule.RecurrenceRule()
UC1NightColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC1NightColdstart.hour = 02
UC1NightColdstart.minute = 30

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC2MorningColdstart = new schedule.RecurrenceRule()
UC2MorningColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC2MorningColdstart.hour = 09
UC2MorningColdstart.minute = 00

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC2AfternoonColdstart = new schedule.RecurrenceRule()
UC2AfternoonColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC2AfternoonColdstart.hour = 15
UC2AfternoonColdstart.minute = 00

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC2EveningColdstart = new schedule.RecurrenceRule()
UC2EveningColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC2EveningColdstart.hour = 21
UC2EveningColdstart.minute = 00

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC2NightColdstart = new schedule.RecurrenceRule()
UC2NightColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC2NightColdstart.hour = 03
UC2NightColdstart.minute = 00

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC3MorningColdstart = new schedule.RecurrenceRule()
UC3MorningColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC3MorningColdstart.hour = 09
UC3MorningColdstart.minute = 30

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC3AfternoonColdstart = new schedule.RecurrenceRule()
UC3AfternoonColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC3AfternoonColdstart.hour = 15
UC3AfternoonColdstart.minute = 30

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC3EveningColdstart = new schedule.RecurrenceRule()
UC3EveningColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC3EveningColdstart.hour = 21
UC3EveningColdstart.minute = 30

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC3NightColdstart = new schedule.RecurrenceRule()
UC3NightColdstart.dayOfWeek = [0, new schedule.Range(1, 7)]
UC3NightColdstart.hour = 03
UC3NightColdstart.minute = 30





// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC1Morning = new schedule.RecurrenceRule()
UC1Morning.dayOfWeek = [0, new schedule.Range(1, 7)]
UC1Morning.hour = 08
UC1Morning.minute = 32

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC1Afternoon = new schedule.RecurrenceRule()
UC1Afternoon.dayOfWeek = [0, new schedule.Range(1, 7)]
UC1Afternoon.hour = 14
UC1Afternoon.minute = 32

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC1Evening = new schedule.RecurrenceRule()
UC1Evening.dayOfWeek = [0, new schedule.Range(1, 7)]
UC1Evening.hour = 20
UC1Evening.minute = 32

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC1Night = new schedule.RecurrenceRule()
UC1Night.dayOfWeek = [0, new schedule.Range(1, 7)]
UC1Night.hour = 02
UC1Night.minute = 32

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC2Morning = new schedule.RecurrenceRule()
UC2Morning.dayOfWeek = [0, new schedule.Range(1, 7)]
UC2Morning.hour = 09
UC2Morning.minute = 02

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC2Afternoon = new schedule.RecurrenceRule()
UC2Afternoon.dayOfWeek = [0, new schedule.Range(1, 7)]
UC2Afternoon.hour = 15
UC2Afternoon.minute = 02

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC2Evening = new schedule.RecurrenceRule()
UC2Evening.dayOfWeek = [0, new schedule.Range(1, 7)]
UC2Evening.hour = 21
UC2Evening.minute = 02

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC2Night = new schedule.RecurrenceRule()
UC2Night.dayOfWeek = [0, new schedule.Range(1, 7)]
UC2Night.hour = 03
UC2Night.minute = 02

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC3Morning = new schedule.RecurrenceRule()
UC3Morning.dayOfWeek = [0, new schedule.Range(1, 7)]
UC3Morning.hour = 09
UC3Morning.minute = 32

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC3Afternoon = new schedule.RecurrenceRule()
UC3Afternoon.dayOfWeek = [0, new schedule.Range(1, 7)]
UC3Afternoon.hour = 15
UC3Afternoon.minute = 32

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC3Evening = new schedule.RecurrenceRule()
UC3Evening.dayOfWeek = [0, new schedule.Range(1, 7)]
UC3Evening.hour = 21
UC3Evening.minute = 32

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
var UC3Night = new schedule.RecurrenceRule()
UC3Night.dayOfWeek = [0, new schedule.Range(1, 7)]
UC3Night.hour = 03
UC3Night.minute = 32

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC1MorningColdstart, function () {
    concurrently([
        'npm:uc1',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC1Morning, function () {
    concurrently([
        'npm:uc1',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC1AfternoonColdstart, function () {
    concurrently([
        'npm:uc1',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC1Afternoon, function () {
    concurrently([
        'npm:uc1',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC1EveningColdstart, function () {
    concurrently([
        'npm:uc1',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC1Evening, function () {
    concurrently([
        'npm:uc1',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC1NightColdstart, function () {
    concurrently([
        'npm:uc1',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC1Night, function () {
    concurrently([
        'npm:uc1',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC2MorningColdstart, function () {
    concurrently([
        'npm:uc2',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC2Morning, function () {
    concurrently([
        'npm:uc2',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC2AfternoonColdstart, function () {
    concurrently([
        'npm:uc2',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})


// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC2Afternoon, function () {
    concurrently([
        'npm:uc2',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC2EveningColdstart, function () {
    concurrently([
        'npm:uc2',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC2Evening, function () {
    concurrently([
        'npm:uc2',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC2NightColdstart, function () {
    concurrently([
        'npm:uc2',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

schedule.scheduleJob(UC2Night, function () {
    concurrently([
        'npm:uc2',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC3MorningColdstart, function () {
    concurrently([
        'npm:uc3',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

schedule.scheduleJob(UC3Morning, function () {
    concurrently([
        'npm:uc3',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC3AfternoonColdstart, function () {
    concurrently([
        'npm:uc3',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC3Afternoon, function () {
    concurrently([
        'npm:uc3',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC3EveningColdstart, function () {
    concurrently([
        'npm:uc3',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC3Evening, function () {
    concurrently([
        'npm:uc3',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

// DO NOT CHANGE, MADE FOR REPRODUCING THE STUDY 
schedule.scheduleJob(UC3NightColdstart, function () {
    concurrently([
        'npm:uc3',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})

schedule.scheduleJob(UC3Night, function () {
    concurrently([
        'npm:uc3',
    ], {
        killOthers: ['failure', 'success']
    }).then(console.log("succes"))
        .catch(function (e) {
            console.error(e.message)
        })
})