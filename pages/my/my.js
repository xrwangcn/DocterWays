//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    temp: [],
    tempAllInfo: [],
    array: ['中国', '美国', '巴西', '日本'],
  },
  onLoad: function () {
    var gettemp = wx.getStorageSync("temp");

    this.setData({
      temp: gettemp.split("#start#")
    })

  },
  delButton: function (e) {
    wx.clearStorageSync();
    wx.showToast({
      title: '清空成功',
      icon: 'success',
      duration: 2000
    })
  },
  findButton: function (e) {
    var gettemp = wx.getStorageSync("temp");
    console.log(gettemp);
  },
  updataButton: function (e) {
    var gettemp = wx.getStorageSync("temp");

    this.setData({
      temp: gettemp.split("#start#")
    })
    console.log(this.data.temp);
    var jsonLength = 0;
    for (var i in this.data.temp) {
      jsonLength++;
    }
    console.log(jsonLength);

    var singletemp = new Array();
    for (var i = 1; i < jsonLength; i++) {
      var single = this.data.temp[i].split('$$');
      console.log(single);
      singletemp[i]=new Object();
      singletemp[i].subject = single[0],
      singletemp[i].title = single[1],
      singletemp[i].speaker = single[2],
      singletemp[i].level = single[3],
      singletemp[i].content = single[4],
      singletemp[i].style = single[5]

      console.log(singletemp[i]);
    }

    this.setData({
      tempAllInfo: singletemp
      // tempAllInfo[i].subject : single[0],
      // tempAllInfo[i].title = single[1],
      // tempAllInfo[i].speaker = single[2],
      // tempAllInfo[i].level = single[3],
      // tempAllInfo[i].content = single[4],
      // tempAllInfo[i].style = single[4]
    })
     console.log(this.data.tempAllInfo);
    wx.showToast({
      title: '更新成功',
      icon: 'success',
      duration: 2000
    })
  }
})
