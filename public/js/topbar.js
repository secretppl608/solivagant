/** @type {Object} */
const baseNavLinkIfNoUserDataJustReturnThis = {
	block$1: {
		content: "板块1",
		link: "/homepage.html",
		id: "nl-1"
	},
	block$2: {
		content: "板块2",
		link: "/block-2",
		id: "nl-2"
	},
	block$3: {
		content: "板块3",
		link: "/block-3",
		id: "nl-3"
	},
	block$4: {
		content: "板块4",
		link: "/block-4",
		id: "nl-4"
	},
	block$5: {
		content: "板块5",
		link: "/block-5",
		id: "nl-5"
	},
	block$6: {
		content: "板块6",
		link: "/block-6",
		id: "nl-6"
	}
}

/**
 * 
 * @param {any} content - 提示内容
 * @param {String} type - 提示类型 
 */
function tips(content, type) {
	let tipsDivContainer = document.getElementById('tips-box-container');
	if (!tipsDivContainer) {
		tipsDivContainer = Object.assign(document.createElement('div'), { id: 'tips-box-container' });
		document.body.appendChild(tipsDivContainer);
	}
	let tipsDiv = document.createElement('div');
	tipsDiv.classList.add('tips-box');
	tipsDiv.textContent = content;
	tipsDivContainer.insertAdjacentElement('beforeend', tipsDiv);
	if (type === 'warn') {
		tipsDiv.classList.add('warn-tips-box');
	}
	let isOpacityElementNumber = document.getElementsByClassName('tips-box').length ?? 0;
	let delay = 5000 + (isOpacityElementNumber * 1000);
	setTimeout(() => {
		tipsDiv.classList.add('opacity-zero');
		setTimeout(() => {
			tipsDiv.remove();
		}, 500);
	}, delay);
}

class toolObject {
	/** 
	* @param { Object } needCheckObject 传入一个对象进行处理 
	*/
	constructor(needCheckObject) {
		this.needCheckObject = needCheckObject;
	}

	typeCheck() {
		if (typeof this.needCheckObject !== 'object' || this.needCheckObject === null) {
			throw new TypeError('这不是一个有效的对象');
		}
	}

	get checkLength() {
		try {
			this.typeCheck();
		} catch ({ name, message }) {
			console.error(name, ": ", message);
			console.error(this.needCheckObject);
			return null;

		}
		let countNum = 0;
		let toArray = Object.keys(this.needCheckObject);
		console.log('toAry:', toArray);
		countNum = toArray.length;
		return countNum;
	}

	productNewElement() {
		try {
			this.typeCheck();
		} catch ({ name, message }) {
			console.error(name, ": ", message);
			return null;
		}
		let url = new URL(location);
		let pathname = url.pathname;
		let objectContent = this.needCheckObject;
		// 执行合并HTML字符串的过程
		// 这里的逻辑稍微有点混乱，不需要经过如此复杂的解析，不需要实现一个AST解析器，此处应当简单处理
		/** @param {Object} everyObject */
		let html = ``;
		for (let everyObject in objectContent) {
			const everyObjectArray = Object.entries(objectContent[everyObject]);
			console.log(objectContent, "everyObject: ", everyObject, objectContent[everyObject], everyObjectArray);
			html += `<a class=\"nav-link ${everyObjectArray[1][1] === pathname ? 'active' : 'none'}\" href=\"${everyObjectArray[1][1]}\" id=\"${everyObjectArray[2][1]}\">${everyObjectArray[0][1]}</a>`;
		}
		console.log(html);
		return html;
	}

	get aIdAll() {
		let objectContent = this.needCheckObject;
		let idList = [];
		for (let everyObject in objectContent) {
			const everyObjectArray = Object.entries(objectContent[everyObject]);
			idList.push(everyObjectArray[2][1]);
		}
		console.log(idList);
		return idList;
	}
}

function whoCare(s, b) {
	const diff = s.filter((k) => !b.includes(k));
	console.log("diff:", diff);
	return diff;
}

const sbBtn = document.getElementsByClassName('sidebar-close')[0];
const sb = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-mobile-sidebar');

sbBtn.addEventListener('click', () => {
	sbBtn.classList.add('sidebar-open');
	sbBtn.classList.remove('sidebar-close');
	sb.classList.add('open');
	closeBtn.style.display = "block";
});
closeBtn.addEventListener('click', () => {
	closeBtn.style.display = "none";
	sb.classList.remove('open');
	sbBtn.classList.remove('sidebar-open');
	sbBtn.classList.add('sidebar-close');
});

const moreBtn = document.getElementsByClassName('more-btn')[0];
const moreBtnM = document.getElementsByClassName('more-btn')[1];
const navLinks = document.getElementsByClassName('nav-links')[0];
const navLinksM = document.getElementsByClassName('nav-links')[1];
const navLink = navLinks.getElementsByTagName('a');

/** 
 * @function getInitValue
 */
const factory = {
	getInitValue: async function () {
		/** 
		 * @type { string }
		 */
		navLinks.innerHTML = '<div class="loader"></div>';
		navLinksM.innerHTML = '<div class="loader"></div>';
		const localStorageRecordInitValue = localStorage.getItem('userLikeSet');
		const promise = new Promise((resolve, reject) => {
			setTimeout(() => {
				let s;
				if (!localStorageRecordInitValue || localStorageRecordInitValue === null) {
					s = baseNavLinkIfNoUserDataJustReturnThis;
				} else {
					s = JSON.parse(localStorageRecordInitValue);
					if (s === null) {
						s = baseNavLinkIfNoUserDataJustReturnThis;
					}
				}
				/** @type { Object } */
				const getInitValueRV = s;
				console.log("初始传参：", getInitValueRV);
				const shortTimeNeedToolFunctionToDoSomething = new toolObject(getInitValueRV);
				resolve(shortTimeNeedToolFunctionToDoSomething);
			}, 3000);
		});

		await promise.then((e) => {
			navLinks.innerHTML = e.productNewElement();
			navLinksM.innerHTML = e.productNewElement();
			console.log("html:", e.productNewElement());
			sessionStorage.setItem('isLookingLoadingAnimation', 'yes');
			const aIdList = e.aIdAll;
			console.log("aIdList:", aIdList);
		});
	},

	common(isChange = false, innerText) {
		console.warn('the function is working:', innerText);
		const localStorageRecordInitValue = isChange ? (innerText ? innerText : localStorage.getItem('userLikeSet')) : localStorage.getItem('userLikeSet');
		let s;
		if (!localStorageRecordInitValue || localStorageRecordInitValue === null) {
			s = baseNavLinkIfNoUserDataJustReturnThis;
		} else {
			s = JSON.parse(localStorageRecordInitValue);
			if (s === null) {
				s = baseNavLinkIfNoUserDataJustReturnThis;
			}
		}
		/** @type { Object } */
		const getInitValueRV = s;
		console.log("初始传参：", getInitValueRV);
		const shortTimeNeedToolFunctionToDoSomething = new toolObject(getInitValueRV);
		let b = new toolObject(baseNavLinkIfNoUserDataJustReturnThis);
		let c = b.aIdAll;
		const aIdList = shortTimeNeedToolFunctionToDoSomething.aIdAll;
		console.log("aIdList:", aIdList);
		if (isChange === true) {
			console.warn(isChange, b, c, aIdList);
			localStorage.setItem('userLikeSet', JSON.stringify(getInitValueRV));
			let diff = whoCare(c, aIdList);
			console.warn("diff:", diff);
			let el = document.getElementsByClassName('control-div');
			let v = [(b.checkLength - 1) * 2] + 1;
			for (let i = 0; i <= v; i++) {
				console.warn(c, aIdList, "el:", el[i], "diff:", diff);
				if (diff.includes(el[i]?.id)) {
					el[i]?.classList.remove('has');
					el[i]?.classList.add('not');
					console.warn('el[i]:', el[i]);
				} else {
					el[i]?.classList.remove('not');
					el[i]?.classList.add('has');
					console.warn('el[i]:', el[i]);
				}
			}
		}
		navLinks.innerHTML = shortTimeNeedToolFunctionToDoSomething.productNewElement();
		navLinksM.innerHTML = shortTimeNeedToolFunctionToDoSomething.productNewElement();
		console.log("html:", shortTimeNeedToolFunctionToDoSomething.productNewElement());
		return aIdList;
	},

	list(isChange = false, innerText) {
		const localStorageRecordInitValue = isChange ? (innerText ? innerText : localStorage.getItem('userLikeSet')) : localStorage.getItem('userLikeSet');
		let s;
		if (!localStorageRecordInitValue || localStorageRecordInitValue === null) {
			s = baseNavLinkIfNoUserDataJustReturnThis;
		} else {
			s = JSON.parse(localStorageRecordInitValue);
			if (s === null) {
				s = baseNavLinkIfNoUserDataJustReturnThis;
			}
		}
		/** @type { Object } */
		const getInitValueRV = s;
		const shortTimeNeedToolFunctionToDoSomething = new toolObject(getInitValueRV);
		const aIdList = shortTimeNeedToolFunctionToDoSomething.aIdAll;
		console.log("aIdList:", aIdList);
		return aIdList;
	}
}

let isOpen = false;
moreBtn.addEventListener('click', handle, false);
moreBtnM.addEventListener('click', handle, false);
function handle(e) {
	if (e.target.classList.contains('control-div') || e.target.closest('.control-div')) {
		e.preventDefault();
		e.stopPropagation();
		buttonClick(e.target);
		return;
	}
	let controlDivContainer;
	if (isOpen === false) {
		function arrayElement() {
			// 此处是为了将原先页面的按钮顺序排列为数组方便进行异步操作
			const text = [];
			const idList = [];
			// --begin test
			for (let v in baseNavLinkIfNoUserDataJustReturnThis) {
				let buttonContent = {};
				buttonContent.content = baseNavLinkIfNoUserDataJustReturnThis[v].content;
				buttonContent.link = baseNavLinkIfNoUserDataJustReturnThis[v].link;
				buttonContent.id = baseNavLinkIfNoUserDataJustReturnThis[v].id;
				text.push(buttonContent);
				idList.push(buttonContent.id);
			}
			let h = factory;
			const s = h.common();
			console.log(s, idList);
			const diff = whoCare(idList, s);
			console.log("text: ", text);
			// --end
			const element = text.map((e, i) => { console.warn("diff&e.id:", diff, e.id); return `<button class="from-${i} control-div ${diff.includes(e.id) ? 'not' : 'has'}" id="${e.id}">${e.content}</button>` });
			/**
			 * @param {object} direct
			 */
			const direct = {};
			element.forEach((content, index) => {
				direct[index] = content;
			});
			let checkLengthMethod = new toolObject(direct);
			const newDirect = direct;
			direct.length = checkLengthMethod.checkLength;
			newDirect.length = direct.length;
			console.log("newDirect: ", newDirect);
			return newDirect;
		}
		const str = arrayElement();
		const controlDivContainerTextNode = Array.prototype.join.call(str, '');
		const repeatNode = controlDivContainerTextNode;
		controlDivContainer = document.createElement('div');
		let repeatDivNode = document.createElement('div');
		controlDivContainer.classList.add('control-div-container');
		repeatDivNode.classList.add('control-div-container');
		moreBtn.insertAdjacentElement('beforeend', controlDivContainer);
		moreBtnM.insertAdjacentElement('beforeend', repeatDivNode);
		controlDivContainer.insertAdjacentHTML('afterbegin', controlDivContainerTextNode);
		repeatDivNode.insertAdjacentHTML('afterbegin', repeatNode);
		moreBtn.classList.add('isopen');
		moreBtnM.classList.add('isopen');
		isOpen = true;
	} else {
		moreBtn.classList.remove('isopen');
		moreBtnM.classList.remove('isopen');
		controlDivContainer = document.querySelectorAll('.control-div-container');
		if (controlDivContainer) {
			for (let clear of controlDivContainer) {
				// console.log(clear,"没用的变量");
				clear.remove();
			}
		}
		isOpen = false;
	}
}

/**
 * 
 * @param {HTMLButtonElement} element 
 */
// --begin ------------------------------------------------------------------
// 核心逻辑
// --begin ------------------------------------------------------------------
function buttonClick(element) {
	var isLoggin = document.cookie.replace(
		/(?:(?:^|.*;\s*)userInfo\s*\=\s*([^;]*).*$)|^.*$/,
		"$1",
	);
	if (!isLoggin) {
		tips('请登录使用','warn');
		return;
	}
	
	console.warn('the buttonClick function is working:', element);
	let userSet = JSON.parse(localStorage.getItem('userLikeSet'));
	userSet ??= baseNavLinkIfNoUserDataJustReturnThis;
	// 按钮按下后会发生啥...
	const origin = factory.list();
	if (element.classList.contains('has')) {
		if (!origin.includes(element.id)) {
			console.warn('origin:', origin, element.id)
			tips('您的顶栏导航当前并没有这个模块', 'warn');
			return;
		}
		for (let y in userSet) {
			if (userSet[y].id === element.id) {
				delete userSet[y];
			}
		}
	} else if (element.classList.contains('not')) {
		if (origin.includes(element.id)) {
			tips('您的顶栏导航当前已有这个模块了', 'warn');
			return;
		}
		for (let y in baseNavLinkIfNoUserDataJustReturnThis) {
			if (baseNavLinkIfNoUserDataJustReturnThis[y].id === element.id) {
				userSet[y] = baseNavLinkIfNoUserDataJustReturnThis[y];
			}
		}
	}
	factory.common(true, JSON.stringify(userSet));
}
// --end -------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
	if (sessionStorage.getItem('isLookingLoadingAnimation') === 'yes') {
		return factory.common();//快速加载页面通道
	} else {
		return factory.getInitValue();//播放加载动画,正常加载页面通道
	}
});

function menuOpen(event) {
	const c = document.querySelector('.user-control-container');
	if (c !== null) {
		c.remove();
		return;
	}
	let userControlContainer = document.createElement('div');
	userControlContainer.classList.add('user-control-container');
	userControlContainer.id = "user-box"
	userControlContainer.innerHTML = `<ul><li><a href="/user-page?id=00000001">用户主页</a></li><li><a href="/setting?id=00000001">用户设置</a></li><li><a href="/email?id=00000001">用户私讯</a></li></ul>`;
	event.target.appendChild(userControlContainer);
}