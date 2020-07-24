import Mock from 'mockjs';
import Data from './mock/index.json';
import City from './mock/city.json';

Mock.mock(RegExp('/api/index' + '.*'), 'get', Data);
Mock.mock(RegExp('/api/city' + '.*'), 'get', City);
