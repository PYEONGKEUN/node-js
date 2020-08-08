const Sequelize = require("sequelize")

var LIMIT = 10000

var sequelize = new Sequelize('performance_analysis_sequelize', 'root', 'mariadb', {
    host: 'localhost',
    port: '3306',
    dialect: 'mariadb',
    timezone: 'Etc/GMT-9',
    logging: false
  }),
  Entry = sequelize.define('Entry', {
    number: Sequelize.INTEGER,
    string: Sequelize.STRING
  })

var testInserts = async function (async, testInsertsCallback, disableLogging) {



  var start = +new Date,
    duration = null

  for (var i = 0; i < LIMIT; i++) {
    var params = {
      number: Math.floor(Math.random() * 99999),
      string: 'asdasdad'
    }

    // if(async) {
    //   queryChainer.add(Entry.create( params ))
    // } else {
    //   queryChainer.add(Entry, 'create', [ params ])
    // }

    Entry.create(params);



  }
  duration = (+new Date) - start

  var logTemplate = 'Adding {{limit}} database entries {{executionType}} took {{duration}}ms.'
  var logMessage = logTemplate
    .replace('{{limit}}', LIMIT)
    .replace('{{executionType}}', async ?'async': 'serially')
    .replace('{{duration}}', duration)

  if (!disableLogging)
    console.log(logMessage)

  testInsertsCallback && testInsertsCallback(duration)




}

var testUpdates = function (async, testUpdatesCallback) {
  Entry.findAll().success(function (entries) {
      var start = +new Date,
        duration = null

      entries.forEach(function (entry) {
        entry.updateAttributes({
          number: Math.floor(Math.random() * 99999)
        })
      })

      duration = ((+new Date) - start)
      console.log('Updating ' + LIMIT + ' database entries ' + (async ?'async': 'serially') + ' took ' + duration + 'ms')
      testUpdatesCallback && testUpdatesCallback(duration)
  })


}


var testRead = function (testReadCallback) {

  var start = +new Date,
    duration = null


  duration = ((+new Date) - start)
  console.log('Reading ' + entries.length + ' database entries took ' + duration + 'ms')
  testReadCallback && testReadCallback(duration)


}

var testDelete = function (async, testDeleteCallback) {
  testInserts(true, function () {

    var queryChainer = new Sequelize.Utils.QueryChainer(),
      start = +new Date,
      duration = null

    entries.forEach(function (entry) {
      if (async) {
        queryChainer.add(entry.destroy())
      } else {
        queryChainer.add(entry, 'destroy', [])
      }
    })


    duration = ((+new Date) - start)
    var logTemplate = 'Deleting {{limit}} database entries {{executionType}} took {{duration}}ms.'
    var logMessage = logTemplate
      .replace('{{limit}}', LIMIT)
      .replace('{{executionType}}', async ?'async': 'serially')
      .replace('{{duration}}', duration)

    console.log(logMessage)
    testDeleteCallback && testDeleteCallback(duration)


  }, true)
}

module.exports = function (times, limit, runCallback) {
  var durations = [],
    done = 0

  LIMIT = limit

  var runTestsOnce = function (callback) {
    console.log('\nRunning sequelize tests #' + (done + 1))

    var results = {}

    testInserts(false, function (duration) {
      results.insertSerially = duration

      testInserts(true, function (duration) {
        results.insertAsync = duration

        testUpdates(false, function (duration) {
          results.updateSerially = duration

          testUpdates(true, function (duration) {
            results.updateAsync = duration

            testRead(function (duration) {
              results.read = duration

              testDelete(false, function (duration) {
                results.deleteSerially = duration

                testDelete(true, function (duration) {
                  results.deleteAsync = duration

                  durations.push(results)
                  callback && callback()
                })
              })
            })
          })
        })
      })
    })
  }

  var runTestsOnceCallback = function () {
    if (++done == times)
      runCallback && runCallback(durations)
    else
      runTestsOnce(runTestsOnceCallback)
  }

  runTestsOnce(runTestsOnceCallback)
}