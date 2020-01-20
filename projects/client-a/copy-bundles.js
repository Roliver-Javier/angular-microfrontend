const copy = require('copy');

console.log('Copy UMD bundles ...');

copy('node_modules/@angular/*/bundles/*.umd.js','projects/client-a/src/assets', {}, _ => {});
copy('node_modules/rxjs/*/bundles/*.js','projects/client-a/src/assets/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.js','projects/client-a/src/assets/zone.js', {}, _ => {});
copy('node_modules/core-js/client/*.js','projects/client-a/src/assets/core-js', {}, _ => {});

