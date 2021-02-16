---
layout: post
title:  "Jupyter Notebook에 가상환경 커널 추가하기"
subtitle: ""
categories: environment
tags: python
comments: true
---



먼저 virtualenv를 사용해서 가상환경을 만들고 활성화 시켜줍니다.
```bash
virtualenv -p python2.7 ~/Desktop/py27
source ~/Desktop/py27/bin/active
pip install notebook ipykernel
```
<br/>
  

그 다음으로 notebook과 ipykernel을 설치합니다.
```bash
pip install notebook ipykernel
```
<br/>

  
Jupyter Notebook에 새로 만든 가상환경을 추가합니다.  
```bash
python -m ipykernel install --user --name [가상환경 이름] --display-name "[Jupyter notebook에 등록되는 이름]"
python -m ipykernel install --user --name py27 --display-name "py27_test"
```
<br/>


완료가 되었으면 Jupyter Notebook을 실행시켜서 살펴보면 다음과 같이 확인 할 수 있습니다.
<img src='{{"/assets/img/post_image/virtualenv-add-jupyter/kernel_add_check.png"}}' width="270" height="300">