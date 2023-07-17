// 引入Count的UI组件
import CountUI from "../../components/Count"
// 引入action
import { 
    createIncrementAction, 
    createDecrementAction, 
    createIncrementAsyncAction 
} from "../../redux/count_actions"
// 引入connect用于连接UI组件与redux
import { connect } from "react-redux"


/* 
    react-redux依赖redux，还是需要我们去使用redux
*/

// mapStateToProps返回的是一个对象
// mapStateToProps函数的返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value
// mapStateToProps函数用于传递状态
function mapStateToProps(state) { // react-redux帮我们调用了store.getState()
  return { count: state }
}

// mapDispatchToProps返回的是一个对象
// mapDispatchToProps函数的返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件props的value--操作状态的方法
// mapDispatchToProps函数用于传递操作状态的方法
function mapDispatchToProps(dispatch) { // react-redux帮我们调用了store.dispatch()
    return { 
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    }
}

// 创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
