import monk from 'monk';

const db = monk('localhost:27017/trekt');
const collection = db.get('trekt');

export default collection;