## 装饰器

提供了一些常用的装饰器函数。

### 安装

```shell
npm install @cat1989/decorator
```

### 示例

```vue
<template>
	<div>
		<button
			type="button"
			@click="click"
		>></button>
	</div>
</template>

<script>
import { debounce } from '@cat1989/decorator'

export default {
	methods: {
		click: debounce(function() {
			console.log('you click me!')
		}),
	},
}
</script>
```
