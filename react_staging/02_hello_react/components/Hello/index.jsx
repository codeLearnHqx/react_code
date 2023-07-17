import React,{ Component } from "react"
/* 
    css文件名加上module命名，并通过模块方式进行引入即可实现样式文件的模块化，
    解决样式名冲突的问题，后期可以通过less等方案解决
*/
import hello from './index.module.css' 

export default class Hello extends Component {
    render() {
        return (
            <h2 className={hello.title}>Hello, react!</h2>
        )
    }
}