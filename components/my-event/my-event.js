// components/my-event/my-event.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        add(){
            // 发射自定义事件
            // 参数一：发射事件的名字 参数二：一些数据
            this.triggerEvent('add',{name:'hgd',age:18})
        }
    }
})
