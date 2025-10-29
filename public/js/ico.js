(
    () => {
        let match = window.matchMedia("(prefers-color-scheme: dark)");
        if (match.matches) sessionStorage.setItem('isLookingLoadingAnimation','yes');
        document.addEventListener('DOMContentLoaded', () => {
            let ico = document.getElementById('site-ico');
            let bannerico = document.getElementById('web-icon');
            function e() {
                if (match.matches) {
                    ico.setAttribute('href', '/dark.ico');
                    bannerico.setAttribute('src', '/dk-bg-favicon.png');
                } else {
                    ico.setAttribute('href', '/favicon.ico');
                    bannerico.setAttribute('src', '/rm-bg-favicon.png');
                }
            }
            e();
            window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {
                e();
            });
        });
    }
)();