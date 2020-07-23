import Mock from 'mockjs';
import Data from './mock/index.json';
import City from './mock/city.json';

Mock.mock('/api/index', 'get', Data);
Mock.mock('/api/city', 'get', City);
