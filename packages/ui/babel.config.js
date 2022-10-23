module.exports = {
    presets: [
        [
            '@babel/preset-env',
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
        [
            '@babel/preset-typescript',
        ],
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        'macros',
    ],
}
