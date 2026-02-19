---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: eb181fd77dbe6ac84ad42938f28d15d3
    PropagateID: eb181fd77dbe6ac84ad42938f28d15d3
    ReservedCode1: 3044022058b9a956216eb6781632a0422d06a518600dc222779e105d11a85d766fd5328c022026d0df98f0b1a9fa8bd9b192646b78c8d429cab103e867cdf216877b1be9dcff
    ReservedCode2: 3046022100e6b090320b3dbb1c797248b89ecfd658ef2924f8aa2d221e4b7ef45fc3835ba8022100dfba44eaf431f56adf8f8e353a6fc556db0059a1317532a618c080f8be0dc44c
---

# Next.js 文档平台 UI 设计规范

## 设计规范文档

**版本**：1.0
**适用产品**：技术文档网站、Web 应用程序文档中心
**基于参考**：Next.js 官方文档平台（nextjs.org/docs）
**编制说明**：本规范基于对 Next.js 官方文档网站的视觉设计分析整理而成，涵盖色彩、字体、布局、组件、交互等核心设计维度，可作为技术文档类网站实现的设计参考依据。

---

## 第一章 设计原则

### 1.1 核心设计理念

Next.js 文档平台的设计体系建立在「内容优先」这一核心原则之上。作为技术文档网站，首要目标是高效传达技术信息，所有视觉设计都应该服务于这一目标而非喧宾夺主。这一理念体现在设计的各个环节：从简洁克制的配色方案到精心规划的排版层级，从清晰的信息架构到流畅的交互体验，每一个设计决策都将内容可读性和用户效率放在首位。

设计风格追求「专业而不冰冷、简洁而不单调」的平衡感。深色主题作为默认配置体现了对开发者群体工作习惯的深度理解——长时间面对屏幕工作的开发者通常更偏好暗色环境以减少眼睛疲劳。同时，适当的视觉点缀（如品牌色点缀、精心设计的图标）避免了深色界面可能带来的沉闷感，塑造出富有活力的技术氛围。

### 1.2 设计价值观

本设计体系遵循以下核心价值观，这些价值观贯穿于规范的各项具体规则之中：

**清晰优先**：视觉设计应该降低认知负荷而非增加。用户应该能够直觉地理解界面结构，无需额外学习成本。通过一致的布局模式、清晰的视觉层级、明确的交互反馈，实现「所见即所得」的直觉体验。

**效率至上**：文档网站是功能性工具而非展示性媒体。导航应该快速响应，操作应该简洁直接，信息应该易于获取。设计应该帮助用户更快达成目标，而非制造障碍。

**一致统一**：整个产品线保持视觉语言的一致性，同类组件使用相同的样式和行为。这种一致性不仅提升品牌认知度，更重要的是降低用户的学习成本——一旦学会某个交互模式，该模式应该在所有场景中保持一致。

**包容可及**：设计应该考虑到各类用户群体的需求，包括视觉障碍、色盲、运动障碍等用户。满足 WCAG 无障碍标准不仅是合规要求，更是设计伦理的体现。

---

## 第二章 色彩系统

### 2.1 色彩概述与设计理念

Next.js 文档采用深色主题作为默认配置，这一选择基于多重考量：首先，深色背景能够有效降低屏幕对眼睛的刺激，适合开发者长时间工作的使用场景；其次，深色主题赋予界面专业的技术气质，与产品的极客属性高度契合；再次，在深色背景上代码块能够获得更好的视觉对比度，提升代码阅读体验。

色彩体系的设计强调功能性和可访问性。每个颜色都有其明确的语义和适用场景，避免随意使用造成的视觉混乱。所有色彩组合都经过对比度验证，确保满足 WCAG AA 级标准（普通文本 4.5:1，大文本 3:1），保障各类用户群体的可读性。

### 2.2 主色板

#### 2.2.1 背景色阶

页面背景采用多层递进的深灰色阶，通过明度差异自然划分不同功能区域。这种设计既避免了单一背景色的单调感，又通过视觉层次引导用户注意力。

| 名称 | 用途 | 色值 |
|------|------|------|
| 主背景（Page Background） | 页面最底层背景、全局容器 | `#000000` 或 `rgb(0, 0, 0)` |
| 侧边栏背景（Sidebar Background） | 左侧导航区域、右侧锚点区域 | `#0a0a0a` 或 `rgb(10, 10, 10)` |
| 内容容器背景（Content Background） | 主内容区域容器 | `#111111` 或 `rgb(17, 17, 17)` |
| 代码块背景（Code Block Background） | 代码示例区域 | `#0d1117` 或 `rgb(13, 17, 23)` |
| 卡片背景（Card Background） | 独立内容卡片、提示框 | `#161b22` 或 `rgb(22, 27, 34)` |

上述色值在实际实现中可根据具体产品需求进行微调，但应保持整体明度层级关系：代码块背景应略深于内容容器背景，内容容器背景应略深于侧边栏背景。这种层层递进的背景层次在视觉上自然划分功能区域，同时保持整体的和谐统一。

#### 2.2.2 文字色阶

文字颜色的设计需要在可读性和层级表达之间取得平衡。不同重要程度的信息使用不同的文字颜色，通过明度差异建立清晰的视觉层级。

| 名称 | 用途 | 色值 |
|------|------|------|
| 主文字（Primary Text） | 正文内容、主要说明文字 | `#ededef` 或 `rgb(237, 237, 239)` |
| 次要文字（Secondary Text） | 辅助说明、表格内容 | `#a1a1aa` 或 `rgb(161, 161, 170)` |
| 弱化文字（Muted Text） | 占位符、禁用状态、元信息 | `#71717a` 或 `rgb(113, 113, 122)` |
| 强调文字（Emphasized Text） | 标题、关键概念、活跃状态 | `#ffffff` 或 `rgb(255, 255, 255)` |
| 代码文字（Code Text） | 代码块内文字 | `#e6edf3` 或 `rgb(230, 237, 243)` |

#### 2.2.3 品牌主色

品牌色彩作为点睛之笔出现在关键的交互元素上，用于传达品牌身份和引导用户注意。品牌色的使用遵循「少而精」原则，过度使用会削弱其引导功能。

| 名称 | 色值 | 使用场景 |
|------|------|----------|
| 品牌蓝（Brand Blue） | `#60a5fa` 或 `rgb(96, 165, 250)` | 主要链接、交互高亮、选中状态 |
| 品牌青（Brand Cyan） | `#22d3ee` 或 `rgb(34, 211, 238)` | 强调元素、图标填充、装饰性点缀 |
| 品牌紫（Brand Purple） | `#a78bfa` 或 `rgb(167, 139, 250)` | 特色功能标识、特殊提示框 |

### 2.3 功能色彩

功能色彩用于传达特定的信息类型和状态，每种颜色都承载明确的语义。用户应该能够仅凭颜色就能直觉地识别信息类型，这种条件反射般的认知效率是优秀功能色设计的核心目标。

#### 2.3.1 状态色

| 名称 | 色值 | 语义 | 使用场景 |
|------|------|------|----------|
| 成功绿（Success Green） | `#22c55e` 或 `rgb(34, 197, 94)` | 成功、完成、确认 | 成功提示、完成状态、验证通过 |
| 警告黄（Warning Yellow） | `#eab308` 或 `rgb(234, 179, 8)` | 注意、提醒、建议 | 警告提示、注意事项、版本提示 |
| 错误红（Error Red） | `#ef4444` 或 `rgb(239, 68, 68)` | 错误、危险、禁止 | 错误提示、删除操作、风险警告 |
| 信息蓝（Info Blue） | `#3b82f6` 或 `rgb(59, 130, 246)` | 信息、说明、引导 | 一般提示、信息卡片 |

#### 2.3.2 语法高亮色

代码块的语法高亮采用精心调配的色板，与主流代码编辑器主题（如 GitHub Dark、Monokai）保持一致。这种熟悉感帮助开发者快速识别代码结构，降低学习成本。

| 语法元素 | 色值 | 示例 |
|---------|------|------|
| 关键字（Keyword） | `#c792ea` 或 `rgb(199, 146, 234)` | `function`, `const`, `import`, `if` |
| 字符串（String） | `#f78c6c` 或 `rgb(247, 140, 108)` | `'hello'`, `"world"`, `` `template` `` |
| 函数名（Function） | `#82aaff` 或 `rgb(130, 170, 255)` | 函数调用、方法名 |
| 变量名（Variable） | `#e6edf3` 或 `rgb(230, 237, 243)` | 变量标识符、常量 |
| 注释（Comment） | `#6b7280` 或 `rgb(107, 114, 128)` | `// comment`, `/* block */` |
| 类型（Type） | `#ffcb6b` 或 `rgb(255, 203, 107)` | TypeScript 类型标注 |
| 属性（Property） | `#7ee787` 或 `rgb(126, 231, 135)` | 对象属性、键名 |

### 2.4 色彩实现指南

在实际项目中使用本色彩系统时，建议通过 CSS 自定义属性（CSS Custom Properties）建立设计令牌，确保色彩的一致性和可维护性。以下是推荐的实现方式：

```css
:root {
  /* 背景色阶 */
  --color-bg-primary: #000000;
  --color-bg-sidebar: #0a0a0a;
  --color-bg-content: #111111;
  --color-bg-code: #0d1117;
  --color-bg-card: #161b22;

  /* 文字色阶 */
  --color-text-primary: #ededef;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;
  --color-text-emphasized: #ffffff;
  --color-text-code: #e6edf3;

  /* 品牌色 */
  --color-brand-primary: #60a5fa;
  --color-brand-cyan: #22d3ee;
  --color-brand-purple: #a78bfa;

  /* 功能色 */
  --color-success: #22c55e;
  --color-warning: #eab308;
  --color-error: #ef4444;
  --color-info: #3b82f6;
}
```

---

## 第三章 字体系统

### 3.1 字体选择策略

字体是文档阅读体验的核心要素，直接影响信息的传达效率和用户的阅读舒适度。Next.js 文档的字体策略基于「系统优先、代码专用」的原则，针对不同内容类型选择最适合的字体解决方案。

正文字体优先使用系统字体栈，这种策略的优势在于：无需额外加载字体资源，确保最快的首屏渲染速度；系统字体在各自平台上具有最佳的渲染效果；用户对本地字体最为熟悉，阅读时具有亲切感。系统字体栈的排列顺序经过精心设计，确保在各类操作系统和设备上都能呈现良好效果。

代码字体采用专为编程场景设计的等宽字体，这类字体经过专门优化，在字符清晰度、数字辨识度、连字支持等方面都有出色表现。代码字体的选择还会考虑与正文字体的视觉协调性，确保代码块与正文之间的过渡自然。

### 3.2 字体家族定义

#### 3.2.1 正文字体栈

```css
/* 英文/英文数字混排 */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

/* 中文字体（备用）*/
font-family: "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif;
```

字体栈解析如下：`-apple-system` 针对苹果系统的高质量系统字体；`BlinkMacSystemFont` 针对 Chrome 在 macOS 上的渲染优化；`"Segoe UI"` 是 Windows 系统的标准字体；`Roboto` 是 Android 系统的主要字体；`"Helvetica Neue"` 和 `Arial` 作为传统桌面系统的备选字体。

#### 3.2.2 代码字体栈

```css
/* 代码字体 */
font-family: "Geist Mono", "Fira Code", "JetBrains Mono", "Source Code Pro", Consolas, Monaco, "Courier New", monospace;
```

`Geist Mono` 是 Vercel 开发的专属代码字体，与 Next.js 产品具有天然的视觉一致性。如需从 CDN 加载，可使用以下地址：字体资源通常托管在 Vercel 的 CDN 上，可通过 CSS `@font-face` 规则引入。

### 3.3 字号层级体系

字号层级是建立信息结构的关键手段。通过精心设计的字号递减序列，读者能够直觉地理解内容的组织关系——哪些是章节标题、哪些是节标题、哪些是正文内容。

| 层级 | 字号 | 字重 | 行高 | 用途 |
|------|------|------|------|------|
| H1 | 32px / 36px | 700 (Bold) | 1.2 - 1.25 | 页面主标题 |
| H2 | 24px / 28px | 600 (Semi-Bold) | 1.25 | 主要章节标题 |
| H3 | 20px / 22px | 600 (Semi-Bold) | 1.3 | 次要章节标题 |
| H4 | 16px / 18px | 600 (Semi-Bold) | 1.4 | 小节标题 |
| 正文 | 16px | 400 (Regular) | 1.6 - 1.75 | 主要内容 |
| 辅助 | 14px | 400 (Regular) | 1.5 | 表格、注释、次要说明 |
| 代码 | 14px / 15px | 400 (Regular) | 1.5 | 代码块内容 |

字重的分配遵循「标题重正文轻」的原则。标题使用 600-700 字重，建立明确的视觉重心；正文使用 400 字重，确保阅读的轻松感；代码内容使用 400 字重，避免加粗字体对代码结构的干扰。

行高的设置需要平衡可读性和空间效率。正文行高 1.6-1.75 提供充足的呼吸空间，适合长段落阅读；代码行高 1.5 更为紧凑，适应代码块有限的高度空间；标题行高较小，因为标题通常是短句，紧凑的行高能够强化词汇的整体感。

### 3.4 字体实现指南

```css
:root {
  /* 字体家族 */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: "Geist Mono", "Fira Code", "JetBrains Mono", "Source Code Pro", Consolas, Monaco, "Courier New", monospace;

  /* 字号 */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 28px;
  --text-4xl: 32px;
  --text-5xl: 36px;

  /* 字重 */
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* 行高 */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.6;
  --leading-loose: 1.75;
}

/* 标题样式 */
h1, .h1 {
  font-size: var(--text-5xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}

h2, .h2 {
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
}

h3, .h3 {
  font-size: var(--text-xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-normal);
}

/* 正文样式 */
p {
  font-size: var(--text-base);
  font-weight: var(--font-regular);
  line-height: var(--leading-relaxed);
}

/* 代码样式 */
code, pre {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}
```

---

## 第四章 布局系统

### 4.1 整体布局架构

Next.js 文档采用经过实践验证的三栏布局结构，这种布局在技术文档领域被广泛采用，其有效性已得到充分证明。布局从左到右依次为：固定左侧导航栏、主内容区域、右侧锚点导航栏，加上顶部固定的全局导航栏。这种布局设计的核心理念是将导航功能与阅读内容分离，用户可以在不丢失阅读位置的情况下快速切换主题。

整体布局采用固定定位与弹性布局相结合的方式。左侧导航栏和顶部导航栏使用固定定位，始终保持在视口内，不随页面滚动而消失。主内容区域使用弹性宽度，在合理范围内自适应屏幕宽度，同时通过最大宽度限制防止在超宽屏幕上单行文字过长。右侧锚点导航栏在屏幕空间允许时显示，空间不足时隐藏，保证内容阅读区域的最大化。

### 4.2 布局区域定义

#### 4.2.1 顶部导航栏

顶部导航栏高度固定为 64px（可根据具体设计调整），使用 `position: fixed` 固定在视口顶部。导航栏背景使用半透明效果（`backdrop-filter: blur(8px)`），在滚动时提供良好的内容隔离效果同时保持与下层内容的视觉联系。

导航栏内部布局采用水平分栏设计：左侧放置品牌标识（Logo + 产品名称），中间放置主导航链接，右侧放置辅助功能（搜索入口、版本选择器、主题切换、GitHub 链接等）。各区域之间保持适当间距，确保视觉呼吸感。

#### 4.2.2 左侧导航栏

左侧导航栏宽度固定为 280px（可根据内容复杂度调整），同样使用 `position: fixed` 固定在视口左侧。导航栏高度为视口高度减去顶部导航栏高度，自身具备滚动能力，当导航内容超出可视区域时可独立滚动。

导航栏内部采用树形层级结构组织，通过缩进表示层级关系。顶级导航项使用较大的字号（16px）和粗体字重，二级、三级条目逐级缩小并减轻字重，通过这种方式在单一列表中呈现清晰的信息层级。当前阅读位置通过左侧边框条（3px 宽度、品牌色）和背景色高亮同时指示，提供双重视觉反馈。

#### 4.2.3 主内容区域

主内容区域位于左侧导航栏和右侧锚点导航栏之间，是文档的核心阅读区域。内容宽度设置最大限制（通常为 768px-896px），在超宽屏幕上防止单行文字过长影响阅读效率。内容区域在视口中水平居中，左右边距保持对称。

内容区域内部采用垂直流式布局，元素依次排列。段落、列表、代码块、表格等元素按照文档结构逻辑顺序组织。章节标题与下方内容保持较大间距，段落之间保持适度间距，通过间距差异体现内容结构关系。

#### 4.2.4 右侧锚点导航栏

右侧锚点导航栏宽度固定为 220px，仅在屏幕宽度足够时显示（通常视口宽度大于 1280px）。该区域显示当前页面的目录结构，提供页面内的快速跳转功能。

锚点列表与页面标题层级对应，点击后页面平滑滚动到对应位置。滚动时高亮当前阅读位置的目录项，通过 `IntersectionObserver` API 实时检测并更新高亮状态。这种交互设计帮助用户建立页面内容的整体认知，同时提供高效的导航方式。

### 4.3 布局实现指南

```css
:root {
  /* 布局尺寸 */
  --header-height: 64px;
  --sidebar-width: 280px;
  --toc-width: 220px;
  --content-max-width: 896px;

  /* 间距 */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
}

/* 整体布局容器 */
.layout {
  display: flex;
  min-height: 100vh;
  padding-top: var(--header-height);
}

/* 顶部导航 */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 100;
}

/* 左侧导航 */
.sidebar {
  position: fixed;
  top: var(--header-height);
  left: 0;
  width: var(--sidebar-width);
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
}

/* 主内容区域 */
.main {
  flex: 1;
  margin-left: var(--sidebar-width);
  margin-right: var(--toc-width);
  padding: var(--spacing-xl);
  max-width: calc(100% - var(--sidebar-width) - var(--toc-width));
}

/* 内容容器 */
.content {
  max-width: var(--content-max-width);
  margin: 0 auto;
}

/* 右侧锚点 */
.toc {
  position: fixed;
  top: var(--header-height);
  right: 0;
  width: var(--toc-width);
  height: calc(100vh - var(--header-height));
  overflow-y: auto;
}
```

---

## 第五章 间距系统

### 5.1 基础间距单位

间距系统采用 4px 作为基础单位，所有间距数值都是 4 的倍数。这种规范化的间距体系确保了整体布局的节奏感和一致性。4px 作为最小间距单位，用于元素内部的微调场景；8px 是次小间距，用于紧密相关元素之间的分隔；16px 是最常用的中等间距，适用于大多数组件内部和元素之间的分隔。

这种以 4 为基数的设计体系与 Tailwind CSS 等主流 CSS 框架的间距系统保持一致，便于与现有工具链集成。同时，4px 基数也与浏览器默认渲染精度相匹配，能够在大多数显示设备上获得一致的视觉效果。

### 5.2 间距尺度定义

| 名称 | 数值 | 用途 |
|------|------|------|
| xs | 4px | 组件内部微调、图标与文字的最小间距 |
| sm | 8px | 紧密相关元素之间的分隔 |
| md | 16px | 常规组件间距、段落内部元素间距 |
| lg | 24px | 组件之间的分隔、章节内部的区块间距 |
| xl | 32px | 主要章节之间的分隔 |
| 2xl | 48px | 页面级区块之间的分隔 |
| 3xl | 64px | 大型区块之间的分隔、页面边距最大值 |

### 5.3 间距应用原则

**垂直间距优先于水平间距**：在文档类内容中，垂直方向的间距对内容结构的影响更为显著。段落间距通常设置为 16px-24px，确保段落之间有明确的视觉分隔；标题与下方内容的间距设置为 24px-32px，比普通段落间距更大，清晰标明新章节的开始。

**间距递减原则**：在嵌套结构中，外层容器的间距应该大于内层元素之间的间距。例如，一个包含多个段落的卡片，卡片内部的段落间距应该小于卡片与外部内容之间的间距。这种递减关系在视觉上强化了内容的层级结构。

**边距与内边距的配合**：组件的边距（margin）与内边距（padding）需要配合使用。边距控制组件与外部元素的间距，内边距控制内部内容与组件边缘的间距。两者共同决定了组件在整体布局中的位置和内部内容的呼吸感。

### 5.4 间距实现指南

```css
:root {
  /* 间距尺度 */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;

  /* 特定场景间距 */
  --page-padding-x: 24px;
  --page-padding-y: 32px;
  --card-padding: 24px;
  --nav-item-padding: 8px 16px;
  --button-padding: 8px 16px;
}
```

---

## 第六章 组件设计

### 6.1 导航组件

#### 6.1.1 顶部导航栏

顶部导航栏是整个应用的全局控制中心，包含品牌标识、导航链接和辅助功能按钮。设计要点如下：

背景使用半透明模糊效果，在深色主题下呈现微妙的玻璃质感。品牌标识使用 SVG 格式的 Logo 图标和文字标识的组合，放置在导航栏最左侧。主导航链接使用简洁的标签文字，悬停时出现下划线装饰（通过 `::after` 伪元素实现），激活时下划线变为实线并加深颜色。

辅助功能按钮（搜索、主题切换、GitHub 等）使用图标按钮形式，悬停时显示背景高亮。搜索按钮旁边显示键盘快捷键提示（⌘K 或 Ctrl+K），提示用户可以使用键盘快速打开搜索。

#### 6.1.2 左侧边栏导航

左侧边栏导航是文档浏览的核心入口，采用树形层级结构组织。设计要点如下：

导航项使用 `<a>` 标签实现，确保键盘可访问性和 SEO 效果。顶级导航项使用较大的字号（15px-16px）和中等字重（500-600），二级、三级导航项字号逐级递减（14px、13px），字重也相应减轻（400-500）。

当前选中项使用左侧边框条（3px 宽度、品牌色）和高亮背景同时指示。悬停状态使用较暗的背景色，提供即时的视觉反馈。展开/收起状态通过旋转 90 度的箭头图标指示，旋转动画使用 150ms-200ms 的过渡时间。

支持键盘导航操作：使用上下方向键在导航项之间切换，Enter 键展开/折叠当前项，Escape 键关闭已展开的菜单。焦点状态使用明显的轮廓线指示，确保键盘用户的可访问性。

### 6.2 代码块组件

代码块是技术文档的核心组件，其设计直接影响开发者获取信息的效率。设计要点如下：

整体使用深色背景（`#0d1117` 或类似的深灰色），与页面背景形成明确区分。代码块使用圆角边框（4px-8px），与页面其他元素保持一致的圆角风格。代码块顶部显示文件名标签，标签使用与代码块对比度更高的背景色（如半透明灰色），文件名使用等宽字体。

代码使用系统代码字体栈，字体大小 14px 或 15px。行高设置为 1.5，代码行之间紧凑但清晰可辨。代码行号作为可选项提供，默认关闭以减少视觉干扰，需要时可通过配置开启。行号区域使用更深的背景色，与代码区域形成列分隔。

复制按钮默认隐藏，鼠标悬停时从右上角淡入显示。按钮使用图标+文字的形式（剪贴板图标 + "Copy" 文字），复制成功后显示勾选图标和 "Copied!" 反馈，2 秒后恢复原状。复制按钮的过渡动画使用 150ms 的淡入淡出效果。

代码块支持标签页切换功能，用于在 TypeScript/JavaScript 示例之间切换。标签栏位于代码块顶部，使用与主题一致的深色设计，选中标签通过高亮背景和底部边框线指示。标签切换使用即时切换，无加载延迟。

### 6.3 提示框组件

提示框（Callout）用于突出显示重要信息，通过不同的视觉样式传达信息类型。设计要点如下：

提示框使用与内容区域对比的背景色，左侧使用宽边框（3px-4px）标识类型。边框颜色和背景色根据提示类型区分：Note 使用蓝色系，Warning 使用黄色系，Danger 使用红色系，Good to know 使用紫色系。提示框使用圆角边框（6px-8px），内部使用适当的内边距（16px-24px）。

提示框内部布局：图标位于左上角，图标颜色与边框颜色一致；标题（如有）使用粗体字重，与提示类型标识配合；正文内容使用正常的段落间距，与普通段落保持一致。图标选择遵循通用惯例：Note 使用圆形 i 图标，Warning 使用三角形感叹号，Danger 使用叉号，Good to know 使用灯泡或信息图标。

### 6.4 表格组件

表格用于呈现结构化的参数信息和配置选项。设计要点如下：

表格采用全宽设计，在内容区域内水平撑满。表头使用加粗字重和稍深的背景色（比内容背景深 5%-10%），与数据行形成明确区分。单元格内容左对齐，数值型内容右对齐，确保数据列的整齐排列。

表格行采用可选的斑马纹设计（通过 `tr:nth-child(even)` 选择器实现），相邻行使用微妙的背景色差异。悬停状态使用更高的背景色，提示用户该行可以交互（如果该行可点击）。表格在移动端自动切换为水平滚动模式，通过 `overflow-x: auto` 实现。

表格标题使用 `caption` 元素，放置在表格上方，描述表格内容。复杂表格的表头使用 `th` 元素并设置 `scope` 属性（"col" 或 "row"），支持屏幕阅读器正确解读表格结构。

### 6.5 按钮组件

按钮用于触发操作和行为，是用户与界面交互的主要入口。设计要点如下：

按钮尺寸定义：小型按钮高度 32px，适用于工具栏等紧凑场景；中型按钮高度 40px，是最常用的尺寸；大型按钮高度 48px，用于强调性操作。按钮使用圆角边框（4px-6px），保持与整体风格的一致性。

按钮变体定义：主要按钮（Primary）使用品牌色填充背景，白色文字，悬停时背景变亮并添加细微阴影；次要按钮（Secondary）使用透明背景和边框，边框和文字使用品牌色，悬停时背景变为浅色填充；文字按钮（Text）仅使用文字，无背景和边框，悬停时显示下划线。

按钮状态：默认状态、悬停状态（hover）、激活状态（active）、聚焦状态（focus）、禁用状态（disabled）。禁用状态使用 50% 的不透明度，`cursor` 设置为 `not-allowed`，阻止用户点击。

### 6.6 组件实现示例

```css
/* 按钮组件 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  height: 40px;
  padding: 0 var(--space-4);
  border-radius: 6px;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
  transition: all 150ms ease;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--color-brand-primary);
  color: white;
}

.btn-primary:hover {
  filter: brightness(1.1);
  box-shadow: 0 4px 12px rgba(96, 165, 250, 0.3);
}

.btn-secondary {
  background-color: transparent;
  border: 1px solid var(--color-brand-primary);
  color: var(--color-brand-primary);
}

.btn-secondary:hover {
  background-color: rgba(96, 165, 250, 0.1);
}

/* 代码块 */
.code-block {
  position: relative;
  background-color: var(--color-bg-code);
  border-radius: 8px;
  overflow: hidden;
}

.code-block-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-4);
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.code-block-filename {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
}

.code-block pre {
  margin: 0;
  padding: var(--space-4);
  overflow-x: auto;
}

.code-block code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.5;
}

/* 提示框 */
.callout {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-4);
  border-radius: 8px;
  border-left: 4px solid;
  margin: var(--space-4) 0;
}

.callout-note {
  background-color: rgba(59, 130, 246, 0.1);
  border-left-color: var(--color-info);
}

.callout-warning {
  background-color: rgba(234, 179, 8, 0.1);
  border-left-color: var(--color-warning);
}

.callout-danger {
  background-color: rgba(239, 68, 68, 0.1);
  border-left-color: var(--color-error);
}

/* 表格 */
.table-container {
  overflow-x: auto;
  margin: var(--space-4) 0;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--text-sm);
}

th, td {
  padding: var(--space-3) var(--space-4);
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

th {
  background-color: rgba(255, 255, 255, 0.05);
  font-weight: var(--font-semibold);
}

tr:hover td {
  background-color: rgba(255, 255, 255, 0.02);
}
```

---

## 第七章 交互设计

### 7.1 链接与悬停效果

链接是文档导航的基础元素，其交互设计直接影响用户的导航效率和体验。设计要点如下：

链接文字使用品牌蓝色（`#60a5fa`），与正文文字（`#ededef`）形成明确的视觉区分。链接下方默认不显示下划线，保持段落的视觉整洁性。悬停时添加下划线装饰，同时颜色变亮，提供即时的交互反馈。

已访问的链接使用稍暗的蓝紫色调，表明该页面已被浏览的历史记录。焦点状态（键盘导航时）使用明显的轮廓线（2px 宽度、品牌色）包围链接区域，确保键盘用户始终知道当前焦点的位置。

链接的过渡动画使用 150ms 的时间，确保响应迅速但不突兀。颜色变化使用 `transition: color 150ms ease`，下划线显示使用 `transition: opacity 150ms ease` 或 `transform` 动画。

### 7.2 页面过渡动画

作为单页应用，页面切换的流畅性对用户体验至关重要。设计要点如下：

新页面加载时，内容通过淡入效果逐渐显现，动画时长 150ms-200ms，缓动函数使用 `ease-out`。页面滚动使用平滑滚动行为（`scroll-behavior: smooth`），锚点跳转时页面平滑滚动到目标位置而非瞬间跳转。

导航菜单的展开收起使用高度过渡动画，动画时长 200ms-300ms，缓动函数使用 `ease-in-out`。子菜单项依次出现带有轻微的延迟效果（stagger），通过 `transition-delay` 实现，增强菜单的精致感。

模态框（如搜索框）使用淡入背景叠加缩放出现的动画。背景从透明过渡到半透明（`rgba(0, 0, 0, 0.5)`），模态框内容从 95% 缩放过渡到 100%，同时透明度从 0 过渡到 1。整个动画时长 200ms-300ms，缓动函数使用 `ease-out`。

### 7.3 搜索功能

搜索是文档使用频率最高的功能，其交互设计强调效率和便捷性。设计要点如下：

搜索入口使用⌘K（Mac）或 Ctrl+K（Windows/Linux）快捷键直接调出，搜索模态框使用全屏遮罩覆盖在页面内容之上。搜索框自动聚焦并等待用户输入，输入即时显示匹配结果，整个过程流畅无延迟。

搜索结果按类别分组展示（导航菜单、文档页面、API 参考等），每组显示最多 5 个结果项。使用上下方向键可以选择结果项，Enter 键跳转到选中结果，Escape 键关闭搜索框。选中项使用高亮背景和轮廓线指示。

搜索框关闭时，焦点自动返回到触发搜索的按钮，保持键盘操作的连续性。搜索历史记录本地存储，最近搜索的条目在搜索框获得焦点时显示，方便用户快速访问。

### 7.4 交互实现示例

```css
/* 链接样式 */
a {
  color: var(--color-brand-primary);
  text-decoration: none;
  transition: color 150ms ease;
}

a:hover {
  text-decoration: underline;
}

a:focus-visible {
  outline: 2px solid var(--color-brand-primary);
  outline-offset: 2px;
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 按钮悬停效果 */
.btn {
  transition: all 150ms ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

/* 模态框动画 */
.modal-overlay {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 200ms ease-out;
}

.modal-content {
  animation: slideUp 200ms ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 菜单展开动画 */
.menu {
  overflow: hidden;
  transition: max-height 300ms ease-in-out;
}

.menu.collapsed {
  max-height: 0;
}

.menu.expanded {
  max-height: 500px; /* 根据实际内容设置足够大的值 */
}
```

---

## 第八章 无障碍设计

### 8.1 色彩对比度

色彩对比度是无障碍设计的基础要求，确保各类用户都能清晰阅读内容。设计要点如下：

所有文本与背景的色彩对比度必须满足 WCAG 2.1 标准 AA 级要求：普通文本（18px 以下或 14px 粗体以下）对比度至少 4.5:1，大文本（18px 以上或 14px 粗体及以上）对比度至少 3:1。这确保了视力障碍用户和色弱用户能够清晰阅读内容。

功能性色彩不能作为传达信息的唯一手段。成功状态除了使用绿色，还需要包含勾选图标或文字说明；错误状态除了使用红色，还需要包含文字描述和错误图标；警告状态同样需要图标和文字的双重指示。

链接文字除了满足对比度要求外，还需要通过下划线或其他非颜色方式（如图标）与周围文本区分。在暗色主题下，链接下划线尤为重要，因为仅靠颜色区分在低对比度环境下可能不够可靠。

### 8.2 键盘导航

完整的键盘导航支持是无障碍设计的关键组成部分。设计要点如下：

所有交互元素都应该能够通过键盘操作。使用 Tab 键可以在页面所有可聚焦元素之间顺序切换焦点。焦点顺序应该遵循逻辑阅读顺序，不能通过 CSS 负值 tabindex 人为打乱。

焦点指示器使用明显的视觉样式，通常是 2px 宽的轮廓线，环绕在获得焦点的元素周围。焦点样式使用与页面主题一致的颜色，同时与周围元素形成明显对比。焦点样式不能被简单移除（不能使用 `outline: none` 而没有替代方案）。

模态框获得焦点时，焦点应该限制在模态框内部，Tab 键只能在模态框内循环。关闭模态框后，焦点应该自动返回到触发该模态框的元素。折叠面板使用 `aria-expanded` 属性指示展开/折叠状态，使用 `aria-controls` 属性关联控制元素和被控内容。

### 8.3 屏幕阅读器支持

语义化的 HTML 结构是屏幕阅读器正确解读内容的基础。设计要点如下：

使用正确的 HTML 语义元素：导航区域使用 `<nav>` 标记，文章内容使用 `<article>` 标记，主要内容区域使用 `<main>` 元素。标题层级应该完整（h1→h2→h3...），不能跳过级别。列表使用 `<ul>/<ol>` 元素标记，表格使用 `<table>`、`<th>`、`<td>` 等语义化标签。

ARIA 属性的正确使用增强复杂组件的可访问性。按钮使用 `<button>` 元素而非带点击事件的 `<div>`，链接使用 `<a>` 元素而非带跳转事件的 `<div>`。搜索输入框使用 `role="search"` 属性标识其搜索功能。

图片提供有意义的 `alt` 属性，装饰性图片使用空的 `alt=""` 属性。链接文字应该有意义，能够独立表达链接目标，而非「点击这里」「更多信息」等模糊描述。表格的表头使用 `<th>` 元素标记，并设置 `scope` 属性表明是行标题还是列标题。

### 8.4 无障碍实现示例

```css
/* 焦点指示器 - 确保始终可见 */
:focus-visible {
  outline: 2px solid var(--color-brand-primary);
  outline-offset: 2px;
}

/* 移除默认焦点样式但提供自定义样式 */
:focus:not(:focus-visible) {
  outline: none;
}

/* 确保触摸目标足够大 */
@media (pointer: coarse) {
  .btn, .nav-item, .tab {
    min-height: 44px;
    min-width: 44px;
  }
}

/* 减少动画（尊重用户偏好）*/
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

```html
<!-- 语义化导航结构 -->
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="/docs">Docs</a></li>
    <li><a href="/api">API</a></li>
  </ul>
</nav>

<!-- 折叠面板 -->
<button
  aria-expanded="false"
  aria-controls="section-content"
>
  <span>展开/折叠</span>
  <svg aria-hidden="true">...</svg>
</button>
<div id="section-content" hidden>
  <!-- 折叠内容 -->
</div>

<!-- 有意义的链接文字 -->
<a href="/guide/installation">安装指南</a>
<!-- 避免 -->
<a href="#">点击这里</a>

<!-- 表格语义化 -->
<table>
  <caption>API 参数列表</caption>
  <thead>
    <tr>
      <th scope="col">参数名</th>
      <th scope="col">类型</th>
      <th scope="col">描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>name</td>
      <td>string</td>
      <td>用户名</td>
    </tr>
  </tbody>
</table>
```

---

## 第九章 响应式设计

### 9.1 断点定义

响应式设计确保文档在各类设备上都能提供良好的阅读体验。设计要点如下：

| 断点名称 | 视口宽度 | 布局变化 |
|----------|----------|----------|
| xs | < 576px | 单栏布局，汉堡菜单 |
| sm | 576px - 767px | 单栏布局，展开导航 |
| md | 768px - 1023px | 两栏布局（无右侧锚点） |
| lg | 1024px - 1279px | 两栏布局（右侧锚点可折叠） |
| xl | 1280px - 1535px | 完整三栏布局 |
| 2xl | ≥ 1536px | 完整三栏布局，内容最大宽度限制 |

断点基于视口宽度，使用 `min-width` 媒体查询实现移动优先的设计策略。小屏幕的样式作为默认样式，更大屏幕的样式通过媒体查询叠加。

### 9.2 响应式适配策略

移动端的适配策略需要考虑小屏幕的特殊限制。设计要点如下：

**导航系统重构**：左侧导航栏折叠为汉堡菜单，点击后从左侧滑出覆盖整个屏幕。顶部导航栏简化品牌标识和搜索入口，其他全局导航项收纳至菜单中。导航菜单使用全屏模态框形式，提供充足的空间展示导航结构。

**内容区域调整**：主内容区域的边距在移动端显著减小（16px），确保内容占据更多屏幕空间。代码块在移动端保持横向滚动，长代码行不会导致页面布局错乱。表格在移动端切换为水平滚动模式。

**触摸交互优化**：触摸目标尺寸最小设置为 44px × 44px，确保手指操作的准确性。悬停状态在触摸设备上不可用，相关功能需要通过显式的点击/长按操作替代。滑动手势可用于导航切换等场景。

### 9.3 响应式实现示例

```css
/* 移动优先的布局 */
.layout {
  display: block;
}

.sidebar {
  position: fixed;
  transform: translateX(-100%);
  transition: transform 300ms ease;
}

.sidebar.open {
  transform: translateX(0);
}

@media (min-width: 1024px) {
  .layout {
    display: flex;
  }

  .sidebar {
    position: fixed;
    transform: none;
  }

  .main {
    margin-left: var(--sidebar-width);
  }
}

/* 内容区域响应式 */
.main {
  padding: var(--space-4);
}

@media (min-width: 768px) {
  .main {
    padding: var(--space-6);
  }
}

@media (min-width: 1280px) {
  .main {
    padding: var(--space-8);
  }
}

/* 代码块响应式 */
pre {
  font-size: 13px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

@media (min-width: 768px) {
  pre {
    font-size: var(--text-sm);
  }
}

/* 汉堡菜单按钮 */
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background: none;
  border: none;
  cursor: pointer;
}

@media (min-width: 1024px) {
  .hamburger {
    display: none;
  }
}
```

---

## 第十章 设计令牌

### 10.1 设计令牌概述

设计令牌（Design Tokens）是设计系统中存储设计决策的标准化方式，通过 CSS 自定义属性实现，便于在多个平台和框架间共享和同步设计值。本规范的所有具体数值都通过设计令牌的方式组织，便于项目的配置和维护。

### 10.2 完整令牌定义

```css
:root {
  /* ========== 色彩系统 ========== */

  /* 背景色阶 */
  --color-bg-primary: #000000;
  --color-bg-sidebar: #0a0a0a;
  --color-bg-content: #111111;
  --color-bg-code: #0d1117;
  --color-bg-card: #161b22;
  --color-bg-elevated: #1c2128;

  /* 文字色阶 */
  --color-text-primary: #ededef;
  --color-text-secondary: #a1a1aa;
  --color-text-muted: #71717a;
  --color-text-emphasized: #ffffff;
  --color-text-code: #e6edf3;
  --color-text-inverse: #000000;

  /* 品牌色 */
  --color-brand-primary: #60a5fa;
  --color-brand-hover: #93c5fd;
  --color-brand-cyan: #22d3ee;
  --color-brand-purple: #a78bfa;
  --color-brand-green: #34d399;

  /* 功能色 */
  --color-success: #22c55e;
  --color-success-bg: rgba(34, 197, 94, 0.1);
  --color-warning: #eab308;
  --color-warning-bg: rgba(234, 179, 8, 0.1);
  --color-error: #ef4444;
  --color-error-bg: rgba(239, 68, 68, 0.1);
  --color-info: #3b82f6;
  --color-info-bg: rgba(59, 130, 246, 0.1);

  /* 边框与分隔 */
  --color-border: rgba(255, 255, 255, 0.1);
  --color-border-hover: rgba(255, 255, 255, 0.2);
  --color-divider: rgba(255, 255, 255, 0.06);

  /* ========== 字体系统 ========== */

  /* 字体家族 */
  --font-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-mono: "Geist Mono", "Fira Code", "JetBrains Mono", "Source Code Pro", Consolas, Monaco, "Courier New", monospace;

  /* 字号 */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 28px;
  --text-4xl: 32px;
  --text-5xl: 36px;

  /* 字重 */
  --font-regular: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;

  /* 行高 */
  --leading-none: 1;
  --leading-tight: 1.25;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 1.75;

  /* ========== 间距系统 ========== */

  --space-0: 0;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-5: 20px;
  --space-6: 24px;
  --space-8: 32px;
  --space-10: 40px;
  --space-12: 48px;
  --space-16: 64px;
  --space-20: 80px;
  --space-24: 96px;

  /* ========== 布局尺寸 ========== */

  --header-height: 64px;
  --sidebar-width: 280px;
  --toc-width: 220px;
  --content-max-width: 896px;
  --page-margin-x: 24px;
  --page-margin-y: 32px;

  /* ========== 视觉效果 ========== */

  /* 圆角 */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-base: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;

  /* 阴影 */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  /* 过渡 */
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;

  /* 动画 */
  --animate-fade-in: fadeIn 200ms ease-out;
  --animate-slide-up: slideUp 200ms ease-out;
  --animate-slide-down: slideDown 200ms ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

## 附录

### 附录 A：浏览器支持

本设计规范基于现代浏览器环境设计，推荐的浏览器支持范围如下：

| 浏览器 | 最低版本 |
|--------|----------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

对于不支持 CSS 自定义属性的旧版浏览器，建议使用 PostCSS 插件（如 postcss-custom-properties）进行降级处理。

### 附录 B：性能考量

在实现本设计规范时，应注意以下性能优化要点：

字体加载策略建议使用 `font-display: swap`，确保文字在字体加载期间可见。图片资源应使用现代格式（WebP、AVIF）并提供适当的尺寸变体。动画效果应使用 `transform` 和 `opacity` 属性，这些属性可以利用 GPU 加速。

代码分割和懒加载应用于非首屏内容，减少初始加载时间。骨架屏（Skeleton）可用于内容加载期间提供即时的视觉反馈。

### 附录 C：相关资源

| 资源类型 | 链接 |
|----------|------|
| Next.js 官方文档 | https://nextjs.org/docs |
| Vercel 设计系统 | https://vercel.com/design |
| WCAG 2.1 指南 | https://www.w3.org/WAI/WCAG21/quickref/ |
| MDN Web Docs | https://developer.mozilla.org/ |

---

**文档结束**
