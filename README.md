# 软考监理师教学平台

基于 Astro 5 + Starlight 构建的信息系统监理师在线教学平台。

## 🚀 特性

- 📚 **系统化教学** - 按章节系统讲解考试内容
- 💡 **通俗易懂** - 专业概念配合通俗例子
- 🎯 **重点突出** - 标注高频考点和重要程度
- ✏️ **练习巩固** - 每章配套练习题和历年真题
- 🌓 **暗黑模式** - 支持明暗主题切换
- 🔍 **全站搜索** - 基于 Pagefind 的全文搜索
- 📱 **响应式设计** - 完美适配移动端

## 📖 内容结构

### 第一篇：基础知识
- 第1章 信息化发展
- 第2章 信息系统工程
- 第3章 信息网络系统
- 第4章 信息资源系统
- 第5章 信息应用系统
- 第6章 信息安全
- 第7章 运行维护

### 第二篇：监理知识
- 第8章 监理概论 ✅
- 第9章 质量控制与验收管理
- 第10章 进度控制与成本管理
- 第11章 合同管理与知识产权
- 第12章 信息管理与资料管理
- 第13章 组织协调与沟通管理

## 🛠️ 技术栈

- [Astro 5](https://astro.build/) - 静态站点生成器
- [Starlight](https://starlight.astro.build/) - 文档主题
- [MDX](https://mdxjs.com/) - 增强的 Markdown
- [Vercel](https://vercel.com/) - 部署平台

## 🚦 快速开始

### 环境要求

- Node.js 18 或更高版本

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:4321 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

```
supervision-teaching-site/
├── src/
│   ├── assets/          # 静态资源
│   ├── components/      # 自定义组件
│   │   ├── ExerciseBox.astro    # 练习题组件
│   │   └── MemoryCard.astro     # 记忆卡片组件
│   ├── content/
│   │   └── docs/        # 文档内容
│   │       ├── guides/          # 学习指南
│   │       ├── chapter-01/      # 第1章
│   │       ├── chapter-08/      # 第8章
│   │       └── ...
│   └── styles/
│       └── custom.css   # 自定义样式
├── astro.config.mjs     # Astro 配置
├── package.json
└── vercel.json          # Vercel 部署配置
```

## 🎨 自定义组件

### ExerciseBox - 练习题组件

```mdx
<ExerciseBox
  question="监理工作的核心目标是（ ）"
  options={[
    'A. 降低工程成本',
    'B. 确保在合理的时间和费用下完成符合质量标准的工程'
  ]}
  answer="B"
  explanation="监理的核心目标是协助业主在合理的时间和费用下完成符合质量标准的工程。"
/>
```

### MemoryCard - 记忆卡片组件

```mdx
<MemoryCard 
  title="监理工作核心内容记忆口诀"
  formula="三控两管一协调：质进投合信调"
  importance={5}
  category="formula"
/>
```

## 🚀 部署到 Vercel

### 方式一：通过 GitHub 集成

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. Vercel 会自动检测 Astro 项目并配置
4. 每次推送到 main 分支会自动部署

### 方式二：通过 Vercel CLI

```bash
npm install -g vercel
vercel
```

## 📝 内容编写指南

每个 MDX 文件头部需包含：

```yaml
---
title: 章节标题
description: 章节描述
sidebar:
  order: 1
  badge:
    text: 重点
    variant: tip
---
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 License

MIT
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:4321 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 📁 项目结构

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   └── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).
