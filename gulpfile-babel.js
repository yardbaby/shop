import gulp from 'gulp'

import loadPlugins from 'gulp-load-plugins'

const plugins = loadPlugins()

//语法校验任务
gulp.task('lint',[],() => {
  return gulp.src(['src/**/*.js'])
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format())
    .pipe(plugins.eslint.failAfterError())
})

//清空临时文件
gulp.task('clean',['lint'],del.bind(null,['dist']))


//copy src下的额外文件
gulp.task('extras',[],() => {
  return gulp.src(['src/views/**/*.*'],{base: 'src'})
    .pipe(gulp.dest('dist'))                                                                                                               )
})

//编译 src下的js文件
gulp.task('compile',[],() => {
  return gulp.src(['src/**/*.js'])
    .pipe(plugins.babel())
    .pipe(gulp.dest('dist'))
})

//合并编译和拷贝任务
gulp.task('build',['extras','compile'])


//清空临时文件并且拷贝和编译
gulp.task('default',['clean'],() => {
  return gulp.start('build')
})


// "start": "cross-env NODE_ENV=development nodemon index.js",
//     "lint": "eslint \"src/**/*.js\"",
//     "clean": "del-cli -f dist",
//     "precompile": "npm run clean",
//     "compile": "babel src --out-dir dist",
//     "serve": "cross-env NODE_ENV=production node index.js",
//     "test": "echo \"Error: no test specified\" && exit 1"