//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {

  },
  delButton: function (e) {
    wx.clearStorageSync();
    wx.showToast({
      title: '清空成功',
      icon: 'success',
      duration: 2000
    })
  }
})
