// pages/test/test.js
var uploadTask;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgsrc:'',
    retsrc:'',
    hidden: true,
    Type: ['Black_Hair', 'Blond_Hair', 'Brown_Hair', 'Male', 'Young'],
    Typeindex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  chooseimg: function () {
    var that = this
    wx.chooseImage({
      sourceType: ['album'],
      sizeType: ['compressed', 'original'],
      count: 1,
      success: function (res) {
        console.log(res)
        that.setData({
          imgsrc: res.tempFilePaths[0]
        })
      }
    })
  },

  submit: function(){
    var that = this;
    if(that.data.imgsrc == '')
    {
      wx.showToast({
        title: '请选择图片',
        icon: 'none',
        duration: 1000,
      })
      return
    }
    that.setData({
      hidden: false,
    })
    uploadTask = wx.uploadFile({
      url: 'http://222.29.98.44:8080/',
      filePath: that.data.imgsrc,
      name: 'img',
      formData: {
        attr: that.data.Type[that.data.Typeindex],
        filename: that.data.imgsrc,
      },
      success: function(res){
        console.log(res.data);
        var ret = JSON.parse(res.data);
        that.setData({
          retsrc: ret.url,
          hidden: true,
        })
        that.download(ret.url)
      },
      fail: function(){
        console.log('fail');
      }
    })
   
    uploadTask.onProgressUpdate((res) => {
      console.log('上传进度', res.progress)
      console.log('已经上传的数据长度', res.totalBytesSent)
      console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend);
    })
  },

  download: function (filename) {
    var that = this
    wx.downloadFile({
      url: filename,
      header: {},
      success: function (res) {
        console.log(res);
        that.setData({
          retsrc: res.tempFilePath
        })
      },
      fail: function (res) {
        console.log('fail')
      },
      complete: function (res) { },
    })
  },

  test:function(){
    wx.request({
      url: 'http://222.29.98.44:8080/img/img.jpg',
      method: 'GET',
      success:function(res){
        console.log(res.data);
      }
    })
  },

  TypeChange: function (e) {
    this.setData({
      Typeindex: e.detail.value
    })
  },
})