import { getIconDate } from '@/libs/utils';
// 用于渲染TabIcon 的数据
export default [
  {
    iconText: getIconDate('day'),
    tabText: '当天',
    path: '/'
  },
  {
    iconText: getIconDate('month'),
    tabText: '近期',
    path: '/month'
  },
  {
    iconText: getIconDate('year'),
    tabText: '当年',
    path: '/year'
  },
];