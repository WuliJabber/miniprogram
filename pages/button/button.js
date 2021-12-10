// pages/button/button.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLoading:true
    },
    handleInput(event){
        // console.log(event)
        // 获取用户输入的内容
        console.log(event.detail.value)
    },
    handleFocus(event){
        console.log(event)
    },
    handleBlur(event){
        console.log(event)
    }
})