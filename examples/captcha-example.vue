<template>
    <div>
        <h1>Captcha example</h1>
        <form>
            <input type="text" placeholder="enter text">
            <v-captcha :sitekey="key" :v-on:verify="onVerify" ref="captchaSecond"></v-captcha>
            <button type="submit" @click="onInitCaptcha('captchaSecond')">Send</button>
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
        onInitCaptcha(key) {
            if (key) {
                this.$refs[key].execute()
            } else {
                this.$refs.captcha.execute()
            }
        },
        onVerify(e) {
            e.preventDefault();
            console.log('form send')
        },
        components: {
            'v-captcha': captcha
        }
    }
</script>
