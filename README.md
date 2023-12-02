## 설치항목!!!!!!!!

- [x] styled-components
- [x] react-router-dom
- [x] styled-reset
- [x] 폼 관련
- [] 타이틑 관련
- [x] 폰트어썸
- [x] swiper

## todo

### 11월 27일

- [x] 디자인 기획 컨펌 및 수정
- [x] 리액트 초기셋팅
- [x] router 설정

### 11월 28일

- [x] 각 컴포넌트 제작
- [x] header, footer 컴포 제작
- [x] api 설정
- [x] Home ui 및 api 작업 - 메인베너

### 11월 29일

- [x] 서브 메뉴 UI 및 api 작업
- [x] Home ui 및 api 작업 - swiper 작업
- [x] Home ui 및 api 작업 - 섹션 UI 및 api
- [x] View more UI 및 api 작업

### 11월 30일

- [x] Detail ui 및 api 작업 (반응형 해야함)
- [x] Genre UI 및 api 작업 (시간 여유 있으면 인기순, 개봉순 등등 작업)
- [x] loading UI

### 12월 1일

- [x] Search ui 및 api 작업 (트렌딩 컴포, 반응형 해야함)
- [x] Genre Ui 및 api 작업
- [x] Detail 데이터 null 값 수정

### 12월 2일

- [] Login UI 작업
- [] SignUp UI 작업
- [] 404 페이지 UI 구성
- [] 전체 페이지 helmet 구성

### 12월 3일

- [] 모바일 헤더 메뉴 작업
- [] header 스크롤 이벤트
- [] scrollTo 이벤트 설정
- [] 컨텐츠 호버 시 이벤트

### 12월 4일

- 마무리 컨펌 및 수정
- 배포 테스트 1차

### 12월 5일

- 배포 테스트 2차
- 작업 마무리

## new

- 다른 컴퓨터에 다른 사용자 인증된 상태일 때 사용자 인증 삭제 후 재인증 해야함 (git 사용자 인증 삭제 검색 참고)
- swiper css 작업(navigation이나 pagination) 시 !important를 입력하여 수정 가능
- SectionBanner map 함수 오류 : Home에서 데이터를 받아오지 않았는데 실행될려했기 때문 >> &&를 앞에 작성하여 데이터가 받아왔을 때 실행되게 작업
- 컴포넌트 > 컴포넌트 데이터를 Link로 받아오기 : state, useLocation 사용

## problem

- 다른 곳을 누르면 서브메뉴가 안보이게 이벤트 => 서브메뉴를 감싸는 화면 전체 컴포넌트 만든 후 감싸기
- viewmore 오류 => useEffect 안에 location 호출 안함 (location 데이터가 호출되어야 랜더링할 수 있게), state.data 뒤에 dataName을 붙여서 접근하기 쉽게 수정
- detail 콘솔 오류 => 여러 데이터 처리 과정 중 (특히 국가, 출연진) 데이터를 다 받아오지 못한채 map을 처리할려해서 오류가 뜸. 이때 조건부랜더링 처리한다. ex) country[1]?.iso_3166_1
- detail 페이지 아래 영화 섹션 값이 있을때만 나오게 ?? => 배열 length 아용
- detail 페이지 국가, 출연 데이터 값 로딩 따로 걸림 => api 사이트자체 문제ㅜㅜ
- genre 페이지 데이터 값 호출안됨 => api 입력 시 fetch에 중괄호 침....바보 (search할때도 동일하게 작성해서 안되는걸 깨달음 정신체리)
