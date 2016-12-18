module.exports = {
    paths: {
        jade: {
            srcIndex:'resourse/jade/index.jade',
            distIndex: 'public',
            srcWatch: ['resourse/jade/*.jade', 'resourse/jade/add/*.jade'],
            srcWatchAdd: 'resourse/jade/add/*.jade',
            src: 'resourse/jade/*.jade',
            dist: 'public/page'

        },
        scss: {
            src: 'resourse/scss/main.scss',
            dist: 'public/css/'
        },
        js: {
            src: 'resourse/js/*.js',
            src2page: 'resourse/js/2page/*.js',
            srcAuthoriz: 'resourse/js/authorizationPage/*.js',
            srcBuy: 'resourse/js/Buypage/*.js',
            dist: 'public/js/'

        },
        php:{
            src: 'resourse/php/*.php',
            dist: 'public/php'
        },
        image: {
            src: 'resourse/img/*.(png | jpg | jpeg)',
            dist: 'public/image/'
        },
        svg: {
            src: 'resourse/img/*/*.svg',
            dist: 'public/'
        },
        watch: {
            src: 'resourse/scss/*.scss'
        }
    },
    root: './public',

    clean: [
        './public/css/*.css',
        './public/js/*.js',
        './public/image/*',
        './public/page/*.html'
    ],

    spriteSvgConfig: {
        mode: {
            symbol: {
                dest: './image/',
                sprite: 'sprite.svg'
            }
        }
    },

    autoprefixerConfig: ['> 1%','last 8 versions','firefox >= 4','safari 7','safari 8','IE 8','IE 9','IE 10','IE 11']
};
