---
layout: post
title: "[MacOS] Python 설치 및 버전관리"
subtitle: ""
categories: environment
tags: etc
comments: true
---


MacOS에는 기본적으로 python이 설치가 되어있다. 아래 명렁어를 입력해보면 다음과 같이 현재 설치되어있는 Python이 나온다.

```zsh
$ ls -l /usr/bin/python*
```

<img src='{{"/assets/img/post_image/python_install/installed_python_list.png"}}'>

내 경험상 MacOS에 기본적으로 설치된 Python은 Mac에 기본으로 설치된 다른 프로그램들과 많은 연동이 되어있다. 처음에 나는 기본 Python을 사용해서 패키지도 설치하고 업그레이드도 하고 하다 보니 어느 날 갑자기 기본 프로그램들 몇 개가 에러가 나고 실행이 제대로 안 됐다. 그래서 방법을 찾아보니, 추천하는 방법은 기본으로 설치된 Python은 사용하지 않고 새로 다운받고 설치하는 Python으로 사용하는 것이다. 또한, github의 여러 오픈 소스나 프로그램들을 사용하다 보니 각자가 필요로 하는 Python 패키지가 너무나도 많이 달랐다. 코드를 사용할 때마다 패키지의 버전을 변경하고 관리하는 방법은 매우 비효율적이므로 해결책이 필요한데 그 방법이 바로 Python 가상환경 virtualenv를 사용하면 된다.  

그러면 Python을 설치하고 Python의 버전 관리도 하고, virtualenv를 사용해서 코드마다 필요로 하는 개별적인 Python 실행 환경을 구축하는 방법을 알아본다.
python 버전 관리를 편리하게 해주는 pyenv와, pyenv-virtualenv를 아래와 같이 설치한다.


##### pyenv, pyenv-virtualenv 설치하기
```zsh
$ brew install pyenv pyenv-virtualenv
```

##### 환경변수 설정
설치후에 아래 내용을 쉘 설정 파일에 입력한다.
```zsh
# ~/.zshrc
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init -)"
eval "$(pyenv virtualenv-init -)"
```


#### pyenv 사용하기
pyenv를 사용해서 내가 원하는 버전의 Python을 다음과 같이 설치하고 관리할 수 있다.
```zsh
# 설치 가능한 Python 버전
$ pyenv install --list

# 특정한 버전 Python 설치
$ pyenv install 3.9.0

# 특정한 버전 Python 삭제
$ pyenv uninstall 3.9.0

# 설치된 Python list
$ pyenv versions

# 해당 Python 버전을 기본으로 설정
$ pyenv global 3.9.0
```

#### pyenv-virtualenv 사용하기
pyenv로 Python을 성공적으로 설치했으면 다음으로는 가상환경을 설정해본다.

```zsh
#가상환경 만들기
# pyenv virtualenv [version] [name]
$ pyenv virtualenv 3.9.0 py39
```

만든 가상환경으로 Python을 시작한다.
```zsh
# 가상환경 시작하기
$ pyenv activate py39

# 가상환경 종료하기
$ pyenv deactivate

# 가상환경 목룍보기
$ pyenv virtualenvs
```

