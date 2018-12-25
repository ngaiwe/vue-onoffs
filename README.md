# 基于vue的一款开关组件

## 文档

### 举例
> 这里主要以第一个默认组件为例子 来举例如何调用使用 组件名为 OnOff.vue

> 具体组件API查看下面文档

### 一 通用初始化步骤

- 初始化组件

	``` example
	data () {
	  return {
	    onOff: OnOff.empty({
	        width: 50,
	        height: 32,
	        borderWidth: 2,
	    })
	  }
	}
	```

- 绑定data对象

	``` example
	<OnOff :value="onOff" @change="changeOnOff"/>
	```

- 监听组件变更 change

	``` example
	changeOnOff (obj) {
		this.onOff = OnOff.Logic.update(OnOff.Logic.switchoverStatus(obj))      
	}
	```
	
### 二 组件相关API
- #### OnOff.vue
	
	##### props
	
	| Options | Type | Description | Default |
	| :------ | :------:| :------:| :------: |
	| width | Number | 开关宽度 | 100 |
	| height | Number | 开关高度 | 64 |
	| borderWidth | Number | 开关描边 | 4 |
	| status | Boolean | 开关状态 默认true | true |
	| startColor | Object | 开始开关颜色 | 查看 startColor |
	| endColor | Object | 开始开关颜色 | 查看 endColor |
	
	###### startColor
	| Options | Type | Description | Default |
	| :------ | :------:| :------:| :------: |
	| strokeStyle | String | 开关边框色 | rgb(235,235,235) |
	| fillStyle | String | 开关背景色 | rgba(255,255,255,1) |
	| defaultArcBdColor | Number | 圆形背景色 | rgba(255,255,255,1) |
	| shadowObj | Object | 开始开关阴影色 |  |
	
	###### endColor
	| Options | Type | Description | Default |
	| :------ | :------:| :------:| :------: |
	| strokeStyle | String | 开关边框色 | rgba(75,217,100,1) |
	| fillStyle | String | 开关背景色 | rgba(75,217,100,1) |
	| defaultArcBdColor | Number | 圆形背景色 | rgba(255,255,255,1) |
	| shadowObj | Object | 开始开关阴影色 |  |
	
	##### methods
	
	##### empty 
	
	> 初始化props 用法如下
	
	``` example
	OnOff.empty({
	    width: 50,
	    height: 32,
	    borderWidth: 2
	})
	```
	
	##### Logic
	
	| Options | Type | Description | Default |
	| :------ | :------:| :------:| :------: |
	| update | Function | 更新props| {} |
	| switchoverStatus | Function | 获得开关切换状态 | props |
	
	> 用法如下
	
	``` example
	OnOff.Logic.update() // 更新props
	```
	``` example
	OnOff.Logic.switchoverStatus(obj) // 更新切换状态
	```	

