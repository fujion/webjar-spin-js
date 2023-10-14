import terser from '@rollup/plugin-terser';

export default [
    {
        input: './node_modules/spin.js/spin.js',
        output: [
            {
                file: '${webjar.target}/dist/spin.umd.js',
                format: 'umd',
                name: 'ng.spinjs'
            },
            {
                file: '${webjar.target}/dist/spin.umd.min.js',
                format: 'umd',
                name: 'ng.spinjs',
                plugins: [terser()]
            }
        ]
    }
];
