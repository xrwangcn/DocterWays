
Page({
    data: {
        logs: []
    },
    onLoad: function () {
        const ctx = wx.createCanvasContext('myCanvas')

        wx.chooseImage({
            success: function (res) {
                ctx.drawImage("../../images/bookmark1.png", 50, 20, 271, 512)
                ctx.draw()
            }
        })
    }
})
