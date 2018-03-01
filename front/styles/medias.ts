export default {
    tablet: (css: string) => (
        `@media screen and (min-width: 767px) {
            ${css}
        }`
    ),
    pc: (css: string) => (
        `@media screen and (min-width: 1200px) {
            ${css}
        }`
    )
}