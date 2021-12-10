// pages/cpn/cpn.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        counter:0
    },
    add(event){
        // 通过event来拿传过来的数据
        this.setData({
            counter:this.data.counter+1
        })
        console.log(event.detail.name)
    },
    itemClick(event){
        console.log(event.detail.index,event.detail.title)
    },
    handleCpn(event){
        
        // 要修改my-sel内的counter，要先获取my-sel对象
        // 通过selectComponent方法，参数是组件的class或id
        // 在使用时要给组件加上class或id
        const my_sel = this.selectComponent('#sel-id')
        // 这种直接修改data不合理
        // my_sel.setData({
        //     counter:my_sel.data.counter + 20
        // })
        // 一般会在组件内部暴露一个方法来修改
        my_sel.increment(10)
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

    }
})