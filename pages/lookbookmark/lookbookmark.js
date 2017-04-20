
Page({
    data: {
        logs: []
    },
    onLoad: function () {
        const ctx = wx.createCanvasContext('myCanvas')




        ctx.setFontSize(15)
        ctx.setTextAlign('left')
        ctx.fillText('课程：医学', 100,180)

        ctx.setTextAlign('left')
        ctx.fillText('话题：免疫类', 100, 200)

        ctx.setTextAlign('left')
        ctx.fillText('发言者：xr', 100, 220)
        ctx.setTextAlign('left')
        ctx.fillText('关注度：5', 100, 240)


        ctx.draw()


    }
})
