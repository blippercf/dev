<template>
  <section class="">
    <div class="u-marginAuto u-maxWidth1000 u-marginBottom60 u-sm-paddingLeft20 u-sm-paddingRight20 u-sm-marginBottom30">
      <div class="u-flex u-marginBottom25 u-borderBottomLighter">
        <span class="heading-title heading-title--lineHeightTight u-flex0 u-block u-paddingBottom20 u-borderBottomNormal u-marginBottomNegative1 u-uiDisplayBold u-fontSize20 u-textColorDarker u-xs-fontSize18">Members</span>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  methods: {
    data () {
      return {
      }
    }
  },
  components: {
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.u-borderBottomLighter {
    border-bottom: 1px solid rgba(0,0,0,.15)!important;
}

.u-marginBottom25 {
    margin-bottom: 25px!important;
}

.u-flex {
    display: -ms-flexbox!important;
    display: flex!important;
}

.heading-title--lineHeightTight {
    line-height: 1.2;
}

.u-fontSize20 {
    font-size: 20px!important;
}

.u-uiDisplayBold {
    font-family: medium-ui-sans-serif-display-font,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif!important;
    letter-spacing: 0!important;
    font-weight: 700!important;
    font-style: normal!important;
}

.u-textColorDarker {
    color: rgba(0,0,0,.8)!important;
    fill: rgba(0,0,0,.8)!important;
}

.u-borderBottomNormal {
    border-bottom: 1px solid rgba(0,0,0,.44)!important;
}

.u-paddingBottom20 {
    padding-bottom: 20px!important;
}

.u-marginBottomNegative1 {
    margin-bottom: -1px!important;
}

.u-block {
    display: block!important;
}

.u-flex0 {
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
}

.u-maxWidth1000 {
    max-width: 1000px!important;
}

.u-marginBottom60 {
    margin-bottom: 60px!important;
}

.u-marginAuto {
    margin-left: auto!important;
    margin-right: auto!important;
}

div {
    display: block;
}
</style>
