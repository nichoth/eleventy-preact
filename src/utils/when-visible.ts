export default function whenVisible (
    $element,
    callback,
    options?:IntersectionObserverInit
) {
    if (typeof IntersectionObserver === 'undefined') {
        callback()
        return
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            observer.unobserve($element)
            callback()
        })
    }, options)

    observer.observe($element)
}
