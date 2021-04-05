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


## iTerm2 + Zsh + Oh My Zsh 설치

#### iTerm2 설치
아래 링크에 들어가서 다운받고 알집을 풀어서 설치하면 된다.
iTerm2 홈페이지: <https://iterm2.com/>  
iTerm2 기본 설치 화면이다.
<img src='{{"/assets/img/post_image/iterm_install/iterm.png"}}'><br/>


#### Zsh 설치
그런데 터미널의 제목표시줄을 보면 zsh가 기본 쉘로 이미 설정된 것을 볼 수 있다.
확인해보니, MacOS 10.15버전인 카탈리나부터 기본 쉘이 bash에서 zsh로 변경되어서 OS를 설치하면서 기본으로 설치되어 있다.


Zsh를 설치하기 위해서는 MacOS 패키지 관리 프로그램인 Homebrew를 사용해서 설치하면 된다.
Homebrew를 설치하는 방법은 [Homebrew 설치 & 사용하기](https://leesh90.github.io/environment/2021/03/30/homebrew_install/)를 참고하면 된다.

zsh를 설치하고 기본쉘을 zsh로 변경한다.
```zsh
# zsh 설치
$ brew install zsh

#기본 shell 변경
$ chsh -s $(which zsh)
```

현재 내 컴퓨터에 어떤 쉘들이 설치되어 있는지 확인하려면 다음과 같은 명령으로 확인할 수 있다.
```zsh
cat /etc/shells
```

다음과 같은 쉘들이 기본으로 설치된 것을 확인할 수 있다.
<img src='{{"/assets/img/post_image/iterm_install/installed_shell_list.png"}}'><br/>


#### Oh My Zsh 설치
다음으로는 쉘을 사용하는데 도움을 많이 주는 Oh My Zsh을 설치한다.
Oh My Zsh은 타이핑 교정, 명령어 추천, 자동 완성 기능등 여러가지 기능이 있다.
설치는 아래 사이트에서 설치 명령어를 찾아서 하면 된다.

<https://ohmyz.sh/#install>  
<https://github.com/ohmyzsh/ohmyzsh>
```zsh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

설치 후 터미널에 다음과 같은 경고 메시지가 나올수도 있다.
```zsh
Insecure completion-dependent directories detected
~~~
```

위 문제는 에러에서 보여주는 경로의 폴더 권한이 보안상 안전하지 않다라는 경고를 주고있다. group의 권한에 쓰기 권한까지 포함되어있어서 그런데 해당 폴더의 권한을 변경해주면 된다.

```zsh
$ chmod 755 /usr/local/share/zsh
$ chmod 755 /usr/local/share/zsh/site-functions
```

#### 폰트 설치

내가 원하는 폰트를 설치할 수 있다. 개발자에게 가독성이 좋다는 Naver D2coding 폰트로 설정을 한다.
```zsh
$ git clone https://github.com/naver/d2codingfont.git
```
코드를 다운받고 d2codingfont 폴더를 들어가서 최신버전 폰트 압축파일의 압축을 풀고 들어가서 D2CodingAll 폴더에 있는 글꼴을 설치한다. 더블 클릭을 해주면 된다.

그리고 터미널 Preferences로 들어가서 아래처럼 Profiles에 Text로 들어간다. 그리고 Font를 D2coding으로 변경해준다.
<img src='{{"/assets/img/post_image/iterm_install/preference.png"}}'><br/>



#### 폰트 깨짐

<!-- 한글 폰트가 깨지는 경우가 있는데, 폰트 설정할 때 들어갔던 [Preferences] - [Profiles] - [Text]로 들어가서 Unicode normalization form을 NFC로 변경해준다. -->

<!-- 
#### 터미널에서 컴퓨터 이름 제거하기

터미널은 기본적으로 username@computername 이렇게 출력이 된다.
<img src='{{"/assets/img/post_image/iterm_install/command_name.png"}}'>
너무 길어서 비효율적인데 뒤에 computername을 지울려면 다음 코드를 "zshrc" 에 추가를 한다.
 -->
 
<!-- ```zsh
prompt_context() {
  if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
    prompt_segment black default "%(!.%{%F{yellow}%}.)$USER"
  fi
}
```
 -->
