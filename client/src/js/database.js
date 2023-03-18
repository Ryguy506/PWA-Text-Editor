import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//accepts some content and adds it to the database
export const putDb = async (content) => {

 const db =  await openDB('jate', 1).transaction('jate', 'readwrite').objectStore('jate').add(content)
console.log(`data saved to database , ${db}`)
}

//gets all the content from the database
export const getDb = async () => {
  const db = await openDB('jate', 1).transaction('jate', 'readonly').objectStore('jate').getAll()
  console.log(db)
    return db    
}
initdb();
