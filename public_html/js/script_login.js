$(document).ready(function () {
    if (!Kakao.isInitialized()) {
        Kakao.init('45edffd2681daa9c5522b083fb28ec7d'); // SDK 초기화
    }

    $('#kakao-login-btn, #naver-login-btn ,#google-login-btn').on('click', function () {
        kakaoLogin();
    });

    function kakaoLogin() {
        Kakao.Auth.authorize({
            redirectUri: 'http://wjatnsdl1215.dothome.co.kr/project05/index.html',
            // redirectUri: 'http://localhost:5500/kakaologout.html',
            scope: 'profile_nickname'
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const idBox = document.querySelector(".id_box");
    const passBox = document.querySelector(".pass_box");
    const loginBtn = document.querySelector(".login_btn");

    function toggleLoginButton() {
        if (idBox.value.trim() !== "" && passBox.value.trim() !== "") {
            loginBtn.style.backgroundColor = "#5E26B8"; // 활성화 색상
        } else {
            loginBtn.style.backgroundColor = "#9d9d9d"; // 기본 색상
        }
    }

    idBox.addEventListener("input", toggleLoginButton);
    passBox.addEventListener("input", toggleLoginButton);
});



