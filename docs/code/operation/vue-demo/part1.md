# 拖拽面板

> 功能分析：
> 
> 1. 需要可以移动
> 2. 需要可以配置参数【样式/事件】
> 3. 需要可以追加或删除
> 4. 不存在嵌套容器

## 拖拽移动

### 单个元素移动

通过draggable属性来实现

:::code-group
```vue [index.vue]
<template>
  <div
    id="dragBox"
  >
    <div
      v-for="item in dragList"
      :key="item.id"
      :id="item.id"
      class="dragItem"
      :class="{ 'dragging': isDragging }"
      :style="{
        ...item.styles,
      }"
      draggable="true"
      @dragstart="handleDragStart"
      @drag="handleDragMove"
      @dragend="handleDragEnd"
    >
      demo
    </div>
  </div>
</template>

<script>
import {
  itemDragStart,
  itemDragMove,
  itemDragEnd
} from './dragItem'

export default {
  data () {
    return {
      isDragging: false,
      dragList: [
        {
          id: 'dragItem',
          styles: {
            width: '60px',
            height: '40px',
            left: '0px',
            top: '0px'
          }
        }
      ]
    }
  },
  methods: {
    handleDragStart (e) {
      this.isDragging = true
      itemDragStart(e, this.dragList[0])
    },
    handleDragMove (e) {
      const result = itemDragMove(e)
      if (!result) return // 如果返回值为空，直接返回
      const { left, top } = result
      // 更新元素位置
      this.$set(this.dragList[0].styles, 'left', left)
      this.$set(this.dragList[0].styles, 'top', top)
    },
    handleDragEnd (e) {
      itemDragEnd(e)
      this.isDragging = false
    }
  }
}
</script>

<style lang="scss" scoped>
#dragBox {
  position: relative;
  border: 1px solid red;
  height: 500px;
  width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
}
.dragItem {
  position: absolute;
  border: 1px dashed #ccc;
  line-height: 40px;
  text-align: center;
  &.dragging {
    opacity: 0.8;
  }
}
</style>
```
```javascript [dragItem.js]
// 记录开始拖拽时的鼠标位置
let startDragInfo = {
  x: 0,
  y: 0
}
// 记录开始拖拽时元素的位置
let startItemInfo = {
  x: 0,
  y: 0
}

/**
 * 边界限制
 * @param parentId string 容器id
 * @param elId string 当前元素id
 * @param left string 不计算边界当前left --> 计算边界当前left
 * @param top string 不计算边界当前top --> 计算边界当前top
 */
const boundary = (
  parentId,
  elId,
  left,
  top
) => {
  // 获取容器和元素的尺寸
  const container = document.getElementById(parentId)
  const item = document.getElementById(elId)
  const containerRect = container.getBoundingClientRect()
  const itemRect = item.getBoundingClientRect()
  // 边界检查
  // 左边界
  left = Math.max(0, left)
  // 右边界
  left = Math.min(containerRect.width - itemRect.width, left)
  // 上边界
  top = Math.max(0, top)
  // 下边界
  top = Math.min(containerRect.height - itemRect.height, top)
  return {
    left: left + 'px',
    top: top + 'px'
  }
}

export const itemDragStart = (e, item) => {
  startDragInfo = {
    x: e.clientX,
    y: e.clientY
  }
  startItemInfo = {
    x: parseInt(item.styles.left),
    y: parseInt(item.styles.top)
  }
  return {
    startDragInfo,
    startItemInfo
  }
}

export const itemDragMove = (e) => {
  if (!e.clientX || !e.clientY) return // 处理 Firefox 的问题
  // 计算位置差值
  const deltaX = e.clientX - startDragInfo.x
  const deltaY = e.clientY - startDragInfo.y
  return boundary(
    'dragBox',
    'dragItem',
    startItemInfo.x + deltaX,
    startItemInfo.y + deltaY
  )
}
export const itemDragEnd = (e) => {
  startDragInfo = {
    x: 0,
    y: 0
  }
  startItemInfo = {
    x: 0,
    y: 0
  }
}
```
:::

### 扩展元素类型为 block 时, y轴吸附

在上文我们已经实现了基础的拖拽，但是在真实开发的时候，我们是并不希望元素脱离文档流，在x轴的拖拽我们还是很方便实现的。
所以我们只需要在还是文档流内的元素可以x轴方向改变，y轴可以进行吸附。改造后的代码如下



### 存在多个元素，拖拽时位置的计算

## 配置参数的实现思路

## 追加方式

### 直接追加

### 拖拽追加
