require('./node_modules/angular/angular.js');
require('./node_modules/bootstrap/dist/css/bootstrap.css');

let requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(require.context("./src", true, /index\.ts$/));