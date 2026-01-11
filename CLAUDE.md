# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指导。

## 项目概述

这是一个面向中国"计算机系统监理师"职业资格考试的静态文档/教学网站。基于 Astro 5 + Starlight 构建，提供包含 13 章教育内容、交互式测验和记忆辅助的综合学习指南。

## 开发命令

```bash
# 开发
npm run dev          # 在 http://localhost:4321 启动开发服务器

# 生产构建
npm run build       # 构建静态站点到 dist/
npm run preview     # 本地预览生产构建

# 测试（Playwright E2E）
npx playwright test           # 运行所有 E2E 测试
npx playwright test --project=chromium  # 在指定浏览器中运行测试
```

**重要提示**：测试需要在 `http://localhost:4321` 运行开发服务器。运行测试前请先执行 `npm run dev`。

## 架构设计

### 内容优先设计

站点使用 Astro 的内容集合（Content Collections）配合 Starlight 模式。所有内容位于 `/src/content/docs/` 按章节组织：

- `guides/` - 学习指南和考试大纲
- `chapter-01/` 至 `chapter-10/` - 考试内容章节
- `reference/` - 参考资料

每个 MDX 文件需要 frontmatter 用于侧边栏排序和徽章：

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

### 侧边栏配置

侧边栏在 `astro.config.mjs` 中集中配置，使用 `autogenerate: { directory: 'chapter-XX' }`。新的内容文件夹会自动出现在导航中。通过 frontmatter `sidebar.order` 自定义排序。

### 自定义组件

内容中使用两个交互式 Astro 组件：

**ExerciseBox** (`src/components/ExerciseBox.astro`)
- 支持 A/B/C/D 选项的多选题组件
- 使用 `sessionStorage` 在选择后锁定答案（防止重复作答）
- 如未提供 `questionId`，会自动根据题目文本哈希生成
- 导入方式：`import ExerciseBox from '../../../components/ExerciseBox.astro';`

**MemoryCard** (`src/components/MemoryCard.astro`)
- 记忆辅助卡片，包含三种分类：`formula`（公式）、`tip`（提示）、`key-point`（重点）
- 重要程度评级 1-5 星
- 渐变背景，支持暗黑模式
- 导入方式：`import MemoryCard from '../../../components/MemoryCard.astro';`

### 样式架构

- 基础样式来自 Starlight 主题
- `src/styles/custom.css` 中的自定义 CSS 包含：
  - 增强的表格样式
  - 徽章组件（重要、频率、难度）
  - 高亮框（重要、提示）
  - 通过 `[data-theme='dark']` 实现暗黑模式
- `.astro` 文件中的组件作用域样式使用 Starlight CSS 变量（`--sl-color-*`）

### 测试策略

`/tests/` 中的 Playwright E2E 测试验证：
- 60+ 页面的 ExerciseBox 功能（见 `tests/all-exercises.spec.ts`）
- 答案提交、结果显示和 sessionStorage 持久化
- 全面的测试报告，包含通过/失败汇总

测试使用串行模式和隔离的浏览器上下文，避免测试间的 sessionStorage 干扰。

## 关键文件

- `astro.config.mjs` - 主配置文件（侧边栏、Starlight 设置、自定义 CSS）
- `src/content.config.ts` - 内容集合模式（精简版，使用 Starlight 模式）
- `src/components/ExerciseBox.astro` - 核心交互式测验组件
- `src/components/MemoryCard.astro` - 记忆辅助卡片组件
- `src/styles/custom.css` - 全局自定义样式
- `tests/all-exercises.spec.ts` - 综合性 E2E 测试套件

## 部署

部署在 Vercel 上，推送到 `main` 分支时自动部署。配置文件为 `vercel.json`。静态构建输出位于 `dist/`。

## 内容工作流程

1. 在 `/src/content/docs/chapter-XX/` 中创建/编辑 MDX 文件
2. 导入并使用组件：`import ExerciseBox from '../../../components/ExerciseBox.astro';`
3. 添加 frontmatter 用于侧边栏排序
4. 运行 `npx playwright test` 验证练习题
5. 使用 `npm run build` 构建并部署
