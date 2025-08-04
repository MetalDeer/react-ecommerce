module.exports = {
    plugins: [
        require('postcss-preset-env')({
            features: {
                'nesting-rules': true,
                'custom-media-queries': true
            }
        })
    ]
};