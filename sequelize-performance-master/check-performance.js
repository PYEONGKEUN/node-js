const TIMES = parseInt(process.env.TIMES || 1)
    , LIMIT = parseInt(process.env.LIMIT || 10)

var runMySqlTest       = require("./mysql")
  , runNodeOrmTest     = require("./node-orm")
  //, runPersistenceTest     = require("./persistencejs")
  , runSequelizeTest   = require("./sequelize")

var printDurations = function(lib, durations) {
  console.log()

  for(var testName in durations[0]) {
    var sum = 0
      , msg = "{{lib}}#{{testName}} ({{times}} runs): {{duration}}ms"

    durations.forEach(function(res) { sum += res[testName] })

    msg = msg
      .replace('{{lib}}', lib)
      .replace('{{testName}}', testName)
      .replace('{{times}}', durations.length)
      .replace('{{duration}}', sum / durations.length)

    console.log(msg)
  }
}

// runMySqlTest(TIMES, LIMIT, function(mySqlDurations) {
//   runNodeOrmTest(TIMES, LIMIT, function(nodeOrmDurations) {
//     runSequelizeTest(TIMES, LIMIT, function(sequelizeDurations) {
//       runPersistenceTest(TIMES, LIMIT, function(persistenceDurations) {
//         printDurations('sequelize', sequelizeDurations)
//         printDurations('node-mysql', mySqlDurations)
//         printDurations('node-orm', nodeOrmDurations)
//         printDurations('persistencejs', persistenceDurations)        
//         process.exit()
//       })
//     })
//   })
// })

// runMySqlTest(TIMES, LIMIT, function(mySqlDurations) {
//   runNodeOrmTest(TIMES, LIMIT, function(nodeOrmDurations) {
//     runSequelizeTest(TIMES, LIMIT, function(sequelizeDurations) {
//         printDurations('sequelize', sequelizeDurations)
//         printDurations('node-mysql', mySqlDurations)
//         printDurations('node-orm', nodeOrmDurations)       
//         process.exit()
//     })
//   })
// })
runMySqlTest(TIMES, LIMIT, function(mySqlDurations) {
    runSequelizeTest(TIMES, LIMIT, function(sequelizeDurations) {
        printDurations('sequelize', sequelizeDurations)
        printDurations('node-mysql', mySqlDurations)
        printDurations('node-orm', nodeOrmDurations)       
        process.exit()
    })
  
})