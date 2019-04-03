/**
 * 数据库操作：CRUD
 * 1. 增
 * 2. 删
 * 3. 改
 * 4. 查
 */
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const database_url = 'mongodb://localhost:27017';
const database_name = '1xm';

async function connect() {
    let client = await MongoClient.connect(database_url, { useNewUrlParser: true });
    let db = client.db(database_name);
    return { db, client }
}


exports.insert = async (colName, data) => {

    let { db, client } = await connect();


    // console.log('client',client)
    // console.log('db',db)
    let collection = db.collection(colName);
    let res = await collection[Array.isArray(data) ? 'insertMany' : 'insertOne'](data);

    client.close();

    return res;
}

exports.delete = async (colName, query) => {

    let { db, client } = await connect();

    let collection = db.collection(colName);
    let res = await collection['deleteMany'](query);

    client.close();

    return res;
}

exports.update = async (colName, query, newData) => {

    let { db, client } = await connect();

    let collection = db.collection(colName);
    let res = await collection['updateMany'](query, newData);

    client.close();

    return res;
}

exports.find = async (colName, query, page, limit) => {
    let { db, client } = await connect();
    let collection = db.collection(colName);
    if (page && limit) {
        let res = await collection.find(query).skip((page - 1) * limit).limit(limit).toArray();
        client.close();
        // 返回查询结果
        return res;
    } else {
        let res = await collection.find(query).toArray();
        client.close();
        // 返回查询结果
        return res;
    }
}



