
Page({
    data: {
        logs: []

    },
    onLoad: function () {
        const ctx = wx.createCanvasContext('myCanvas')




        ctx.setFontSize(15)
        ctx.setTextAlign('left')
        ctx.fillText('课程：医学', 100, 180)

        ctx.setTextAlign('left')
        ctx.fillText('话题：免疫类', 100, 200)

        ctx.setTextAlign('left')
        ctx.fillText('发言者：xr', 100, 220)
        ctx.setTextAlign('left')
        ctx.fillText('关注度：★★★★☆', 100, 240)

        var bookmark = new Array();
        var str = "发上来的咖啡机阿斯兰的看法就爱圣诞快乐附近阿萨德开了房jasdflaksdfjlaskfjasldkf圣诞快乐发啊圣诞快乐发就是打开房间 ";
        for (var i = 0, j = str.length / 12; i < j; i++) {
            bookmark[i] = str.substr(i * 12, 12);
        }

        for (var i = 0; i < bookmark.length; i++) {
            ctx.setTextAlign('left')
            ctx.fillText(bookmark[i], 100, 280 + 20 * i)
        }

        ctx.draw()
        ctx.save()

    },
    saveButton(event) {
        wx.canvasToTempFilePath({
            canvasId: 'myCanvas',
            success: function success(res) {
                wx.saveFile({
                    tempFilePath: res.tempFilePath,
                    success: function success(res) {
                        console.log('saved::' + res.savedFilePath);
                        wx.showToast({
                            title: '保存成功',
                            icon: 'success',
                            duration: 2000
                        })
                    },
                    complete: function fail(e) {
                        console.log(e.errMsg);
                    }
                });
            },
            complete: function complete(e) {
                console.log(e.errMsg);
            }
        });
    }
})
