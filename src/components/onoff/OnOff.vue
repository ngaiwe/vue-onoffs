<template>
    <div class="onoff" @click="changeOnoff">
        <canvas ref="onoff" :width="value.width" :height="value.height"></canvas>
    </div>
</template>

<script>
    function empty (obj = {}) {
        return {
            width: 100,
            height: 64,
            borderWidth: 4,
            status: true,
            startColor: {
                strokeStyle: 'rgb(235, 235, 235)',
                fillStyle: 'rgba(255, 255, 255, 1)',
                defaultArcBdColor: 'rgba(255, 255, 255, 1)',
                shadowObj: {
                    shadowColor: 'rgba(0,0,0,0.14)',
                    shadowBlur: 6,
                    shadowOffsetX: 3,
                    shadowOffsetY: 2
                }
            },
            endColor: {
                strokeStyle: 'rgba(75,217,100,1)',
                fillStyle: 'rgba(75,217,100,1)',
                defaultArcBdColor: 'rgba(255, 255, 255, 1)',
                shadowObj: {
                    shadowColor: 'rgba(20,149,43,0.83)',
                    shadowBlur: 6,
                    shadowOffsetX: -3,
                    shadowOffsetY: 2
                }
            },
            ...obj
        }
    }

    let Logic = {
        update (value) {
            return value
        },
        switchoverStatus (value) {
             return {
                 ...value,
                 status: !value.status
             }
        }
    }

    export default {
        name: 'OnOff',
        props: ['value'],
        empty,
        Logic,
        methods: {
            changeOnoff () {
                this.$emit('change', this.value)
            },
            draw () {
                if (!this.$refs.onoff) return false
                 let ctx = this.$refs.onoff.getContext('2d'), 
                    dotL = this.value.height/2,
                    dotR = this.value.width-dotL,
                    r = this.value.height/2-this.value.borderWidth
                if (this.value.status) {
                    this._on(ctx, dotL, dotR, r)
                } else {
                    this._off(ctx, dotL, dotR, r)
                }   
            },
            _off (ctx, dotL, dotR, r) {
                let { strokeStyle, fillStyle, defaultArcBdColor, shadowObj } = this.value.startColor
                this._beginPath(ctx, dotL, dotR, r, strokeStyle, fillStyle, defaultArcBdColor, shadowObj, {
                    x: dotL,
                    y: dotL
                })
            },
            _on (ctx, dotL, dotR, r) {
                let { strokeStyle, fillStyle, defaultArcBdColor, shadowObj } = this.value.endColor
                this._beginPath(ctx, dotL, dotR, r, strokeStyle, fillStyle, defaultArcBdColor, shadowObj, {
                    x: dotR,
                    y: dotL
                })
            },
            _beginPath (ctx, dotL, dotR, r, strokeStyle, fillStyle, defaultArcBdColor, shadow, circle) {
                // 圆矩形
                let { width, height, borderWidth } = this.value
                ctx.clearRect(0, 0, width, height)
                ctx.save()
                ctx.beginPath()
                ctx.arc(dotL, dotL, r, Math.PI/2, 1.5*Math.PI)
                ctx.arc(dotR, dotL, r, 1.5*Math.PI, Math.PI/2)
                ctx.closePath()
                ctx.lineWidth = borderWidth
                ctx.strokeStyle = strokeStyle
                ctx.fillStyle = fillStyle
                ctx.fill()
                ctx.stroke()
                ctx.restore()
                // 画圆
                ctx.save()
                ctx.beginPath()
                ctx.arc(circle.x, circle.y, r, 0, 2*Math.PI)
                ctx.lineWidth = 1 
                ctx.strokeStyle = strokeStyle
                ctx.fillStyle = defaultArcBdColor
                ctx.shadowColor = shadow.shadowColor
                ctx.shadowBlur = shadow.shadowBlur
                ctx.shadowOffsetX = shadow.shadowOffsetX
                ctx.shadowOffsetY = shadow.shadowOffsetY
                ctx.fill()
                ctx.stroke()
                ctx.restore()
            }
        },
        mounted () {
            this.draw()
        },
        updated () {
            this.draw()
        }
    }
</script>

<style scoped>
.onoff{
    display: inline-block;
    cursor: pointer;
}
</style>
