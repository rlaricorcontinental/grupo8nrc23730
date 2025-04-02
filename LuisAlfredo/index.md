---
theme: jekyll-theme-merlot
title: Lui Alfredo Tisoc Pimentel
---

# ¡Bienvenido a mi portafolio!
Este es un sitio web donde muestro mis proyectos.

[Ver mis proyectos](projects.md)

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi Portafolio</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }
        header {
            background: #333;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        nav ul {
            list-style: none;
            padding: 0;
        }
        nav ul li {
            display: inline;
            margin: 0 15px;
        }
        nav ul li a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
        }
        section {
            padding: 50px;
            text-align: center;
        }
        .galeria {
            display: flex;
            justify-content: center;
            gap: 20px;
        }
        .proyecto {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }
        .proyecto:hover {
            transform: scale(1.05);
        }
        form {
            max-width: 400px;
            margin: auto;
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        input, textarea, button {
            width: 100%;
            margin-top: 10px;
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        button {
            background: #333;
            color: white;
            font-size: 16px;
            cursor: pointer;
        }
        button:hover {
            background: #555;
        }
    </style>
</head>
<body>
    <header>
        <h1>Mi Portafolio</h1>
        <nav>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#sobre-mi">Sobre mí</a></li>
                <li><a href="#proyectos">Proyectos</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
    
    <section id="inicio">
        <h2>Bienvenido</h2>
        <p>Soy [Tu Nombre], un desarrollador apasionado por la tecnología.</p>
    </section>
    
    <section id="sobre-mi">
        <h2>Sobre Mí</h2>
        <p>Aquí puedes describir tu experiencia, habilidades y motivación.</p>
    </section>
    
    <section id="proyectos">
        <h2>Proyectos</h2>
        <div class="galeria">
            <div class="proyecto">Proyecto 1</div>
            <div class="proyecto">Proyecto 2</div>
            <div class="proyecto">Proyecto 3</div>
        </div>
    </section>
    
    <section id="contacto">
        <h2>Contacto</h2>
        <form>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" required></textarea>
            
            <button type="submit">Enviar</button>
        </form>
    </section>
    
    <script>
        document.querySelector("form").addEventListener("submit", function(event) {
            event.preventDefault();
            alert("Mensaje enviado correctamente");
        });
    </script>
</body>
</html>
