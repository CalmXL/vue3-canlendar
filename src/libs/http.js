import axios from "axios";
import qs from 'qs';

import { JUHE_APPKEY } from "@/configs/key";

// 封装get, post请求
function axiosPost (options) {
  axios({
    url: options.url,
    method: 'post',
    header: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    data: qs.stringify({
      key: JUHE_APPKEY,
      ...options.data
    }),
  })
  .then((res) => {
    options.success(res.data);
  })
  .catch((err) => {
    options.error(err);
  })

}


function axiosGet (options) {
  axios(options.url + '&key=' + JUHE_APPKEY)
    .then((res) => {
      options.success(res.data);
    })
    .catch((err) => {
      options.error(err);
    })
}


export {
  axiosPost,
  axiosGet
}
