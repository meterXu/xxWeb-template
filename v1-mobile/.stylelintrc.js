module.exports = {
    defaultSeverity: 'error',
    overrides: [
        {
            files: ['**/*.(html|vue)'],
            customSyntax: 'postcss-html'
        }
    ],
    rules: {
        "value-keyword-case": "lower",
        "indentation":2,
        "comment-empty-line-before":[
            "always",
            {
                "except": ["first-nested"]
            }
        ],
        "comment-whitespace-inside":"always",
        "block-opening-brace-space-before":"always",
        "block-closing-brace-newline-before":"always",
        "declaration-colon-space-after":"always",
        "declaration-colon-space-before":"never",
        "declaration-block-single-line-max-declarations":1,
        "declaration-block-trailing-semicolon":"always",
        "color-hex-length":"short",
        "color-hex-case":"lower",
        "length-zero-no-unit":true,
        "string-quotes":"single",
        "max-nesting-depth":3
    }
}