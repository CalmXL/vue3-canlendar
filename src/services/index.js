import {
  getDayData,
  getMonthData,
  getYearData
} from './request';

import {
  formatChsDate,
  mapForChsDate
} from '@/libs/utils';

// 真实请求 用到的封装函数
export default async (store, field, date) => {
  console.log(field, date);
  let data = null;

  switch (field) {
    case 'day': 
      data = await getDayData(date);
      break;
    case 'month': 
      data = await getMonthData(date);
      break;
    case 'year': 
      data = await getYearData(date);
      break;
    default:
      break
  }

  if (data.error_code !== 0 ) {
    store.commit('setErrorCode', data.error_code);
    return;
  } 

  let res = null;

  switch (field) {
    case 'day': 
      res = data.result.data;
      res.data = formatChsDate(res.date, 'day');
      res['year-month'] = formatChsDate(res['year-month'], 'month');
      break;
    case 'month': 
      res = res.result.data.holiday_array;
      res = mapForChsDate(res[res, 'festival']);
      break;
    case 'year': 
      res = data.result.data.holiday_list;
      res = mapForChsDate(res, 'startday');
      break;
    default:
      break
  }

  store.commit('setData', {
    field,
    data: res
  })
  
}

