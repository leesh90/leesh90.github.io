---
layout: post
title:  "selenium을 사용한 데이터 크롤링하기"
subtitle: ""
categories: development
tags: crawler
comments: true
---


## 사전 설치


##### 1. Selenium & BeautifulSoup설치하기
```bash
pip install selenium
pip install BeautifulSoup4
```

##### 2. 구글 웹 드라이브 설치 & 다운로드

Selenium을 사용해서 크롤링을 하기 위해서는 웹 드라이브가 필요하다.
나는 구글 웹 드라이브를 사용해본다.

구글 웹 드라이브 다운로드 홈페이지 : <https://chromedriver.chromium.org/downloads>

다운로드 홈페이지에 접속하면 아래와 같이 다운을 받을수가 있다.
아래에서 다운을 받을 때, 주의 해야 할 부분이 있는데 내가 사용하는 크롬의 버전과 일치를 해야한다.
<img src='{{"/assets/img/post_image/crawling_selenium/chrome_donwload_homepage.png"}}'>

나의 크롬 정보를 살펴보기 위해서 크롬에서 Settings - About Chrome 으로 들어가 확인을 해본다.
<img src='{{"/assets/img/post_image/crawling_selenium/about_chrome.png"}}'>
크롬의 버전이 89.0.~ 이므로 89 버전의 웹 드라이버를 다운받는다.


<!-- 
<img src='{{"/assets/img/post_image/virtualenv-add-jupyter/kernel_add_check.png"}}' width="270" height="300"> -->