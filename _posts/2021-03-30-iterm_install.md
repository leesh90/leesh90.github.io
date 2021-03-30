---
layout: post
title: "iTerm2 + Zsh + Oh My Zsh 설치 & 설정하기"
subtitle: ""
categories: environment
tags: etc
comments: true
---


맥을 설치하면 기본으로 Terminal이 설치되어있지만 사용하기에 불편하고 멋있어(?) 보이지 않아서 다른 터미널을 설치해서 사용하려고 한다.
맥에서 가장 많이 추천되고 오랫동안 내가 사용해온 iTerm2 + zsh 를 설치하고 설정하는 방법을 알아보자.
iTerm2를 사용하면서 가장 유용했던 기능은 화면 분할 기능이다. 데이터 크롤링을 하는데 10대 이상의 컴퓨터를 동시에 접속해서 관리 하는데 기본 터미널로만은 너무 힘들어서 화면 분할도 되고 다른 많은 기능도 있는 iTerm2를 찾게 됐다. 설치를 하고 설정을 해보자.


### iTerm2 + Zsh + Oh My Zsh 설치

##### 1. iTerm2 설치
아래 링크에 들어가서 다운받고 알집을 풀어서 설치하면 된다.
iTerm2 홈페이지: <https://iterm2.com/>  
iTerm2 기본 설치 화면이다.
<img src='{{"/assets/img/post_image/iterm_install/iterm.png"}}'><br/>


##### 2. Zsh 설치
그런데 터미널의 제목표시줄을 보면 zsh가 기본 쉘로 이미 설정된 것을 볼 수 있다.
확인해보니, MacOS 10.15버전인 카탈리나부터 기본 쉘이 bash에서 zsh로 변경되어서 OS를 설치하면서 기본으로 설치되어 있다.

현재 내 컴퓨터에 어떤 쉘들이 설치되어 있는지 확인하려면 다음과 같은 명령으로 확인할 수 있다.
```zsh
cat /etc/shells
```

Zsh를 설치하기 위해서는 MacOS 패키지 관리 프로그램인 Homebrew를 사용해서 설치하면 된다.
Homebrew를 설치하는 방법은 [Homebrew 설치 & 사용하기](https://leesh90.github.io/environment/2021/03/30/homebrew_install/)를 참고하면 된다.

	
다음과 같은 쉘들이 기본으로 설치된 것을 확인할 수 있다.
<img src='{{"/assets/img/post_image/iterm_install/installed_shell_list.png"}}'><br/>


만약, 기본 쉘을 zsh에서 bash로 변경하고 싶으면 다음 명령어를 사용하면 된다.
```zsh
chsh -s /bin/bash
```


다음으로는 쉘을 사용하는데 도움을 많이 주는 Oh My Zsh을 설치한다.
Oh My Zsh은 타이핑 교정, 명령어 추천, 자동 완성 기능등 여러가지 기능이 있다.
설치는 아래 사이트에서 설치 명령어를 찾아서 하면 된다.


<https://ohmyz.sh/#install>  
<https://github.com/ohmyzsh/ohmyzsh>
```zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```


<!-- 
<img src='{{"/assets/img/post_image/virtualenv-add-jupyter/kernel_add_check.png"}}' width="270" height="300"> -->