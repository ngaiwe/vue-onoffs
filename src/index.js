/*
 * @Author       : weiran92@xdf.cn
 * @Date         : 2020-05-06 13:56:57
 * @LastEditors  : weiran92@xdf.cn
 * @LastEditTime : 2020-05-06 13:58:27
 * @Description  : 描述信息
 */
import OnOff from '@/components/onoff/index.js'
// 2
const components = [
    OnOff
]

const install = function (Vue, opts = {}) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install,
    OnOff
}