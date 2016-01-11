module.exports = {
    'env': {
        'es6': true,
        'node': true
    },

    'ecmaFeatures': {
        'modules': true
    },

    'extends': 'eslint:recommended',

    'rules': {
        'indent': [2, 4],
        'quotes': [2, 'single'],
        'linebreak-style': [2, 'unix'],
        'semi': [2, 'never']
    }
}
