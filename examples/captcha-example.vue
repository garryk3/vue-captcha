<template>
    <div>
        <h1>Captcha example</h1>
        <form @submit="stopSend">
            <input type="text" placeholder="enter text">
            <v-captcha :sitekey="key" v-on:verify="onVerify" ref="captchaSecond"></v-captcha>
            <input type="submit" @click="onInitCaptcha('captchaSecond')" value="send"/>
        </form>
    </div>
</template>

<script>
    import captcha from './../src/index.vue'

    export default {
        name: "captcha-example",
        data() {
            return {
                key: '6LeH4T0UAAAAAHtzh_dRHahDWjpKwaFQP7KHmCB7'
            }
        },
        methods: {
            onInitCaptcha(key) {
                if (key) {
                    this.$refs[key].execute()
                } else {
                    this.$refs.captcha.execute()
                }
            },
            onVerify() {
                console.log('form send')
            },
            stopSend(e) {
                e.preventDefault()
            }
        },
        components: {
            'v-captcha': captcha
        }
    }
</script>
