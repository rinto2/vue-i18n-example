<template>
    <div id="app">
        <div class="language-list">
            <h4>{{$t('language')}}:</h4>
            <ul class="lang-list">
                <li v-for="lang in langList" :key="lang.type" :class="{'active': $i18n.locale === lang.locale}" @click="toogledLang(lang)">
                    <span>{{lang.type}}</span>
                </li>
            </ul>
        </div>
        <div class="example-wrap">
            <span>{{$t('content.home')}}</span>
            <span>{{$t('content.setting')}}</span>
            <span>{{$t('content.helper')}}</span>
        </div>
    </div>
</template>

<script>
import * as lang from './language'
export default {
    name: 'App',
    data() {
        return {
            langList: lang.default
        }
    },
    methods: {
        // 切换语言、
        toogledLang(data) {
            if (this.$i18n.locale == data.locale) return
            this.$i18n.locale = data.locale
        }
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    border: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 500px;
    margin: 60px auto 0;
}
li {
    list-style: none;
}
.language-list {
    display: flex;
    flex-wrap: wrap;
    line-height: 40px;
}
.language-list > h4 {
    width: 100px;
    text-align: center;
}
.lang-list {
    display: flex;
}
.lang-list > li {
    padding: 0 10px;
    cursor: pointer;
}
.lang-list > li.active {
    background-color: #3b85f5;
    color: #fff;
}
.lang-list > li:not(.active):hover {
    background-color: #40a9ff;
    color: #fff;
}
.example-wrap {
    margin: 20px 0;
}
.example-wrap > span {
    margin: 0 15px;
}
</style>
