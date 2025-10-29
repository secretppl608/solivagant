import { docCookies } from './cookie.js';


//以上是从MDN社区获取的用于方便COOKIE操作的模块，源代码URL:https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie
// 实际生产环境应当替换为后端API接口，此处是用于测试信息，生产环境中此JS文件用于从后端获取用户信息或者从COOKIE中获取缓存
//<img src="/test.jpg" alt="用户头像 Nemo" class="avatar" />
//                 <a href="/user-info?id=00000001" class="user-name">nemo</a>
//              <button class="user-menu" aria-label="打开用户菜单" onclick="menuOpen(event)">
//                 <i class="ri-arrow-drop-down-fill"></i>
//          </button>

let userInfoTest = {
    isLoggin: true,
    imgSrc: "/test.jpg",
    id: '00000001',
    nameStr: "nemo"
};
const defaultShow = `<a href="/login?from=${location.pathname}">登录</a>/<a href="/setup?from=${location.pathname}">注册</a>`;
const userInfoArea = document.getElementById('user-info-area');

// test --begin
document.getElementById('a').addEventListener('click', () => {
    userTest();
});
document.getElementById('b').addEventListener('click', () => {
    userTest(true);
});
function userTest(isRemove = false) {
    if (isRemove === true) {
        docCookies.removeItem('userInfo');
        console.warn('the json data is deleted.');
    } else {
        docCookies.setItem('userInfo', JSON.stringify(userInfoTest));
        console.warn('the json data is ', userInfoTest, '.');
    }
    getInfo();
}
// test --end

function getInfo() {
    userInfoArea.innerHTML = defaultShow;
    const userInfoData = docCookies.getItem('userInfo');
    if (!userInfoData) {
        userInfoArea.innerHTML = defaultShow;
    } else {
        let newUserInfoData = JSON.parse(userInfoData);
        userInfoArea.innerHTML = `<img src="${newUserInfoData.imgSrc}" alt="用户头像 ${newUserInfoData.nameStr}" class="avatar" /><a href="/user-info?id=${newUserInfoData.id}" class="user-name">${newUserInfoData.nameStr}</a><button class="user-menu" aria-label="打开用户菜单" onclick="menuOpen(event)"><i class="ri-arrow-drop-down-fill"></i></button>`;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    getInfo();
})