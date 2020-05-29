// components/x-mineItem/x-mineItem.js
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
    activityName: "活动名称",
    isLike: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点赞
    _isLike: function(e) {
      console.log(e)
      this.setData({
        isLike: true
      })
    }
  }
})
