import { ADD_PERSON } from '../constant'


// 初始化状态 (第一次的preState是undefined)
const initState = [{id: '001', name: 'tom', age: 18}]

// reducer 必须是纯函数
export default function personReducer(preState = initState , action) {
    const { type, data } = action
    switch (type) {
        case ADD_PERSON: // 若是添加一个人
            /* 
                preState.unshift(data) 
                此处不可以这样写，preState是对地址值的引用，这样写会导致preState和state都指向同一个地址
                即返回的是同一个地址，redux检测到地址没有改变，就不会更新state，所以页面不会更新
            */
            return [data, ...preState] // 这是个新的地址，redux检测到地址改变，就会更新state，页面就会更新
        default:
            return preState // 返回上一次的状态(第一次的preState是initState，因为由redux初始化时我们自定义传入的，所以不会是undefined)    
    }
}

