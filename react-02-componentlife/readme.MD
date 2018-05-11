## React 生命周期

#### 父子组件周期的理解
父组件 -> WillMount  <br/>
  子组件 -> Child WillMount   <br/>  
         -> Child DidMount   <br/>
父组件 -> DidMount <br/>

#### 当更新时 1. (从父组件改变)?
父组件 	->  (触发改变state的函数)  ShouldUpdate  <br/> 
  子组件 	-> (props获取父组件的state变化)  Child ShouldUpate     <br/> 
          -> 															Child DidMount  <br/>
父组件	-> 		DidMount<br/>
#### 当更新时 2. (从子组件 通过 props 触发父组件state更新) 周期同上
