import monk from 'monk';

const db = monk('localhost:27017/trekt');

export const users = db.get('users');
export const guilds = db.get('guilds');
export const characters = db.get('characters');
