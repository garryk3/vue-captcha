(function (global, factory) {
    global.VCaptcha = factory(global)
})(this, (function (global) {
        if (!global.Vue) {
            console.warn('you need to connect vue.js: https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.9/vue.min.js!!!')
        }

        return {
            template: '<div id="recaptcha" ref="captcha"></div>',
            data: function () {
                return {
                    sitekey: '6LeH4T0UAAAAAHtzh_dRHahDWjpKwaFQP7KHmCB7',
                    widgetId: null
                }
            },
            computed: {
                grecaptcha: function () {
                    return global.grecaptcha
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
                    global.grecaptcha.execute(this.widgetId)
                },
                reset: function () {
                    if (global.grecaptcha) {
                        global.grecaptcha.reset(this.widgetId)
                    }
                },
                render: function () {
                    var $vm = this;

                    setTimeout(function() {
                        if(typeof global.grecaptcha === 'undefined') {
                            $vm.render();
                        } else {
                            $vm.widgetId = global.grecaptcha.render($vm.$refs.captcha, {
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
            props: ['script-is-loaded']
        };
    })
);