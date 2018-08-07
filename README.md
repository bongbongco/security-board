# security-board
로그 통합 시스템 구축을 위한 ELK 연결 페이지

## 개발 방식
모든 컨포넌트들은 container – presenter 패턴으로 작성
- container : state 변경, 리덕스 액션 호출, 액션 디스패치 등 기능과 관련된 파일
- presenter : props(전달 받았다면)를 사용한 출력에 관한 파일
- index : redux store와 컴포넌트를 연결

## 주요 컴포넌트
- src/components/App: 컴포넌트 간 라우팅
- src/components/Navigation: 탭 메뉴
- src/components/Dashboard: Dashboard 페이지
- src/components/Alv3: Malware 페이지
- src/components/Fenx: Botnet 페이지
- src/components/Feex: Email 페이지
- src/components/Footer: copyright

## scss 주요 요소
### 1. _mixins.scss
- navigationTab(): 탭 메뉴 디자인 요소(애니메이션 효과 포함)
- dashboardFrame(): Kibana dashboard div 디자인 요소
- dashboardFrameWrapper(): Kibana dashboard div를 감싸는 div 디자인 요소

### 2. _colors.scss
- bg-color: 배경 색상
- content-color: 내용 색상
- alv3-tab-color: Malware 탭 색상
- fenx-tab-color: Botnet 탭 색상
- feex-tab-color: Email 탭 색상
- dashboard-tab-color: Dashboard 탭 색상
- kibana-bg-color: Kibana 요소 배경 색상
- kibana-content-color: Kibana 요소 내용 색상

### 3. _sizes.scss
- max-page-width: 최대 페이지 너비
- small-font-size: 작은 폰트 크기 
- normal-font-size: 보통 폰트 크기
- big-font-size: 큰 폰트 크기
- kibana-visualize-height: Kibana dashboard 높이  
