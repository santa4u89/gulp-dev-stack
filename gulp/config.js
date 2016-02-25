export default {
    paths: {
        gulpfile: './gulpfile.babel.js',
        src: {
            base: './src',
            bower: './bower_components',
            app: {
                base: './app',
                entry: './src/app/app.js',
                all: './src/app/**/*.js',
                dest: './src/js'
            },
            gfx: './src/gfx',
            html: './src/*.html',
            sass: {
                base: './src/sass',
                entry: './src/sass/main.{scss,sass}',
                all: './src/sass/**/*.{scss,sass}',
                dest: './src/css'
            },
            tpl: {
                base: './src/tpl',
                entry: './src/tpl/*.nunj',
                all: './src/tpl/**/*.nunj'
            }
        },
        dist: {
            base: './dist',
            css: './dist/css',
            js: './dist/js'
        },
        names: {
            css: {
                src: 'style.css',
                min: 'style.min.css'
            },
            js: {
                src: 'app.js',
                min: 'app.min.js'
            }
        }
    }
};
