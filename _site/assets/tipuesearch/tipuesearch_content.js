var tipuesearch = {"pages": [{
    "title": "selenium을 사용한 데이터 크롤링하기",
    "text": "사전 설치 1. Selenium &amp; BeautifulSoup설치하기 pip install selenium pip install BeautifulSoup4 2. 구글 웹 드라이브 설치 &amp; 다운로드 Selenium을 사용해서 크롤링을 하기 위해서는 웹 드라이브가 필요합니다. 저는 구글 웹 드라이브를 사용해보겠습니다. 구글 웹 드라이브 다운로드 홈페이지 : https://chromedriver.chromium.org/downloads 다운로드 홈페이지에 접속하면 아래와 같이 다운을 받을수가 있다. 아래에서 다운을 받을 때, 주의해야하는 점이 있는데 내가 사용하는 크롬의 버전과 일치를 해야한다. 나의 크롬 정보를 살펴보기 위해서 크롬에서 Settings - About Chrome 으로 들어가 확인을 해본다. 크롬의 버전이 89.0.~ 이므로 89 버전의 웹 드라이버를 다운받는다.",
    "tags": "crawler development",
    "url": "/development/2021/02/25/crawling_selenium/"
  },{
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