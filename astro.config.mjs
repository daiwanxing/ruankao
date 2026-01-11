// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '计算机系统监理师备考指南',
			description: '系统化的计算机系统监理师考试复习指南',

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
					label: '📕 基础知识篇',
					collapsed: false,
					items: [
						{
							label: '第1章 信息化发展',
							autogenerate: { directory: 'chapter-01' },
						},
						{
							label: '第2章 信息系统',
							autogenerate: { directory: 'chapter-02' },
						},
						{
							label: '第3章 信息网络',
							autogenerate: { directory: 'chapter-03' },
						},
						{
							label: '第4章 信息资源',
							autogenerate: { directory: 'chapter-04' },
						},
						{
							label: '第5章 信息应用',
							autogenerate: { directory: 'chapter-05' },
						},
						{
							label: '第6章 信息安全',
							autogenerate: { directory: 'chapter-06' },
						},
						{
							label: '第7章 运行维护',
							autogenerate: { directory: 'chapter-07' },
						},
					],
				},
				{
					label: '📕 监理知识篇',
					collapsed: false,
					items: [
						{
							label: '第8章 监理概论',
							autogenerate: { directory: 'chapter-08' },
						},
						{
							label: '第9章 质量控制与验收',
							autogenerate: { directory: 'chapter-09' },
						},
						{
							label: '第10章 进度与成本',
							autogenerate: { directory: 'chapter-10' },
						},
						{
							label: '第11章 合同与知识产权',
							link: '/chapter-11/01-contract-ip/',
						},
						{
							label: '第12章 信息与资料管理',
							link: '/chapter-12/01-information-mgmt/',
						},
						{
							label: '第13章 组织协调与沟通',
							link: '/chapter-13/01-coordination-communication/',
						},
					],
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
