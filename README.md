- 입사 과제

1. 과제 목표
아래 제공된 가상의 '무인택배함 JSON 데이터'를 활용하여, '보관함 실시간 상태 모니터링 대시보드'를 React 또는 Next.js 기반(TypeScript 권장)으로 구현해 주세요.

2. 가상 API 데이터 (Mock JSON)
과제 수행 시 아래의 JSON 데이터를 로컬 파일(data.json) 또는 코드 내 상수로 선언하여 fetch 해오는 구조로 사용해 주세요.

3. 세부 구현 요구사항
물리적 레이아웃 렌더링 (핵심): 단순한 표(Grid)가 아닌, JSON 내 shape 객체의 left, top, width, height 값을 CSS 절대/상대 좌표로 매핑하여 실제 기기의 배열과 동일하게 화면에 그려주세요. (단위는 px 기준)
해상도 컨테이너 제한: 실제 기기 화면을 가정하여, 보관함 UI가 그려지는 최상위 부모 컨테이너의 크기를 width: 1024px, height: 768px로 고정하고 그 안에서 좌표가 동작하도록 구현해 주세요.
상태별 색상 표기: - 고장 (box_broken_status: 1): 빨강 등 위험 색상
비어있음 (box_broken_status: 0, box_status: 0): 초록 등 대기 색상
사용중 (box_broken_status: 0, box_status: 1 또는 4 등): 파랑 등 사용 색상
상호작용 및 포맷팅: 보관함을 클릭하면 모달(Modal)이나 툴팁으로 상세 정보(courier_mobile_num, onetime_password)를 띄워주세요. 또한 box_starting_date(Unix Timestamp)는 사람이 읽을 수 있는 날짜 포맷(YYYY-MM-DD HH:mm)으로 변환해 표기해 주세요.
상태 필터링: 화면 상단에 [전체 / 비어있음 / 사용중 / 고장] 버튼을 만들고, 클릭 시 해당하는 보관함만 화면에 렌더링되도록 구현해 주세요.


React + TypeScript + Vite 기반으로 구현된 보관함 상태 모니터링 웹 앱. JSON 데이터 기반 레이아웃 렌더링, 상태별 색상, 모달 상세, 필터 기능 포함.

## 실행 방법
1. 저장소 클론: `git clone https://github.com/mohora11/locker-dashboard-ts.git`
2. 의존성 설치: `npm install`
3. 개발 서버 실행: `npm run dev`
4. 브라우저에서 http://localhost:5173/ 접속

## 상태(State) 관리 방법론
- useState Hook으로 필터 상태('all', 'empty', 'inuse', 'broken') 관리.
- 글로벌 상태 불필요해 Context나 Reducer 미사용 – 간단한 로컬 상태로 충분.
- 모달 열림/닫힘은 각 LockerBox 컴포넌트 내 useState로 독립 관리.

## AI 도구 활용
- Grok AI를 통해 컴포넌트 구조 설계, useState 아이디어, Unix timestamp 변환 로직( new Date(timestamp * 1000).toLocaleString('ko-KR') )을 도움받음.
- 프롬프트 예: React에서 Unix timestamp를 한국 시간 포맷으로 변환하는 방법, absolute positioning으로 JSON shape 렌더링 예시,
             박스 클릭시 중복 박스 상세정보 모달 문제 해결
- 모든 코드는 직접 이해하고 수정/적용함.