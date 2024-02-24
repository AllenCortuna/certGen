import mysql from 'mysql';
const db = mysql.createConnection({
host: "localhost",
user: "admin",
password: "Admin123",
database:"dpwh" 
})

db.connect((err) => {
    if (err) {
      console.error('Error connecting to database:', err.message);
    } else {
      console.log('Connected to database');
    }
  });
export default db;