async function cargarContactModal() {

    const contenedor = document.getElementById("contact-modal");

    if (!contenedor) return;

    const ruta = contenedor.dataset.modal;

    try {

        const respuesta = await fetch(ruta);

        if (!respuesta.ok) {
            throw new Error(`Error cargando modal: ${respuesta.status}`);
        }

        contenedor.innerHTML = await respuesta.text();

    } catch (error) {

        console.error("Error al cargar el modal de contacto:", error);

    }

}


function openModal(modal) {

    const modalElement = document.getElementById(`${modal}Modal`);

    if (!modalElement) return;

    modalElement.classList.remove("hidden");

    requestAnimationFrame(() => {
        modalElement.classList.remove("opacity-0");
    });

}


function closeModal(modal) {

    const modalElement = document.getElementById(`${modal}Modal`);

    if (!modalElement) return;

    modalElement.classList.add("opacity-0");

    setTimeout(() => {
        modalElement.classList.add("hidden");
    }, 300);

}


cargarContactModal();