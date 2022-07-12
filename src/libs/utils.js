// 月, 日 增加0函数
function _addZero (value) {
  return value < 10 ? ('0' + value) : value;
}
// 获得TabIcon中 IconText
function getIconDate (type) {
  const date = new Date();

  // let year = date.getFullYear().toString().substr(2);

  switch (type) {
    case 'day': 
      return  _addZero(date.getDate().toString());
    case 'month': 
      return _addZero((date.getMonth() + 1).toString());
    case 'year': 
      return date.getFullYear().toString().substring(2);
  } 
}

function formatChsDate (date, type) {
  const _arr = date.split('-');

  switch (type) {
    case 'day': 
      return `${_arr[0]}年${_arr[1]}月${_arr[2]}日}`;
    case 'month':
      return `${_arr[1]}月${_arr[2]}日}`;
    case 'year': 
      return `${_arr[2]}日`
    default:
      return `${_arr[0]}年${_arr[1]}月${_arr[2]}日}`;
  }
}


function mapForChsDate (data, key) {
  return data.map(item => {
    item.key = formatDate(item[key]);
    return item;
  })
}

function getNowDate (filed) {
  const date = new Date();

  let year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();

  switch (filed) {
    case 'day': 
      return `${year}-${month}-${day}`;
    case 'month': 
      return `${year}${month}`;
    case 'year': 
      return `${year}`;
    default: 
      return `${year}-${month}-${day}`;
  }
}


function formatUserDate (value) {
  const len = value.length;

  if (len < 4) {
    return ;
  }

  if (len === 4) {
    return value;
  }

  if (len > 4 && len < 6) {
    return value.substring(0, 4)
  }

  let _arr = [],
      pattern;

  if (len >=6 && len < 8) {
    pattern = /(\d{4})(\d{2})/;
    value = value.substring(0, 6).replace(pattern, "$1-$2");

    _arr = Array.from(value).filter((item, index) => {
      if ((index === 5 && item === '0')) {
        return false;
      }
      return true;
    })
  }

  if (len >= 8) {
    pattern = /(\d{4})(\d{2})(\d{2})/;
    value = value.substring(0, 8).replace(pattern, "$1-$2-$3");
    
    _arr = Array.from(value).filter((item, index) => {
      if ((index === 5 || index === 8) && item === '0') {
        return false;
      }

      return true;
    })
  }

  return _arr.toString().replace(/,/g, '');
}

export {
  getIconDate,
  mapForChsDate,
  formatChsDate,
  getNowDate,
  formatUserDate
}