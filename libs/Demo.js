var demo = angular.module('demo', ['baiduMap']);

demo.controller('demoCtrl', ['$scope',
    function ($scope) {
        $scope.offlineOpts = {
            retryInterval: 10000,
            txt: '无法连接到Internet，请检查网络！'
        };

        $scope.active_tooptip = function () {
            $('.BMap_bubble_content ul.list a').tooltipster({
                animation: 'fall',
                delay: 200,
                theme: 'tooltipster-shadow',
                side: ['right', 'bottom', 'left', 'top'],
                distance: 15,
                //content: $('#tooltip_content'),
                contentCloning: true
            });
        };

        var longitude = 112.951369;
        var latitude = 28.178643;
        var content = '<ul class="list"><li><label>负责人</label>：张建军</li><li><label>电话</label>：18684912915</li><li><a data-tooltip-content="#tooltip_content">详细信息>></a></li></ul>';
        $scope.mapOptions = {
            center: {
                longitude: longitude,
                latitude: latitude
            },
            zoom: 17,
            city: 'ChangSha',
            markers: [{
                longitude: longitude,
                latitude: latitude,
                icon: 'img/mappiont.png',
                width: 23,
                height: 29,
                title: '<strong>国家超级计算长沙中心仓库</strong>',
                content: content,
                click: $scope.active_tooptip
            }, {
                longitude: 112.950999,
                latitude: 28.17768,
                icon: 'img/mappiont.png',
                width: 23,
                height: 29,
                title: '<strong>怪兽大学仓库</strong>',
                content: content,
                click: $scope.active_tooptip
            }]
        };
    }
]);
