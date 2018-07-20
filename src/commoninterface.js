// import router from './router'

export default function install (Vue, options){
    /**
     * 服务器端api地址合集
     */
    let apiurls={
        api:{
            account:{
                // 获取当前登陆的账号信息
                getAccount:'/api/account/getAccount',
                // 登录
                // Login:'/Common/Session/Login',
            },
        }
    }
  
    //具体接口资料详见接口文档
    Vue.prototype.LKshow={
        api:{
            account:{
                // 获取
                getAccount:function(args){
                    Vue.prototype.request({
                        url:apiurls.api.account.getAccount,
                        method:'GET',
                        success:args.success,
                        fail:args.fail
                    });
                },
            },
        }
    };

  
    /**
     * 向服务器端提交数据，并处理服务器端的通用格式应答
     * 参数示例：{url:'',method:'post',headers:{},data:{},success:function(){},fail:function(){}}
     * @param {Object} args
     * @param {String} args.url - 服务器地址
     * @param {String} [args.method=post] - 提交方式.仅支持post、get。
     * @param {Object} [args.headers] - header信息
     * @param {Object} [args.params] - 与请求一起发送的 URL 参数
     * @param {Object} [args.data] - 提交的数据内容
     * @param {requestSuccessCallback} [args.success] - 成功的回调。
     * @param {requesttFailCallback} [args.fail] - 失败的回调。
     */
    Vue.prototype.request=function(args){
        let _this = this;
        let success = args.success || function(){};
        let fail = args.fail || function(){};

        //自动添加headers
        // let headers = args.headers || {};
        //检查是否存在SessionKey
        // let sessionkey = sessionStorage.getItem('SessionKey');
        // if (sessionkey!='' && sessionkey!=null){
        //     if(headers['Milink_SK']==undefined){
        //     headers['Milink_SK']=sessionkey;
        //     }
        // }
        // if(headers['Milink_TS']==undefined){
        //     headers['Milink_TS']=_this.getTime();
        // }

        this.baserequest({
            url: args.url,
            method: args.method,
            // headers:headers,
            data: args.data,
            params: args.params,
            success:function(response){
                if(response.data.code==0)
                {
                    // console.log('请求正常',response.data.data);
                    success(response.data.data)
                }else{
                    let err ={code:response.data.code,msg:''};
                    switch(err.code){
                    case '1':
                        err.msg = '数据请求失败:'+response.data.error;
                        break;
                    // case '99998':
                    //     err.msg = '未登录';
                    //     // 调转到登陆页
                    //     router.push('/login');
                    //     break;
                    // case '99997':
                    //     err.msg = '未具备相应的权限';
                    //     break;
                    default:
                        err.msg = '未知错误';
                        break
                    }
                    // this.$message.error(err.msg);
                    fail(err);

                }
            },
            fail:function(error){
                // fail(error);
                let err;
                if (error.response) {
                    // 请求已发出，但服务器响应的状态码不在范围内
                    err ={code:-1,msg:'接口异常！状态:'+error.response.status+',内容:'+error.response.data};
                } else {
                    err ={code:-2,msg:'接口异常！'+error};
                }
                console.log('请求异常',err);
                fail(err);
                }
            });
        }

        /**
         * @callback requestSuccessCallback - 提交数据成功的回调
         * @param {Object} response - 服务器返回的数据
         */
        /**
         * @callback requesttFailCallback - 提交数据失败回调
         * @param {Object} error - 失败的提示信息
         */

        /**
         * 向服务器端提交数据，并获取服务器的应答
         * 参数示例：{url:'',method:'post',headers:{},data:{},success:function(){},fail:function(){}}
         * @param {Object} args
         * @param {String} args.url - 服务器地址
         * @param {String} [args.method=post] - 提交方式.仅支持post、get。
         * @param {Object} [args.headers] - header信息
         * @param {Object} [args.params] - 与请求一起发送的 URL 参数
         * @param {Object} [args.data] - 提交的数据内容
         * @param {requestSuccessCallback} [args.success] - 成功的回调。
         * @param {requesttFailCallback} [args.fail] - 失败的回调。
         */
        Vue.prototype.baserequest=function(args){
        if(!args){throw new Error('参数不能为空'); }
        let method = args.method || 'post'
        if(method!='post') method='get';
        // let headers = args.headers || {};
        let data = args.data || {};
        let success = args.success || function(){};
        let fail = args.fail || function(){};

        let _this = this;

        _this.$axios.request({
            // `url` 是用于请求的服务器 URL
            url: args.url,
            // `method` 是创建请求时使用的方法
            method: method, // 默认是 get
            // `headers` 是即将被发送的自定义请求头
            // headers:headers,
            // `data` 是作为请求主体被发送的数据
            // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
            // 在没有设置 `transformRequest` 时，必须是以下类型之一：
            // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
            // - 浏览器专属：FormData, File, Blob
            // - Node 专属： Stream
            data: data,
            // `params` 是即将与请求一起发送的 URL 参数
            // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
            params: args.params
        })
        .then(function (response) {
            args.success(response);
        })
        .catch(function (error) {
            args.fail(error);
        });
    }
}
