export default function http(url,data,method){
    return new Promise((resolve,reject)=>{
        wx.request({
            url:url,
            data:data || {},
            method:method || 'GET',
            header: {
                'content-type': 'application/json' // 默认值
            },
            success:resolve,
            fail:reject
        })
    })
}