<template>
    <div class="Register">
        <div class="row-alt">
            <div class="col-sm-12">
            <section class="log-section">
                <header class="doubled">
                    <span class="guide-title">Yeni Üyelik</span>
                </header>
                <div class="container">
                    <div class="form-area">
                        <div class="row-alt">
                            <div class="col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4 col-xs-12">
                                <form style="width: 360px; margin:auto;">
                                    <div class="form-group">
                                        <label class="required">Adınız</label>
                                        <input v-model="ad" type="text" placeholder="Adınızı giriniz">
                                    </div>
                                    <div class="form-group">
                                        <label class="required">Soyadınız</label>
                                        <input v-model="soyad" type="text" placeholder="Soyadınızı giriniz">
                                    </div>
                                    <div class="form-group">
                                        <label class="required">Email</label>
                                        <input v-model="email" type="text" placeholder="Email adresinizi giriniz">
                                    </div>
                                    
                                    <div style="display: inline-block; width: 360px;" class="form-group" id="eyePassword">
                                        <label class="required">Şifre</label>
                                        
                                        <input type="password" v-model="pass">
                                    </div>
                                    <div class="form-group" id="eyePassword2">
                                        <label class="required">Şifreyi Tekrarla</label>
                                        <input type="password" v-model="con_pass">
                                    </div>
                        
                                    
                                    <button @click="register" type="submit" class="round-btns chubby">ÜYE OL</button>
                                    
                                    <p>
                                        Hesap oluşturarak
                                        <a href="#">üyelik sözleşmesini</a>
                                        ve 
                                        <a href="#">KVKK Aydınlatma Metnini</a>
                                        okuduğunuzu ve kabul ettiğinizi onaylıyorsunuz.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    </div>
</template>

<script>
import Uye from '../UyeServer'
export default {
  name: 'Register',
  data() {
    return {
      error:'',
      email: '',
      pass: '',
      con_pass:'',
      ad:'',
      soyad:'',
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
        async register (){
            if(this.ad!="" && this.soyad!="" && this.email!="" && this.pass!=""&& this.con_pass!=""){
                if(this.pass == this.con_pass){
                    await Uye.insertPost(this.ad,this.soyad,this.email,this.pass);
                    alert("Kullanıcı Oluşturuldu");
                    this.check=1
                }else if(this.check != 1){
                    alert("Şifre Doğrulama Hatalı");
                }
            }else{
              alert("'*' ile gösterilen yerleri lütfen doldurunuz");
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
    width: 100%;
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
label.required:after {
    content: "*";
    font-family: FontAwesome;
    font-style: normal;
    font-weight: 900;
    color: #f00;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
    padding: 0 5px;
}
.radio-structure {
    position: relative;
}
.form-party.large .form-group {
    margin: 0 20px;
}
.radio-structure>label {
    position: relative;
    padding-left: 35px;
    min-height: 25px;
    padding-top: 7px;
    right: 5px;
}
.form-party .form-group {
    float: left;
}
.form-party.large {
    margin: 0 -20px;
}
.radio-structure>input {
    position: absolute;
    left: 0;
    top: 0;
    width: 25px;
    height: 25px;
    z-index: 1;
    opacity: 0;
}
input[type="radio"], input[type="checkbox"] {
    margin: 4px 0 0;
    margin-top: 1px \9;
    line-height: normal;
}
.radio-structure>label {
    position: relative;
    padding-left: 35px;
    min-height: 25px;
    padding-top: 7px;
    right: 5px;
}
label:before, label:after {
    content: " ";
    display: table;
}
.radio-structure>label:before {
    content: "";
    border: solid 1px #490e6f;
    width: 25px;
    height: 25px;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 50%;
}
.radio-structure>label:after {
    content: "";
    background-color: #490e6f;
    width: 19px;
    height: 19px;
    position: absolute;
    left: 4px;
    top: 4px;
    border-radius: 50%;
    opacity: 0;
}
.radio-structure>input:checked+label:after {
    opacity: 1;
}
.radio-structure>input:unchecked+label:after {
    opacity: 0;
}
.form-group .eyePassword {
    position: absolute;
    right: 14px;
    bottom: 7px;
    cursor: pointer;
}

.g-checkbox  input{
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    margin: 0;
    opacity: 0;
}
.g-checkbox label {
    position: relative;
    min-height: 25px;
    margin-bottom: 0;
    padding-left: 35px;
    color: #2b2c3f;
    font-size: 14px;
    line-height: 25px;
}

.g-checkbox input:checked+label:after {
    display: inline-block;
}
.g-checkbox label:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    content: '';
    border: solid 1px #490e6f;
    border-radius: 2px;
}

.g-checkbox label:after {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    width: 25px;
    height: 25px;
    content: '';
    /*background: url(img/ok.png);*/
    text-align: center;
    color: #490e6f;
    font-family: icon;
    font-size: 16px;
    line-height: 22px;
}

.log-section .form-area p {
    color: #2b2c3f;
    font-size: 14px;
    line-height: 1.43;
}
.log-section .form-area p a,.log-section .form-area p .highlighted {
    color: #470f72;
    font-weight: 700;
}
</style>