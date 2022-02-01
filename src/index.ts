import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'NAME', age: 21 });
const root = document.querySelector('#root');

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error('Root must be present');
}
