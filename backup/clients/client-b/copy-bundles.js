const copy = require('copy');

console.log('Copy UMD bundles ...');

copy('node_modules/@angular/*/bundles/*.umd.js','projects/client-b/src/assets', {}, _ => {});
copy('node_modules/rxjs/bundles/*.js','projects/client-b/src/assets/rxjs', {}, _ => {});
copy('node_modules/zone.js/dist/*.js','projects/client-b/src/assets/zone.js', {}, _ => {});
copy('node_modules/core-js/client/*.js','projects/client-b/src/assets/core-js', {}, _ => {});

