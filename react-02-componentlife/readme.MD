## React 生命周期
#父子组件周期的理解
父组件 -> WillMount
		子组件 -> Child WillMount
					-> Child DidMount
父组件 -> DidMount

#当更新时 1. (从父组件改变)?
父组件 	->  (触发改变state的函数)  ShouldUpdate
		子组件 	-> (props获取父组件的state变化)  Child ShouldUpate
						-> 															Child DidMount
父组件	-> 		DidMount
#当更新时 2. (从子组件 通过 props 触发父组件state更新) 周期同上
