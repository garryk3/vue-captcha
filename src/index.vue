<template>
    <div id="recaptcha" ref="captcha"></div>
</template>

<script>
    export default {
        data: function () {
            return {
                widgetId: null
            }
        },
        computed: {
            grecaptcha: function () {
                return window.grecaptcha
            }
        },
        watch: {
            grecaptcha: function () {
                if (this.grecaptcha) {
                    this.render();
                }
            }
        },
        created: function () {
            if (!this.scriptIsLoaded) {
                var captcha = document.head.getElementsByClassName('new-reg__captcha');

                if (!captcha[0]) {
                    var el = document.createElement('script');
                    el.setAttribute('type', 'text/javascript');
                    el.setAttribute('class', 'new-reg__captcha');
                    el.setAttribute('async', '');
                    el.setAttribute('defer', '');
                    el.setAttribute('src', 'https://www.google.com/recaptcha/api.js');
                    document.getElementsByTagName('head')[0].appendChild(el);
                }
            }
        },
        mounted: function () {
            this.render();
        },
        destroyed: function () {
            this.reset();
        },
        methods: {
            execute: function () {
                window.grecaptcha.execute(this.widgetId)
            },
            reset: function () {
                if (window.grecaptcha) {
                    window.grecaptcha.reset(this.widgetId)
                }
            },
            render: function () {
                var $vm = this;

                setTimeout(function() {
                    if(typeof window.grecaptcha === 'undefined') {
                        $vm.render();
                    } else {
                        $vm.widgetId = window.grecaptcha.render($vm.$refs.captcha, {
                            sitekey: $vm.sitekey,
                            size: 'invisible',
                            callback: function (response) {
                                $vm.$emit('verify', response);
                                setTimeout(function () {
                                    $vm.reset()
                                }, 1000)
                            }
                        });
                    }
                }, 100);
            }
        },
        props: ['script-is-loaded', 'sitekey']
    }
</script>

<style scoped>

</style>