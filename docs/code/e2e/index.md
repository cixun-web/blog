# 测试基本认知

## 为什么需要测试

确保软件按照预期的功能进行的

- 提前发现一些功能不完整，性能低下，有安全漏洞的地方，从而进行一个修复操作。
- 验证软件是否符合需求和标准
- 降低了维护的成本
- 增强软件的可靠性，增强团队的信心

## 测试类型

- 静态测试
- 单元测试
- 集成测试
- E2E测试

### 静态测试

代码编写期间进行测试，主要是代码规范的检查，对于前端来说 TypeScript Eslint 等。

### 单元测试

对代码的最小单元进行测试，一般是一个函数。一般通过mock的方式进行测试。

### 集成测试

对多个单元进行测试，一般是多个函数。主要是看这些单元在一起的时候是否能够正常工作。

### E2E测试

对整个应用进行测试，一般是一个页面。模拟用户的行为，看整个应用是否能够正常地运行。

## TDD 与 BDD 项目驱动模式

- TDD：测试驱动开发
- BDD：行为驱动开发

### TDD

编写代码之前，先写测试用例，然后再运行测试用例。如果测试用例失败，就需要代码，直到用例都通过

1. 编写测试用例
2. 运行测试用例，通过mock的方式进行测试
3. 编写代码

### BDD

通过用户行为来驱动软件的开发，更加注重协作和沟通，一般会采用GIVEN-WHEN-THEN的方式来编写测试用例。

## 前端自动化测试

- 单元测试
- 集成测试
- E2E测试
