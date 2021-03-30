var tipuesearch = {"pages": [{
    "title": "NAVER API를 사용해서 크롤링하기",
    "text": "1. 네이버 개발자 API 가입 &amp; 이용 신청 네이버 API를 사용하기 위해서는 우선 네이버 개발자 센터에 가입하고 오픈 API 이용 신청을 해야 한다. 아래 링크에 들어가서 신청을 한다. 네이버 개발자 센터 : https://developers.naver.com/main/ 개발자 센터 메인 페이지에서 [Application] - [애플리케이션 등록]을 누르고 약관 동의, 계정 정보 등록을 하면 아래와 같이 애플리케이션 등록을 할 수 있다. 애플리케이션 이름은 적당히 내가 원하는 이름을 적고, 사용 API에는 여러 가지가 있지만 나는 검색 API를 사용할 예정이므로 검색을 선택한다. 비 로그인 오픈 API 서비스 환경에는 Android, IOS, WEB 설정 이렇게 3가지가 있는데, 나는 로컬 컴퓨터 WEB 환경에서 사용하므로 WEB만 선택하고 URL은 http://localhost를 입력하고 등록한다. 등록에 완료하면 위와 같이 내가 등록한 애플리케이션에 대한 정보를 볼 수 있다. Client ID와 Client Secret은 네이버 API를 사용할 때 코드에 입력해야 하므로 따로 기록해 놓는다. 일반적인 사용자들은 하단에 보이는 것처럼 하루 API 사용량이 25,000번으로 제한되어 있다. 일일 사용량을 초과해서 사용하려면 왼쪽에 API 제휴 신청을 하면 된다. 2. 검색 API Documents 네이버 개발자 메인 페이지 상단에서 [Documents] - [서비스 API] - [검색]을 선택하면 검색 API에 대한 Documents를 아래와 같이 확인할 수 있다. 페이지를 내려서 확인해보면 Python 코드도 확인할 수 있다. 나는 Python을 사용해서 크롤링을 하므로 이 코드를 가지고 수정해서 사용하면 된다. 3.",
    "tags": "crawling development",
    "url": "/development/2021/03/29/crawling_naver_api/"
  },{
    "title": "selenium을 사용한 데이터 크롤링하기",
    "text": "사전 설치 1. Selenium &amp; BeautifulSoup설치하기 pip install selenium pip install BeautifulSoup4 2. 구글 웹 드라이브 설치 &amp; 다운로드 Selenium을 사용해서 크롤링을 하기 위해서는 웹 드라이브가 필요하다. 나는 구글 웹 드라이브를 사용해본다. 구글 웹 드라이브 다운로드 홈페이지 : https://chromedriver.chromium.org/downloads 다운로드 홈페이지에 접속하면 아래와 같이 다운을 받을수가 있다. 아래에서 다운을 받을 때, 주의 해야 할 부분이 있는데 내가 사용하는 크롬의 버전과 일치를 해야한다. 나의 크롬 정보를 살펴보기 위해서 크롬에서 Settings - About Chrome 으로 들어가 확인을 해본다. 크롬의 버전이 89.0.~ 이므로 89 버전의 웹 드라이버를 다운받는다.",
    "tags": "crawling development",
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