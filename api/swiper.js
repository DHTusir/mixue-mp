const db = wx.cloud.database()
const list = () => {
  return db.collection('mx_swiper').get();
}

module.exports = {
  list
}