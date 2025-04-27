function validarLogin(email, password) {
    const usuarios = [
      { email: "test@uc.cl", password: "123456" },
      { email: "admin@uc.cl", password: "adminpass" }
    ];
    return usuarios.some(u => u.email === email && u.password === password);
  }
  
  // Pruebas
  function testLogin() {
    let passed = 0, failed = 0;
  
    // Caso exitoso
    if (validarLogin("test@uc.cl", "123456")) {
      console.log("✅ Login válido (test@uc.cl)");
      passed++;
    } else {
      console.error("❌ Login válido falló (test@uc.cl)");
      failed++;
    }
  
    // Caso exitoso 2
    if (validarLogin("admin@uc.cl", "adminpass")) {
      console.log("✅ Login válido (admin@uc.cl)");
      passed++;
    } else {
      console.error("❌ Login válido falló (admin@uc.cl)");
      failed++;
    }
  
    // Caso inválido
    if (!validarLogin("test@uc.cl", "wrongpass")) {
      console.log("✅ Login inválido detectado");
      passed++;
    } else {
      console.error("❌ Login inválido no detectado");
      failed++;
    }
  
    // Caso usuario inexistente
    if (!validarLogin("noexiste@uc.cl", "123456")) {
      console.log("✅ Usuario inexistente detectado");
      passed++;
    } else {
      console.error("❌ Usuario inexistente no detectado");
      failed++;
    }
  
    if (failed > 0) {
      console.error(`❌ ${failed} pruebas fallaron`);
      process.exit(1); // Falla el workflow
    } else {
      console.log(`✅ Todas las pruebas pasaron (${passed})`);
    }
  }
  
  testLogin();