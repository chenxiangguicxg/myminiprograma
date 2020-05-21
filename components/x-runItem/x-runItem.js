// components/x-runItem/x-runItem.js
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
    runItems: [
      {
        id: "0",
        runName: "秦皇岛马拉松",
        runType: "马拉松",
        runTime: "1",
        isStar: false,
        runLevel: 1
      },{
        id: "1",
        runName: "小五台山",
        runType: "户外徒步",
        runTime: "4",
        isStar: true,
        runLevel: 4
      },{
        id: "2",
        runName: "黄山百公里",
        runType: "越野跑",
        runTime: "7",
        isStar: true,
        runLevel: 7
      }
    ]

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _handleTap(evt) {
      console.log('点击了图片', evt)
    },
  }
})
