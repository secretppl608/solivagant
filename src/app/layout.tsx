import { Geist, Geist_Mono } from "next/font/google";
import "./styles/scss/globals.scss";
import Script from "next/script";
// import Userbox from "./Component/user-info";
// import type { Metadata } from "next";
'use client'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "怪谈研究所",
//   description: "一个讨论怪谈圈子的小博客，自由发表你的世界观和诡谲想象力",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="author" content="olysad" />
        <meta name="description" content="主页|这里是怪谈研究所，一个自由交流怪谈的小小博客网" />
        <meta name="generator" content="custom making" />
        <meta name="keywords" content="怪谈,博客,社交,创作,论坛" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#2b2a33" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="whitesmoke" media="(prefers-color-scheme: light)" />
        {/*社交媒体分享优化*/}
        <meta property="og:title" content="怪谈研究所 - 自由交流怪谈的博客社区" />
        <meta property="og:description" content="一个专门讨论怪谈、神秘事件和创作交流的博客平台" />
        <meta property="og:image" content="https://solivagant.site/favicon.ico" />
        <meta property="og:url" content="https://solivagant.site" />
        <meta property="og:type" content="website" />
        <link rel="preload" href="/js/user.js" as="script" />
        <link rel="preload" href="/js/topbar.js" as="script" />
        <link rel="preload" href="/favicon.ico" as="image" />
        <link rel="preload" href="/dark.ico" as="image" />
        <link rel="preload" href="/title.ttf" as="font" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" id="site-ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="apple-touch-startup-image" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-title" content="主页|怪谈研究所" />
        <meta name="apple-mobile-web-app-status-bar-style" content="whitesmoke" />
        <link rel="stylesheet" href="/styles/main.css" />
        <link rel="stylesheet" href="remixicon/fonts/remixicon.css" />
        <link rel="stylesheet" href="/styles/media.css" />
        <link rel="license" href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans" />
        <title>主页|怪谈研究所</title>
        <Script src="/js/ico.js" />
        <Script type="module" src="/js/cookie.js" />
        <Script src="/js/topbar.js" defer />
        <Script type="module" src="/js/user.js" defer />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="site-header">
        <div className="topbar">
            <div className="brand">
                <a href="/" className="brand-link">
                    <img id="web-icon" src="dk-bg-favicon.png" alt="怪谈研究所 图标" className="favicon" />
                    <span className="site-title">怪谈研究所</span>
                </a>
            </div>
            <div className="nav-links" id="middle-table-nav-links">
            </div>
            <div className="actions">
                <button className="more-btn" aria-label="更多" id="middle-table-more-btn">
                    <i className="ri-arrow-down-double-fill"></i>
                </button>
                <a href="/search" className="icon-btn" title="搜索">
                    <i className="ri-search-eye-line"></i>
                </a>

                <div className="user" id="user-info-area">

                </div>
            </div>
        </div>

        <nav className="nav-bar" role="navigation">
            <button className="menu-toggle sidebar-close" aria-label="切换侧栏" id="menu-toggle">
                <i className="ri-menu-unfold-3-fill"></i>
            </button>
            <div className="nav-links" id="mobile-nav-links">
                {/* <!-- 这是等待填充的内容，由脚本生成，请勿删除 --> */}
            </div>

            <button className="more-btn" aria-label="更多" id="mobile-more-btn">
                <i className="ri-arrow-down-double-fill"></i>
            </button>
        </nav>
    </header>
    <aside className="sidebar" aria-label="侧边栏" id="sidebar">
        你好，这是侧边栏。<br />
        这是侧边栏的内容。
        <button id="close-mobile-sidebar">这是一个按钮</button>
    </aside>
    <div className="page">
        <main className="content" role="main">
            <nav aria-label="Breadcrumb" className="breadcrumb">
                <ul>
                    <li><a href="#">主页</a></li>
                    <li><a href="#">中心页</a></li>
                    <li><a href="#">分页</a></li>
                    <li><a href="#">类型页</a></li>
                    <li><span aria-current="page">内容</span></li>
                </ul>
            </nav>
            {/* <!-- 这里需要添加页面段落导航结构，等以后慢慢做 --> */}
            <div className="warn-too-short-screen" role="alert" aria-live="polite">
                {/* <!-- 这里是屏幕过窄的提示内容，如果低于220px，由CSS控制显示 --> */}
                温馨提示：您的设备屏幕较窄，部分内容可能无法完美展示。建议您：<br />
                1. 旋转设备至横屏模式，<br />
                2. 或者使用屏幕更大的设备
            </div>
            <noscript>
                <div style={{ backgroundColor: 'bisque', padding: '5px', textAlign: 'center', cursor: 'notAllowed' }} role="alert"
                    aria-live="polite">
                    您的浏览器设置将导致此网站无法正常显示和运行，<a href="https://docs.pingcode.com/baike/3550521" style={{ cursor: 'help' }}
                        target="_blank" rel="noopener noreferrer">查看解决该问题的方法？</a><br />
                    <button
                        style={{ backgroundColor: 'transparent', border: 0, borderBottom: '2px solid skyblue', cursor: 'pointer' }}
                        onClick={() => location.reload()}>已经解决问题？尝试刷新页面</button><br />
                    <span style={{ marginTop: 10, fontSize: 'smaller', color: 'gray', display: 'inline-block' }}>ERR_CODE:
                        script_is_not_allowed</span>
                </div>
            </noscript>
            {/* <!-- 
            保留一个调试彩蛋放在这里，等用户自己探索：
            <button type="button" onclick="localStorage.removeItem('userLikeSet')">调试按钮；清除用户设置</button> 
            --> */}
            <div id="test">
                <button id="a">测试用户</button><button id="b">取消测试</button>
            </div>
            {children}
        </main>
    </div>
    <footer id="page-footer" className="page-footer">
        <ul className="page-footer-ul">
            <li className="area"><a href="/" className="active" id="area-1
                ">区域1
                </a></li>
            <li className="area"><a href="/" id="area-2
                ">区域2
                </a></li>
            <li className="area"><a href="/" id="area-3
                ">区域3
                </a></li>
            <li className="area"><a href="/" id="area-4
                ">区域4
                </a></li>
            <li className="area"><a href="/" id="area-4
                ">区域5
                </a></li>
        </ul>
    </footer>

      </body>
    </html>
  );
}
