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
					label: '� 第一篇 基础知识',
					collapsed: false,
					items: [
						{ label: '第1章 信息化发展', link: '/chapter-01/01-info-development/' },
						{ label: '第2章 信息系统工程', link: '/chapter-02/01-info-system-engineering/' },
						{ label: '第3章 信息网络系统', link: '/chapter-03/01-info-network-system/' },
						{ label: '第4章 信息资源系统', link: '/chapter-04/01-info-resource-system/' },
						{ label: '第5章 信息应用系统', link: '/chapter-05/01-info-application-system/' },
						{ label: '第6章 信息安全', link: '/chapter-06/01-info-security/' },
						{ label: '第7章 运行维护', link: '/chapter-07/01-operation-maintenance/' },
					],
				},
				{
					label: '🔍 第二篇 监理知识',
					collapsed: false,
					items: [
						{ label: '第8章 监理概论', link: '/chapter-08/01-basic-concepts/' },
						{ label: '第9章 质量控制与验收', link: '/chapter-09/01-quality-control/' },
						{ label: '第10章 进度控制与成本', link: '/chapter-10/01-schedule-cost/' },
						{ label: '第11章 合同与知识产权', link: '/chapter-11/01-contract-ip/' },
						{ label: '第12章 信息与资料管理', link: '/chapter-12/01-information-mgmt/' },
						{ label: '第13章 组织协调与沟通', link: '/chapter-13/01-coordination-communication/' },
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
