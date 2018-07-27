<template>
    <div id="container">
        <div id="map"></div>
        <div id="centerDiv">
            <!-- {{address}} -->
            <button @click="addMarker">addMarker</button>
            <button @click="addMarkers">addMarkers</button>
        </div>
    </div>
</template>

<script>
import { TMap } from '../../../static/js/TMap.js'

export default {
    data() {
        return {
            map: null,
            address:'',
            lat:0,
            lng:0,
            latlng:'',
            marker:'',
            markers:'',
            markerCluster:'',
            icon:'',
            points:[
                [23.390179, 116.708544],
                [23.389189, 116.708144],
                [23.388119, 116.708544],
                [23.373209, 116.708044],
                [23.393279, 116.708444],
                [23.344179, 116.708544],
                [23.390179, 116.709544],
            ]
        }
    },
    mounted() {
        let _this = this;
        window.flex(true);
        // this.getLocation();
        this.showPosition();

        // 加载地图
        this.$nextTick(function(){
            let _this = this;
            TMap('R2OBZ-X7IWP-FR5D2-VN6YW-GJN23-HWB3K').then( qq => {
                var info, geocoder = null;
                // var point = new qq.maps.LatLng(lat,lng);
                //调用地图命名空间中的转换接口   type的可选值为 1:GPS经纬度，2:搜狗经纬度，3:百度经纬度，4:mapbar经纬度，5:google经纬度，6:搜狗墨卡托
                qq.maps.convertor.translate(new qq.maps.LatLng(this.lat,this.lng), 1, function(res){
                    //取出经纬度并且赋值
                    _this.latlng = res[0];
                    
                    // 设置地图中心
                    _this.map = new qq.maps.Map(container,{
                        disableDefaultUI: true,
                        center:  _this.latlng,
                        zoom: 14
                    });

                    // 添加圆形覆盖物
                    // var circle=new qq.maps.Circle({
                    //     map: map,
                    //     center: latlng,
                    //     radius: 90,
                    //     fillColor: new qq.maps.Color(204,204,204, 0.5),
                    //     strokeColor: new qq.maps.Color(204,204,204, 0.9),
                    // });
                    // circle.setMap(map);
                    // circle.setVisible(true);

                    // 绘制中间坐标
                    // var middleControl = document.createElement("div");
                    // middleControl.style.position="fixed";
                    // middleControl.style.left="0";
                    // middleControl.style.top="0";
                    // middleControl.style.right="0";
                    // middleControl.style.bottom="0";
                    // middleControl.style.margin="auto";
                    // // middleControl.style.text-align="center";
                    // middleControl.style.width="36px";
                    // middleControl.style.height="36px";
                    // middleControl.style.zIndex="1";
                    // middleControl.innerHTML ='<img src="https://www.cdlhome.com.sg/mobile_assets/images/icon-location.png"/>';
                    // container.appendChild(middleControl);

                    // 逆解析
                    // geocoder = new qq.maps.Geocoder({
                    //     complete: function(result){
                    //         _this.address = result.detail.address;
                    //         // console.log(result.detail.address);
                    //     },
                    //     error: function() {
                    //         alert("错误的经纬度");
                    //     }
                    // });
                    // geocoder.getAddress(map.getCenter());

                    //当地图中心属性更改时触发事件
                    // qq.maps.event.addListener(map, 'center_changed', function() {
                    //     geocoder.getAddress(map.getCenter());
                    //     // console.log('point:'+map.getCenter());
                    // });

                });
            });
        })

        
    },
    methods: {
        getLocation(){
            //判断是否支持 获取本地位置
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(this.showPosition);
            }else{
                x.innerHTML="浏览器不支持定位.";
            }
        },
        showPosition(){
            let _this = this;
            var container = document.getElementById("map");
            var centerDiv = document.getElementById("centerDiv");

            // var lat = position.coords.latitude;
            // var lng = position.coords.longitude;

            this.lat = 23.390979;
            this.lng = 116.708544;
        },
        addMarkers(){
            let _this = this;
        
            this.icon = new qq.maps.MarkerImage(
                "../../../static/img/point.png",
                new qq.maps.Size(64, 64),
                new qq.maps.Point(0, 0)
            );

            this.markers = new qq.maps.MVCArray();

            var bounds = _this.map.getBounds();
            var sw = bounds.getSouthWest();
            var ne = bounds.getNorthEast();
            var lngSpan = Math.abs(sw.getLng() - ne.getLng());
            var latSpan = Math.abs(ne.getLat() - sw.getLat());

            for (var i = 0; i < 50; i++) {
                var position = new qq.maps.LatLng(ne.getLat() - latSpan*(Math.random()*0.95), sw.getLng() + lngSpan*(Math.random()*0.95));
                var marker = new qq.maps.Marker({
                    position: position,
                    icon:_this.icon,
                    map:_this.map,
                    id: i
                });

                qq.maps.event.addListener(marker, 'click', function (data) {
                    console.log('点击了点');
                    console.log(data.target.id);
                });

                _this.markers.push(marker);
            }
            this.markerClusterer = new qq.maps.MarkerCluster({
                map:_this.map,
                minimumClusterSize:5, //默认2
                markers:_this.markers,
                zoomOnClick:true, //默认为true
                gridSize:30, //默认60
                averageCenter:true, //默认false
                maxZoom:18, //默认18
            });
            qq.maps.event.addListener(_this.markerClusterer, 'clusterclick', function (evt) {
                var ss =  evt;
                console.log('点击了聚合点');
            });
            
        },

        addMarker(){
            let _this = this;
            this.marker = new qq.maps.Marker({
                map : _this.map,
                draggable: true,
                position : _this.latlng
            });
        },
    },
}
</script>

<style >
#map{
    min-width:100%;
    min-height:100%;
}
#centerDiv{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    z-index: 100;
    background-color: #dddddd;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 0.32rem;
    text-align: left;
}
</style>