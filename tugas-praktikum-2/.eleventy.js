module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('assets')
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.addPassthroughCopy('gambar')
    return {
        passthroughFileCopy: true
    }
}