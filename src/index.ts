import { User } from './models/User';
import axios from 'axios';

const user = new User({ name: 'new records', age: 0 });
user.save();
