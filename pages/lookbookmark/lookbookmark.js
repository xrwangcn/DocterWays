
Page({
    data: {
        logs: []
    },
    onLoad: function () {
        const ctx = wx.createCanvasContext('myCanvas')
        ctx.drawImage("../../images/bookmark1.png", 60, 30, 250, 500)



        ctx.setFontSize(15)
        ctx.setTextAlign('left')
        ctx.fillText('textAlign=left', 150, 60)

        ctx.setTextAlign('center')
        ctx.fillText('textAlign=center', 150, 80)

        ctx.setTextAlign('right')
        ctx.fillText('textAlign=right', 150, 100)



    }
})
