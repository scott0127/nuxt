export default defineNuxtRouteMiddleware(() => {
  if (Math.random() > 0.5) {
    console.log('來自random-direct中間件，重新導向至 /count')
    return abortNavigation({
      statusCode: 877,
      statusMessage: '不可以進入逮斯',
      fatal: true
    })
    // remember fatal
    /*
    return abortNavigation({
      statusCode: 401,
      statusMessage: 'unauthorized',
      fatal: true
    }) */
  }

  console.log('啥都沒發生by 中間件')
})
