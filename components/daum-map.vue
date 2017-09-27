
<template>
  <div class="daum-map" :id="mapName"></div>
</template>

<script>
export default {
  name: 'daum-map',
  props: ['name'],
  data: function () {
    return {
      mapName: this.name + '-map',
      map: this.map
    }
  },
  mounted: function () {
    const container = document.getElementById(this.mapName) // 지도를 담을 영역의 DOM 레퍼런스
    const options = { // 지도를 생성할 때 필요한 기본 옵션
      center: new daum.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
      level: 3 // 지도의 레벨(확대, 축소 정도)
    }
    const map = new daum.maps.Map(container, options)
    this.map = map
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