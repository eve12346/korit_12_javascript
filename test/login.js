// script.js
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', function(event) {
    // 폼 제출 시 페이지 새로고침 방지
    event.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // --- TODO 영역 ---

    // TODO 1: 입력값 유효성 검사 (Validation)
    // 예: 아이디가 5자 이상인지, 비밀번호에 특수문자가 포함되었는지 확인하세요.
    if (username.length < 5) {
        errorMessage.textContent = "아이디는 5자 이상이어야 합니다.";
        return;
    }

    // TODO 2: 보안을 위한 비밀번호 암호화 로직 검토
    // 실제 서비스에서는 클라이언트에서 암호화하거나, 안전한 HTTPS 통신을 사용해야 합니다.

    // TODO 3: 서버 API로 로그인 데이터 전송 (Fetch API 사용)
    /*
    fetch('https://api.example.com/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        // TODO 4: 로그인 성공 처리 (예: 메인 페이지 이동, 토큰 저장)
        console.log("로그인 성공:", data);
    })
    .catch(error => {
        // TODO 5: 로그인 실패 처리 (예: 에러 메시지 표시)
        errorMessage.textContent = "아이디 또는 비밀번호가 틀렸습니다.";
    });
    */

    // 임시 테스트용 로그
    console.log("입력된 정보:", { username, password });
    alert("로그인 시도 중! (콘솔 확인)");
});