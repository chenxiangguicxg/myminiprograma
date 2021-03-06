// pages/runList/runList.js
Page({
  _handleTap(evt) {
    console.log('点击了图片', evt)
  },
  /**
   * 页面的初始数据
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