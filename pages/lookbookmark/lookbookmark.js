
Page({
    data: {
        logs: []

    },
    onLoad: function (query) {
        const ctx = wx.createCanvasContext('myCanvas')

        //var subject=query.subject
        console.log(query)

        //ctx.drawImage("../../images/bookmark1.png", 50, 20, 271, 512)
        ctx.setFontSize(15)
        ctx.setTextAlign('left')
        ctx.fillText(query.subject, 100, 180)

        ctx.setTextAlign('left')
        ctx.fillText(query.title, 100, 200)

        ctx.setTextAlign('left')
        ctx.fillText(query.speaker, 100, 220)
        ctx.setTextAlign('left')
        var star='关注度：'
        for(var i=0;i<5;i++)
        {
            if(i<query.level)
             star=star+'★'
            else
             star=star+'☆'
        }
        ctx.fillText(star, 100, 240)

        var bookmark = new Array();
        var str = query.content;
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
                var lbimgsrc = res.tempFilePath
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
        })

    }

})
