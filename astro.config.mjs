// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '软考监理师教学平台',
			description: '系统化的信息系统监理师备考指南',
			
			// 社交链接
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/daiwanxing/supervision-teaching-site' }
			],
			
			// 侧边栏配置
			sidebar: [
				{
					label: '📖 开始学习',
					items: [
						{ label: '学习指南', link: '/guides/study-guide/' },
						{ label: '考试大纲', link: '/guides/exam-outline/' },
					],
				},
				{
					label: '📖 第一篇 基础知识',
					collapsed: false,
					autogenerate: { directory: 'chapter-01' },
				},
				{
					label: '📖 第二篇 信息系统',
					collapsed: false,
					autogenerate: { directory: 'chapter-02' },
				},
				{
					label: '📖 第三篇 信息网络',
					collapsed: false,
					autogenerate: { directory: 'chapter-03' },
				},
				{
					label: '📖 第四篇 信息资源',
					collapsed: false,
					autogenerate: { directory: 'chapter-04' },
				},
				{
					label: '📖 第五篇 信息应用',
					collapsed: false,
					autogenerate: { directory: 'chapter-05' },
				},
				{
					label: '📖 第六篇 信息安全',
					collapsed: false,
					autogenerate: { directory: 'chapter-06' },
				},
				{
					label: '📖 第七篇 运行维护',
					collapsed: false,
					autogenerate: { directory: 'chapter-07' },
				},
				{
					label: '💻 第二篇 监理知识',
					collapsed: false,
					autogenerate: { directory: 'chapter-08' },
				},
				{
					label: '💻 第三篇 监理实务',
					collapsed: false,
					autogenerate: { directory: 'chapter-09' },
				},
				{
					label: '💻 第四篇 监理管理',
					collapsed: false,
					autogenerate: { directory: 'chapter-10' },
				},
			],
			
			// 自定义 CSS
			customCss: ['./src/styles/custom.css'],
			
			// 默认语言
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			
			// 编辑链接配置
			editLink: {
				baseUrl: 'https://github.com/daiwanxing/supervision-teaching-site/edit/main/',
			},
			
			// 最后更新时间
			lastUpdated: true,
		}),
	],
});
