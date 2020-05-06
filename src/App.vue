<!--
 * @Author       : weiran92@xdf.cn
 * @Date         : 2020-05-06 13:56:57
 * @LastEditors  : weiran92@xdf.cn
 * @LastEditTime : 2020-05-06 13:57:39
 * @Description  : 描述信息
 -->
<template>
  <div id="app">
    <div class="defaultBox">
      <h2>开关切换1</h2>
      <div class="defaultOnoffBox">
        <OnOff :value="onOff" @change="changeOnOff"/>
      </div>
    </div>
  </div>
</template>

<script>
  import OnOff from '@/components/onoff/OnOff'

  let components = {
    OnOff
  }

  let emit = {
    changeOnOff (obj) {
      this.onOff = OnOff.Logic.update(OnOff.Logic.switchoverStatus(obj))
    }
  }

  let methods = {
    ...emit
  }

  export default {
    data () {
      return {
        onOff: OnOff.empty({
            width: 50,
            height: 32,
            borderWidth: 2,
        })
      }
    },
    name: 'App',
    components,
    methods
  }
</script>

<style>
#app{
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
}
.defaultBox{
  width: 100%;
  margin-bottom: 20px;
}
.defaultBox>h2 {
  font-size: 20px;
  margin-bottom: 10px;
  user-select:none;
}
.defaultBox>.defaultOnoffBox {
  width: 100%;
}
</style>
