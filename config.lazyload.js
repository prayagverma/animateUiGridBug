// lazyload config

angular.module('app')
    .constant('JQ_CONFIG', {
        }
    )
    .constant('MODULE_CONFIG', [
            {
                name: 'ui.grid',
                files: [
                    'libs/angular-ui-grid/ui-grid.min.js',
                    'libs/angular-ui-grid/ui-grid.min.css',
                    'libs/angular-ui-grid/ui-grid.bootstrap.css'
                ]
            }
        ]
    )
    // oclazyload config
    .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', function ($ocLazyLoadProvider, MODULE_CONFIG) {
        // We configure ocLazyLoad to use the lib script.js as the async loader
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: MODULE_CONFIG
        });
    }])
;
