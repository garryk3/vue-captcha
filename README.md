# vue-captcha
vue, recaptcha

__import v-captcha__:

__usage__:
```<v-captcha v-on:verify="YouRFormSendHandler" ref="captchaRef" sitekey="captchaSitekey"></v-captcha>```

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
```

example:

```sitekey: '6LeH4T0UAAAAAHtzh_dRHahDWjpKwaFQP7KHmCB7```
