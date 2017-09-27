
<template>
  <div>
    <div class="daum-map" :id="mapName"></div>
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'daum-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + '-map',
      map: this.map,
      msg: ''
    }
  },
  mounted: function () {
    let lat = 33.450701;
    let lng = 126.570667;
    var that = this;
    if (navigator.geolocation) {
      // this.msg = ('support')
      navigator.geolocation.getCurrentPosition(function(pos) {
        lat = pos.coords.latitude;
        lng = pos.coords.longitude;
        that.setCenter(lat, lng)
      }, function(err) {
        that.msg = err
      })
    } else {
      this.msg = ('Not support')
    }
    const container = document.getElementById(this.mapName) // 지도를 담을 영역의 DOM 레퍼런스
    const options = { // 지도를 생성할 때 필요한 기본 옵션
      center: new daum.maps.LatLng(lat, lng), // 지도의 중심좌표.
      level: 3 // 지도의 레벨(확대, 축소 정도)
    }
    const map = new daum.maps.Map(container, options)
    const control = new daum.maps.ZoomControl();
    map.addControl(control, daum.maps.ControlPosition.TOPRIGHT)


    this.map = map
  },
  methods: {
    setCenter: function(lat,lng) {
      this.map.setCenter(new daum.maps.LatLng(lat, lng))
      this.setMarker(lat,lng)
    },
    setMarker: function(lat, lng) {
      if (this.centerMarker) {
        this.centerMarker.setMap(null)
      }
      var icon = new daum.maps.MarkerImage(
      'http://localimg.daum-img.net/localimages/07/2009/map/icon/blog_icon01_on.png',
      new daum.maps.Size(31, 35),{
        offset: new daum.maps.Point(16, 34),
        alt: "마커 이미지 예제",
        shape: "poly",
        coords: "1,20,1,9,5,2,10,0,21,0,27,3,30,9,30,20,17,33,14,33"
      });
      this.centerMarker = new daum.maps.Marker({
        position: new daum.maps.LatLng(lat,lng),
        image: icon
      }).setMap(this.map);
    }
  }
}
</script>

<style scoped>
.daum-map {
  width: 500px;
  height: 400px;
  margin: 0 auto;
  background: gray;
}
</style>
