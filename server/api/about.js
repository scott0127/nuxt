let counter = 0
export default defineEventHandler(() => {
  counter += 2
  return {
    name: 'binhan',
    gender: '男',
    email: 'sdsadasds',
    counter
  }
})
