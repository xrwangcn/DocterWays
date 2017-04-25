//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name:''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../lookbookmark/lookbookmark'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  formSubmit: function (e) {
    var subject='课程：' + e.detail.value.subject
    var title= '话题：' + e.detail.value.title
    var speaker= '发言者：'+ e.detail.value.speaker
    var level= e.detail.value.level
    var content='' + e.detail.value.content
    var style= '' + e.detail.value.style

    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log('zifu::', subject)
    wx.navigateTo({
      url: "../lookbookmark/lookbookmark?subject="+subject+"&title="+title+"&speaker="+speaker+"&level="+level+"&content="+content+"&style="+style,
      success: function(res){
        // success
      },
      fail: function(res) {
        // fail
      },
      complete: function(res) {
        // complete
      }
    })
  }
})
