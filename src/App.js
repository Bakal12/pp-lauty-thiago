import './App.css';
import React, { useState, useEffect } from 'react'

function App() {

  const [activeContainer, setActiveContainer] = useState('login')
  const [showAgregarLibroModal, setShowAgregarLibroModal] = useState(false)
  const [showEliminarLibroModal, setShowEliminarLibroModal] = useState(false)

  document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('loginContainer');
    const registerContainer = document.getElementById('registerContainer');
    const forgotPasswordContainer = document.getElementById('forgotPasswordContainer');
    const libraryContent = document.getElementById('libraryContent');

    const agregarLibroModal = document.getElementById('agregarLibroModal');
    const closeAgregarModal = document.getElementById('closeAgregarModal');
    const eliminarLibroModal = document.getElementById('eliminarLibroModal');
    const closeEliminarModal = document.getElementById('closeEliminarModal');

    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const agregarLibroForm = document.getElementById('agregarLibroForm');
    const eliminarLibroForm = document.getElementById('eliminarLibroForm');
  });

  const usuariosRegistrados = [
    { email: 'usuario@ejemplo.com', password: 'contraseña123' }
  ];

  let libros = [
    { id: 2, titulo: "Informatica: Sistemas operativos, Windows. Utilitarios, graficacion, multimedia y animaciones", autor: "Thiago", editorial: "Santillana", lugar: "Buenos Aires", anio: 1998, paginas: 319, categoria: "INFORMATICA", codigo: "950-46-0579-6" },
    { id: 3, titulo: "Idem Anterior, y.2", autor: "", editorial: "", lugar: "", anio: "", paginas: "", categoria: "", codigo: "" },
    { id: 4, titulo: "Cultura escrita y oralidad", autor: "Olson, David R.; Tosranci, Nancy", editorial: "Gedisa", lugar: "Barcelona", anio: 1998, paginas: 383, categoria: "CULTURA", codigo: "84-7432-527-7" },
    { id: 5, titulo: "Telematica", autor: "Pujolle, Guy", editorial: "Paraninfo", lugar: "Madrid", anio: 1985, paginas: 175, categoria: "INFORMATICA", codigo: "84-283-1352-0" },
    { id: 6, titulo: "Introduccion al procesamiento y transmision de datos", autor: "Zrapeano, francisco", editorial: "alsina", lugar: "Buenos Aires", anio: 2003, paginas: 521, categoria: "COMUNICACIONES", codigo: "950-553-112-5" },
    { id: 7, titulo: "Curso integral informatica clarin para todos", autor: "Thiago", editorial: "sol 90", lugar: "Buenos Aires", anio: 2001, paginas: "no", categoria: "INFORMATICA", codigo: "111-222-2135-5" },
    { id: 8, titulo: "El periodismo: teorica y practica", autor: "Gonzales Ruiz, Nicolas", editorial: "Noguer", lugar: "Barcelona", anio: 1953, paginas: 437, categoria: "PERIODISMO", codigo: "111-222-2135-5" },
    { id: 9, titulo: "Psicologia pedagogica: teorico practico 6ªed", autor: "Villaverde, Anibal", editorial: "dsa" }
  ];


  return (
    <div className="App">

      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Biblioteca Escolar Instituto La Salette</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>

      <body>
        <div className="app-container">
          <header className="header-bg text-white py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Biblioteca Escolar Instituto La Salette</h1>
            <p className="text-xl text-center mb-8">Descubre tu próxima lectura</p>
          </header>
          <main className="p-4 sm:p-6 lg:p-8">
            {activeContainer === 'login' && (
              <div id="loginContainer" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Iniciar Sesión</h2>
                <form className="grid gap-4">
                  <input type="email" id="loginEmail" placeholder="Correo electrónico" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <div className="relative">
                    <input type="password" id="loginPassword" placeholder="Contraseña" required
                      className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10" />
                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3"
                      aria-label="Mostrar/ocultar contraseña">
                      👁️
                    </button>
                  </div>
                  <button onSubmit={() => setActiveContainer('library')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    Iniciar Sesión
                  </button>
                </form>
                <div id="loginError" className="hidden mt-4 text-red-600 text-center"></div>
                <p className="mt-4 text-center">¿No tienes una cuenta? <button onClick={() => setActiveContainer('register')}
                  className="text-blue-600 underline">Registrarse</button></p>
                <p className="mt-2 text-center"><button onClick={() => setActiveContainer('forgotPassword')} className="text-blue-600 underline">Olvidé mi
                  contraseña</button></p>
              </div>
            )}

            {activeContainer === 'register' && (
              <div id="registerContainer" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Registrarse</h2>
                <form className="grid gap-4">
                  <input type="email" id="registerEmail" placeholder="Correo electrónico" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <div className="relative">
                    <input type="password" id="registerPassword" placeholder="Contraseña" required
                      className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10" />
                    <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3"
                      aria-label="Mostrar/ocultar contraseña">
                      👁️
                    </button>
                  </div>
                  <button type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    Registrarse
                  </button>
                </form>
                <p className="mt-4 text-center">¿Ya tienes una cuenta? <button onClick={() => setActiveContainer('login')}
                  className="text-blue-600 underline">Iniciar Sesión</button></p>
              </div>
            )}

            {activeContainer === 'forgotPassword' && (
              <div id="forgotPasswordContainer" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Recuperar Contraseña</h2>
                <form className="grid gap-4">
                  <input type="email" id="forgotPasswordEmail" placeholder="Correo electrónico" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <button type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    Enviar Código
                  </button>
                </form>
                <p className="mt-4 text-center">¿Recuerdas tu contraseña? <button onClick={() => setActiveContainer('login')}
                  className="text-blue-600 underline">Iniciar Sesión</button></p>
              </div>
            )}

            {activeContainer === 'library' && (
              <div id="libraryContent">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Biblioteca Virtual</h2>
                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <select id="categoria"
                    className="border rounded-full py-2 px-4 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                    <option value="Todas">Todas las categorías</option>
                    <option value="INFORMATICA">INFORMÁTICA</option>
                    <option value="CULTURA">CULTURA</option>
                    <option value="COMUNICACIONES">COMUNICACIONES</option>
                    <option value="PERIODISMO">PERIODISMO</option>
                    <option value="PSICOLOGIA">PSICOLOGÍA</option>
                    <option value="LOGICA">LÓGICA</option>
                    <option value="PSICOANALISIS">PSICOANÁLISIS</option>
                    <option value="FILOSOFIA">FILOSOFÍA</option>
                    <option value="ECONOMIA">ECONOMÍA</option>
                    <option value="SOCIOLOGIA">SOCIOLOGÍA</option>
                    <option value="RELIGION">RELIGIÓN</option>
                    <option value="RELIGION. BIBLIA">RELIGIÓN. BIBLIA</option>
                    <option value="DERECHO">DERECHO</option>
                    <option value="MICROECONOMIA">MICROECONOMÍA</option>
                    <option value="MACROECONOMIA">MACROECONOMÍA</option>
                    <option value="Literatura infantil">Literatura infantil</option>
                    <option value="Literatura juvenil">Literatura juvenil</option>
                  </select>
                  <input type="text" id="busquedaTexto" placeholder="Buscar por título o autor..."
                    className="border rounded-full py-2 px-4 flex-grow bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="text" id="busquedaCodigo" placeholder="Código ISBN"
                    className="border rounded-full py-2 px-4 w-32 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <button id="buscarBtn"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    Buscar
                  </button>
                  <button onClick={() => setShowAgregarLibroModal(true)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    Agregar Libro
                  </button>
                  <button onClick={() => setShowEliminarLibroModal(true)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    Eliminar Libro
                  </button>
                </div>
                <div id="listaLibros" className="space-y-4">
                  {/* Aquí se mostrarán los libros */}
                </div>
              </div>
            )}
          </main>

          {showAgregarLibroModal && (
            <div className="modal" aria-labelledby="agregarLibroModalTitle" role="dialog" aria-modal="true">
              <div className="modal-content">
                <span className="close" onClick={() => setShowAgregarLibroModal(false)} aria-label="Cerrar modal">&times;</span>
                <h2 id="agregarLibroModalTitle" className="text-2xl font-semibold mb-4">Agregar Libro</h2>
                <form className="grid gap-4">
                  <input type="text" id="titulo" placeholder="Título" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="text" id="autor" placeholder="Autor" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="text" id="codigo" placeholder="Código ISBN" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="text" id="editorial" placeholder="Editorial" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="text" id="lugar" placeholder="Lugar de publicación" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="number" id="anio" placeholder="Año de publicación" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="number" id="paginas" placeholder="Número de páginas" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <input type="text" id="categoria" placeholder="Categoría" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <button type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    Agregar
                  </button>
                </form>
              </div>
            </div>
          )}

          {showEliminarLibroModal && (
            <div className="modal" aria-labelledby="eliminarLibroModalTitle" role="dialog" aria-modal="true">
              <div className="modal-content">
                <span className="close" onClick={() => setShowEliminarLibroModal(false)} aria-label="Cerrar modal">&times;</span>
                <h2 id="eliminarLibroModalTitle" className="text-2xl font-semibold mb-4">Eliminar Libro</h2>
                <form className="grid gap-4">
                  <input type="text" id="codigoEliminar" placeholder="Código ISBN del libro a eliminar" required
                    className="border rounded-lg py-2 px-3 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                  <button type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    Eliminar
                  </button>
                </form>
              </div>
            </div>
          )}


          <script>
          </script>
        </div>
      </body>
    </div>
  );
}

export default App;
