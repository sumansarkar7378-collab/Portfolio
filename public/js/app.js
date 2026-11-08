const navigationDuration = 220;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

document.addEventListener("click", (event) => {
    const link = event.target.closest(".site-header a");

    if (
        !link ||
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        link.target ||
        link.hasAttribute("download")
    ) {
        return;
    }

    const destination = new URL(link.href, window.location.href);

    if (
        destination.origin !== window.location.origin ||
        !destination.pathname.startsWith("/portfolio/") ||
        destination.pathname === window.location.pathname
    ) {
        return;
    }

    event.preventDefault();

    if (reducedMotion.matches) {
        window.location.assign(destination.href);
        return;
    }

    document.body.classList.add("is-page-leaving");
    window.setTimeout(() => {
        window.location.assign(destination.href);
    }, navigationDuration);
});