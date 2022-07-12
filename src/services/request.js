import { axiosPost } from "@/libs/http";
// 对应业务请求数据函数的包装
function getDayData (date) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/api/calendar/day',
      data: {
        date
      },
      success (data) {
        resolve(data)
      },
      error (err) {
        reject(err)
      }
    })
  })
}


function getMonthData (yearMonth) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/api/calendar/month',
      data: {
        "year-month": yearMonth
      },
      success (data) {
        resolve(data)
      },
      error (err) {
        reject(err)
      }
    })
  })
}


function getYearData (year) {
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/api/calendar/year',
      data: {
        year
      },
      success (data) {
        resolve(data)
      },
      error (err) {
        reject(err)
      }
    })
  })
}

export {
  getDayData,
  getMonthData,
  getYearData
}