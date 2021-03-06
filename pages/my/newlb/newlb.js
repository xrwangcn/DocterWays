
Page({
    data: {
        logs: [],
        subject: 'default',
        title: 'default',
        speaker: 'default',
        level: 'default',
        content: 'default',
        style: 'default',
        backgroundImage: "",
        height: "",
        position: "",
    },
    onLoad: function (query) {
        const ctx = wx.createCanvasContext('myCanvas')

        
        this.setData({
            subject: query.subject,
            title: query.title,
            speaker: query.speaker,
            level: query.level,
            content: query.content,
            style: query.style
        })

        //控制不同手机兼容性问题
        var phoneWeight;
        var posX=100;
        wx.getSystemInfo({
            success: function (res) {
                phoneWeight = res.windowWidth
            }
        })
        console.log("::" + phoneWeight)
        if (phoneWeight == 375||phoneWeight == 360||phoneWeight == 384) {
            this.setData({
                height: "1020rpx",

            })
        }else if (phoneWeight == 320) {
            this.setData({
                height: "1250rpx",
                position: "60rpx 30rpx"
            })
            posX=80;
        }else if (phoneWeight == 414||phoneWeight == 411||phoneWeight == 412) {
            this.setData({
                height: "950rpx",
                position: "130rpx 30rpx"
            })
            posX=130;
            console.log("::" + this.data.height)
        }

        //绘制书签
        ctx.setFontSize(15)
        ctx.setTextAlign('left')
        ctx.fillText('课程：' + this.data.subject, posX, 180)

        ctx.setTextAlign('left')
        ctx.fillText('话题：' + this.data.title, posX, 200)

        ctx.setTextAlign('left')
        ctx.fillText('发言者：' + this.data.speaker, posX, 220)
        ctx.setTextAlign('left')
        var star = '关注度：'





        //控制图片样式
        var styletemp = this.data.style
        if (styletemp == 1) {
            this.setData({
                backgroundImage: "url(data:image/png;base64,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)",
            })
            console.log("::" + styletemp)
        }else if (styletemp == 2) {
            this.setData({
                backgroundImage: "",
            })
            console.log("::" + styletemp)
        }else if (styletemp == 3) {
            this.setData({
                backgroundImage: "",
            })
            console.log("::" + styletemp)
        }else if (styletemp == 4) {
            this.setData({
                backgroundImage: "",
            })
            console.log("::" + styletemp)
        }else if (styletemp == 5) {
            this.setData({
                backgroundImage: "",
            })
            console.log("::" + styletemp)
        }else if (styletemp == 6) {
            this.setData({
                backgroundImage: "",
            })
            console.log("::" + styletemp)
        }

        for (var i = 0; i < 5; i++) {
            if (i < this.data.level)
                star = star + '★'
            else
                star = star + '☆'
        }
        ctx.fillText(star, posX, 240)

        var bookmark = new Array();

        for (var i = 0, j = this.data.content.length / 12; i < j; i++) {
            bookmark[i] = this.data.content.substr(i * 12, 12);
        }

        for (var i = 0; i < bookmark.length; i++) {
            ctx.setTextAlign('left')
            ctx.fillText(bookmark[i], posX, 280 + 20 * i)
        }

        ctx.draw()
        ctx.save()

    },
    // onShareAppMessage: function () {
    //     return {
    //         title: '医路由你·电子书签',
    //         desc: '这是我制作的书签，一起来看一下吧',
    //         path: "pages/lookbookmark/lookbookmark?subject=" + this.data.subject + "&title=" + this.data.title + "&speaker=" + this.data.speaker + "&level=" + this.data.level + "&content=" + this.data.content + "&style=" + this.data.style,

    //     }
    // },
    // saveButton(event) {

    //     wx.canvasToTempFilePath({
    //         canvasId: 'myCanvas',
    //         success: function success(res) {
    //             var lbimgsrc = res.tempFilePath
    //             wx.saveFile({
    //                 tempFilePath: res.tempFilePath,
    //                 success: function success(res) {
    //                     console.log('saved::' + res.savedFilePath);
    //                     wx.showToast({
    //                         title: '保存成功',
    //                         icon: 'success',
    //                         duration: 2000
    //                     })
    //                 },
    //                 complete: function fail(e) {
    //                     console.log(e.errMsg);
    //                 }
    //             });
    //         },
    //         complete: function complete(e) {
    //             console.log(e.errMsg);
    //         }
    //     })
    // }
    saveButton: function (e) {
        var currentValue = '#start#' + this.data.subject + '$$' + this.data.title + '$$' + this.data.speaker + '$$' + this.data.level + '$$' + this.data.content + '$$' + this.data.style

        var temp = currentValue + wx.getStorageSync("temp");
        wx.setStorageSync('temp', temp);
        wx.showToast({
            title: '保存成功',
            icon: 'success',
            duration: 2000
        })
        console.log(':::' + temp);
    }
})
