// components/tab-control/tab-control.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        titles:{
            type:Array,
            value:[]
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentIndex:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        itemClick(event){
            // console.log(event.currentTarget.dataset.index)
            const index = event.currentTarget.dataset.index
            const item = event.currentTarget.dataset.item
            this.setData({
                currentIndex:index
            })
            // 通知外部发生点击事件
            this.triggerEvent('itemClick',{index:index,title:item})
        }
    }
})
