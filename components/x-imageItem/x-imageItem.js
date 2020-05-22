// components/x-imageItem/x-imageItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageItem: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    isDelItem: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _delImageItem: function() {
      this.setData({
        isDelItem: true
      })
    },
    _handlerDelete: function () {
      wx.showModal({
        title: '删除本条目',
        content: '是否确认删除本条目',
        success: (res) => {
          if (res.confirm) {
            // 这里并没有删除数据，后面处理
            wx.showToast({
              title: '删除成功',
            })
            this.setData({
              isDelItem: false
            })
          } else if (res.cancel) {
            this.setData({
              isDelItem: false
            })
          }
        }
      })
    }
  }
})
