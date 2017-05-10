//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name: '',
    paddingleft: '50rpx',
    width: '',
    marginleft: ''
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

    wx.getSystemInfo({
      success: function (res) {
        console.log(res.model)
        console.log(res.pixelRatio)
        console.log(res.windowWidth)
        console.log(res.windowHeight)
        console.log(res.language)
        console.log(res.version)
      }
    })
    //控制显示样式
    var phoneWeight;
    wx.getSystemInfo({
      success: function (res) {
        phoneWeight = res.windowWidth
      }
    })
    console.log("::" + phoneWeight)
    if (phoneWeight == 320) {
      this.setData({
        paddingleft: '13px',
        width: '270px',
        marginleft: '-25px'
      })
    }
  },
  formSubmit: function (e) {
    var subject = e.detail.value.subject
    var title = e.detail.value.title
    var speaker = e.detail.value.speaker
    var level = e.detail.value.level
    var content = e.detail.value.content
    var style = e.detail.value.style

    if (subject.length == 0) {
      wx.showModal({
        title: "请输入完整",
        content: "请按要求填写课程名称",
        showCancel: false,
        confirmText: "确定"
      })
      return
    }

    if (title.length == 0) {
      wx.showModal({
        title: "请输入完整",
        content: "请按要求填写话题名称",
        showCancel: false,
        confirmText: "确定"
      })
      return
    }
    if (speaker.length == 0) {
      wx.showModal({
        title: "请输入完整",
        content: "请按要求填写发言者",
        showCancel: false,
        confirmText: "确定"
      })
      return
    }
    if (level.length == 0) {
      wx.showModal({
        title: "请输入完整",
        content: "请选择关注度",
        showCancel: false,
        confirmText: "确定"
      })
      return
    }
    if (content.length == 0) {
      wx.showModal({
        title: "请输入完整",
        content: "请按要求填写书签内容",
        showCancel: false,
        confirmText: "确定"
      })
      return
    }
    if (style.length == 0) {
      wx.showModal({
        title: "请输入完整",
        content: "请选择样式",
        showCancel: false,
        confirmText: "确定"
      })
      return
    }

    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    console.log('zifu::', subject)
    wx.navigateTo({
      url: "../lookbookmark/lookbookmark?subject=" + subject + "&title=" + title + "&speaker=" + speaker + "&level=" + level + "&content=" + content + "&style=" + style,
      success: function (res) {
        // success
      },
      fail: function (res) {
        // fail
      },
      complete: function (res) {
        // complete
      }
    })
  }
})
