export function useTime () {
  const now = ref('') // 使用ref來創建可響應的now屬性
  const today = ref('')
  const updateTime = () => {
    const currentTime = new Date()
    // const hours = currentTime.getHours()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    now.value = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }
  const updateDate = () => {
    const currentTime2 = new Date()
    // const hours = currentTime.getHours()
    const year = currentTime2.getFullYear()
    const monthNamesEn = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ]
    const month = currentTime2.getMonth()
    const monthstr = monthNamesEn[month]
    const date = currentTime2.getDate()
    today.value = monthstr + '/' + date + ',' + year
  }
  const startClock = () => {
    setInterval(updateTime, 1000)
  }
  const startDate = () => {
    updateDate()
  }
  const returnNow = () => {
    return now
  }

  return {
    now,
    today,
    updateTime,
    startClock,
    startDate,
    returnNow
  }
}
