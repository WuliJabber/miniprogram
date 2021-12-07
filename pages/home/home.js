// pages/home/home.js
// 得到APP示例对象
// const app = getApp()
// 使用全局数据
// const name = app.globalDate.name
// const age = app.globalDate.age


// 注册页面
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:'lty',
        age:18,
        students:[
            {id:110,name:'james',age:20},
            {id:111,name:'curry',age:29},
            {id:112,name:'hgd',age:24}
        ],
        counter:0
    },
    add(){
        // console.log('sss')
        // this.data.counter++ 错误做法 界面不会刷新
        this.setData({
            counter:this.data.counter + 1
        })
    },
    sub(){
        this.setData({
            counter:this.data.counter - 1
        })
    }, 
    getUserInfo(event){
        console.log(event)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log('下拉刷新')
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    // 监听页面滚动
    onPageScroll(obj){
        console.log(obj)
    }
})