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
					label: '🔍 第二篇 监理知识',
					items: [
						{ 
							label: '第8章 监理概论', 
							collapsed: false,
							items: [
								{ label: '8.1 监理基本概念', link: '/chapter-08/01-basic-concepts/' },
							]
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
