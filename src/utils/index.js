//注册老板laoban-->/laoban
//注册大神dashen-->/dashen
//登陆laoban-->/laobaninfo或者/laoban
//登陆大神-->/dasheninfo或者/dashen
export function getRedirectPath(type,header) {
    let path='';
    path += type==='laoban'?'/laoban':'/dashen';
    if(!header){
        path +='info'
    }
    return path;
}