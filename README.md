## Figma 链接

[购物车](https://www.figma.com/file/5AwKjnWuM6BhRYmxdQFpky/Cart?node-id=0%3A1&t=lfaO4zazTd7nqF1q-1)

### 步骤

#### 初始化

```shell
npm install
```

```shell
npm run dev
```

#### 探索与分析

探索当前应用程序并分析其功能。

#### 全局上下文和 useReducer

设置全局上下文，并立即为 useReducer 创建通用配置。创建两个文件，一个用于编写 reducer 函数，另一个用于编写 action 函数。

#### 购物车状态值

在默认状态下，将购物车设置为一个新的 Map() 而不是数组。 更多详情见下文。

#### 挑战任务

- 使用新的 Map() 设置购物车
- 在 CartContainer 中访问并遍历购物车数据

#### 功能实现

在 reducer 和 actions 文件中实现以下功能，并使其在全局上下文中可用：

- 清空购物车：一个清空整个购物车的动作。
- 移除商品：一个移除购物车内特定商品的动作。
- 增加数量：一个增加购物车内特定商品数量的动作。
- 减少数量：一个减少购物车内特定商品数量的动作。

#### 计算总额

计算总额：一个计算购物车内所有商品总价格的函数。

#### 获取数据

```js
const url = "https://www.course-api.com/react-useReducer-cart-project";
```

获取数据：一个从 API 获取数据并将数据存储到购物车状态中的动作。

#### 测试

测试应用程序的功能并修复出现的任何问题。

应用程序流程概览如下：

1. 探索当前应用程序并分析其现有功能。
2. 设置全局上下文并为 useReducer 创建基本配置，创建 reducer 和 actions 分别对应的两个文件。
3. 在默认状态下，将购物车设为使用新的 Map() 数据结构而非数组。
4. 实现上述 Clear Cart、Remove Item、Increase Amount、Decrease Amount、Fetch Data 和 Calculate Totals 功能。
5. 在 reducer 和 actions 文件中实施这些功能，并将它们放入全局上下文中。
6. 对应用程序进行功能测试并对发现的问题进行修复。

#### 数据结构选项

- 数组形式

```js
const cart = [
  { id: 1, name: "first", price: 10 },
  { id: 2, name: "second", price: 20 },
];
```

使用对象存储购物车数据的缺点包括可能会意外覆盖属性以及迭代过程中遇到继承属性时的行为不确定性。此外，对象键只能是字符串类型，如果需要非字符串类型的键则会受到限制；从对象中删除属性也相对复杂，特别是涉及继承属性时。

- object

```js
const cart = {
  "id-1": { id: 1, name: "first", price: 10 },
  "id-2": { id: 2, name: "second", price: 20 },
};
```

使用对象存储购物车数据的缺点包括可能会意外覆盖属性以及迭代过程中遇到继承属性时的行为不确定性。此外，对象键只能是字符串类型，如果需要非字符串类型的键则会受到限制；从对象中删除属性也相对复杂，特别是涉及继承属性时。

- new Map()

对于购物车应用，使用新的 Map() 存储购物车数据具有诸多优势，因为它允许基于唯一的商品 ID 进行高效查找和更新操作。通过 Map，每个购物车内商品都能确保拥有唯一标识符，方便更新或移除而不影响其他商品。

#### Map

Map 是 JavaScript 内置的一种数据结构，可以存储键值对，其中键和值都可以是任意数据类型。以下是简单的示例：

```js
// create a new Map instance
const cart = new Map();

// set some key-value pairs

cart.set("apple", { name: "Apple", price: 0.5, quantity: 3 });
cart.set("banana", { name: "Banana", price: 0.3, quantity: 6 });
cart.set("orange", { name: "Orange", price: 0.4, quantity: 4 });

// get the value associated with a key
const appleDetails = cart.get("apple"); // returns { name: 'Apple', price: 0.5, quantity: 3 }

// check if a key exists in the map
const hasPear = cart.has("pear"); // returns false

// get the number of key-value pairs in the map
const size = cart.size; // returns 3

// delete a key-value pair from the map
cart.delete("banana");

// loop over the key-value pairs in the map
for (let [key, { name, price, quantity }] of cart) {
  console.log(key, name, price, quantity); // prints 'apple' 'Apple' 0.5 3, 'banana' 'Banana' 0.3 6, 'orange' 'Orange' 0.4 4
}
```

#### 转换

```js
const items = [
  { id: 1, name: "first", price: 10 },
  { id: 2, name: "second", price: 20 },
];
const cartItems = items.map((item) => [item.id, item]);

console.log(cartItems);
// prints:
// [
//   [1, { id: 1, name: 'first', price: 10 }],
//   [2, { id: 2, name: 'second', price: 20 }],
// ];

// create a new Map instance
const cart = new Map(cartItems);

// convert the Map to an array of key-value pairs
const cartArray = Array.from(cart.entries());

console.log(cartArray);
// prints:
// [
//   [1, { id: 1, name: 'first', price: 10 }],
//   [2, { id: 2, name: 'second', price: 20 }]
// ]
```
