import Dexie from 'dexie';

const db = new Dexie('expenses');

// Define a schema
db.version(1).stores({
    friends: 'name, age'
});


// Open the database
db.open().catch(function (error) {
    alert('Uh oh : ' + error);
});

export default db