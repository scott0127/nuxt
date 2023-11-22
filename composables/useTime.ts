export function useTime () {
  const now = ref('') // 使用ref來創建可響應的now屬性

  const updateTime = () => {
    const currentTime = new Date()
    // const hours = currentTime.getHours()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()
    now.value = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }
  const startClock = () => {
    setInterval(updateTime, 1000)
  }
  const returnNow = () => {
    return now
  }

  return {
    now,
    updateTime,
    startClock,
    returnNow
  }
}
