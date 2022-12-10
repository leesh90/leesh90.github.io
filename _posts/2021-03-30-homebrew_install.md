---
layout: post
title: "Homebrew 설치 & 사용하기"
subtitle: ""
categories: environment
tags: etc
comments: true
---

## Homebrew 설치하기

MacOS를 설치하고 가장 먼저 해야될 일중에 하나가 MacOS 패키지 관리 프로그램인 Homebrew를 설정하는 것이다.
리눅스에서는 yum, apt와 같은 역할을 한다고 볼수있다. 설치하는 방법은 아래 링크로 들어가서 확인하거나 아래 명령어를 실행하면 된다.

Homebrew 홈페이지: <https://brew.sh/index_ko>

```zsh
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**참고로 curl과 ssl을 사용하기 전에는 kaspersky같은 보안 프로그램이나 vpn을 켜놓았으면 꼭 끄고 위 명령어를 실행하세요.**

<!--
<img src='{{"/assets/img/post_image/virtualenv-add-jupyter/kernel_add_check.png"}}' width="270" height="300"> -->

## Homebrew 사용하기

##### Brew 패키지 업데이트

```zsh
$ brew update
```

##### 패키지 설치

```zsh
$ brew install <Package name>
```

##### 패키지 삭제

```zsh
$ brew remove <Package name>
```

##### 패키지 업그레이드

```zsh
$ brew upgrade <Package name>
```

##### 설치 된 패키지 목록

```zsh
$ brew list
```

<To be Continued...>
