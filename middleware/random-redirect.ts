export default defineNuxtRouteMiddleware(() => {
  if (Math.random() > 0.5) {
    console.log('來自random-direct中間件，重新導向至 /count')
    // return navigateTo('/count')
  }

  console.log('啥都沒發生by 中間件')
})
