---
layout: post
title: "Openssl & Ruby 설치하기"
subtitle: ""
categories: environment
tags: etc
comments: true
---



#### openssl 설치하기

```zsh
$ brew install openssl
```

설치하면 다음과 같은 경고가 나온다. 맥에서 기본적으로 제공하고 있는 LibreSSL이 기본 ssl로 설정되어 있는데 내가 설치한 openssl로 설정하려면 어떻게 해야 되는지 알려주는 것이다.
```zsh
A CA file has been bootstrapped using certificates from the system
keychain. To add additional certificates, place .pem files in
  /usr/local/etc/openssl@1.1/certs

and run
  /usr/local/opt/openssl@1.1/bin/c_rehash

openssl@1.1 is keg-only, which means it was not symlinked into /usr/local,
because macOS provides LibreSSL.

If you need to have openssl@1.1 first in your PATH, run:
  echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc

For compilers to find openssl@1.1 you may need to set:
  export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
  export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"

```

쉘 설정 파일에다가 PATH 정보를 직접 입력해주거나 아래처럼 명렁어를 실행시켜도 괜찮다.
```zsh
# zsh 
$ echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.zshrc

# bash
$ echo 'export PATH="/usr/local/opt/openssl@1.1/bin:$PATH"' >> ~/.bash_profile or ~/.bashrc

```

그리고 여러 프로그램이나 오픈소스등을 설치할 때 openssl을 필요로 하는 경우가 많은데 내가 현재 설치한 openssl로 설정을 바꿔야 하는데 다음과 같이 한다. LDFLAGS, CPPFLAGS의 Path 설정을 해야 하는데, LDFLAGS는 LD 링커의 플래그, CPPFLAGS는 C 전처리기의 플래그로 주로 Makefile에서 사용된다. 아래 2개도 내가 사용하는 쉘 설정 파일에 등록을 해준다.

```zsh
# ~/.bashrc or ~/.bash_profile or ~/.zshrc
$ export LDFLAGS="-L/usr/local/opt/openssl@1.1/lib"
$ export CPPFLAGS="-I/usr/local/opt/openssl@1.1/include"
```


<br/><br/>
#### Ruby 설치하기

```zsh

# ruby 설치하기
brew install rbenv ruby-build

# ruby path 설정 (~/.zshrc에 등록)
export RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@1.1)"
```

설치가 성공적으로 되었으면 rbenv를 초기화 해줘야한다. 초기화를 위해서 아래 설정을 역시 ~/.zshrc에 등록해준다.
```zsh
$ eval "$(rbenv init -)"
```


제대로 설치가 됐는지 아래 명령어를 실행시켜서 확인해본다. 아래처럼 나오면 성공적으로 설치된 것이다.
```zsh
$ curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash

Checking for `rbenv' in PATH: /usr/local/bin/rbenv
Checking for rbenv shims in PATH: OK
Checking `rbenv install' support: /usr/local/bin/rbenv-install (ruby-build 20210309)
Counting installed Ruby versions: none
  There aren't any Ruby versions installed under `/Users/iseunghun/.rbenv/versions'.
  You can install Ruby versions like so: rbenv install 2.2.4
Checking RubyGems settings: OK
Auditing installed plugins: OK
```

