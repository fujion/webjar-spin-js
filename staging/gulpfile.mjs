import gulp from 'gulp';

const srcDir = '${webjar.staging}/node_modules/spin.js/';
const destDir = '${webjar.target}/';

function task1() {
    return _copy('*.md');
}

function task2() {
    return _copy('spin.css', 'dist');
}

function _toSrc(_src) {
    return gulp.src(_src, {allowEmpty: false, cwd: srcDir});
}

function _toDest(_dest) {
    return gulp.dest(_dest || '.', {cwd: destDir});
}

function _copy(_src, _dest) {
    console.log('  Copying ' + _src);
    return _toSrc(_src).pipe(_toDest(_dest))
}

export default gulp.series(task1, task2);
