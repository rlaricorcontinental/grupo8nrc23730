// HTML: Cargar Datos Iniciales
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".test-case").forEach((test) => {
    const email = test.getAttribute("data-email");
    const password = test.getAttribute("data-password");
    const expected = test.getAttribute("data-expected");
    test.querySelector(".email").textContent = email;
    test.querySelector(".password").textContent = password;
    test.querySelector(".expected").textContent = expected;
    test.querySelector(".result").textContent = "❓";
    test.querySelector(".error-code").textContent = "❓";
  });
});
// HTML: Iniciar Pruebas
document.getElementById("runTests").addEventListener("click", () => {
  const testCases = document.querySelectorAll(".test-case");
  testCases.forEach((testCase) => {
    const checkbox = testCase.querySelector("input[type='checkbox']");
    const email = testCase.getAttribute("data-email");
    const password = testCase.getAttribute("data-password");
    const resultSpan = testCase.querySelector(".result");
    const errorCodeSpan = testCase.querySelector(".error-code");
    if (checkbox.checked) {
      // Firebase: Validar Usuario
      authTest.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log("Test login exitoso:", userCredential.user.email);
        resultSpan.textContent = "✅ Pass";
        errorCodeSpan.textContent = "-";
      })
      .catch((error) => {
        console.error("Test login fallido:", email, error.code);
        resultSpan.textContent = "❌ Error";
        errorCodeSpan.textContent = error.code || "-";
      })
      .finally(() => {
        authTest.signOut().catch(err => {
          console.warn("Error al cerrar sesión de test:", err);
        });
      });
    } else {
      // Reiniciar Resultado
      resultSpan.innerText = "❓";
      errorCodeSpan.innerText = "❓";
    }
  });
});
// HTML: Reiniciar Resultados
document.getElementById("resetTests").addEventListener("click", () => {
  const testCases = document.querySelectorAll(".test-case");
  testCases.forEach((testCase) => {
    testCase.querySelector("input[type='checkbox']").checked = false;
    testCase.querySelector(".result").innerText = "❓";
    testCase.querySelector(".error-code").innerText = "❓";
  });
});