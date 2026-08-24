async function cargarHeader() {

    const contenedor = document.getElementById("header");

    if (!contenedor) return;

    const ruta = contenedor.dataset.header;

    try {

        const respuesta = await fetch(ruta);

        if (!respuesta.ok) {
            throw new Error(`Error cargando header: ${respuesta.status}`);
        }

        contenedor.innerHTML = await respuesta.text();

        configurarHeader();

    } catch (error) {

        console.error("Error al cargar el header:", error);

    }
}


function configurarHeader() {

    // Detectar si estamos en local o en GitHub Pages
    const isLocal =
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1";

    let base = "";

    if (!isLocal) {
        base = `/${window.location.pathname.split("/")[1]}`;
    }


    // Solo modificar los enlaces del HEADER
    const header = document.querySelector("header");

    if (header) {

        header.querySelectorAll("[data-section]").forEach(link => {

            const section = link.dataset.section;

            link.href = `${base}/#${section}`;

        });

    }


    // Configurar menú móvil
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });


    // Cerrar menú al seleccionar una opción
    document.querySelectorAll(".mobile-link").forEach(link => {

        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });

    });

}


cargarHeader();