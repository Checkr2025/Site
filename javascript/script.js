// Scripts for some data security

    document.addEventListener('contextmenu', (event) => event.preventDefault());

    document.addEventListener('keydown', (event) => {
        if (event.key === "F12") {
            event.preventDefault();
        }
        if (event.ctrlKey && event.shiftKey && event.key === "I") {
            event.preventDefault();
        }
        if (event.ctrlKey && event.shiftKey && event.key === "J") {
            event.preventDefault();
        }
        if (event.ctrlKey && event.key === "u") {
            event.preventDefault();
        }
    });

    (function() {
        const detectDevTools = function() {
            const threshold = 160;
            const widthExceeded = window.outerWidth - window.innerWidth > threshold;
            const heightExceeded = window.outerHeight - window.innerHeight > threshold;
            if (widthExceeded || heightExceeded) {
                alert("Developer tools are diabled!");
                window.location.href = "about:blank";
            }
        };

        setInterval(detectDevTools, 1);
    })();