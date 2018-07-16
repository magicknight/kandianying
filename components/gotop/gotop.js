Component({
  /**
   * 组件的属性列表
   */
  properties: {
  
  },

  /**
   * 组件的初始数据
   */
  data: {
    goTopFlag: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPageScroll: function (e) { // 获取滚动条当前位置
      let goTopFlag = this.data.goTopFlag;
      this.triggerEvent('onPageScroll', goTopFlag);
      let scrollTop = e.scrollTop;
      let that = this;
      wx.getSystemInfo({
        success: function (res) {
          if (scrollTop > res.windowWidth) {
            that.setData({
              goTopFlag: true
            });
          } else {
            that.setData({
              goTopFlag: false
            });
          }
        }
      });
      console.log(this.data.goTopFlag);
    },

    goTop: function (e) {  // 一键回到顶部
      if (wx.pageScrollTo) {
        wx.pageScrollTo({
          scrollTop: 0
        })
      } else {
        wx.showModal({
          title: '提示',
          content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
        })
      }
    },
  }
})

