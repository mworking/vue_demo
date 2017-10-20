import { STORAGE_KEY } from './mutations'

const localStoragePlugin = store => {
    store.subscribe((mutation ,{todos}) => {
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(todos))
    })
}
// [localStoragePlugin] 需要加上 [] 变成一个数组， 否则的话，会报错，这儿应该是个数组
export default [localStoragePlugin]