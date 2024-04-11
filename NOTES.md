# Backroads App

- 项目页面资料：project-material/backroads-html

- 目录与文件结构：

```sh
backroads-html
├── css
│   └── styles.css
├── images
│   ├── about.jpeg
│   ├── about.jpg
│   ├── favicon.ico
│   ├── logo.svg
│   ├── main.jpg
│   ├── tour-1.jpeg
│   ├── tour-2.jpeg
│   ├── tour-3.jpeg
│   ├── tour-4.jpeg
│   ├── tour-5.jpeg
│   └── tour-6.jpeg
├── index.html
├── js
│   └── app.js
```

#### 创建新的 React 应用

- 安装新项目：

```sh
npx create-react-app@latest backroads-app
```

- 启动开发环境服务器：

```sh
npm start
```

- 目录与文件结构：

```sh
backroads-app
├── README.md                 # 项目自述文件，包含项目的简介、安装步骤、使用方法和贡献指南等信息
├── package-lock.json         # npm生成的锁定文件，确保所有依赖版本一致，在团队协作和跨环境部署时保持一致性和可复现性
├── package.json              # Node.js项目的核心配置文件，包含项目元数据（如名称、版本）、依赖项列表及脚本命令等
├── public
│   ├── favicon.ico          # 浏览器标签页和收藏夹中的网站图标
│   ├── index.html           # 应用程序的主HTML入口文件，通常用于加载JavaScript包并渲染React应用
│   ├── logo192.png          # 小尺寸（192x192像素）应用logo图片，适用于不同分辨率屏幕或PWA启动画面
│   ├── logo512.png          # 大尺寸（512x512像素）应用logo图片，常用于高分辨率桌面环境或全屏模式下展示
│   ├── manifest.json        # PWA（Progressive Web App）清单文件，定义了应用的基本信息、权限和离线缓存策略
│   └── robots.txt           # 网站爬虫协议文件，指示搜索引擎爬虫如何抓取网站内容

├── src
│   ├── App.css               # React应用中主要组件（App组件）的CSS样式表
│   ├── App.js                # React应用的主要组件实现，通常作为整个应用程序的顶层容器组件
│   ├── App.test.js           # Jest测试框架编写的App组件单元测试脚本
│   ├── index.css             # 应用全局CSS样式表，应用于整个单页面应用
│   ├── index.js              # 应用程序的入口点，负责渲染React应用到DOM上，通常是ReactDOM.render()调用的地方
│   ├── logo.svg              # 应用矢量图标文件，可用于在网页中显示品牌标识
│   ├── reportWebVitals.js    # Web Vitals性能度量报告脚本，用于收集并发送核心Web性能指标至分析服务
│   └── setupTests.js         # Jest测试环境配置脚本，用于设置全局的测试环境变量、模拟函数（mocks）以及其他测试工具配置
```

- reportWebVitals： 是一个与 Web Vitals 相关的功能，通常在前端项目中使用，目的是收集和报告网页性能指标数据。Web Vitals 是 Google 推出的一套衡量网页加载性能和用户体验的标准。

1. **Time to First Byte (TTFB)**: TTFB 衡量的是用户从发送 HTTP 请求到接收到服务器响应的第一个字节之间的网络延迟。这个时间包括 DNS 查找、TCP 连接建立、SSL 握手（如果适用）以及服务器处理请求和生成响应的时间。优化 TTFB 有助于改善网页的初始加载速度，因为它直接影响了用户感知页面开始加载的时间。
2. **First Contentful Paint (FCP)**: FCP 是网页性能的一个核心指标，它表示浏览器渲染页面上的第一个内容元素（如文本、图像或 SVG）所需的时间。这标志着用户首次看到页面实际内容的时间点，是用户体验中“视觉加载”的起点。
3. **Largest Contentful Paint (LCP)**: LCP 是用来度量网页加载性能的重要指标，它记录从页面开始加载到视口中最大的内容元素（通常是图片或视频）完全渲染出来所花费的时间。这是 Google Core Web Vitals 中的一个关键指标，用于评估页面主体内容加载的速度，直接影响了用户对页面是否“有用”的感知。
4. **First Input Delay (FID)**: FID 衡量的是用户首次与页面进行交互（例如点击按钮或滑动屏幕）时，浏览器从接收到该输入事件到能够开始处理该事件之间的时间差。较低的 FID 意味着页面在用户尝试与其交互时响应更灵敏，从而提升用户的交互体验。
5. **Cumulative Layout Shift (CLS)**: CLS 是衡量视觉稳定性的一项指标，计算的是整个加载过程中，由于未定义布局而发生的不可预测布局偏移的累计分数。低的 CLS 值表示页面在加载过程中不会出现突发的内容跳动，为用户提供更为稳定的阅读和交互环境。

这些指标都是现代 Web 性能优化和用户体验评价体系中的重要组成部分，尤其对于搜索引擎优化（SEO）、用户体验设计以及网站整体性能的持续改进具有重要意义。

#### SRC 文件夹

#### SRC Folder (boilerplate)

- public/index.html

  - 迁移 Font Awesome CDN 资源

- index.js

- 在 src 中移除以下文件

  - setupTests.js
  - reportWebVitals.js
  - App.test.js

- 注意多个 CSS 文件的使用

App.js

```js
function App() {
  return <h1>Backroads app</h1>;
}

export default App;
```

```js
function App() {
  // ctrl+shift+L 选中多行
  return <>......资源网页中的代码，注意className的修改</>;
}

export default App;
```

- 删除文件
  - logo.svg
  - App.css

#### 项目结构

- public

  - index.html，迁移 app.js 程序代码
  - favicon.ico，迁移到 public 文件夹

- index.css

  - 复制 styles.css 中的内容

```css
@media screen and (min-width: 768px) {
  .hero {
    background: linear-gradient(rgb(44, 174, 186, 0.7), rgba(0, 0, 0, 0.7)),
      url("./images/main.jpeg") center/cover no-repeat;
  }
}
```

- src 目录
  - 复制 images 文件夹
- App.js
  - <>文档片段</>，注意 className 的修改
  - 将 index.html 中的代码迁移到 App.js 中，删除 html 的注释
  - 修改 class 为 className

#### Components

- 创建 components 目录
- 在 components 目录中创建以下文件
  - Navbar.js
  - Hero.js
  - About.js
  - Services.js
  - Tours.j
  - Footer.js
- 利用 default export 导出模块 (snippet - rafce)
- 将 App.js 中的代码迁移到相应的组件中
- App.js 应该为空
- 通过 import 引入组件后再调用组件
- 界面显示的结果应该不变

#### Navbar

- 修复图片的显示问题
  - 利用 import 引入图片

```js
// import
import logo from "../images/logo.svg";

// JSX
<img src={logo} className="nav-logo" alt="backroads" />;
```

#### Smooth Scroll

- html/css 特性

```html
<!-- link -->
<a href="#services"> services </a>
<!-- element -->
<section id="services"></section>
```

```css
html {
  scroll-behavior: smooth;
}
.section {
  /* navbar height */
  scroll-margin-top: 4rem;
}
```

#### 页面链接

- 重构重复的代码

```js
<li>
  <a href="#home" className="nav-link">
    home
  </a>
</li>
```

- 确认页面链接的数据结构
- 在 src 的 data.js 中创建数据
- export/import 数据，然后使用 map 方法遍历数据

```js
export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];
```

```js
import { pageLinks } from "../data";

{
  pageLinks.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.href} className="nav-link">
          {link.text}
        </a>
      </li>
    );
  });
}
```

#### Nav Icons (social-links)

- 与 pageLinks 类似，定义数据结构

```js
{
  socialLinks.map((link) => {
    const { id, href, icon } = link;
    return (
      <li key={id}>
        <a href={href} target="_blank" rel="noreferrer" className="nav-icon">
          <i className={icon}></i>
        </a>
      </li>
    );
  });
}
```

#### Hero

- 可以尝试修改其标题和描述
- 注意 index.css 中图片的路径

#### About

- 利用 import 引入图片进行图片的使用

#### 标题组件

- components 目录中创建 Title.js
- 获取标题部分的代码结构
- 设置两个属性，利用解构赋值
- 替换 About, Services, Tours 组件代码内容

```js
const Title = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  );
};
export default Title;
```

About.js

```js
// 引入
import Title from "./Title";

// 显示
<Title title="关于我们" subTitle="的故事" />;
```

#### Services

- 重构重复的代码
  - 设置数据, 导入导出, 迭代循环数据

data.js

```js
export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  // 剩余内容
];
```

Services.js

```js
import Title from "./Title";
import { services } from "../data";
const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />

      <div className="section-center services-center">
        {services.map((service) => {
          const { id, icon, title, text } = service;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
```

#### Tours

- 重构重复代码

```js
import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "2024年8月26日",
    title: "西藏探险之旅",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "中国",
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: "2024年12月5日",
    title: "肯尼亚精华游",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "肯尼亚",
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: "2024年9月15日",
    title: "探索香港之旅",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "香港",
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: "2024年4月15日",
    title: "菲律宾阳光之旅",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "菲律宾",
    duration: 20,
    cost: 3300,
  },
  {
    id: 5,
    image: tour5,
    date: "2024年6月18日",
    title: "狮城之旅",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "新加坡",
    duration: 8,
    cost: 6500,
  },
  {
    id: 6,
    image: tour6,
    date: "2024年11月15日",
    title: "俄罗斯之雪",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: "俄罗斯",
    duration: 5,
    cost: 6500,
  },
];
```

#### Footer

- pageLinks 的循环遍历
- socialLinks 的循环遍历
- 当前年份的设置

#### 备选方案（可选）

- 创建 PageLinks.js 组件
- 导入 pageLinks
- 并返回完整的链接列表
- 注意属性的抽离与传递操作

#### 备选方案（可选）

操作模式与之前的操作模式类似，但处理的是：导航栏、标题、页面链接、社交链接、页脚等组件的重构。
Tour.js
Service.js
SocialLink.js
PageLink.js
