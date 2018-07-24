<template>
    <div id="container">
        <div id="map"></div>
        <div id="centerDiv">{{address}}</div>
    </div>
</template>

<script>
import { TMap } from '../../../static/js/TMap.js'

export default {
    data() {
        return {
            address:''
        }
    },
    mounted() {
        window.flex(true);
        // this.getLocation();
        this.showPosition();
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

            var lat = 23.390979;
            var lng = 116.708544;
            // alert(lat); 23.390979 
            // alert(lng); 116.708544

            var map, marker, latlng, info, geocoder = null;

            TMap('R2OBZ-X7IWP-FR5D2-VN6YW-GJN23-HWB3K').then( qq => {
                // var point = new qq.maps.LatLng(lat,lng);
                //调用地图命名空间中的转换接口   type的可选值为 1:GPS经纬度，2:搜狗经纬度，3:百度经纬度，4:mapbar经纬度，5:google经纬度，6:搜狗墨卡托
                qq.maps.convertor.translate(new qq.maps.LatLng(lat,lng), 1, function(res){
                    //取出经纬度并且赋值
                    latlng = res[0];
                    
                    map = new qq.maps.Map(container,{
                        disableDefaultUI: true,
                        center:  latlng,
                        zoom: 18
                    });

                    var circle=new qq.maps.Circle({
                        map: map,
                        center: latlng,
                        radius: 90,
                        fillColor: new qq.maps.Color(204,204,204, 0.5),
                        strokeColor: new qq.maps.Color(204,204,204, 0.9),
                    });
                    circle.setMap(map);
                    circle.setVisible(true);


                    
                    //设置marker标记
                    // marker = new qq.maps.Marker({
                    //     map : map,
                    //     draggable: true,
                    //     position : latlng
                    // });

                    // 绘制中间坐标
                    var middleControl = document.createElement("div");
                    middleControl.style.position="fixed";
                    middleControl.style.left="0";
                    middleControl.style.top="0";
                    middleControl.style.right="0";
                    middleControl.style.bottom="0";
                    middleControl.style.margin="auto";
                    // middleControl.style.text-align="center";
                    middleControl.style.width="36px";
                    middleControl.style.height="36px";
                    middleControl.style.zIndex="1";
                    middleControl.innerHTML ='<img src="https://www.cdlhome.com.sg/mobile_assets/images/icon-location.png"/>';
                    container.appendChild(middleControl);
                   

                    // 逆解析
                    geocoder = new qq.maps.Geocoder({
                        complete: function(result){
                            _this.address = result.detail.address;
                            // console.log(result.detail.address);
                        },
                        error: function() {
                            alert("错误的经纬度");
                        }
                    });
                    geocoder.getAddress(map.getCenter());

                    //当地图中心属性更改时触发事件
                    qq.maps.event.addListener(map, 'center_changed', function() {
                        geocoder.getAddress(map.getCenter());
                        // console.log('point:'+map.getCenter());
                    });


                });
            });
        }
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
    opacity: 0.5
}
</style>