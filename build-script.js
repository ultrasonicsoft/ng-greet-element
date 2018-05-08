const fs = require('fs-extra');
const concat = require('concat');    

(async function build() {

    const files =[
        './dist/inline.bundle.js',
        './dist/polyfills.bundle.js',
        './dist/main.bundle.js'
    ]
    
    await fs.ensureDir('elements')
    
    await concat(files, 'elements/ng-greet-element.js')
    console.info('Angular Elements created successfully!')

})()