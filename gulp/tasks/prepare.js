import gulp from 'gulp';
import { argv } from 'yargs';
import runSequence from 'run-sequence';

// run-sequence until gulp 4.0 is introduced

const isProd = argv.prod || false;
const devSequence = [['styles', 'js', 'tpl']];
const buildSequence = ['clean', ...devSequence, 'prettify'];
const sequence = isProd ? buildSequence : devSequence;

gulp.task('prepare', () => runSequence(...sequence));
