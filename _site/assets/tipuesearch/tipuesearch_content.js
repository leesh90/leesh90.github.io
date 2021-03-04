var tipuesearch = {"pages": [{
    "title": "Jupyter Notebook에 가상환경 커널 추가하기",
    "text": "먼저 virtualenv를 사용해서 가상환경을 만들고 활성화 시켜줍니다. virtualenv -p python2.7 ~/Desktop/py27 source ~/Desktop/py27/bin/active pip install notebook ipykernel 그 다음으로 notebook과 ipykernel을 설치합니다. pip install notebook ipykernel Jupyter Notebook에 새로 만든 가상환경을 추가합니다. python -m ipykernel install --user --name [가상환경 이름] --display-name \"[Jupyter notebook에 등록되는 이름]\" python -m ipykernel install --user --name py27 --display-name \"py27_test\" 완료가 되었으면 Jupyter Notebook을 실행시켜서 살펴보면 다음과 같이 확인 할 수 있습니다.",
    "tags": "python environment",
    "url": "/environment/2021/02/16/virtualenv-add-jupyter/"
  },{
    "title": "Using both Python 2.x &amp; 3.x",
    "text": "python2.x 설정 virtualenv -p python2.7 ~/Desktop/py27 source ~/Desktop/py27/bin/active pip install notebook ipykernel ipython kernel install --user python3.x 설정 virtualenv -p python3 ~/Desktop/py3 source ~/Desktop/py3/bin/active pip3 install notebook ipykernel ipython kernel install --user",
    "tags": "python environment",
    "url": "/environment/2021/02/16/python2_3/"
  },{
    "title": "Docker Command",
    "text": "Docker 이미지 가져오기 docker pull [image name]",
    "tags": "docker environment",
    "url": "/environment/2021/02/04/docker-command/"
  }]};