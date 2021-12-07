App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    wx.getUserInfo({
      success:function(res){
          console.log(res)
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow 
   * 小程序显示出来时候调用
   */
  onShow: function (options) {
    //1 判断小程序的进去场景.options中有一个scene参数，表示进入小程序的场景
    console.log(options)
    switch(options.scene){
        case 1001:
            console.log('1001')
            break
        case 1005:
            console.log('1005')
            break
    }

  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('小程序后台')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },
//   全局数据 ，每个page都可以用
  globalDate:{
      name:'黄国栋',
      age:18
  }
})
