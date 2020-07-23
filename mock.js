import Mock from 'mockjs';
import Data from './mock/index.json';

Mock.mock('/api/index', 'get', Data);
