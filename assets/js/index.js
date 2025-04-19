// Firebase: Validar sesión activa
auth.onAuthStateChanged((user) => {
    const loginBtn = document.querySelector('.login-btn');
    if (user) {
      loginBtn.innerText = '🔓 Acceder';
    } else {
      loginBtn.innerText = '🔐 Acceder';
    }
});
