# CSS

## 水平垂直布局

### 水平居中

- 行内元素 text-align: center;
- 块级元素 margin: 0 auto;
- absolute + transform;
- display: flex; justify-content: center;

### 垂直居中

- line-height: var(h);
- absolute + transform;
- display: flex; align-items: center;
- table / grid;

### 水平垂直居中

- absolute + transform
- display: flex; justify-content + align-items;
- grid布局

## BFC

> 块级上下文，是web页面可视化css渲染的一部分，是块级盒子发生布局的区域，也是浮动元素与其他元素发生交互的区域

### 创建BFC

1. float 浮动
2. 绝对定位
3. overflow 不为 visiable
4. display为表格布局或者弹性布局

### 主要作用

1. 清除浮动
2. 防止同一 BFC 容器中的相邻元素间的外边距重叠问题

### 特点

1. BFC元素的垂直方向上会发生边距重叠。
2. BFC元素和浮动元素不会发生重叠。
3. BFC在计算高度时会把浮动元素计算进去。
4. BFC在页面是个独立的容器，里外元素互不影响。

## 高度塌陷和边距重叠

### 高度塌陷

> 在文档流中，父元素的高度默认是被子元素撑开的，如果子元素设置了浮动，此时子元素脱离了文档流，导致父元素无法被撑开，父元素高度就会变为0

解决方案

1. **推荐做法**：给父元素添加伪类，在伪类中清除浮动

   ```js
   .container::after {
   overflow: hidden;
   content: '';
   clear: both;
   display: block;
   height: 0;
   visibility: hidden;
   }
   ```

2. 给父元素设置高度。缺点是不灵活
3. 父元素触发BFC。缺点是带来其他副作用
4. 父元素尾部添加子元素并设置clear: both。缺点是添加了空标签，无实际语义。

### 边距重叠

> 如果两个盒子都设置了外边距，在垂直方向上的外边距可能会产生重叠，合并为一个外边距。大小是两个外边距的最大值，有负边距的减去负值，外边距相等的，则取该值。这种现象就叫外边距重叠。

外边距重叠有这几种情况：

1. 相邻同级元素：上下两个块级元素，同时设置外边距，垂直方向的外边距会取最大值重叠；
2. 嵌套父级元素：父元素设置外边距，未设置边框、内边距、高度、内容、设置BFC或者清除浮动时，子元素外边距会和父元素外边距取最大值重叠；
