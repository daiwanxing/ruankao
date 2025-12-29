# 部署指南

本项目已配置好 Vercel 部署，可以通过以下两种方式部署到 Vercel。

## 方式一：通过 GitHub 集成（推荐）

### 1. 创建 GitHub 仓库

```bash
# 在 GitHub 上创建一个新仓库（比如 supervision-teaching-site）
# 然后将本地代码推送到 GitHub

git remote add origin https://github.com/你的用户名/supervision-teaching-site.git
git branch -M main
git push -u origin main
```

### 2. 导入到 Vercel

1. 访问 [Vercel](https://vercel.com)
2. 点击 "New Project"
3. 选择 "Import Git Repository"
4. 选择你刚才创建的 GitHub 仓库
5. Vercel 会自动检测这是一个 Astro 项目
6. 点击 "Deploy"

### 3. 自动部署

- 每次推送代码到 `main` 分支会自动触发部署
- 每个 Pull Request 会自动生成预览链接
- 部署过程约 1-2 分钟

## 方式二：通过 Vercel CLI

### 1. 安装 Vercel CLI

```bash
npm install -g vercel
```

### 2. 登录 Vercel

```bash
vercel login
```

### 3. 部署项目

```bash
# 在项目根目录执行
vercel

# 或直接部署到生产环境
vercel --prod
```

### 4. 后续部署

```bash
# 每次更新后执行
vercel --prod
```

## 验证部署

部署成功后，你会得到一个类似这样的 URL：

```
https://supervision-teaching-site.vercel.app
```

或者你可以绑定自己的域名。

## 环境配置

本项目不需要配置任何环境变量，开箱即用。

## 构建配置

项目已包含 `vercel.json` 文件，配置如下：

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "astro",
  "installCommand": "npm install"
}
```

Vercel 会自动识别并使用这些配置。

## 常见问题

### Q: 构建失败怎么办？

A: 检查以下几点：
1. 确保本地 `npm run build` 能正常运行
2. 查看 Vercel 构建日志中的错误信息
3. 确保 Node.js 版本 >= 18

### Q: 如何查看部署日志？

A: 在 Vercel 项目页面的 "Deployments" 标签下可以查看所有部署记录和日志。

### Q: 如何回滚到之前的版本？

A: 在 Vercel 的 "Deployments" 页面找到想要回滚的版本，点击 "Promote to Production"。

### Q: 如何绑定自定义域名？

A: 
1. 在 Vercel 项目设置中找到 "Domains"
2. 添加你的域名
3. 按照提示配置 DNS 记录

## 性能优化

项目已经过优化：
- ✅ 静态站点生成（SSG）
- ✅ 自动代码分割
- ✅ 图片优化
- ✅ CSS/JS 压缩
- ✅ 全站搜索（Pagefind）

预期性能指标：
- Lighthouse 性能分数：90+
- 首屏加载时间：< 2s
- 全站搜索响应：< 500ms

## 更新内容

添加新内容后：

1. 提交代码
```bash
git add .
git commit -m "添加新章节内容"
git push
```

2. Vercel 会自动构建和部署

## 预览部署

在开发新功能时：

1. 创建新分支
```bash
git checkout -b feature/new-chapter
```

2. 推送分支
```bash
git push origin feature/new-chapter
```

3. 创建 Pull Request
4. Vercel 会自动生成预览链接
5. 在预览环境中验证后再合并到 main 分支

## 下一步

部署成功后：
1. 继续添加其他章节内容
2. 优化 SEO 设置
3. 添加统计分析（可选）
4. 收集用户反馈
