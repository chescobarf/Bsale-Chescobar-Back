import mysql from 'mysql';

export const connection = mysql.createConnection({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
});

export function connect() {
    connection.connect(function (err) {
        (err ? console.log('Error with connection' + err) : console.log("Connected!"))
    })
}
export function end() {
    connection.end();
}


export default connection