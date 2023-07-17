import { ADD_PERSON } from '../constant'


// 初始化状态 (第一次的preState是undefined)
const initState = [{id: '001', name: 'tom', age: 18}]

export default function personReducer(preState = initState , action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON: // 若是添加一个人
            return [data, ...preState]
        default:
            return preState // 返回上一次的状态(第一次的preState是initState，因为由redux初始化时我们自定义传入的，所以不会是undefined)    
    }
}

