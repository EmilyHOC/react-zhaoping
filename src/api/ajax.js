/*通用函数可以发送ajx请求，函数的返回值是promise对象*/
import axios from 'axios';

export default function ajax(url='',data={},type='GET') {
    if(type==='GET'){
        //准备url query参数数据
        let dataStr='';
        Object.keys(data).forEach(key=>{
            dataStr +=key +'='+data[key]+'&'
        })
        if(dataStr!==''){
            dataStr=dataStr.substring(0,dataStr.lastIndexOf('&'))
            url=url+'?'+dataStr
        }
        return axios.get(url)
    }else{
        //post请求
        return axios.post(url,data)
    }

}