import { User } from './models/User';

const user = new User({
  name: 'dude',
  age: 20,
});

user.on('change', () => {
  console.log('im changing');
});

user.trigger('change');

console.log(user);
