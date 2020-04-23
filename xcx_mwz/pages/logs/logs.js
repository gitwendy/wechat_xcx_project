//logs.js
const util = require('../../utils/util.js')

Page({
  data: {

    list: [],
    finishedList: [],
    splicList: []
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })

  },
  addToDo(e) {
    // 我们先来接收一个输入框的值
    let inputValue = e.detail
    console.log(inputValue)
    let obj = {
      inputValue: inputValue,
      status: false
    }
    // 当输入框的值不为空时候就添加
    if (inputValue === "") {
      console.log("输入框的内容不能为空")

    } else {
      this.data.list.push(obj)

    }


    this.setData({
      list: this.data.list,
      inputValue: ""
    })
    console.log(this.data.list)

  },
  ToFinished(e) {
    var checkValue = e.currentTarget.dataset.val;
    var checkIndex = e.currentTarget.dataset.index

    console.log(checkValue); //拿到的多选框的状态
    console.log(checkIndex); //下标

    console.log(this.data.list[checkIndex]); //选中当前的那个item
    console.log(this.data.list[checkIndex].status = !this.data.list[checkIndex].status)
    if (this.data.list[checkIndex].status == true) {

      this.data.finishedList.push(this.data.list[checkIndex])

      this.data.list.splice(checkIndex, 1)
      this.setData({
        list: this.data.list,
        finishedList: this.data.finishedList
      })
      // console.log(this.data.list);
      // console.log(this.data.finishedList)


    }


  },
  del(e) {
    var index = e.currentTarget.dataset.index

    console.log(index);
    this.data.finishedList.splice(index,1);
    this.setData({
      finishedList:this.data.finishedList
    })
   
   
    // console.log(this.data.splicList)

    // var index = this.data.splicList.findIndex(e => e.inputValue.value == item.inputValue.value);
    // console.log(index);
    // this.data.splicList.splice(this.data.splicList[index],1);
    // this.setData({
    //   list:this.data.list,
    //   finishedList:this.data.finishedList,
    //   splicList:this.data.splicList
    // })
    




  },

  ToPendding(e) {
    var checkValue = e.currentTarget.dataset.val;
    var checkIndex = e.currentTarget.dataset.index

    console.log(checkValue); //拿到的多选框的状态
    console.log(checkIndex); //下标

    console.log(this.data.finishedList[checkIndex]); //选中当前的那个item
    console.log(this.data.finishedList[checkIndex].status = !this.data.finishedList[checkIndex].status)
    if (this.data.finishedList[checkIndex].status == false) {

      this.data.list.push(this.data.finishedList[checkIndex])

      this.data.finishedList.splice(checkIndex, 1)
      this.setData({
        list: this.data.list,
        finishedList: this.data.finishedList
      })
      console.log(this.data.list);
      console.log(this.data.finishedList)


    }
  }
})