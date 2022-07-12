import state from "./state";

export default {
  setHeaderTitle (state, routeName) {
    switch (routeName) {
      case 'day': 
        state.headerTitle = '当天信息';
        break;
      case 'month': 
        state.headerTitle = '近期假期';
        break;
      case 'year': 
        state.headerTitle = '当前假期';
        break;
      default:
        break;
    }
  },
  setMaxlength (state, routeName) {
    switch (routeName) {
      case 'day': 
        state.maxlength = 8;
        break;
      case 'month': 
        state.maxlength = 6;
        break;
      case 'year': 
        state.maxlength = 4;
        break;
      default:
        state.maxlength = 8;
        break;
    }
  },
  setPlaceholder (state, routeName) {

    const date = new Date();
    
    let year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    switch (routeName) {
      case 'day': 
        state.placeholder = `格式: ${year}${month}${day} (${year}年${month}月${day}日)`;
        break;
      case 'month': 
        state.placeholder = `格式: ${year}${month} (${year}年${month}月)`;
        break;
      case 'year': 
        state.placeholder = `格式: ${year} (${year}年)`;
        break;
      default:
        state.placeholder = `格式: ${year}${month}${day} (${year}年${month}月${day}日)`;
        break;
    }
  },
  setErrorCode (state, errorCode) {
    state.errorCode = errorCode;
  },

  setData (store, payLoad) {
    const { field, data } = payLoad;

    switch (field) {
      case 'day': 
        state.dayData = data;
        break;
      case 'month': 
        state.monthData = data;
        break;
      case 'year': 
        state.yearData = data;
        break;
      default: 
        break;
    }
  },

  setField (state, field) {
    state.field = field;
  }

}
