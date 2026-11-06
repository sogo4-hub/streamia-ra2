/* =============================================================
   STREAMIA · script.js
   Interactividad con JavaScript y el DOM:
   1. Modo claro / oscuro (atributo data-bs-theme de <html>)
   2. Validación de formularios con los estilos de Bootstrap
   3. Botones "Mi lista" (guardados en localStorage)
   4. Búsqueda y filtros de buscar.html
   5. Aviso del botón "Reproducir"
   6. Ficha dinámica de detalle.html?id=... (datos de catalogo.js)
   ============================================================= */

document.addEventListener("DOMContentLoaded", () => {
  iniciarTema();
  iniciarValidacion();
  iniciarDetalle();   // antes de Mi lista: fija el data-id del botón
  iniciarMiLista();
  iniciarBusqueda();
  iniciarReproductor();
});

/* Lectura y escritura segura de localStorage */
function leer(clave, porDefecto) {
  try {
    return localStorage.getItem(clave) ?? porDefecto;
  } catch (error) {
    return porDefecto;
  }
}

function guardar(clave, valor) {
  try {
    localStorage.setItem(clave, valor);
  } catch (error) {
    /* Sin localStorage la web sigue funcionando, solo no recuerda */
  }
}

/* ---------- 1. MODO CLARO / OSCURO ---------- */
function iniciarTema() {
  const html = document.documentElement;
  const boton = document.getElementById("btn-tema");
  if (!boton) return;

  const texto = boton.querySelector(".btn-tema__texto");

  const aplicar = (tema) => {
    const oscuro = tema === "dark";
    html.setAttribute("data-bs-theme", tema);
    boton.setAttribute("aria-pressed", String(oscuro));
    boton.setAttribute("aria-label", oscuro ? "Activar modo claro" : "Activar modo oscuro");
    if (texto) texto.textContent = oscuro ? "Modo claro" : "Modo oscuro";
  };

  aplicar(leer("streamia-tema", "light"));

  boton.addEventListener("click", () => {
    const nuevo = html.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
    aplicar(nuevo);
    guardar("streamia-tema", nuevo);
  });
}

/* ---------- 2. VALIDACIÓN DE FORMULARIOS ---------- */
function iniciarValidacion() {
  const confirmar = document.getElementById("registro-confirmar");
  const clave = document.getElementById("registro-clave");

  // Regla personalizada: las dos contraseñas deben coincidir
  const comprobarClaves = () => {
    if (!confirmar || !clave) return;
    const distintas = confirmar.value !== "" && confirmar.value !== clave.value;
    confirmar.setCustomValidity(distintas || confirmar.value === "" ? "Las contraseñas no coinciden" : "");
  };

  if (confirmar && clave) {
    confirmar.addEventListener("input", comprobarClaves);
    clave.addEventListener("input", comprobarClaves);
  }

  document.querySelectorAll(".needs-validation").forEach((formulario) => {
    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault(); // Es una demo: no se envía a ningún servidor
      comprobarClaves();

      const mensaje = formulario.querySelector("[data-mensaje-exito]");

      if (!formulario.checkValidity()) {
        evento.stopPropagation();
        formulario.classList.add("was-validated");
        mensaje?.classList.add("d-none");
        formulario.querySelector(":invalid")?.focus();
        return;
      }

      formulario.classList.add("was-validated");

      // Mensaje de éxito creado desde el DOM
      const email = formulario.querySelector('input[type="email"]').value;
      if (mensaje) {
        mensaje.textContent = formulario.id === "form-registro"
          ? `Cuenta creada para ${email}. ¡Bienvenido/a a STREAMIA!`
          : `Sesión iniciada como ${email}.`;
        mensaje.classList.remove("d-none");
      }
    });
  });

  // Al cerrar el modal se limpian los formularios
  const modal = document.getElementById("modal-acceso");
  modal?.addEventListener("hidden.bs.modal", () => {
    modal.querySelectorAll("form").forEach((formulario) => {
      formulario.reset();
      formulario.classList.remove("was-validated");
      formulario.querySelector("[data-mensaje-exito]")?.classList.add("d-none");
    });
  });
}

/* ---------- 3. MI LISTA ---------- */
function obtenerMiLista() {
  try {
    return JSON.parse(leer("streamia-mi-lista", "[]"));
  } catch (error) {
    return [];
  }
}

function iniciarMiLista() {
  const botones = document.querySelectorAll(".btn-mi-lista");

  const pintar = (boton) => {
    const enLista = obtenerMiLista().includes(boton.dataset.id);
    boton.setAttribute("aria-pressed", String(enLista));
    // Se cambia solo el último nodo de texto para conservar el icono
    const nodoTexto = [...boton.childNodes].filter((n) => n.nodeType === Node.TEXT_NODE).pop();
    if (nodoTexto) nodoTexto.textContent = enLista ? "En mi lista" : "Mi lista";
  };

  botones.forEach((boton) => {
    pintar(boton);
    boton.addEventListener("click", () => {
      const lista = obtenerMiLista();
      const id = boton.dataset.id;
      const nueva = lista.includes(id) ? lista.filter((x) => x !== id) : [...lista, id];
      guardar("streamia-mi-lista", JSON.stringify(nueva));
      pintar(boton);
    });
  });
}

/* ---------- 4. BÚSQUEDA Y FILTROS ---------- */
function iniciarBusqueda() {
  const lista = document.getElementById("lista-resultados");
  if (!lista) return; // Solo existe en buscar.html

  const campo = document.getElementById("campo-busqueda");
  const formulario = document.getElementById("form-busqueda");
  const botonesTipo = document.querySelectorAll(".filtro[data-tipo]");
  const selectGenero = document.getElementById("filtro-genero");
  const contador = document.getElementById("contador");
  const vacio = document.getElementById("sin-resultados");
  const tituloResultados = document.getElementById("resultados-titulo");
  const tarjetas = lista.querySelectorAll(".tarjeta");

  // Estado inicial a partir de la URL (?tipo=serie, ?lista=mi-lista, ?q=...)
  const parametros = new URLSearchParams(window.location.search);
  const estado = {
    tipo: parametros.get("tipo") || "todos",
    texto: parametros.get("q") || "",
    genero: "",
    soloMiLista: parametros.get("lista") === "mi-lista",
  };
  campo.value = estado.texto;

  // Marca en la cabecera la sección activa
  const navActiva = estado.soloMiLista ? "mi-lista"
    : estado.tipo === "pelicula" ? "peliculas"
    : estado.tipo === "serie" ? "series" : "buscar";
  document.querySelectorAll(".cabecera [data-nav]").forEach((enlace) => {
    if (enlace.dataset.nav === navActiva) enlace.setAttribute("aria-current", "page");
    else enlace.removeAttribute("aria-current");
  });
  if (estado.soloMiLista) tituloResultados.textContent = "Mi lista";

  const normalizar = (texto) => texto.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

  const filtrar = () => {
    const miLista = obtenerMiLista();
    const busqueda = normalizar(estado.texto.trim());
    let visibles = 0;

    tarjetas.forEach((tarjeta) => {
      const d = tarjeta.dataset;
      const coincide =
        (estado.tipo === "todos" || d.tipo === estado.tipo) &&
        (estado.genero === "" || d.genero === estado.genero) &&
        (!estado.soloMiLista || miLista.includes(d.id)) &&
        normalizar(d.titulo).includes(busqueda);

      tarjeta.parentElement.hidden = !coincide; // oculta el <li>
      if (coincide) visibles++;
    });

    contador.textContent = `${visibles} ${visibles === 1 ? "resultado" : "resultados"}`;
    vacio.classList.toggle("d-none", visibles > 0);

    botonesTipo.forEach((boton) => {
      boton.setAttribute("aria-pressed", String(boton.dataset.tipo === estado.tipo));
    });
  };

  campo.addEventListener("input", () => {
    estado.texto = campo.value;
    filtrar();
  });

  formulario.addEventListener("submit", (evento) => {
    evento.preventDefault(); // Se filtra en la propia página
    filtrar();
  });

  botonesTipo.forEach((boton) => {
    boton.addEventListener("click", () => {
      estado.tipo = boton.dataset.tipo;
      filtrar();
    });
  });

  selectGenero.addEventListener("change", () => {
    estado.genero = selectGenero.value;
    filtrar();
  });

  filtrar();
}

/* ---------- 5. REPRODUCIR ---------- */
function iniciarReproductor() {
  const boton = document.getElementById("btn-reproducir");
  const aviso = document.getElementById("aviso-reproductor");
  if (!boton || !aviso || !window.bootstrap) return;

  const toast = bootstrap.Toast.getOrCreateInstance(aviso);
  boton.addEventListener("click", () => toast.show());
}

/* ---------- 6. FICHA DINÁMICA (detalle.html?id=...) ---------- */
function iniciarDetalle() {
  const titulo = document.getElementById("detalle-titulo");
  if (!titulo || typeof CATALOGO === "undefined") return; // Solo en detalle.html

  const id = new URLSearchParams(window.location.search).get("id") || "senderos-de-gloria";
  const item = CATALOGO.find((c) => c.id === id);

  // Id inexistente: se oculta la ficha y se muestra el aviso
  if (!item) {
    document.getElementById("detalle").hidden = true;
    document.getElementById("relacionadas").hidden = true;
    document.getElementById("detalle-no-encontrado").hidden = false;
    document.title = "STREAMIA · Título no encontrado";
    return;
  }

  const esSerie = item.tipo === "serie";
  const unir = (lista) => lista.join(", ");

  // Cabecera de la ficha
  document.title = `STREAMIA · ${item.titulo}`;
  titulo.textContent = item.titulo;
  document.getElementById("detalle-datos").textContent = esSerie
    ? `${item.anio} · ${item.temporadas} ${item.temporadas === 1 ? "temporada" : "temporadas"} · ${item.genero}`
    : `${item.anio} · ${item.duracion} min · ${item.genero}`;

  const cartel = document.getElementById("detalle-cartel");
  cartel.src = item.cartel;
  cartel.alt = `Cartel de ${item.titulo}`;

  document.getElementById("detalle-argumento").textContent = item.argumento;
  document.querySelector(".detalle .btn-mi-lista").dataset.id = item.id;

  // Ficha técnica: se crean los <dt>/<dd> con el DOM
  const filas = [];
  if (item.tituloOriginal) filas.push(["Título original", item.tituloOriginal]);
  if (esSerie) {
    filas.push(["Año de inicio", item.anio], ["Temporadas", item.temporadas],
      ["Duración por episodio", `≈ ${item.duracionEpisodio} min`], ["Creación", unir(item.creacion)]);
  } else {
    filas.push(["Año", item.anio], ["Duración", `${item.duracion} min`], ["Dirección", unir(item.direccion)]);
  }
  filas.push(["Género", item.genero], ["Reparto", unir(item.reparto)]);

  const ficha = document.getElementById("detalle-ficha");
  ficha.replaceChildren(...filas.map(([etiqueta, valor]) => {
    const grupo = document.createElement("div");
    const dt = document.createElement("dt");
    const dd = document.createElement("dd");
    dt.textContent = `${etiqueta}:`;
    dd.textContent = valor;
    grupo.append(dt, " ", dd);
    return grupo;
  }));

  // Recomendaciones relacionadas: mismo género primero y luego el resto
  const otros = CATALOGO.filter((c) => c.id !== item.id);
  const relacionadas = [
    ...otros.filter((c) => c.genero === item.genero),
    ...otros.filter((c) => c.genero !== item.genero && c.tipo === item.tipo),
  ].slice(0, 6);

  const plantilla = document.getElementById("plantilla-tarjeta");
  const lista = document.getElementById("lista-relacionadas");
  lista.replaceChildren(...relacionadas.map((c) => {
    const nodo = plantilla.content.cloneNode(true);
    const img = nodo.querySelector(".tarjeta__cartel");
    const enlace = nodo.querySelector(".tarjeta__titulo a");
    img.src = c.cartel;
    img.alt = `Cartel de ${c.titulo}`;
    enlace.href = `detalle.html?id=${encodeURIComponent(c.id)}`;
    enlace.textContent = c.titulo;
    nodo.querySelector(".tarjeta__meta").textContent =
      `${c.anio} · ${c.tipo === "serie" ? "Serie" : "Película"} · ${c.genero}`;
    return nodo;
  }));
}
