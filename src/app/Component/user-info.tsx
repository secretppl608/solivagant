'use client';

import "@/app/styles/scss/user-info.scss";
import Script from 'next/script';
import Image from 'next/image';
import React from "react";


interface User {
    src: string;
    user_name: string;
    level: number;
}


export default function Userbox({ src, user_name, level }: User) {
    
    return (
        <div id="userbox-container">
            <div id="user-ui-container">
                <Image src={src} alt="user avatar" width={50} height={50} id="user-avatar" />
                <span id="user-name">{user_name}</span>
                <span id="user-level" className={`color-${level}`}><span id="user-level-prefix">L</span><span id="user-level-number">{level}</span></span>
            </div>
            <div id="info-notice-window">
                <p><strong>Username:</strong>{user_name}</p>
                <p><strong>Level:</strong> L{level}</p>
                <p><strong>Description:</strong> This is a test user interface element.</p>
                <p><strong>Additional Info:</strong> Hover over the user info to see this notice.</p>
            </div>
            <Script id="userbox-hover-show-window-script">
                {`
                    const userUIContainer = document.getElementById('user-ui-container');
                    const infoNoticeWindow = document.getElementById('info-notice-window');
                    userUIContainer.addEventListener('mouseenter', () => {
                        infoNoticeWindow.style.display = 'block';
                        infoNoticeWindow.style.position = 'absolute';
                        infoNoticeWindow.style.top = (userUIContainer.offsetTop + userUIContainer.offsetHeight + 10) + 'px';
                        infoNoticeWindow.style.left = (userUIContainer.offsetLeft + 200) + 'px';
                        infoNoticeWindow.style.backgroundColor = '#f9f9f9';
                        infoNoticeWindow.style.border = '1px solid #ccc';
                        infoNoticeWindow.style.padding = '10px';
                        infoNoticeWindow.style.borderRadius = '5px';
                        infoNoticeWindow.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
                    });

                    userUIContainer.addEventListener('mouseleave', () => {
                        infoNoticeWindow.style.display = 'none';
                    });
                `}
            </Script>
        </div>
    );
}