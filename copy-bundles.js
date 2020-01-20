const copy = require('copy');

console.log('Copy UMD bundles ...');

copy('node_modules/@angular/*/bundles/*.umd.js','src/assets', {}, _ => {});
copy('node_modules/rxjs/*/bundles/*.js','src/assets/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.js','src/assets/zone.js', {}, _ => {});
copy('node_modules/core-js/client/*.js','src/assets/core-js', {}, _ => {});

