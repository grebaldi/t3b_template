## 1.0.1 (05.17.2014)
* Added a frontend unit test boilerplate based on [Karma](http://karma-runner.github.io/) and [Jasmine](http://jasmine.github.io/).
* Added an `useSingleFileBuild` option for the r.js optimizer task.
* Moved the javascript sources into the `Public/` folder to prevent errors from the default apache config of TYPO3.
* Removed the bower dependency and moved to npm as the only package manager for frontend-/dev-dependencies.
* All arguments of the custom Sass `@mixin`s and `@function`s are now validated.
* Some styleguide modifier comments are generated by Sass (f.e. for all `.brandColor` classes).


## 1.0.1b (05.09.2014)
* Added an example centralized pageUid setup for fluid templates.
* Removed the compass dependency from the Sass base.
* Removed the support for legacy browsers (namely IE7 and below).
* Updated to Sass 3.3.5.
* Added [autoprefixer](https://github.com/ai/autoprefixer)) to the grunt workflow.
* Added a living styleguide system based on [node-kss](https://github.com/hughsk/kss-node) to the grunt workflow.
* Further modularization of the Sass base.
* Added an composer.json to the repository.
* Removed t3b_common from the suggests array.


## 1.0.0a Priority bugfix release (04.11.2014)
* Supressed errors from the extensionManager which can't find the latest version(1.8.5) of VHS in the typo3.org extension repository.
* Disabled the automatic execution of `grunt init` after `npm install`.
* Created a isPackageDefault() helpers function.
* Modified the generated title of the ext for better readability.


## 1.0.0 - First stable release (04.04.2014)
