import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
// import util from 'util'
// import asyncHandler from 'express-async-handler'


const app = express()

const jsonParser = express.json()

app.use(cors())


const db = mysql
const connection = db.createConnection({
  host: "localhost",
  user: "homestead",
  password: "homestead",
  database: 'homestead'
});

// const query = util.promisify(connection.query).bind(connection);

const getToken = () => {
  return Math.floor(Math.random() * (99999 - 10000) + 10000)
}

// const getUser = (userName, password) => {
//   const sql = `SELECT * FROM users WHERE name = '${userName}' AND password = '${password}' LIMIT 1`

//   connection.connect()
//   const foo = connection.querySync(sql, function (error, results, fields) {

//     if (error) {
//       console.log(error)
//     }

//     if (results[0]) {
//       user = results[0]
//     }
//     console.log('45663643')

//     connection.end()
//     console.log('oooooooo')
//     return user
//   })
//   console.log('uuuuuu')
//   return user
// }

const User = {
  id: null,
  boards: {}
}



app.post('/login', jsonParser, (req, res) => {
  const username = req.body.username
  const password = req.body.password
  let sql = `SELECT * FROM users WHERE name = '${username}' AND password = '${password}' LIMIT 1`
  connection.query(sql, function (error, results, fields) {

    if (error) {
      console.log(error)
    }

    if (results[0]) {
      const user = results[0]
      sql = `SELECT boards.* FROM boards 
      JOIN user_boards ON user_boards.board_id = boards.id
      WHERE user_boards.user_id = ${user.id}`
      connection.query(sql, function (error, results, fields) {
        if (error) {
          console.log(error)
        }

        
        if (results) {
          user.boards = results
          // let boardIds = тут должна быть строка (1, 2) или (2) ${boardIds}
          sql = `SELECT columns.*, board_columns.board_id FROM columns 
          JOIN board_columns ON board_columns.column_id = columns.id
          WHERE board_columns.board_id IN (2)`
          connection.query(sql, function (error, results, fields){
            if (error) {
              console.log(error)
            }
            if (results) {
              console.log(results)
            }
          /* res.send({
            resultCode: '0',
            message: '',
            user: user
          }); */
        })}
      })
    }
  })
})


app.use('/board', jsonParser, (req, res) => {
  const boardId = 2
  // const sql = `SELECT cards.*, columns.name AS column_name, boards.name AS board_name FROM cards
  sql = `SELECT boards.* FROM boards 
  LEFT JOIN column_cards ON column_cards.card_id = cards.id 
  LEFT JOIN columns ON columns.id = column_cards.column_id 
  LEFT JOIN board_columns ON board_columns.column_id = columns.id
  LEFT JOIN boards ON boards.id = board_columns.board_id 
  WHERE boards.id = ${boardId}`
  connection.query(sql, function (error, results, fields) {

    if (error) {
      console.log(error)
    }

    if (results) {
      res.send({
        resultCode: '0',
        message: '',
        results: results
      });
    }
  })
})






// /*   return
//   let query = `SELECT * FROM users WHERE name = '${req.body.username}' AND password = '${req.body.password}'`
//   connection.query(query, function (error, results, fields) {
//     if (error) {
//       console.log(error)
//     }
//     if (results[0]) {
//       User.id = results[0].id
//       query = `SELECT * FROM user_boards WHERE user_id = ${User.id}`
//         connection.query(query, function (error, results, fields) {
//           if (error) {
//             console.log(error)
//           }
//           console.log(results)

//            for(let i = 1; i<=results.length-1;i++){
//             if (results[i]) User.boards['board'+(i)] = null
//           } 

//           /* query = `SELECT * FROM boards WHERE id IN (${User.id})`
//           connection.query(query, function (error, results, fields) {
//           if (error) {
//             console.log(error)
//           }
//           console.log(results) */

//         /* for(let i = 0; i<=results.length-1;i++){
//           if (results[i]) User.boards[results[i].name] = null
//         } 

//         console.log(User)

//       }) 
//         /* for(let i = 0; i<=results.length-1;i++){
//           if (results[i]) User.boards[results[i].name] = null
//         } */

//         // console.log(User)

//       })


//         /* console.log(results) 
//         for(let i = 0; i<=results.length-1;i++){
//           if (results[i]) User.boards[i+1] = results[i].board_id

//         }
//         results.forEach(e =>  User.boards = e.board_id) 
//         /* console.log(User.boards) */

//         /* for (let key in User.boards) {
//            console.log("obj." + prop + " = " + User.boards[prop]); 
//           query = `SELECT * FROM board_columns WHERE board_id IN (${key})`
//           connection.query(query, function (error, results, fields) {
//             /* if (error) {
//               console.log(error)
//             } */
//             /* console.log(User)
//             console.log(results) 


//           });

//         } */



//         /* User.boards.forEach(e => {
//           query = `SELECT * FROM board_columns WHERE board_id IN (${e})`
//           connection.query(query, function (error, results, fields) {
//             if (error) {
//               console.log(error)
//             }
//             console.log(results)
//           }); 

//         }); 

//       }) 





//       res.send({
//         token: results[0].token,
//         resultCode: '0',
//         message: ''
//       });
//     } else {
//       res.send({
//         resultCode: '1',
//         message: 'wrong login or password'
//       })
//     }
//   }) */



app.post('/login/registration', jsonParser, (req, res) => {
  let query = `SELECT * FROM users WHERE name = '${req.body.username}'`
  connection.query(query, function (error, results) {
    if (error) {
      console.log(error)
    }
    if (!results[0]) {
      query = `INSERT INTO users (name, password, token)
      VALUES ('${req.body.username}', '${req.body.password}', '${getToken()}')`
      connection.query(query, function (error) {
        if (error) { console.log(error) }
        res.send({
          resultCode: '0',
          message: ''
        });
      });
    } else {
      res.send({
        resultCode: '1',
        message: 'this username is already taken'
      })
    }
  });
});



app.listen(8080, () => console.log('API is running on http://localhost:8080/login'))