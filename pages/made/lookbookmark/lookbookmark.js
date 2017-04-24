
Page({
    data: {
        logs: []

    },
    onLoad: function () {
        const ctx = wx.createCanvasContext('myCanvas')



        ctx.drawImage("../../images/bookmark1.png", 50, 20, 271, 512)


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
                        wx.previewImage({
                            current: 'res.savedFilePath', // 当前显示图片的链接，不填则默认为 urls 的第一张
                            success: function (res) {
                                // success
                                wx.showToast({
                                    title: '预览成功',
                                    icon: 'success',
                                    duration: 2000
                                })
                            },
                            fail: function (res) {
                                // fail
                            },
                            complete: function (res) {
                                // complete
                            }
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
