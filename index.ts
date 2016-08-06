import './node_modules/angular/angular.js';
import './node_modules/bootstrap/dist/css/bootstrap.css';

let requireAll = (requireContext) => requireContext.keys().map(requireContext);
requireAll(require.context("./src", true, /index\.ts$/));