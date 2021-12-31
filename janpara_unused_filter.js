// ==UserScript==
// @name じゃんぱら未使用品のみ検索
// @namespace none
// @version 1.0
// @description じゃんぱらで未使用品のみ表示します
// @author ds.man
// @match *://*.janpara.co.jp/sale/search/result/*
// @exclude *://*.janpara.co.jp/sale/search/result/*&CONKBN[]=6
// @grant none
// ==/UserScript==

var current_url = document.location;
var new_url = current_url + "&CONKBN[]=6";
location.replace(new_url);
