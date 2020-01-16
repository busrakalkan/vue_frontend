<template>
    <div class="Login">
        <div style="height: 450px;" class="row-alt">
        <section class="log-section">
            <header class="doubled">
                <span class="guide-title">Giriş Yap</span>
            </header>
            <div class="container">
                <div class="form-area">
                    <div class="row-alt">
                        <div class="col-md-offset-4 col-md-4  col-sm-offset-4 col-sm-4 col-xs-12">
                            <form id="app"

                            style="width: 360px; margin:auto;">

                                <div class="form-group">
                                    <label for="email">E-Posta</label>
                                    <input id="email" v-model="email" type="email" name="email" placeholder="E-Posta adresinizi giriniz">
                                </div>
                                <div class="form-group pusher">
                                    <label for="password">
                                        <span>Şifre</span>
                                        <a style="float: right;" href="#" class="guide-link">Şifremi Unuttum</a>
                                    </label>
                                    <input id="password" v-model="pass" type="password" name="password" placeholder="Şifrenizi giriniz">
                                </div>
                                <button @click="login" type="submit" class="round-btns">Oturum Aç</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
</template>

<script>
import Uye from '../UyeServer'

export default {
  name: 'Login',
  data() {
    return {
      error:'',
      email: '',
      pass: '',
      uyeler: [],
      check: 0
    }
  },
   async created() {
      try{
        this.uyeler = await Uye.getPosts();
      }catch(err){
        this.error = err.message;
      }
    },
    methods:{
        async login (){
            if(this.email!="" && this.pass!=""){
                for(let i = 0 ; i < this.uyeler.length ; i++){
                    if(this.email == this.uyeler[i].email){
                        if (this.pass == this.uyeler[i].sifre){
                            alert("giris yapildi")
                            this.check = 1
                        }
                    }else if(this.check != 1) {
                        alert("Hatalı giriş")
                    }
                }
            }else{
                alert("lütfen e-posta ve şifre kısımlarını boş bırakmayınız");
            }
        }
    }
}
</script>
<style scoped>
.clearfix:after, .container:after, .container-fluid:after, .row:after, .form-horizontal .form-group:after, .btn-toolbar:after, .btn-group-vertical > .btn-group:after, .nav:after, .navbar:after, .navbar-header:after, .navbar-collapse:after, .pager:after, .panel-body:after, .modal-footer:after {
    clear: both;
}
section{
    padding: 0;
    border: 0;
    margin: 0px 100px
}
.log-section header {
    padding: 40px 0;
    text-align: center;
    background-color: rgba(242,242,242,0.6);
}
.guide-title:last-child {
    margin-bottom: 0;
}
.guide-title {
    display: block;
    opacity: .5;
    color: #000;
    font-size: 40px;
    font-weight: 300;
    line-height: 1;
}
.log-section .form-area {
    position: relative;
    padding: 45px 0 40px;
}
form {
    display: block;
    margin-top: 0em;
}
.form-group {
    margin-bottom: 20px;
    position: relative;
}
label {
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    color: #a4a4a4;
    margin-bottom: 10px;
    display: block;
}
input[type="text"], input[type="email"], input[type="tel"], input[type="password"], input[type="search"] {
    padding: 0 15px;
    height: 40px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -webkit-appearance: none;
    border: 1px solid #a4a4a4;
    font-size: 12px;
    color: #000;
    width: 100%;
}
.log-section .round-btns {
    width: 392px;
    margin-bottom: 20px;
}
.round-btns, a.round-btns {
    display: block;
    height: 45px;
    padding: 0 30px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    border: 0;
    border-radius: 100px;
    background-color: #490e6f;
    font-size: 14px;
    font-weight: 500;
    line-height: 45px;
}
.error-message{
    color: #e6201d;
    font-size: 12px;
}

</style>