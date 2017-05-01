//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    array: ['中国', '美国', '巴西', '日本'],
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
