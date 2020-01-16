<template>
  <div class="makyaj">
      <div class="sayfa">
            <router-link to="/" class="router-anasayfa">AnaSayfa</router-link><span class="span-makyaj">>Makyaj</span>
            <div>
                <div class="makyaj-sol" style="width:300px">
                    <div>
                        <div><h1 class="guide-title guide-title_category">Makyaj</h1></div>
                        <div class="headed-link-card">
                            <span class="title" data-bind="text: cfg_title">Alt Kategoriler</span>
                            <ul class="content">
                                <li><h2>Tırnak</h2></li>
                                <li><h2>Göz</h2></li>
                                <li><h2>Dudak</h2></li>
                                <li><h2>Yüz</h2></li>
                                <li><h2>Makyaj Paletleri</h2></li>
                                <li><h2>Makyaj Setleri</h2></li>
                                <li><h2>Makyaj Fırça &amp; Aksesuarları</h2></li>
                                <li><h2>Makyaj Temizleme Ürünleri</h2></li>
                            </ul>
                        </div>
                        <div class="occ-facet-display-filter" style="">
                            <div class="list-filter-cards active">
                                <div class="head">
                                    <span class="title" data-bind="text: title">Markalar</span>
                                    <a href="#" class="sort" data-bind="
                                        click: $widget.handleSortDirectionClick.bind($parent),
                                        css: { 'sort_rotated': $widget.sortDirection() === 1 },
                                    ">Sırala</a>
                                    <a v-b-toggle.collapse-3 class="show-toggle" ></a>
                                </div>
                                
                                <b-collapse visible id="collapse-3"  class="mt-2">
                                <div>
                                    <form name="search" class="search-area">
                                        <div class="typeahead__container">
                                            <div class="typeahead__field">

                                                <div class="typeahead__query">
                                                <input v-model="istek" class="search-input" type="search" placeholder="Markalar Ara">
                                            </div>

                                            <div class="typeahead__button">
                                                <b-button v-on:click="ara(istek)" class="typeahead__search-icon default-cursor"></b-button>
                                            </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="content" style="height: 201.5px;">
                                    <div class="form-group">
                                        <div class="post"
                                            v-for="(marka, index) in markalar"
                                            v-bind:item="marka"
                                            v-bind:index="index"
                                            v-bind:key="marka._id"
                                            >
                                            <input type="checkbox" v-on:click="filtrele(index)" style="float:left;">
                                            <label>
                                                <span>{{ marka.marka }}</span>
                                            </label>
                                        </div>
                                    </div>
                                    
                                </div>
                                </b-collapse>
                            </div>
                        </div>
                        <div class="occ-price-slider">
                            <div class="list-filter-cards">
                                <div class="head">
                                    <span class="title">Fiyat Aralığı</span>
                                    <a v-b-toggle.collapse-1 class="show-toggle"></a>
                                </div>
                                <b-collapse id="collapse-1" class="mt-2">
                                    <div class="content">
                                        
                                        <div class="price-gap">
                                            <div class="form-group">
                                                <input type="text" placeholder="En az">
                                            </div>
                                            <div class="form-group">
                                                <input type="text" placeholder="En Çok">
                                            </div>
                                            <a href="#" class="apply"></a>
                                        </div>
                                        <div class="price-range">
                                            <span class="min" data-bind="priceText: range()[0]">2 TL</span>
                                            <span class="max" data-bind="priceText: range()[1]">65 TL</span>
                                            <g-slider class="range-input noUi-target noUi-ltr noUi-horizontal" params="
                                                range: range,
                                                value: selectedRangeUi,
                                            ">
                                                <div></div>
                                                <div class="noUi-base">
                                                    <div class="noUi-connects">
                                                        <div class="noUi-connect" style="transform: translate(0%, 0px) scale(1, 1);"></div>
                                                    </div>
                                                    <div class="noUi-origin" style="transform: translate(-100%, 0px); z-index: 5;">
                                                        <div class="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="0.0" aria-valuetext="2.00"></div>
                                                    </div>
                                                    <div class="noUi-origin" style="transform: translate(0%, 0px); z-index: 4;">
                                                        <div class="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="100.0" aria-valuenow="100.0" aria-valuetext="65.00"></div>
                                                    </div>
                                                </div>
                                            </g-slider>
                                        </div>
                                    </div>        
                                </b-collapse>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div class="makyaj-sağ">  
                <Slider2 style="width:720px; height:400px"/>
                    <div style="margin-right: -65px; margin-top:30px">
                        <ul class="popular-brands">
                            <li class="brand-logo-boxes"><a href="#"><img alt="" src="@/assets/marka_logo_beaulis.png"> </a></li>
                            <li class="brand-logo-boxes"><a href="#"><img alt="" src="@/assets/marka_logo_benri.png"> </a></li>
                            <li class="brand-logo-boxes"><a href="#"><img alt="" src="@/assets/marka_logo_bee_beauty.png"> </a></li>
                            <li class="brand-logo-boxes"><a href="#"><img alt="" src="@/assets/marka_logo_eklips.png" > </a></li>
                            <li class="brand-logo-boxes"><a href="#"><img alt="" src="@/assets/marka_logo_thebalm.png" > </a></li>
                                                
                        </ul>
                    </div> 
                    <div>
                        <h2 class="brush-title type2 high"><span data-bind="text: carouselHeading">Yeni Çıkanlar</span></h2>
                        <div style="width: max-content;">
                            <div class="products-carousel carousel slide" data-interval="false" id="carousel-id-wi300145">
                                <div class="carousel-inner">
                                    <div class="item row">
                                        <g-product-card class="cc-product-item col-lg-4" style="width: 33.33333333%; float: left;">
                                            <div class="g-product-cards" style="width: 225px;">
                                                <div class="view">
                                                    <a class="add-to-fav" href="#"><img style="width: 24px; height: 22px;" src="@/assets/fav-button-off.jpg"></a>
                                                    <a class="search-product-link">
                                                        <img class="bg-product-image" src="@/assets/indir.jpg">
                                                        <img class="product-sticker product-sticker_top-right" alt="sticker" src="@/assets/new_plp.png">
                                                        <div class="product-text-sticker">Sadece Gratis'te</div>
                                                    </a>
                                                    <div class="options hidden-xs">
                                                        <a class="analyze" href="#">İncele</a>
                                                        <a class="add-to-basket" href="#">Sepete Ekle</a>
                                                    </div>
                                                    <div class="tickets-wrapper"></div>
                                                </div>
                                                <div class="infos">
                                                    <a href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119">
                                                        <div><h3 class="title">Beaulis Sparkling Stars Sedefli Dudak Parlatıcısı Moon &amp; Stars 974</h3></div>
                                                    </a>
                                                    <div class="rating">
                                                        <a class="write-link" href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119&amp;tab=comments">İlk Yorumu Sen Yap!</a>
                                                    </div>
                                                    <div class="not-on-sale">
                                                        <div class="product-price">
                                                            <div class="sale-range">
                                                                <div class="product-card-price clearfix">
                                                                    <g-price class="product-price">
                                                                        <span class="gr-price" data-bind="css: $data.extraClasses">
                                                                            <span class="gr-price__amount">20</span><span class="gr-price__fractional">,00 </span>
                                                                            <span class="gr-price__currency">TL</span>
                                                                        </span>
                                                                    </g-price>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="occ-product-gratis-card-new-wrapper">
                                                            <div class="occ-product-gratis-card-new">
                                                                <figure class="kard">
                                                                    <fieldset>Gratis Kart ile</fieldset>
                                                                </figure>
                                                                <div class="discount-amount">
                                                                    <span class="amount">%<span class="high">50</span></span>
                                                                    <span style="font-size: 11px; line-height: 1;">indirim</span>
                                                                </div>
                                                                <g-price class="product-price">
                                                                    <span class="gr-price">
                                                                        <span class="gr-price__amount" >10</span><span class="gr-price__fractional">,00 </span>
                                                                        <span class="gr-price__currency">TL</span>
                                                                    </span>
                                                                </g-price>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </g-product-card>
                                        <g-product-card class="cc-product-item col-lg-4" style="width: 33.33333333%; float: left;">
                                            <div class="g-product-cards" style="width: 225px;">
                                                <div class="view">
                                                    <a class="add-to-fav" href="#"><img style="width: 24px; height: 22px;" src="@/assets/fav-button-off.jpg"></a>
                                                    <a class="search-product-link">
                                                        <img class="bg-product-image" src="@/assets/indir2.jpg">
                                                        <img class="product-sticker product-sticker_top-right" alt="sticker" src="@/assets/new_plp.png">
                                                        <div class="product-text-sticker">Sadece Gratis'te</div>
                                                    </a>
                                                    <div class="options hidden-xs">
                                                        <a class="analyze" href="#">İncele</a>
                                                        <a class="add-to-basket" href="#">Sepete Ekle</a>
                                                    </div>
                                                    <div class="tickets-wrapper"></div>
                                                </div>
                                                <div class="infos">
                                                    <a href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119">
                                                        <div><h3 class="title">Beaulis Sparkling Stars Sedefli Dudak Parlatıcısı Now Age 970</h3></div>
                                                    </a>
                                                    <div class="rating">
                                                        <a class="write-link" href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119&amp;tab=comments">İlk Yorumu Sen Yap!</a>
                                                    </div>
                                                    <div class="not-on-sale">
                                                        <div class="product-price">
                                                            <div class="sale-range">
                                                                <div class="product-card-price clearfix">
                                                                    <g-price class="product-price">
                                                                        <span class="gr-price" data-bind="css: $data.extraClasses">
                                                                            <span class="gr-price__amount">20</span><span class="gr-price__fractional">,00 </span>
                                                                            <span class="gr-price__currency">TL</span>
                                                                        </span>
                                                                    </g-price>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="occ-product-gratis-card-new-wrapper">
                                                            <div class="occ-product-gratis-card-new">
                                                                <figure class="kard">
                                                                    <fieldset>Gratis Kart ile</fieldset>
                                                                </figure>
                                                                <div class="discount-amount">
                                                                    <span class="amount">%<span class="high">50</span></span>
                                                                    <span style="font-size: 11px; line-height: 1;">indirim</span>
                                                                </div>
                                                                <g-price class="product-price">
                                                                    <span class="gr-price">
                                                                        <span class="gr-price__amount" >10</span><span class="gr-price__fractional">,00 </span>
                                                                        <span class="gr-price__currency">TL</span>
                                                                    </span>
                                                                </g-price>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </g-product-card>
                                        <g-product-card class="cc-product-item col-lg-4" style="width: 33.33333333%; float: left;">
                                            <div class="g-product-cards" style="width: 225px;">
                                                <div class="view">
                                                    <a class="add-to-fav" href="#"><img style="width: 24px; height: 22px;" src="@/assets/fav-button-off.jpg"></a>
                                                    <a class="search-product-link">
                                                        <img class="bg-product-image" src="@/assets/indir3.jpg">
                                                        <img class="product-sticker product-sticker_top-right" alt="sticker" src="@/assets/new_plp.png">
                                                        <div class="product-text-sticker">Sadece Gratis'te</div>
                                                    </a>
                                                    <div class="options hidden-xs">
                                                        <a class="analyze" href="#">İncele</a>
                                                        <a class="add-to-basket" href="#">Sepete Ekle</a>
                                                    </div>
                                                    <div class="tickets-wrapper"></div>
                                                </div>
                                                <div class="infos">
                                                    <a href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119">
                                                        <div><h3 class="title">Beaulis Makyaj Paleti Magic 350</h3></div>
                                                    </a>
                                                    <div class="rating">
                                                        <a class="write-link" href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119&amp;tab=comments">İlk Yorumu Sen Yap!</a>
                                                    </div>
                                                    <div class="not-on-sale">
                                                        <div class="product-price">
                                                            <div class="sale-range">
                                                                <div class="product-card-price clearfix">
                                                                    <g-price class="product-price">
                                                                        <span class="gr-price" data-bind="css: $data.extraClasses">
                                                                            <span class="gr-price__amount">35</span><span class="gr-price__fractional">,00 </span>
                                                                            <span class="gr-price__currency">TL</span>
                                                                        </span>
                                                                    </g-price>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div class="occ-product-gratis-card-new-wrapper">
                                                            <div class="occ-product-gratis-card-new">
                                                                <figure class="kard">
                                                                    <fieldset>Gratis Kart ile</fieldset>
                                                                </figure>
                                                                <div class="discount-amount">
                                                                    <span class="amount">%<span class="high">50</span></span>
                                                                    <span style="font-size: 11px; line-height: 1;">indirim</span>
                                                                </div>
                                                                <g-price class="product-price">
                                                                    <span class="gr-price">
                                                                        <span class="gr-price__amount" >17</span><span class="gr-price__fractional">,50 </span>
                                                                        <span class="gr-price__currency">TL</span>
                                                                    </span>
                                                                </g-price>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </g-product-card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 class="brush-title type2 high" style="margin-top: 20px;"><span data-bind="text: carouselHeading">Çok Satanlar</span></h2>
                        <div style="width: max-content;">
                            <div class="products-carousel carousel slide" data-interval="false" id="carousel-id-wi300145">
                                <div class="carousel-inner">
                                    <div class="item row">
                                        <g-product-card class="cc-product-item col-lg-4" style="width: 33.33333333%; float: left;">
                                            <div class="g-product-cards" style="width: 225px;">
                                                <div class="view">
                                                    <a class="add-to-fav" href="#"><img style="width: 24px; height: 22px;" src="@/assets/fav-button-off.jpg"></a>
                                                    <a class="search-product-link">
                                                        <img class="bg-product-image" src="@/assets/indir4.jpg">
                                                        <div class="product-text-sticker">Sadece Gratis'te</div>
                                                    </a>
                                                    <div class="options hidden-xs">
                                                        <a class="analyze">İncele</a>
                                                        <a class="add-to-basket" href="#">Sepete Ekle</a>
                                                    </div>
                                                    <div class="tickets-wrapper"></div>
                                                </div>
                                                <div class="infos">
                                                    <a href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119">
                                                        <div><h3 class="title">Golden Rose Waterproof Eyeliner Göz Kalemi No:01</h3></div>
                                                    </a>
                                                    <div class="rating">
                                                        <a class="write-link" href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119&amp;tab=comments">İlk Yorumu Sen Yap!</a>
                                                    </div>
                                                    <div class="not-on-sale">
                                                        <div class="product-price">
                                                            <div class="sale-range">
                                                                <div class="product-card-price clearfix">
                                                                    <g-price class="product-price">
                                                                        <span class="gr-price" data-bind="css: $data.extraClasses">
                                                                            <span class="gr-price__amount">13</span><span class="gr-price__fractional">,00 </span>
                                                                            <span class="gr-price__currency">TL</span>
                                                                        </span>
                                                                    </g-price>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </g-product-card>
                                        <g-product-card class="cc-product-item col-lg-4" style="width: 33.33333333%; float: left;">
                                            <div class="g-product-cards" style="width: 225px;">
                                                <div class="view">
                                                    <a class="add-to-fav" href="#"><img style="width: 24px; height: 22px;" src="@/assets/fav-button-off.jpg"></a>
                                                    <a class="search-product-link">
                                                        <img class="bg-product-image" src="@/assets/indir5.jpg">
                                                        <div class="product-text-sticker">Sadece Gratis'te</div>
                                                    </a>
                                                    <div class="options hidden-xs">
                                                        <a class="analyze" href="#">İncele</a>
                                                        <a class="add-to-basket" href="#">Sepete Ekle</a>
                                                    </div>
                                                    <div class="tickets-wrapper"></div>
                                                </div>
                                                <div class="infos">
                                                    <a href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119">
                                                        <div><h3 class="title">Golden Rose Mega Volume &amp; Length City Style Maskara</h3></div>
                                                    </a>
                                                    <div class="rating">
                                                        <a class="write-link" href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119&amp;tab=comments">İlk Yorumu Sen Yap!</a>
                                                    </div>
                                                    <div class="not-on-sale">
                                                        <div class="product-price">
                                                            <div class="sale-range">
                                                                <div class="product-card-price clearfix">
                                                                    <g-price class="product-price">
                                                                        <span class="gr-price" data-bind="css: $data.extraClasses">
                                                                            <span class="gr-price__amount">20</span><span class="gr-price__fractional">,00 </span>
                                                                            <span class="gr-price__currency">TL</span>
                                                                        </span>
                                                                    </g-price>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </g-product-card>
                                        <g-product-card class="cc-product-item col-lg-4" style="width: 33.33333333%; float: left;">
                                            <div class="g-product-cards" style="width: 225px;">
                                                <div class="view">
                                                    <a class="add-to-fav" href="#"><img style="width: 24px; height: 22px;" src="@/assets/fav-button-off.jpg"></a>
                                                    <a class="search-product-link">
                                                        <img class="bg-product-image" src="@/assets/indir6.jpg">
                                                        <div class="product-text-sticker">Sadece Gratis'te</div>
                                                    </a>
                                                    <div class="options hidden-xs">
                                                        <a class="analyze" href="#">İncele</a>
                                                        <a class="add-to-basket" href="#">Sepete Ekle</a>
                                                    </div>
                                                    <div class="tickets-wrapper"></div>
                                                </div>
                                                <div class="infos">
                                                    <a href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119">
                                                        <div><h3 class="title">Note Luminous Moisturizing Foundation Fondöten 03 Medium Beige</h3></div>
                                                    </a>
                                                    <div class="rating">
                                                        <a class="write-link" href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119&amp;tab=comments">İlk Yorumu Sen Yap!</a>
                                                    </div>
                                                    <div class="not-on-sale">
                                                        <div class="product-price">
                                                            <div class="sale-range">
                                                                <div class="product-card-price clearfix">
                                                                    <g-price class="product-price">
                                                                        <span class="gr-price" data-bind="css: $data.extraClasses">
                                                                            <span class="gr-price__amount">55</span><span class="gr-price__fractional">,00 </span>
                                                                            <span class="gr-price__currency">TL</span>
                                                                        </span>
                                                                    </g-price>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </g-product-card>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            
      </div>
      <div style="display:flow-root; margin-top:-350px"> 

                 <!---->
                    <b-button @click="getaf">En Düşük Fiyat</b-button>
                    <b-button @click="getcf">En Yüksek Fiyat</b-button>
                    <b-button @click="get">A-Z sırala</b-button>
                    <div class="post"
                        v-for="(post, index) in posts"
                        v-bind:item="post"
                        v-bind:index="index"
                        v-bind:key="post._id"
                    >
                    
                        <g-product-card class="cc-product-item col-lg-4" style="width: 15%; float: left;">
                                <div class="g-product-cards" style="width: 225px;">
                                                <div class="view">
                                                    <a class="add-to-fav" href="#"><img style="width: 24px; height: 22px;" src="@/assets/fav-button-off.jpg"></a>
                                                    <a class="search-product-link">
                                                        <img v-bind:src="post.img" class="bg-product-image" >
                                                        <div class="product-text-sticker">Sadece Gratis'te</div>
                                                    </a>
                                                    <div class="options hidden-xs">
                                                        <a class="analyze" href="#">İncele</a>
                                                        <a v-on:click="ekle(index)" class="add-to-basket">Sepete Ekle</a>
                                                    </div>
                                                    <div class="tickets-wrapper"></div>
                                                </div>
                                                <div class="infos">
                                                    <a href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119">
                                                        <div><h3 class="title">{{ post.ad }}</h3></div>
                                                    </a>
                                                    <div class="rating">
                                                        <a class="write-link" href="/beaulis-sparkling-stars-sedefli-dudak-parlaticisi/urun/Beaulis1041?sku=10189119&amp;tab=comments">İlk Yorumu Sen Yap!</a>
                                                    </div>
                                                    <div class="not-on-sale">
                                                        <div class="product-price">
                                                            <div class="sale-range">
                                                                <div class="product-card-price clearfix">
                                                                    <g-price class="product-price">
                                                                        <span class="gr-price" data-bind="css: $data.extraClasses">
                                                                            <span class="gr-price__amount">{{ post.fiyat }}</span>
                                                                            <span class="gr-price__currency">TL</span>
                                                                        </span>
                                                                    </g-price>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </g-product-card>
                    </div>
                   </div>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import Slider2 from '@/components/Slider2.vue'
import PostServer from '../PostServer'
import SepetServer from '../SepetServer'
import UrunServer from '../UrunServer'

export default {
  name: 'makyaj',
  components: {
    Slider2,
    Footer
  },
  data(){
    return {
      posts:[],
      markalar:[],
      error:'',
      istek:'',
      check:0
    }
  },
  async created(){
    try{
      this.posts=await PostServer.sort();
      this.markalar=this.posts;
    }catch(err){
      this.error=err.message;
    }
  },
  methods:{
      async get(){
        try{
            this.posts=await PostServer.sort();
        }catch(err){
          this.error=err.message;
        }
      },
      async getaf(){
        try{
            this.posts=await PostServer.sortPrice();
        }catch(err){
          this.error=err.message;
        }
      },
      async getcf(){
        try{
            this.posts=await PostServer.sortPriceHigh();
        }catch(err){
          this.error=err.message;
        }
      },
      async ekle(index) {

            try{
                await SepetServer.insertPost(this.posts[index].ad,this.posts[index].fiyat,this.posts[index].img);
                alert("Ürün Sepete Eklendi");
                
            }catch(err){
                this.error = err.message;
            }
        },
        async ara(istek){
            try{
                this.markalar=await UrunServer.getPosts(istek);
            }catch(err){
            this.error=err.message;
            }
        },
        async filtrele(index){
            try{
                this.posts=await UrunServer.getPosts(this.posts[index].marka);
            }catch(err){
            this.error=err.message;
            }
        }

  }
}

</script>
<style scoped>
.sayfa{
   width: 1170px;
   padding-left: 100px;
   padding-right: 100px;
}
.router-anasayfa{
    padding-top: 40px;
    cursor: default;
    color: #a4a4a4;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.25;
    text-decoration: none;
    /*float: left;*/
}
.span-makyaj{
    color: #333;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.25;
}
.router-anasayfa:hover {
    cursor: pointer;
    color: #e0119d;
    font-weight: 600;
}
.makyaj-sol{
    width: 300px;
}
.makyaj-sağ{
    margin-top: -750px;
    margin-left: 375px;
    margin-bottom: 360px;
}
/*Makyaj-Sol css */
ol, ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
}
label {
    font-size: 12px;
    font-weight: 500;
    line-height: 1;
    color: #a4a4a4;
    margin-bottom: 10px;
    display: block;
}
.guide-title_category {
    margin-bottom: 35px;
}
.guide-title {
    display: block;
    opacity: .5;
    color: #000;
    font-size: 40px;
    font-weight: 300;
    line-height: 1;
}
.headed-link-card {
    margin-bottom: 30px;
    padding: 20px 15px 10px;
    border: solid 1px #e3e3e3;
    border-radius: 6px;
    background-color: #fff;
}
.headed-link-card .title {
    display: block;
    margin-top: -34px;
    margin-bottom: 8px;
    color: #490e6f;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
}
.title {
    min-height: 36px;
    padding: 0 20px;
    text-align: center;
    color: #333;
    font-size: 14px;
    font-weight: 500;
}
.headed-link-card ul li h2 {
    font-size: inherit;
    color: #333;
    font-size: 16px;
}
.list-filter-cards {
    overflow: hidden;
    margin-bottom: 30px;
    border: solid 1px #e3e3e3;
    border-radius: 6px;
    background-color: #fff;
}
.list-filter-cards .head {
    position: relative;
    height: 40px;
    padding: 7px 45px 0 15px;
}
.list-filter-cards .head {
    z-index: 2;
}
.list-filter-cards .head .title {
    display: block;
    float: left;
    padding: 0;
    color: #490e6f;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.3;
}
.list-filter-cards .head .sort {
    position: relative;
    float: right;
    margin-top: 6px;
    padding-right: 21px;
    letter-spacing: .3px;
    color: #490e6f;
    font-size: 12px;
    font-weight: 500;
    line-height: normal;
}
.list-filter-cards .head .sort:after {
    position: absolute;
    top: 50%;
    right: 0;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-top: -8px;
    content: '';
    transition: all .3s;
    background: url('../assets/sort.svg') no-repeat;
}
.list-filter-cards .head .show-toggle {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    text-align: center;
    background-color: #f8f8f8;
    line-height: 40px;
}
.list-filter-cards .head .show-toggle:before {

    width: 25px;
    height: 40px;
    padding: 0;
    cursor: pointer;

    display: inline-block;
    content: '';
    transform: rotate(180deg);
    background: url('../assets/icons8-arrow.png') center center no-repeat;
    
}
.list-filter-cards .search-area {
    /*display: none;*/
    margin-bottom: 16px;
    padding: 0 25px 0 13px;
}
.search-area .typeahead__field {
    position: relative;
    color: #490e6f;
}
.typeahead__query {
    position: relative;
}
.typeahead__cancel-button {
    position: absolute;
    right: 45px;
    bottom: 10px;
    display: initial;
    cursor: pointer;
}
.search-area .typeahead__field .search-input {
    border-color: rgba(73,14,111,0.8);
    padding-right: 40px;
    width: 380px;
    max-width: 100%;
}
.search-area .typeahead__field .typeahead__button {
    position: absolute;
    right: 15px;
    top: 11px;
}
.search-area .typeahead__field .typeahead__button .typeahead__search-icon.default-cursor {
    cursor: default;
}
.search-area .typeahead__field .typeahead__button .typeahead__search-icon {
    width: 20px;
    height: 20px;
    display: block;
    padding: 0;
    cursor: pointer;
    background: url('../assets/search.png') 0 0 no-repeat;
}
.list-filter-cards.active .head .show-toggle:before {
    transform: rotate(0);
}
.list-filter-cards.active .content {
    display: block;
}
.list-filter-cards .content {
    position: relative;
    /*display: none;*/
    overflow-y: auto;
    width: 100%;
    max-height: 240px;
    padding: 9px 13px;
    height: 155px;
}
.list-filter-cards .content .checkbox-structure:first-child {
    margin-top: 0;
}
.checkbox-structure input {
    z-index: 1;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    margin: 0;
    opacity: 0;
}
.list-filter-cards .content label {
    color: #000;
    font-size: 14px;
}
.checkbox-structure label {
    position: relative;
    min-height: 25px;
    padding-top: 7px;
    padding-left: 35px;
    margin-top: -31px;
}
.checkbox-structure label:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 25px;
    height: 25px;
    content: '';
    border: solid 1px #490e6f;
    border-radius: 2px;
}
.checkbox-structure input:checked+label:after {
    display: inline-block;
}
.checkbox-structure label:after {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    width: 25px;
    height: 25px;
    content: '\e90d';
    text-align: center;
    color: #490e6f;
    font-family: icon;
    font-size: 16px;
    line-height: 22px;
}
.list-filter-cards .content .checkbox-structure label {
    color: #000;
    font-size: 14px;
}
.list-filter-cards.active .content {
    display: block;
}

.list-filter-cards .content .price-gap {
    position: relative;
    margin-bottom: 60px;
    padding-right: 50px;
}
.list-filter-cards .content .price-gap .form-group {
    float: left;
    width: calc((100% - 10px) / 2);
    margin: 0 2.5px;
}
input[type="text"]:focus, input[type="text"]:active{
    border-color: #490e6f;
}
input[type="text"], input[type="email"], input[type="tel"], input[type="password"], input[type="search"] {
    padding: 0 15px;
    height: 40px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -webkit-box-sizing: border-box;
    -webkit-appearance: none;
    border: 1px solid #a4a4a4;
    font-size: 12px;
    color: #000;
    width: 100%;
}
.list-filter-cards .content .price-gap .apply {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 4px;
    background-color: #490e6f;
    line-height: 40px;
}
.list-filter-cards .content .price-gap .apply:before {
    content: '\e906';
    color: #fff;
    font-family: icon;
    font-size: 12px;
}
.list-filter-cards .content .price-range {
    padding: 0 5px 10px;
}
.list-filter-cards .content .price-range .min {
    float: left;
}

.list-filter-cards .content .price-range .max {
    float: right;
}
.list-filter-cards .content .price-range .max {
    margin-bottom: 17px;
    letter-spacing: -0.3px;
    color: #2b2c3f;
    font-family: Rokkitt;
    font-size: 18px;
    font-weight: 500;
}
.list-filter-cards .content .price-range .range-input {
    float: left;
    width: 100%;
}

.noUi-target {
    height: 4px;
    border: none;
    border-radius: 2px;
    background-color: rgba(0,0,0,0.12);
    box-shadow: inset 0 1px 1px 0 rgba(0,0,0,0.12);
}
.noUi-base, .noUi-connects {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
}
.noUi-connects {
    border-radius: 3px;
}
.noUi-connects {
    overflow: hidden;
    z-index: 0;
}
.noUi-base, .noUi-connects {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
}
.noUi-target .noUi-base .noUi-connects .noUi-connect {
    background-color: #490e6f;
}
html:not([dir=rtl]) .noUi-horizontal .noUi-origin {
    left: auto;
    right: 0;
}
.noUi-horizontal .noUi-origin {
    height: 0;
}
.noUi-connect, .noUi-origin {
    will-change: transform;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    -ms-transform-origin: 0 0;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
}
.noUi-target .noUi-base .noUi-origin .noUi-handle {
    top: -13px;
    width: 28px;
    height: 28px;
    border: solid .5px rgba(0,0,0,0.1);
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 3px 3px 0 rgba(0,0,0,0.05), 0 2px 2px 0 rgba(0,0,0,0.1), 0 3px 1px 0 rgba(0,0,0,0.05);
}
html:not([dir=rtl]) .noUi-horizontal .noUi-handle {
    right: -17px;
    left: auto;
}
.noUi-handle {
    position: absolute;
}
.noUi-horizontal .noUi-origin {
    height: 0;
}
.list-filter-cards .content .price-range .min, #priceSlider_v1-wi300103 .list-filter-cards .content .price-range .max {
    margin-bottom: 17px;
    letter-spacing: -0.3px;
    color: #2b2c3f;
    font-family: Rokkitt;
    font-size: 18px;
    font-weight: 500;
}

/*Makyaj-sağ Css */
a{
    text-decoration: none;
}
ol, ul, li {
    list-style: none;
    
}
.brand-logo-boxes{
    
    float: left;
    min-height: 1px;
    padding-right: 15px;
    /*padding-left: 15px;*/
}
.brand-logo-boxes a {
    width: 109px;
    height: 110px;
    border-radius: 6px;
    background-color: #ffffff;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
    text-align: center;
    line-height: 110px;
    overflow: hidden;
    display: block;
}

.brand-logo-boxes a img {
    max-height: 100%;
    width: 81px;
    height: 74px;
   /* margin-top: 10px;*/
}
.brush-title.high {
    margin-bottom: 30px;
    font-size: 26px;
    margin-top: 160px;
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
    background: url('../assets/brush4.png') no-repeat 0 0;
    background-size: contain;
}
.products-carousel.carousel.slide {
    overflow: hidden;
}
.products-carousel {
    padding: 25px 0;
}
.carousel {
    position: relative;
}
.carousel-inner {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.products-carousel .carousel-inner .row {
    margin: 0;
}
.carousel-inner > .active {
    left: 0;
}
.carousel-inner > .active {
    display: block;
}
.carousel-inner > .item {
    position: relative;
    -webkit-transition: .6s ease-in-out left;
    transition: .6s ease-in-out left;
}
.g-product-cards {
    position: relative;
    min-height: 415px;
    padding-top: 245px;
    padding-bottom: 10px;
    text-align: center;
}
.g-product-cards:before {
    position: absolute;
    top: 20px;
    left: -15px;
    width: 1px;
    height: calc(100% - 40px);
    content: '';
    background-color: #e3e3e3;
}
.cc-product-item:nth-child(1) .g-product-cards:before {
    display: none;
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
    width: 24px;
    height: 22px;
}
.g-product-cards:hover .view .add-to-fav{
    display: flex;
}
.g-product-cards .view .bg-product-image {
    display: inline-block;
    height: 225px;
}

img {
    outline: none;
    border: none;
   /* display: inline;*/
    vertical-align: middle;
    max-width: 100%;
   /* height: auto;*/
}
.g-product-cards .product-sticker_top-right {
    top: 10px;
    right: 10px;
}

.g-product-cards .product-sticker {
    position: absolute;
    max-width: 100px !important;
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
    bottom: 5px;
    left: 0;
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
.g-product-cards .infos {
    position: relative;
}
.g-product-cards .infos .title {
    min-height: 36px;
    margin-bottom: 7px;
    padding: 0 20px;
    color: #333;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.29;
    text-align: center;
}
.g-product-cards .rating {
    margin-bottom: 4px;
}

.rating {
    margin-bottom: 4px;
    text-align: center;
}
.write-link {
    text-align: center;
    letter-spacing: -0.2px;
    color: #490e6f;
    font-size: 12px;
    font-weight: 500;
    line-height: 1.17;
}
.write-link:before {
    position: absolute;
    left: 40px;
    top: 66px;
    display: block;
    width: 22px;
    height: 14px;
    content: '';
    background: url('../assets/pen.svg') no-repeat 0 0;
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
.product-card-price:after, .product-card-price:before {
    display: table;
    content: '';
    background-image: radial-gradient(circle at 50% 0, #e9e9e9, #fff);
}
.product-card-price .product-price {
    vertical-align: top;
    color: #2b2c3f;
    font-family: Rokkitt;
    font-size: 26px;
    line-height: .1;
}
.gr-price {
    position: relative;
    display: inline-flex;
    font-family: Rokkitt;
    line-height: 1;
}
.product-card-price:after {
    bottom: 0;
}
.product-card-price:after, .product-card-price:before {
    position: absolute;
    /* left: 0; */
    display: block;
    width: 100%;
    height: 1px;
    content: '';
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
.occ-product-gratis-card-new-wrapper {
    width: 100%;
    background-color: rgba(248,233,245,0.6);
}
.occ-product-gratis-card-new {
    display: flex;
    padding: 3px;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
}
.occ-product-gratis-card-new .kard {
    display: inline-block;
    margin: 0 3px;
}
.occ-product-gratis-card-new .kard fieldset {
    float: left;
    width: 40px;
    padding-top: 2px;
    padding-left: 5px;
    text-align: right;
    color: #2b2c3f;
    font-size: 10px;
    font-weight: 500;
    line-height: 1.1;
}
.occ-product-gratis-card-new .discount-amount {
    padding: 5px;
    color: #fff;
    border-radius: 2px;
    background-color: #e0119d;
    font-size: 10px;
    line-height: .1;
}
.occ-product-gratis-card-new .amount {
    display: block;
    font-size: 12px;
    font-weight: 300;
    line-height: .92;
}
.occ-product-gratis-card-new .high {
    font-size: 20px;
    font-weight: bold;
    line-height: .65;
}
.occ-product-gratis-card-new .product-price {
    color: #490e6f;
    font-size: 26px;
}

.occ-product-gratis-card-new>* {
    margin: 0 5px;
}
.category-description {
    overflow-y: auto;
    margin-top: 50px;
    padding: 20px;
    border: 1px solid #e3e3e3;
    border-radius: 6px;
}
</style>