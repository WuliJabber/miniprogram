// pages/about/about.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imagePath:''
    },
    choosePic(){
        // 调用系统api从手机选择图片
        wx.chooseImage({
          success:(res)=>{
            //   console.log(res)
            // 取出路径
            const path = res.tempFilePaths[0]
            // 设置imagePath
            this.setData({
                imagePath:path
            })

          }
        })
    }
})