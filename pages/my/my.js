//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    //两个选择器的数组指数
    sindex: 0,
    index: 0,
    //每个元素都是一个未切分的字符串书签
    temp: [],
    tempAllInfo: [],
    tempcontent: [],
    array: ['中国', '美国', '巴西', '日本'],
    updataflag: false,
  },
  onLoad: function () {
    var gettemp = wx.getStorageSync("temp");

    this.setData({
      temp: gettemp.split("#start#")
    })
    this.updataButton();
    this.setData({
      updataflag: true,
    })
    if (this.data.tempAllInfo[0] != undefined) {
      this.setData({
        tempcontent: this.data.tempAllInfo[0].member
      })
    }
    console.log(this.data.tempcontent)
    if (this.data.temp.length == 0) {
      wx.showToast({
        title: '没有书签',
        image: '../../images/warn.png',
        duration: 2000
      })
    }
  },
  delButton: function (e) {
    var that=this;
    wx.showModal({
      title: "警告",
      content: "确定删除所有书签？",
      confirmText: "确定",
      cancelText: "取消",
      confirmColor: "#FF0000",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
          that.setData({
            tempAllInfo: [],
            tempcontent: [],
          });
          wx.clearStorageSync();
          wx.showToast({
            title: '清空成功',
            icon: 'success',
            duration: 2000
          })

        } else if (res.cancel) {
          console.log('用户点击取消')
                    this.setData({
            tempAllInfo: [],
            tempcontent: [],
          });
        }
      }
    })


  },
  findButton: function (e) {
    var gettemp = wx.getStorageSync("temp");
    console.log(gettemp);
  },
  updataButton: function (e) {
    var gettemp = wx.getStorageSync("temp");
    //设置全局变量
    this.setData({
      temp: gettemp.split("#start#")
    })
    //分割以后第一个字符串是空，先删除
    this.data.temp.shift()
    console.log(this.data.temp);
    //计算temp 书签的个数
    var jsonLength = 0;
    for (var i in this.data.temp) {
      jsonLength++;
    }
    console.log(jsonLength);

    //单个书签组的临时变量，每个元素里存储了一个对象
    var singletemp = new Array();
    for (var i = 0; i < jsonLength; i++) {
      var single = this.data.temp[i].split('$$');
      console.log(single);
      singletemp[i] = new Object();
      singletemp[i].subject = single[0],
        singletemp[i].title = single[1],
        singletemp[i].speaker = single[2],
        singletemp[i].level = single[3],
        singletemp[i].content = single[4],
        singletemp[i].style = single[5]

      console.log(singletemp[i]);
    }
    console.log(singletemp);
    //把变量按课程分类保存
    var finalLB = new Array();

    for (var i = 0, fi = 0; i < singletemp.length; i++) {
      if (singletemp[i] != undefined) {
        var str = singletemp[i].subject;
        finalLB[fi] = new Object();
        finalLB[fi].subject = str;
        finalLB[fi].member = new Array();
        var fj = 0;
        console.log(finalLB);

        for (var j = i; j < singletemp.length; j++) {

          if (singletemp[j] != undefined && str == singletemp[j].subject) {
            finalLB[fi].member[fj++] = singletemp[j];
            delete singletemp[j];
            console.log('aaa true');
          }
        }
        fi++;
      }
    }
    console.log(finalLB);
    this.setData({
      tempAllInfo: finalLB
      // tempAllInfo[i].subject : single[0],
      // tempAllInfo[i].title = single[1],
      // tempAllInfo[i].speaker = single[2],
      // tempAllInfo[i].level = single[3],
      // tempAllInfo[i].content = single[4],
      // tempAllInfo[i].style = single[4]
    })
    console.log(this.data.tempAllInfo);
    if (this.data.tempAllInfo[0] != undefined) {
      this.setData({
        tempcontent: this.data.tempAllInfo[0].member
      })
    }

    if (this.data.updataflag == true && jsonLength != 0) {
      wx.showToast({
        title: '更新成功',
        icon: 'success',
        duration: 2000
      })
    } else if (this.data.updataflag == true && jsonLength == 0) {
      wx.showToast({
        title: '没有书签',
        image: '../../images/warn.png',
        duration: 2000
      })
    }

  },
  sunjectChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sindex: e.detail.value,
      tempcontent: this.data.tempAllInfo[e.detail.value].member,
      index:0
    })
    console.log(this.data.tempcontent);
    console.log(this.data.sindex);
  },
  contentPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  findButton: function (e) {
    wx.navigateTo({
      url: "newlb/newlb?subject=" + this.data.tempcontent[this.data.index].subject + "&title=" + this.data.tempcontent[this.data.index].title + "&speaker=" + this.data.tempcontent[this.data.index].speaker + "&level=" + this.data.tempcontent[this.data.index].level + "&content=" + this.data.tempcontent[this.data.index].content + "&style=" + this.data.tempcontent[this.data.index].style,
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
