# vue-captcha
vue, recaptcha, es5

__import v-captcha__:
```<script src="/YOURPATH/vue--captcha/src/index.min.js"></script>```

__usage__:
```<v-captcha v-on:verify="YouRFormSendHandler" ref="captchaSecond"></v-captcha>```

```<input value="Зарегистрироваться" v-on:click="onInitCaptcha('captchaSecond')">```

add method to your vue parent component
```            
    methods: {
              onInitCaptcha: function (key) {
                   if (key) {
                       this.$refs[key].execute()
                   } else {
                       this.$refs.captcha.execute()
                   }
               }...



