window.onload = () => {
	if (window.screen.width < window.screen.height)
		document.body.style.background = 'url(https://cdn.statically.io/gh/QChWnd/QChWnd.GitHub.io/85fe6172/cdn/bg/y' + Math.floor(Math.random() * 100) + '.webp) center top / cover no-repeat fixed';
	else
		document.body.style.background = 'url(https://cdn.statically.io/gh/QChWnd/QChWnd.GitHub.io/85fe6172/cdn/bg/x' + Math.floor(Math.random() * 103) + '.webp) center top / cover no-repeat fixed';
};
