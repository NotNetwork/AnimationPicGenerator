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
          imgsrc: res.tempFilePaths
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
      url: '',
      filePath: imgsrc,
      name: 'img',
      formData: {
        
      },
      success: function(res){
        console.log(res.data);
        that.setData({
          retsrc: res.data.url,
          hidden: true,
        })
      },
      fail: function(){
        console.log('fail');
      }
    })
    

  },
})