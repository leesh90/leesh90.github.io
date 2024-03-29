---
layout: post
title: "NAVER API를 사용해서 크롤링하기 - 1"
subtitle: ""
categories: development
tags: crawling
comments: true
---


## 1. 네이버 개발자 API 가입 & 이용 신청

네이버 API를 사용하기 위해서는 우선 네이버 개발자 센터에 가입하고 오픈 API 이용 신청을 해야 한다.
아래 링크에 들어가서 신청을 한다.  

네이버 개발자 센터 : <https://developers.naver.com/main/>
<img src='{{"/assets/img/post_image/crwaling_naver_api/developers_naver_main.png"}}' >
개발자 센터 메인 페이지에서 [Application] - [애플리케이션 등록]을 누르고 약관 동의, 계정 정보 등록을 하면 아래와 같이 애플리케이션 등록을 할 수 있다.  

<br/><br/>
<img src='{{"/assets/img/post_image/crwaling_naver_api/Application_registration.png"}}' >

애플리케이션 이름은 적당히 내가 원하는 이름을 적고, 사용 API에는 여러 가지가 있지만 나는 검색 API를 사용할 예정이므로 검색을 선택한다. 비 로그인 오픈 API 서비스 환경에는 Android, IOS, WEB 설정 이렇게 3가지가 있는데, 나는 로컬 컴퓨터 WEB 환경에서 사용하므로 WEB만 선택하고 URL은 http://localhost를 입력하고 등록한다.  

<br/><br/>
<img src='{{"/assets/img/post_image/crwaling_naver_api/Application_information.png"}}' >
등록에 완료하면 위와 같이 내가 등록한 애플리케이션에 대한 정보를 볼 수 있다. Client ID와 Client Secret은 네이버 API를 사용할 때 코드에 입력해야 하므로 따로 기록해 놓는다.
일반적인 사용자들은 하단에 보이는 것처럼 하루 API 사용량이 25,000번으로 제한되어 있다. 일일 사용량을 초과해서 사용하려면 왼쪽에 API 제휴 신청을 하면 된다.

<br/><br/>
## 2. 검색 API Documents

네이버 개발자 메인 페이지 상단에서 [Documents] - [서비스 API] - [검색]을 선택하면 검색 API에 대한 Documents를 아래와 같이 확인할 수 있다.
<img src='{{"/assets/img/post_image/crwaling_naver_api/search_api_documents.png"}}' >  

페이지를 내려서 확인해보면 Python 코드를 확인할 수 있다. 

#### 블로그 검색 API Python 코드 예제
```python
# 네이버 검색 API예제는 블로그를 비롯 전문자료까지 호출방법이 동일하므로 blog검색만 대표로 예제를 올렸습니다.
# 네이버 검색 Open API 예제 - 블로그 검색
import os
import sys
import urllib.request
client_id = "YOUR_CLIENT_ID"
client_secret = "YOUR_CLIENT_SECRET"
encText = urllib.parse.quote("검색할 단어")
url = "https://openapi.naver.com/v1/search/blog?query=" + encText # json 결과
# url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # xml 결과
request = urllib.request.Request(url)
request.add_header("X-Naver-Client-Id",client_id)
request.add_header("X-Naver-Client-Secret",client_secret)
response = urllib.request.urlopen(request)
rescode = response.getcode()
if(rescode==200):
    response_body = response.read()
    print(response_body.decode('utf-8'))
else:
    print("Error Code:" + rescode)
```


다음 포스팅에서는 아래의 Python 코드를 사용해서 데이터를 실제로 크롤링을 해보자.  
[NAVER API를 사용해서 크롤링하기 - 2](https://leesh90.github.io/development/2021/03/31/crawling_naver_api-2/)

<!-- 
<img src='{{"/assets/img/post_image/virtualenv-add-jupyter/kernel_add_check.png"}}' width="270" height="300"> -->