
Page({
    data: {
        logs: [],
        subject: 'default',
        title: 'default',
        speaker: 'default',
        level: 'default',
        content: 'default',
        style: 'default'
    },
    onLoad: function (query) {
        const ctx = wx.createCanvasContext('myCanvas')

        //var subject=query.subject

        this.setData({
            subject: query.subject,
            title: query.title,
            speaker: query.speaker,
            level: query.level,
            content: query.content,
            style: query.style
        })
        //var subject = query.subject
        // var title = query.title
        // var speaker = query.speaker
        // var level = query.level
        // var content = query.content
        // var style = query.style

        //ctx.drawImage("../../images/bookmark1.png", 50, 20, 271, 512)
        ctx.setFontSize(15)
        ctx.setTextAlign('left')
        ctx.fillText(this.data.subject, 100, 180)

        ctx.setTextAlign('left')
        ctx.fillText(this.data.title, 100, 200)

        ctx.setTextAlign('left')
        ctx.fillText(this.data.speaker, 100, 220)
        ctx.setTextAlign('left')
        var star = '关注度：'
        for (var i = 0; i < 5; i++) {
            if (i < this.data.level)
                star = star + '★'
            else
                star = star + '☆'
        }
        ctx.fillText(star, 100, 240)

        var bookmark = new Array();

        for (var i = 0, j = this.data.content.length / 12; i < j; i++) {
            bookmark[i] = this.data.content.substr(i * 12, 12);
        }

        for (var i = 0; i < bookmark.length; i++) {
            ctx.setTextAlign('left')
            ctx.fillText(bookmark[i], 100, 280 + 20 * i)
        }

        ctx.draw()
        ctx.save()

    },
    onShareAppMessage: function () {
        return {
            title: '医路由你',
            desc: '这是我制作的书签，一起来看一下吧',
            path: "pages/lookbookmark/lookbookmark?subject=" + this.data.subject+"&title="+this.data.title+"&speaker="+this.data.speaker+"&level="+this.data.level+"&content="+this.data.content+"&style="+this.data.style,

        }
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
