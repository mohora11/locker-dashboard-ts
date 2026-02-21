React + TypeScript + Vite 기반으로 구현된 보관함 상태 모니터링 웹 앱. JSON 데이터 기반 레이아웃 렌더링, 상태별 색상, 모달 상세, 필터 기능 포함.

## 실행 방법
1. 저장소 클론: `git clone https://github.com/YourUsername/locker-dashboard.git`
2. 의존성 설치: `npm install`
3. 개발 서버 실행: `npm run dev`
4. 브라우저에서 http://localhost:5173/ 접속

## 상태(State) 관리 방법론
- useState Hook으로 필터 상태('all', 'empty', 'inuse', 'broken') 관리.
- 글로벌 상태 불필요해 Context나 Reducer 미사용 – 간단한 로컬 상태로 충분.
- 모달 열림/닫힘은 각 LockerBox 컴포넌트 내 useState로 독립 관리.

## AI 도구 활용
- Grok AI를 통해 컴포넌트 구조 설계, useState/useEffect 아이디어, Unix timestamp 변환 로직( new Date(timestamp * 1000).toLocaleString('ko-KR') )을 도움받음.
- 프롬프트 예: "React에서 Unix timestamp를 한국 시간 포맷으로 변환하는 방법", "absolute positioning으로 JSON shape 렌더링 예시".
- 모든 코드는 직접 이해하고 수정/적용함.