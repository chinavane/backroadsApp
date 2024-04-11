import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
import tour5 from "./images/tour-5.jpeg";
import tour6 from "./images/tour-6.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "首页" },
  { id: 2, href: "#about", text: "关于我们" },
  { id: 3, href: "#services", text: "服务" },
  { id: 4, href: "#tours", text: "游览线路" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "省钱出行",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "无限远足",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "极致舒适体验",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "2024年8月26日",
    title: "西藏探险之旅",
    info: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam reprehenderit porro repellendus nostrum ex aliquam expedita quam recusandae doloremque consectetur.",
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
