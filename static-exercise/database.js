import mysql from 'mysql2'
import {config} from 'dotenv';
config()

//mysql database connection
const pool = mysql.createPool ({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
}).promise();

 const getFriends = async () => {
    const [result] = await pool.query (
        `SELECT * FROM users_friends`);
    return result;
}

const getFriend=async(id)=>{
    const [result] = await pool.query (
        `
        SELECT * FROM users_friends
        WHERE id = ?
        `,[id] );
        return result
};
// console.log(await getFriend(1));

// to add a new friend

const addFriend=async(name,age)=>{
    const [friend] = await pool.query(`
    insert into users_friends(name,age)
    Values(?, ?)
    `,[name,age])
    return getFriend(friend.insertId)
};
// console.log(await addFriend('Naeema',38));
export{getFriends,getFriend,addFriend}