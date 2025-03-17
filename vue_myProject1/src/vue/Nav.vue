<script setup>
import { ref } from 'vue';
let xclass = ref('x');
let xclassPath = ref('');
let controlXClass = function(){
    if (xclass.value === "x") {
        xclass.value = "";
        xclassPath.value = "x";
    }
    else {
        xclass.value = "x";
        xclassPath.value = "";
    }
}
</script>

<template>
    <input type="checkbox" name="" id="menu_control">
    <div class="header" id="top">
        <h1 class="logo">
            <a href="#top">
                <img src="./../pic/god.png" style="width: 60px; height: 40px;">
            </a>
        </h1>
        <label @click="controlXClass" for="menu_control" class="menu_btn">
            <span>選單</span>
        </label>
        <nav :class="xclass">
            <a href="#about" class="list-close" @click="controlXClass">關於我們</a>
            <a href="#news" class="list-close" @click="controlXClass">最新消息</a>
            <a href="#product_list" class="list-close" @click="controlXClass">物品清單</a>
            <a href="#" class="list-close" @click="controlXClass">服務</a>
            <a href="#" class="list-close" @click="controlXClass">聯絡我們</a>
            <a href="#" class="list-close" @click="controlXClass">網站地圖</a>
        </nav>
    </div>

    <div class="banner">
        <img src="https://picsum.photos/1400/500/?random=1">
    </div>

    <ul class="path" :class="xclassPath">
        <li><a href="#top">首頁</a></li>
        <li><a href="#news">最新消息</a></li>
        <li><a href="#product_list">物品清單</a></li>
    </ul>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
/* class用. id用# */
#menu_control{
    position: absolute;
    z-index: -2;
    opacity: 0;
}
.header{
    height: 50px;
    background-color: #ccc;
    position: relative;
}
.logo{
    width: 60px;
    height: 40px;
    margin-left: 10px;
}
.logo img{
    vertical-align: middle;
    margin-top: 5px;
}
.menu_btn{
    width: 40px;
    height: 40px;
    background-color: #000;
    display: block;
    position: absolute;
    top: 5px;
    right: 5px;
}
.menu_btn span{
    opacity: 0;
    width: 1px;
    height: 1px;
    display: block;
    overflow: hidden;
}
.menu_btn::before{
    content: '';
    position: absolute;
    height: 2px;
    left: 2px;
    width: 36px;
    background-color: #aaa;
    top: 0;
    bottom: 0;
    margin: auto;
    box-shadow: 0px 8px 0px #aaa,
                0px -8px 0px #aaa;
}
nav{
    width: 80%;
    height: calc(100vh - 50px); /* vh:viewport height視窗高 */
    background-color: #282923;
    position: absolute;
    top: 50px;
    left: 0;
    transition: .5s;
}
nav a{
    display: block;
    text-decoration: none;
    color: #ffa;
    padding: 10px 20px;
    border-bottom: 1px solid #ffa;
}
nav a:hover{
    background-color: #fff;
    color: #000;
    border-bottom: 1px solid #282923;
}

nav.x{
    display: none;
}

.banner img{
    width: 100%;
}

.path{
    display: flex;
}
.path li{
    position: relative; /* 讓下面的絕對定位找到他 */
    padding: 6px 8px;
}
.path li a{
    color: #aaa;
    text-decoration: none;
    font-size: 15px;
}
.path li + li::before{
    content: '/';
    color: #aaa;
    position: absolute; /* 將/固定在字的左邊 */
    left: 0;
}
.path.x{
    visibility: hidden;
}


/* 當menu_control被checked ~指向.header裡的nav做動作 */
/* #menu_control:checked ~ .header nav{
    left: 0;
} */

/* 以上為手機或是通用內容 以下為平板、電腦等 */

@media screen and (min-width: 768px) {
    .menu_btn{
        display: none;
    }
    .header{
        display: flex;
        justify-content: space-between;
        background-color: #282923;
        align-items: center;
    }
    .logo a{
        display: block;
        height: 40px;
    }
    .logo img{
        display: block;
        margin-top: 0;
    }
    nav{
        position: relative;
        left: 0;
        display: flex;
        width: auto;
        height: auto;
        top: 0; /* 手機設定top:50px 這裡要調回來 */
        background-color: transparent;
    }
    nav a{
        border-bottom: none;
    }
    nav a:hover{
        border-bottom: none;
    }
    nav.x{
        display: flex;
    }
    .path.x{
        visibility: visible;
    }
}

</style>