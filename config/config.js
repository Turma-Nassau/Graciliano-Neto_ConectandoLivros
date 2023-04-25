//require('dotenv').config()

module.exports = {
    development: {
        url: 'postgres://umchelmj:dggsV7-GCjgYm1i735VNnvu02fBSB7Q9@babar.db.elephantsql.com/umchelmj',
        dialect: 'postgres',
    },
    test: {
        url: process.env.TEST_DATABASE_URL,
        dialect: 'postgres',
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
}