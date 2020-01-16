<template>
  <div class="Header">

        <div class="navbar">
            <div class="row">
                <div style="float: left; width: 50%;" class="row_yazı">
                   <span style="color:#e0119d; font-size:12px; padding-left: 50px;opacity: .72;">75 TL üzeri alışverişlerinizde KARGO BEDAVA!</span>
                </div>
                <div class="row_list" >
                        <div class="dropdown">
                            <button class="dropbtn"><img style="width: 30px; height: 30px; float: left; margin-right: 5%;" src="@/assets/meme-kanseri-tooltip.png"></button>
                            <div class="dropdown-content">
                                <div >
                                <img class="tooltip-image" src="@/assets/meme-kanseri.png">
                                </div>
                            </div>
                        </div>
                    <div class="list">
                        <a class="beauty" href="https://www.gratisbeauty.com/"><img style="width: 25px; height: 25px;" src="@/assets/gratis-beauty.png"> Gratis Beauty</a>
                        <a class="kard" href="#"><img style="width: 25px; height: 25px;" src="@/assets/icons-card.png">Kart</a>
                        <a class="stores" href="#"><img style="width: 25px; height: 25px;" src="@/assets/icons-store.png">Mağazalarımız</a>
                        <a class="help" href="#"><img style="width: 20px; height: 20px;" src="@/assets/icons-help.png">Yardım ve Destek</a>
                    </div>
                </div>
            </div>
            <div class="main-content" style="height: 63px;">
                <div class="container">
                    <div class="left-content" style="margin-left:-650px;">
                      
                            <router-link to="/" class="header-logo"><img src="@/assets/logo-big.png" alt="Gratis"></router-link>
                        
                        <ul style="margin-left: 18px;" class="links">
                            <li><router-link to="/Makyaj"><a>Makyaj</a></router-link></li>
                            <li><router-link to="/Sepet"><a style="margin-left: 20px;" href="#">Sepet</a></router-link></li>
                        </ul>
                    </div>
                    <div class="rigt-content" style="padding-left: 40px;">
                        <div class="search-area">
                            <div class="search-box" style="margin-top: 10px;">
                                <input type="search" placeholder="what are you looking for?">
                                <span class="search-icon">
                                    <button type="submit"><img src="@/assets/search.png"></button>
                                </span>
                            </div>
                            <div class="login-button">
                                <a href="#" class="login">
                                    <img src="@/assets/profile.png" alt="profile">
                                     <router-link to="/Login"><span class="high-text">Giriş Yap</span></router-link>
                                    <router-link to="/Register"><span class="low-text">Üye Ol</span></router-link>
                                </a>
                                <div class="drop-content">
                                    <i class="caret"></i>
                                    <ul class="logged-drop">
                                        <li  class="highlighted">
                                           <router-link to="/Login" ><a style="font-weight: bold; color: #470f72; border-color: #fff;">Giriş Yap</a></router-link>
                                        </li>
                                        <li class="highlighted">
                                            <router-link to="/Register"><a style="font-weight: bold; color: #470f72; border-color: #fff;">Üye Ol</a></router-link>
                                        </li>
                                        <li>
                                            <a href="#">Siparişlerim</a>
                                        </li>
                                        <li>
                                            <a href="#">Bildirimlerim</a>
                                        </li>
                                        <li>
                                            <a href="#">Ayarlarım</a>
                                        </li>
                                        <li>
                                            <a href="#">Mesajlarım</a>
                                        </li>
                                        <li>
                                            <a href="#">Favorilerim</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <ul class="icons" id="deneme">
                                <li>
                                    <a class="favorites" @click="plus">
                                        <img style="width: 26px; height: 26px;" class="heart" src="@/assets/icons-heart.png">
                                    </a>
                                </li>
                                <div style="width: 2px; height: 28px; float: left;background:#000;opacity: .15; margin-left:12px;" class="before">.</div>
                                <li>
                                    <div class="dropdown" style="margin-top:-30px; margin-left:50px;">
                                        <button class="dropbtn">
                                            <img style="width: 30px; height: 30px;" src="@/assets/icons-basket.png">
                                            <i class="count">{{count}}</i>
                                        </button>
                                            <div style="width: 305px; height: 129;" class="dropdown-content options-wrapper">
                                            <!--v-for="(post, index) in posts"
                                                    v-bind:item="post"
                                                    v-bind:index="index"
                                                    v-bind:key="post._id"-->
                                                <div class="post">
                                                    <div class="basket-item-card">
                                                        <a href="#" class="delete" ></a>

                                                        <div class="content" style="margin:0;padding:0">
                                                            <span class="code">Ürün Kodu:</span>
                                                            <a class="name" >{{  }}</a>
                                                            <g-price class="money">
                                                                <span class="gr-price pdp-price gr-price_greyed gr-price_crossed" >
                                                                    <span class="gr-price__amount">{{ }}</span>
                                                                    <span class="gr-price__currency" >TL</span>
                                                                </span>
                                                            </g-price>
                                                            <span class="count" >1 Adet</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="pricing">
                                                <span class="text" >0 Ürün Fiyatı</span>
                                                <g-price class="money">
                                                    <span class="gr-price" >
                                                        <span class="gr-price__amount">0</span>
                                                        <span class="gr-price__fractional">,00 </span>
                                                        <span class="gr-price__currency" >TL</span>
                                                    </span>
                                                </g-price>
                                            </div>
                                            <a href="#" class="round-btns empty" >Sepete Git</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row-alt">
                <nav class="header-nav">
                <div class="container">
                    <ul class="nav-list">
                       <li>
                           <router-link to="/Makyaj"><a style="padding:0;">Makyaj</a></router-link> 
                        </li>
                        <li>
                            <a href="#">Cilt Bakım</a>
                        </li>
                        <li>
                            <a href="#">Saç Bakım</a>
                        </li>
                        <li>
                            <a href="#">Sağlık &amp; Hijyen</a>
                        </li>
                        <li>
                            <a href="#">Parfüm &amp; Deodorant</a>
                        </li>
                        <li>
                            <a href="#">Erkek Bakım</a>
                        </li>
                        <li>
                            <a href="#">Ev &amp; Yaşam</a>
                        </li>
                        <li>
                            <a href="#">Anne &amp; Bebek</a>
                        </li>
                        <li>
                            <a class="highlighted" href="#">OUTLET</a>
                        </li>
                        <li>
                            <a class="highlighted" href="#">Trendler</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </div>
    
  </div>
</template>

<script>
import SepetServer from '../SepetServer'

export default {
    name: 'Header',
    data(){
        return {
        posts:[],
        error:'',
        istek:''
        }
    },
    async created(){
        try{
        this.posts=await SepetServer.getPosts();
        }catch(err){
        this.error=err.message;
        }
    },
    
}
</script>

<style scoped>

div{
    display: block;
}
a{
    text-decoration: none;
}
body{
    font-family: 'Rubik',sans-serif;
}
ol, ul, li {
    list-style: none;
    
}
.row-alt{
    margin-right: -15px;
    margin-left: -15px;
}
.header .navbar .row {
    border-bottom: 1px solid #e3e3e3;
    margin: 0 auto;
    width: 100%;
    height: 30px;
}
.list a{
    display: inline-flex;
    align-items: center;
    padding-left: 20px;
    font-weight: bold;
    color: #333;
    opacity: .9;
    font-size: 12px;
}
.list a img{
    padding-right: 7px;
}
.header .navbar .main-content{
    position: relative;
    z-index: 1;
    padding-top: 15px;
}
.container{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    width: 1170px;
}
.container:before,.nav-list:before,.row-alt:before,.info-tickets:before,.info-tickets:after{
    display: table;
    content: " ";
}
.container .left-content,.nav-list li,.deneme li{
    float: left;
}
.header-logo img{
    float: left;
    margin-bottom: -40px;/*alt satırın logonun altında durması için*/
}
.left-content .links{
    float: left;
    margin-bottom: 0px;
    margin-right: 0px;
    margin-top: 12px;
    padding: 12px 0;
}
.links li{
    float: left;
}
.links li a{
    color: #490e6f;
    font-size: 15px;
    font-weight: bold;
}
.header .main-content .right-content{
    position: relative;
    float: right;
}
.search-area{
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding-left: 0px;
}
.search-box input[type="search"]{
    border: 0.5px solid  rgba(73,14,111,0.8);
    padding: 0 15px;
    width: 380px;
    max-width: 100%;
    height: 40px;
    border-radius: 4px;
}
.search-box .search-icon{
    position: absolute;
    right: 313px;
    top: 55px;
    background: transparent;
}
.search-icon button{
    width: 20px;
    height: 20px;
    display: block;
    padding: 0;
    cursor: pointer;
    border: none;
    background: transparent;
}
.search-area .login-button{
    position: relative;
    float: right;
    margin-left: 30px;
}
.login-button .login{
    position: relative;
    display: inline-flex;
    /*width: 130px;*/
    height: 38px;
    padding: 8px 12px 8px 12px;
    border-radius: 100px;
    background-color: #f9e300;
}
.login img{
    float: left;
    margin-right: 6px;
}
.login .high-text{
    display: block;
    overflow: hidden;
    width: 60px;
    height: 13px;
    margin-bottom: 2px;
    text-overflow: ellipsis;
    color: #490e6f;
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
}
.login .low-text{
    display: flex;
    width: 60px;
    color: #490e6f;
    font-size: 10px;
    font-weight: 300;
    line-height: 1;
    margin-left: -60px;
    margin-top:15px;
}
.login::after{
    border: solid black;
    border-width: 0 1.5px 1.5px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
    position: absolute;
    top: 15px;
    right: 10px;
    content: "";
    color: #490e6f;
}
.login-button .drop-content {
    position: absolute;
    z-index: 2;
    top: 49px;
    right: -7px;
    display: none;
    width: 180px;
}
.login-button:hover .drop-content{
    display: block;
}
.icons>li button .count {
    position: absolute;
    bottom: -3px;
    width: 18px;
    height: 18px;
    text-align: center;
    color: #fff;
    border-radius: 50%;
    background-color: #e0119d;
    font-size: 10px;
    font-weight: 500;
    line-height: 18px;
}
.drop-content .caret {
    position: absolute;
    z-index: 1;
    top: -7px;
    right: 14px;
    display: block;
    overflow: hidden;
    width: auto;
    height: 8px;
    margin: 0;
    border: 0 none;
}
.drop-content .caret:before {
    position: relative;
    top: 3px;
    display: block;
    width: 14px;
    height: 14px;
    content: '';
    transform: rotate(45deg);
    border: solid 1px #490e6f;
    background-color: #f5eafd;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.15);
}
.drop-content .logged-drop {
    position: relative;
    border: solid 1px #490e6f;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.15);
    margin: 0;
    padding: 0;
}
.drop-content .logged-drop li.highlighted {
    background-color: #f5eafd;
}
.drop-content .logged-drop li {
    padding: 0 15px;
}
.drop-content .logged-drop li a {
    display: block;
    color: #2b2c3f;
    border-bottom: solid 1px #e3e3e3;
    font-size: 12px;
    font-weight: 500;
    line-height: 2.67;
    line-height: 32px;
}
.search-area .icons{
    padding-left: 10px;
    float: right;
}
.tooltip-image {
    position: absolute;
    width: 300px;
    z-index: 999999;
    margin-left: -253px;
}
.dropbtn {
    cursor: pointer;
    border:none;
    padding: 0;
    background-color: #fff;
  }
.dropdown {
    position: relative;
    float: left;
    border: none;
    margin-top: -3px;
    margin-left: 7px;
}
.dropdown-content {
    display: none;
    position: absolute;
}
.dropdown:hover .dropdown-content {
    display: block;/*!! ÜZERİNE GELİNCE AÇILMASI İÇİN*/
}
.icons li{
    position: relative;
    float: left;
}
.icons li a{
    position: relative;
    display: inline-block;
  /*  padding: 0 10px;*/
    text-align: center;
    color: #490e6f;
}
.header-nav{
    position: relative;
    height: 42px;
    z-index: -1;
    background-color: #490e6f;
    box-shadow: 0 1px 30px 0 rgba(82,35,127,0.15);
}
.nav-list,.img-list{
    float: right;
    margin-top: 0px;
    margin-bottom: 0px;
}
.nav-list li a{
    position: relative;
    display: block;
    overflow: hidden;
    padding: 14px 10px;
    color: #fff;
    font-size: 14px;
    font-weight: 560;
    line-height: 1;
}
.nav-list>li:first-child>a:before,.main-footer .useful-bar .useful-links li:first-child:before {
    width: 0px;
}
.nav-list>li>a:before{
    position: absolute;
    top: 13px;
    left: 0;
    display: block;
    width: 1px;
    height: 15px;
    content: '';
    border-radius: 100px;
    background-color: #e0119d;
}
.nav-list>li>a.highlighted {
    color: #e0119d;
}

.page-row {
    display: block;
    height: auto;
    flex: 1 1 auto;
    flex-wrap: nowrap;
    align-self: center;
    width: 100%;
}
.page-row-expanded {
    height: auto;
    padding: 0 115px;
}
.carousel{
    position: relative;
    width: 100%;
    overflow: hidden;
}
.item{
    position: relative;
    transition: .6s ease-in-out left;
}
.carousel .img{
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin-right: auto;
    margin-left: auto;
}
.fade-enter-active, .fade-leave-active {
    transition: all 0.8s ease;
    overflow: hidden;
    visibility: visible;
    opacity: 1;
    position: absolute;
  }
.fade-enter, .fade-leave-to {
    opacity: 0;
    visibility: hidden;
}
.carousel-control {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 15%;
    font-size: 20px;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 2px rgba(0,0,0,.6);
    filter: alpha(opacity=50);
    opacity: .5;
}
.carousel-control {
    z-index: 20;
    background: none !important;
    width: 10%;
    margin-left: -15px;
    height: 285px;
    top: 160px;
}
.carousel-control.left:after {
    left: 20px;
    background: url('https://www.gratis.com/file/general/left-chevron.svg') center center no-repeat;
    background-color: #f2f2f2;
}
.carousel-control.right:after {
    right: 20px;
    background: url('https://www.gratis.com/file/general/right-chevron.svg') center center no-repeat;
    background-color: #f2f2f2;
}
 .carousel-control:after {
    border-radius: 20px;
    background-color: #f2f2f2;
}
.carousel-control:after {
    content: "";
    position: absolute;
    top: calc(50% - 20px);
    width: 40px;
    height: 40px;
}
.carousel-control.right {
    right: 0;
    left: auto;
}
.options-wrapper {
    padding: 15px 12px;
    border-top: solid 1px #e3e3e3;
    border-radius: 9px;
    margin-left: -299px;
    background-color: #fff;
}
.brush-title.high {
    margin-bottom: 30px;
    font-size: 26px;
}
.brush-title {
    position: relative;
    padding: 9px 0 3px;
    color: #333;
    font-weight: 500;
    line-height: 1;
    transform-style: preserve-3d;
}
.brush-title.type2:before {
    position: absolute;
    z-index: -1;
    top: 0;
    left: -30px;
    display: block;
    width: 232px;
    height: 34px;
    content: '';
    /*background: url(@/assets/brush4.png) no-repeat 0 0;*/
    background-size: contain;
}
.modifier-nav:not(.functional):before, .modifier-nav:not(.functional):after {
    content: " ";
    display: table;
}
.modifier-nav:not(.functional) {
    margin-bottom: 16px;
    border-bottom: 1px solid #a4a4a4;
    position: absolute;
}
.modifier-nav>li{
    margin: 0;
    padding: 0;
}
.modifier-nav:not(.functional) li {
    float: left;
}
.modifier-nav:not(.functional).type1 li {
    margin-right: 20px;
    margin-left: 0;
}
.modifier-nav:not(.functional) li a.active {
    color: #490e6f;
}
.modifier-nav:not(.functional) li a {
    position: relative;
    display: block;
    color: #333;
    line-height: 1;
}
.modifier-nav:not(.functional).type1 li a {
    padding: 10px 5px;
    font-family: Rokkitt;
    font-size: 18px;
}
.modifier-nav li a:after {
    position: absolute;
    bottom: -2px;
    left: 0;
    display: none;
    width: 100%;
    height: 3px;
    content: '';
    background-color: #490e6f;
}
.modifier-nav li a:active:after{
    display: flex;
}
.pricing {
    margin-bottom: 25px;
}
a.round-btns.empty {
    color: #490e6f;
    border: 1px solid #490e6f;
    background-color: #fff;
    line-height: 43px;
    widows: 50%;
}
.pricing .text {
    float: left;
    color: #490e6f;
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
}
.pricing .money {
    float: right;
    vertical-align: top;
    color: #490e6f;
    font-size: 28px;
}
.gr-price {
    position: relative;
    display: inline-flex;
    font-family: Rokkitt;
    line-height: 1;
}
.gr-price__amount {
    vertical-align: text-top;
    font-weight: 800;
}
.gr-price__fractional {
    vertical-align: text-top;
    font-size: .7em;
}
.gr-price__currency {
    padding-left: .2rem;
    vertical-align: text-top;
    font-size: .7em;
    font-weight: 100;
}
.info-tickets.cutted {
    float: right;
    width: 100%;
    max-width: calc(100% - 50px);
}
.info-tickets {
    height: 155px;
    margin: 60px 0 25px;
    padding-top: 25px;
    border-radius: 6px;
    background-color: #f2f2f2;
}
.media.pull-left {
    margin: 0 20px 0 -50px;
}
.pull-left {
    float: left !important;
}
.info-tickets .infos {
    overflow: hidden;
}
.info-tickets h4 {
    margin-bottom: 20px;
    line-height: 1.3;
}
.info-tickets .buttons a {
    display: inline-block;
    padding: 0 30px;
}
.info-tickets .media.pull-top {
    margin: -85px 30px 0 30px;
}
.info-tickets .media {
    float: left;
    margin-right: 30px;
}
a.round-btns.empty {
    color: #490e6f;
    border: 1px solid #490e6f;
    background-color: #fff;
    line-height: 43px;
}
a.round-btns {
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

.nav-list>li .mega-menu {
    position: absolute;
    z-index: 1;
    top: 42px;
    left: 0;
    /*visibility: hidden;*/
    width: 100%;
    padding: 25px;
    transition: 300ms all ease-in-out;
    transition-delay: 250ms;
    opacity: 0;
    background-color: rgba(43,44,63,0.95);
}


/*footer css*/
footer{
    margin: 0;
    padding: 0;
    border: 0;
}

.page-row {
    display: block;
    height: auto;
    flex: 1 1 auto;
    flex-wrap: nowrap;
    align-self: center;
    width: 100%;
}

.main-footer .useful-bar {
    margin: 0 -15px;
    padding: 25px 0;
    background-color: #f5eafd;
}
.useful-bar .useful-links{
    margin: 0;
    padding: 0;
}
.main-footer .useful-bar .useful-links li {
    position: relative;
    float: left;
    width: calc(100% / 4);
    text-align: center;
    margin: 0;
    padding: 0;
}
.main-footer .useful-bar .useful-links li a {
    position: relative;
    display: inline-block;
    color: #490e6f;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.38;
}
.main-footer .useful-bar .useful-links li a.store:before {
    width: 43px;
    height: 42px;
    background: url("https://www.gratis.com/file/general/magaza-bul.svg") 0 0 no-repeat;
    background-size: contain;
}
.main-footer .useful-bar .useful-links li a .text {
    padding-left: 15px;
    vertical-align: top;
    line-height: 40px;
}
.main-footer .useful-bar .useful-links li a:before {
    display: inline-block;
    content: '';
}
.main-footer .useful-bar .useful-links li:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 50px;
    content: '';
    border-radius: 100px;
    background-color: #fff;
}
.main-footer .useful-bar .useful-links li a.product-options:before {
    width: 52px;
    height: 40px;
    background: url("https://www.gratis.com/file/general/teslimat.svg") 0 0 no-repeat;
    background-size: contain;
}
.main-footer .useful-bar .useful-links li a.help:before {
    width: 39px;
    height: 40px;
    background: url("https://www.gratis.com/file/general/yardim.svg") 0 0 no-repeat;
    background-size: contain;
}
.main-footer .useful-bar .useful-links li a.contact:before {
    width: 36px;
    height: 42px;
    background: url("https://www.gratis.com/file/general/iletisim.svg") 0 0 no-repeat;
    background-size: contain;
}

.main-footer .footer-link-bar {
    margin: 0 -15px;
    padding: 40px 0;
}
.footer-link-bar li,.footer-link-bar ul,.main-footer .bottom-bar .bar-links,.main-footer .bottom-bar .bar-links{
    list-style: none;
    margin: 0;
    padding: 0;
}
.main-footer .footer-link-bar .footer-links li a {
    color: #333;
    font-size: 16px;
    font-weight: 700;
    line-height: 2;
}
.main-footer .footer-link-bar .footer-links.gap {
    margin-bottom: 33px;
}
.main-footer .footer-link-bar .links-w-icons.cutter li a {
    line-height: 2.33;
}
.main-footer .footer-link-bar .links-w-icons li a:before {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    color: #490e6f;
    font-family: "icon-font";
    font-size: 22px;
    line-height: 1;
}
.main-footer .footer-link-bar h4 {
    font-size: 16px;
    font-weight: 700;
    margin-top: 0;
}
.main-footer .footer-link-bar .footer-links.thinner li a {
    opacity: .8;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.78;
}
.main-footer .call-us {
    position: relative;
    display: block;
    padding: 10px 0 0 0px;
    pointer-events: none;
    color: #490e6f;
    font-family: Rokkitt,sans-serif;
    font-size: 21px;
    line-height: 1;
}
.main-footer .footer-link-bar .links-w-icons li a {
    position: relative;
    color: rgba(51,51,51,0.8);
    font-size: 18px;
    line-height: 1.78;
}
.main-footer .footer-link-bar .links-w-icons li a img{
    width: 20px;
    color: #490e6f;
}
.main-footer .footer-link-bar .log-actions .btn-group {
    margin: 0 -5px;
}
.btn-group, .btn-group-vertical {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}
.main-footer .footer-link-bar .log-actions .btn-group a {
    float: left;
    width: 80px;
    margin: 0 5px;
}
.main-footer .footer-link-bar .log-actions .text {
    position: absolute;
    top: -20px;
    text-align: left;
    color: #490e6f;
    font-size: 38px;
    font-weight: bold;
    line-height: .58;
}
.round-btns.empty, a.round-btns.empty {
    color: #490e6f;
    border: 1px solid #490e6f;
    background-color: #fff;
    line-height: 43px;
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
.main-footer .footer-link-bar .log-actions {
    position: absolute;
    right: 30px;
    bottom: 0;
    padding: 30px 140px 30px 40px;
    border: 2px solid #f9e300;
    border-radius: 6px;
    top:200px;
    height: 45px;
}
a:visited{
    color:#490e6f;
}
.main-footer .bottom-bar {
    margin: 0 -15px;
    padding: 25px 0;
    background-color: #490e6f;
}
.main-footer .bottom-bar .logo,.main-footer .bottom-bar .bar-links {
    float: left;
}
.main-footer .bottom-bar .logo {
    float: left;
    margin: 0;
    padding: 0;
    border: 0;
}
.main-footer .bottom-bar .logo img {
    width: 90px;
    height: 50px;
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    max-width: 100%;
}
.main-footer .bottom-bar .copyright-text {
    float: left;
    padding: 18px 0 0 20px;
    color: rgba(255,255,255,0.5);
    font-size: 14px;
    line-height: 1;
}
.main-footer .bottom-bar .bar-links {
    float: right;
    padding-top: 18px;
}
.main-footer .bottom-bar .bar-links li{
    float: left;
}
.main-footer .bottom-bar .bar-links li:first-child a {
    border-left: none;
}
.main-footer .bottom-bar .bar-links li a {
    display: block;
    padding: 0 10px;
    color: rgba(255,255,255,0.5);
    border-left: 1px solid rgba(255,255,255,0.5);
    font-size: 14px;
    line-height: 1;
}
.main-footer .bottom-bar .bar-links li a:hover {
    color: #fff;
}
.content {
    padding: 25px 0;
    margin-top: 80px;
}
/*///----------tabların içi*/
.products-carousel {
    padding: 25px 0;
}
.items{
    width: 225px;
    float: left;
    padding-left: 30px;
    padding-right: 25px;
}

.carousel {
    position: relative;
}
.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.carousel-inner .active{
    width: 225px;
    height: 415px; 
    float: left;
    padding-left: 25px;
    padding-right: 25px;
}
.g-product-cards {
    position: relative;
    min-height: 415px;
    padding-top: 245px;
    padding-bottom: 10px;
    text-align: center;
}
.g-product-cards .view {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    text-align: center;
}
.g-product-cards .view .add-to-fav {
    position: absolute;
    top: 15px;
    left: 15px;
    display: none;
}
.g-product-cards:hover .view .add-to-fav {
    display: flex;
}
.g-product-cards .view .bg-product-image {
    display: inline-block;
    height: 225px;
}
.g-product-cards .product-text-sticker {
    position: absolute;
    right: 0;
    bottom: -20px;
    left: 0;
    margin: 0 auto;
    color: #e0119d;
    font-size: 14px;
    font-weight: 500;
}
.g-product-cards .view .options {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    display: none;
    width: 100%;
    height: 50px;
    padding-top: 8px;
    background-color: rgba(73,14,111,0.7);
}
.g-product-cards:hover .view .options{
    display: flex;
}
.g-product-cards .view .options .analyze {
    opacity: .7;
}
.g-product-cards .view .options a {
    display: block;
    float: left;
    width: calc(50%);
    height: 30px;
    text-align: center;
    color: #fff;
    border-left: 1px solid rgba(255,255,255,0.2);
    font-size: 14px;
    font-weight: 500;
    line-height: 34px;
}
.g-product-cards .view .options .analyze:before {
    margin-right: 6px;
    content: '\e918';
    font-family: icon;
    font-size: 12px;
}
.g-product-cards .infos {
    position: relative;
}
.g-product-cards .infos .title {
    min-height: 36px;
    margin-bottom: 7px;
    padding: 0 20px;
    color: #333;
    font-size: 14px;
    line-height: 1.29;
}
.g-product-cards .rating {
    margin-bottom: 4px;
    text-align: center;
}
.write-link:before {
    position: absolute;
   
    left: 20px;
    display: block;
    width: 22px;
    height: 14px;
    content: '';
    /*background: url(@/assets/pen.svg) no-repeat 0 0;*/
    background-size: contain;
}
.product-card-price {
    margin-bottom: 5px;
    padding: 11px 0 9px;
    text-align: center;
    position: relative;
    margin: 0 auto;
}
.product-card-price:before {
    top: 0;
}
.product-card-price:after, .product-card-price:before {
    position: absolute;
    left: 0;
    display: block;
    width: 100%;
    height: 1px;
    content: '';
}
.product-card-price .product-price {
    vertical-align: top;
    color: #2b2c3f;
    font-family: Rokkitt;
    font-size: 26px;
    line-height: .1;
}
.gr-price__amount {
    vertical-align: text-top;
    font-weight: 800;
}
.gr-price__fractional {
    vertical-align: text-top;
    font-size: .7em;
}
.gr-price__currency {
    padding-left: .2rem;
    vertical-align: text-top;
    font-size: .7em;
    font-weight: 100;
}
.products-carousel .carousel-inner .items.active::before{
    position: absolute;
    top: 7px;
    width: 2px;
    height: 401px;
    content: '';
    border-radius: 100px;
    margin-left: -25px;
    opacity: .1;
    background-color:#2b2c3f;
}
.products-carousel .carousel-inner .items.active:first-child::before{
    width: 0;
}
.popular-brands {
position: relative;
margin: 0 -9px;
}

.popular-brands li {
    float: left;
    margin: 0 9px 18px;
    width: calc((100% - 108px) / 6);
}

.popular-brands li .show-all {
    display: block;
    height: 60px;
    border-radius: 6px;
    background-color: #ffffff;
    border: solid 1px #490e6f;
    padding: 32px 25px 10px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #490e6f;
}

.popular-brands li .show-all:hover:after {
    transform: translateX(10px);
}

.popular-brands li .show-all:after {
    display: block;
    width: 22px;
    height: 24px;
    content: '';
    /*background: url(@/assets/icons8-right-arrow-50.png) no-repeat 0 0;*/
    background-size: contain;
}

.brand-logo-boxes a {
    width: 180px;
    height: 110px;
    border-radius: 6px;
    background-color: #ffffff;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
    line-height: 110px;
    overflow: hidden;
    display: block;
}

.brand-logo-boxes img {
    max-height: 100%;
    height: 81px;
    width: 130px;
    margin-top: 10px;
}
.theme-gray:before {
    content: '';
    display: block;
    position: absolute;
    width: 100vw;
    background-color: #f7f7f7;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -50vw;
}
.small-spaces {
    padding: 40px 0;
}

.theme-gray {
    background-color: #f7f7f7;
}
.theme-gray h1, .theme-gray h2, .theme-gray h3, .theme-gray h4, .theme-gray h5, .theme-gray h6 {
    position: relative;
}
.high-title {
    margin-bottom: 20px;
    margin-top:20px;
    text-align: center;
    opacity: .15;
    color: #000;
    font-size: 60px;
    font-weight: 300;
    line-height: 1;
}
/*--------bruh--header*/

.brush-headed {
    padding: 25px 0;
}
.brush-headed.type1 h2:before {
    top: 0;
    left: -50px;
    width: 483px;
    height: 76px;
    /*background: url(@/assets/brush1.png) no-repeat 0 0;*/
}
.brush-headed h2:before {
    position: absolute;
    display: block;
    content: '';
}
.brush-headed h2 span {
    position: relative;
    z-index: 1;
}
.category-card {
    position: relative;
    display: block;
    height: 140px;
}

.category-card:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
}
.category-card img {
    height: 100%;
}

.category-card .title {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 140px;
    height: 70px;
    margin: -35px 0 0 -90px;
    text-align: center;
    border-radius: 3px;
    background-color: #fff;
    font-size: 16px;
    font-weight: 500;
    line-height: 70px;
    min-height: 36px;
    padding: 0 20px;
}
.category-card .title:before {
    position: absolute;
    top: 4px;
    left: 4px;
    width: calc(100% - 10px);
    height: calc(100% - 10px);
    content: '';
    transition: 200ms all ease-in-out;
    border: 1px solid #f9e300;
    border-radius: 3px;
}
.category-card.type1:before {
    background-color: rgba(112,69,139,0.97);
}
.category-card.type1 .title {
    color: #490e6f;
}
.category-card.type2:before {
    background-color: rgba(211,0,150,0.75);
}
.category-card.type2 .title {
    color: #e0119d;
}
.öne-çıkan{
    font-weight: 700;
    padding: 0; 
    border: 0; 
    margin-top:20px; 
    margin-bottom: 20px; 
    font-size: xx-large;
}
.category-card .title:hover:before{
    position: absolute;
    top: 0px;
    left: 0px;
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    content: '';
    transition: 200ms all ease-in-out;
    border: 4px solid #f9e300;
    border-radius: 3px;
}

</style>
