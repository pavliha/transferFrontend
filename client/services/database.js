import Dexie from 'dexie'

const db = new Dexie('expenses')

// Define a schema
db.version(1).stores({
    expenses: '++id,name,category,amount,date'
})


// Open the database
db.open().catch(error => {
    debugger
})


export default db