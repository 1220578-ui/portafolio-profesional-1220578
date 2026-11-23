
document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // 1. VIDEO DE PORTADA
    // =========================================

    const coverVideo = document.querySelector(".cover-video");

    if (coverVideo) {
        coverVideo.play().catch(() => {
            console.info("La reproducción del video requiere interacción.");
        });
    }


    // =========================================
    // 2. PESTAÑAS DE COMPETENCIAS
    // =========================================

    const tabs = [...document.querySelectorAll(".folderTab")];
    const panels = [...document.querySelectorAll(".folderPanel")];

    function activarPestana(tab) {

        const target = tab.dataset.tab;

        tabs.forEach(item => {

            const activo = item === tab;

            item.classList.toggle("active", activo);
            item.setAttribute("aria-selected", String(activo));
            item.tabIndex = activo ? 0 : -1;

        });

        panels.forEach(panel => {

            const activo = panel.id === target;

            panel.hidden = !activo;
            panel.classList.toggle("active", activo);

        });

    }

    tabs.forEach((tab, index) => {

        tab.addEventListener("click", () => {
            activarPestana(tab);
        });

        tab.addEventListener("keydown", event => {

            let next = index;

            if (event.key === "ArrowRight") {
                next = (index + 1) % tabs.length;
            }

            else if (event.key === "ArrowLeft") {
                next = (index - 1 + tabs.length) % tabs.length;
            }

            else if (event.key === "Home") {
                next = 0;
            }

            else if (event.key === "End") {
                next = tabs.length - 1;
            }

            else {
                return;
            }

            event.preventDefault();

            tabs[next].focus();
            activarPestana(tabs[next]);

        });

    });


    // =========================================
    // 3. INFORMACIÓN DE EXPERIENCIAS
    // =========================================

    const EXPERIENCIAS = {

        xepi: {

            puesto: "Escribe aquí tu puesto",

            herramientas: [
                "Herramienta 1",
                "Herramienta 2"
            ],

            programas: [
                "Programa 1",
                "Programa 2"
            ],

            habituales: [
                "Dirección y coordinación del equipo de trabajo",
                "Gestión de actividades",
                "Desarrollo estratégico del modelo de negocio, desde la investigación de mercado hasta la planeación financiera"
            ],

            extraordinarias: [
                "Escribe aquí una función extraordinaria"
            ],

            fotos: [
                "../assets/images/trayectoria-xepi-1.jpeg",
                "../assets/images/trayectoria-xepi-2.jpeg",
                "../assets/images/trayectoria-xepi-3.jpeg"
            ]

        },


        adventus: {

            puesto: "Escribe aquí tu puesto",

            herramientas: [
                "Herramienta 1",
                "Herramienta 2"
            ],

            programas: [
                "Programa 1",
                "Programa 2"
            ],

            habituales: [
                "Control de ventas e inventario",
                "Seguimiento y reporte de pagos",
                "Mantenimiento del sitio web"
            ],

            extraordinarias: [
                "Escribe aquí una función extraordinaria"
            ],

            fotos: [
                "../assets/images/trayectoria-adventus-1.jpeg",
                "../assets/images/trayectoria-adventus-2.jpeg",
                "../assets/images/trayectoria-adventus-3.jpeg"
            ]

        },


        enactus: {

            puesto: "Escribe aquí tu puesto",

            herramientas: [
                "Herramienta 1",
                "Herramienta 2"
            ],

            programas: [
                "Programa 1",
                "Programa 2"
            ],

            habituales: [
                "Desarrollo de estrategias de comunicación interna",
                "Gestión de reputación institucional orientada a la recuperación de imagen y al fortalecimiento de la identidad organizacional"
            ],

            extraordinarias: [
                "Escribe aquí una función extraordinaria"
            ],

            fotos: [
                "../assets/images/trayectoria-enactus-1.jpeg",
                "../assets/images/trayectoria-enactus-2.jpeg",
                "../assets/images/trayectoria-enactus-3.jpeg"
            ]

        },


        jybsa: {

            puesto: "Escribe aquí tu puesto",

            herramientas: [
                "Herramienta 1",
                "Herramienta 2"
            ],

            programas: [
                "Programa 1",
                "Programa 2"
            ],

            habituales: [
                "Apoyo en procesos de auditoría y reclutamiento",
                "Revisión documental",
                "Actualización de registros",
                "Seguimiento de actividades del área de Recursos Humanos"
            ],

            extraordinarias: [
                "Escribe aquí una función extraordinaria"
            ],

            fotos: [
                "../assets/images/trayectoria-jybsa-1.jpeg",
                "../assets/images/trayectoria-jybsa-2.jpeg",
                "../assets/images/trayectoria-jybsa-3.jpeg"
            ]

        },


        club: {

            puesto: "Escribe aquí tu puesto",

            herramientas: [
                "Herramienta 1",
                "Herramienta 2"
            ],

            programas: [
                "Programa 1",
                "Programa 2"
            ],

            habituales: [
                "Dirección y gestión organizacional del club",
                "Planificación de programas formativos",
                "Coordinación de equipos de consejeros",
                "Supervisión de actividades y eventos"
            ],

            extraordinarias: [
                "Escribe aquí una función extraordinaria"
            ],

            fotos: [
                "../assets/images/trayectoria-club-1.jpeg",
                "../assets/images/trayectoria-club-2.jpeg",
                "../assets/images/trayectoria-club-3.jpeg"
            ]

        }

    };


    // =========================================
    // 4. ELEMENTOS DEL CARRUSEL Y MODAL
    // =========================================

    const expModal = document.getElementById("expModal");
    const track = document.querySelector(".trajectoryTrack");


    // =========================================
    // 5. DUPLICAR TARJETAS DEL CARRUSEL
    // =========================================

    if (track && !track.querySelector(".trajectoryClone")) {

        const originales = [
            ...track.querySelectorAll(":scope > .trajectoryCard")
        ];

        if (originales.length) {

            const clon = document.createElement("div");

            clon.className = "trajectoryClone";
            clon.setAttribute("aria-hidden", "true");

            originales.forEach(tarjeta => {

                const copia = tarjeta.cloneNode(true);

                copia.querySelectorAll("button").forEach(boton => {
                    boton.setAttribute("tabindex", "-1");
                });

                clon.appendChild(copia);

            });

            track.appendChild(clon);

        }

    }


    // =========================================
    // 6. LLENAR LISTAS DEL MODAL
    // =========================================

    function llenarLista(id, elementos) {

        const lista = document.getElementById(id);

        if (!lista) return;

        lista.replaceChildren();

        (elementos || []).forEach(texto => {

            const li = document.createElement("li");

            li.textContent = texto;

            lista.appendChild(li);

        });

        const grupo = lista.closest(".modalGroup");

        if (grupo) {
            grupo.hidden = lista.children.length === 0;
        }

    }


    // =========================================
    // 7. GALERÍA DE FOTOGRAFÍAS
    // =========================================

    function pintarFotos(contenedor, lista, titulo) {

        if (!contenedor) return;

        contenedor.replaceChildren();

        (lista || []).forEach(src => {

            const marco = document.createElement("div");

            marco.className = "modalFoto";

            const img = document.createElement("img");

            img.src = src;
            img.alt = "Foto de " + titulo;
            img.loading = "lazy";

            img.addEventListener("error", () => {

                marco.remove();

                const grupo = document.getElementById("expFotosGrupo");

                if (grupo) {
                    grupo.hidden = contenedor.children.length === 0;
                }

            }, { once: true });

            marco.appendChild(img);

            contenedor.appendChild(marco);

        });

        const grupo = document.getElementById("expFotosGrupo");

        if (grupo) {
            grupo.hidden = contenedor.children.length === 0;
        }

    }


    // =========================================
    // 8. ABRIR MODAL DE TRAYECTORIA
    // =========================================

    if (expModal && track) {

        track.addEventListener("click", event => {

            const boton = event.target.closest(".cardImage[data-exp]");

            if (!boton || !track.contains(boton)) return;

            const clave = boton.dataset.exp;

            const experiencia = EXPERIENCIAS[clave];

            const tarjeta = boton.closest(".trajectoryCard");

            if (!experiencia || !tarjeta) return;


            // TÍTULO Y FECHA

            const titulo =
                tarjeta.querySelector(".cardInfo h3")?.textContent.trim()
                || "Experiencia";

            const fecha =
                tarjeta.querySelector(".cardInfo span")?.textContent.trim()
                || "EXPERIENCIA PROFESIONAL";


            const meta = document.getElementById("expMeta");

            const title = document.getElementById("expTitle");

            const puesto = document.getElementById("expPuesto");


            if (meta) {
                meta.textContent = fecha;
            }

            if (title) {
                title.textContent = titulo;
            }


            // PUESTO

            if (puesto) {

                const textoPuesto = puesto.querySelector("p");

                if (textoPuesto) {
                    textoPuesto.textContent = experiencia.puesto || "";
                } else {
                    puesto.textContent = experiencia.puesto || "";
                }

                const grupoPuesto = puesto.closest(".modalGroup");

                if (grupoPuesto) {
                    grupoPuesto.hidden = !experiencia.puesto;
                }

            }


            // HERRAMIENTAS Y PROGRAMAS

            llenarLista(
                "expHerramientas",
                experiencia.herramientas
            );

            llenarLista(
                "expProgramas",
                experiencia.programas
            );


            // ACTIVIDADES

            llenarLista(
                "expHabituales",
                experiencia.habituales
            );

            llenarLista(
                "expExtraordinarias",
                experiencia.extraordinarias
            );


            // FOTOGRAFÍAS

            pintarFotos(
                document.getElementById("expFotos"),
                experiencia.fotos,
                titulo
            );


            // ABRIR MODAL

            if (typeof expModal.showModal === "function") {

                if (!expModal.open) {
                    expModal.showModal();
                }

            } else {

                expModal.setAttribute("open", "");

            }

            document.body.classList.add("modal-open");

        });

    }


    // =========================================
    // 9. CERRAR MODALES
    // =========================================

    document.querySelectorAll("dialog").forEach(dialog => {

        const closeButton = dialog.querySelector(".modalClose");

        if (closeButton) {

            closeButton.addEventListener("click", () => {

                if (typeof dialog.close === "function") {
                    dialog.close();
                } else {
                    dialog.removeAttribute("open");
                }

            });

        }


        // CERRAR AL HACER CLIC FUERA

        dialog.addEventListener("click", event => {

            if (event.target === dialog) {

                if (typeof dialog.close === "function") {
                    dialog.close();
                } else {
                    dialog.removeAttribute("open");
                }

            }

        });


        // RESTAURAR SCROLL

        dialog.addEventListener("close", () => {

            const hayModalAbierto = [
                ...document.querySelectorAll("dialog")
            ].some(item => item.open);

            if (!hayModalAbierto) {
                document.body.classList.remove("modal-open");
            }

        });

    });

    // =========================================
    // 9B. MODAL DE EVIDENCIAS
    // =========================================

    const EVIDENCIAS = {

        a1: {
            titulo: "Fe y proposito",
            descripcion: "Escribe aquí la descripción de esta evidencia.",
            fotos: "images/integracion1.jpeg",
            documento: "https://drive.google.com/file/d/1YUPW-MJ10kEBSWKeIqphEqYPTwGgpeTS/view?usp=sharing"   // enlace a tu documento (Drive, PDF, etc.)
        },

        a2: {
            titulo: "Desarrollo integral",
            descripcion: "Escribe aquí la descripción de esta evidencia.",
            fotos: [],
            documento: "https://drive.google.com/file/d/1Hqxd2IjOOGnM5e1XnBPzR6Y1jA8MzOZI/view?usp=sharinghttps://drive.google.com/file/d/1YUPW-MJ10kEBSWKeIqphEqYPTwGgpeTS/view?usp=sharing"
        },

        b1: {
            titulo: "Gestión empresarial",
            descripcion: "Escribe aquí la descripción de esta evidencia.",
            fotos: [],
            documento: "https://drive.google.com/drive/folders/1YMlfGXRRCAkIOwqMsDyY4SiOHBoS1TXH?usp=sharing"
        },

        b2: {
            titulo: "Negocios Internacinales",
            descripcion: "Escribe aquí la descripción de esta evidencia.",
            fotos: [],
            documento: "https://drive.google.com/file/d/1B7oA3hCzEZQvasTFQ_Miri7LrBLFgFde/view?usp=sharing"
        },

        c1: {
            titulo: "Investigación de mercados",
            descripcion: "Escribe aquí la descripción de esta evidencia.",
            fotos: [],
            documento: "https://drive.google.com/drive/folders/1BGzgYqBVwwcUP37FwWYNnX8UETQwwlkw?usp=sharing"
        },

        c2: {
            titulo: "Pensamiento crítico",
            descripcion: "Escribe aquí la descripción de esta evidencia.",
            fotos: [],
            documento: "https://drive.google.com/drive/folders/1OMrRjrpNggmaY368UEyCps4DdhcRWMNJ?usp=sharing"
        },

        d1: {
            titulo: "Gestión de proyectos",
            descripcion: "Proyecto Integrador: Xëpi.",
            fotos: ["images/integracion1.jpeg", "images/integracion2.jpeg", "images/integracion3.jpeg"],
            documento: "https://drive.google.com/file/d/1t1vi8V6j7gCY7gejg2Fe4yVqnTEKZIuT/view?usp=sharing"   // enlace a tu documento (Drive, PDF, etc.)
        },

        d2: {
            titulo: "Trabajo colaborativo",
            descripcion: "Escribe aquí la descripción de esta evidencia.",
            fotos: [],
            documento: "https://drive.google.com/file/d/1vrRv68YGCBB6O_te2jI-p0vkZjqRPVj0/view?usp=sharing"
        }

    };

    const evidenceModal = document.getElementById("evidenceModal");

    if (evidenceModal) {

        document.addEventListener("click", event => {

            const boton = event.target.closest(".evidenceBtn[data-evidence]");

            if (!boton) return;

            const clave = boton.dataset.evidence;
            const evidencia = EVIDENCIAS[clave];

            if (!evidencia) return;

            // CÓDIGO Y TÍTULO

            const categoria = boton.closest(".evidenceCard")
                ?.querySelector(".evidenceCategory")
                ?.textContent.trim() || "EVIDENCIA";

            document.getElementById("modalMeta").textContent =
                "EVIDENCIA " + categoria;

            document.getElementById("modalTitle").textContent =
                evidencia.titulo;

            document.getElementById("modalOpinion").textContent =
                evidencia.descripcion || "";


            // FOTOS

            const contenedorFotos = document.getElementById("modalPhotos");
            const grupoFotos = document.getElementById("modalPhotosGroup");

            contenedorFotos.replaceChildren();

            (evidencia.fotos || []).forEach(src => {

                const marco = document.createElement("div");
                marco.className = "modalFoto";

                const img = document.createElement("img");
                img.src = src;
                img.alt = "Foto de " + evidencia.titulo;
                img.loading = "lazy";

                img.addEventListener("error", () => {
                    marco.remove();
                    grupoFotos.hidden = contenedorFotos.children.length === 0;
                }, { once: true });

                marco.appendChild(img);
                contenedorFotos.appendChild(marco);

            });

            grupoFotos.hidden = contenedorFotos.children.length === 0;


            // DOCUMENTO

            const grupoDoc = document.getElementById("modalDocumentGroup");
            const enlaceDoc = document.getElementById("modalDoc");

            if (evidencia.documento) {
                enlaceDoc.href = evidencia.documento;
                grupoDoc.hidden = false;
            } else {
                grupoDoc.hidden = true;
            }


            // ABRIR

            if (typeof evidenceModal.showModal === "function") {
                if (!evidenceModal.open) evidenceModal.showModal();
            } else {
                evidenceModal.setAttribute("open", "");
            }

            document.body.classList.add("modal-open");

        });

    }
    // =========================================
    // 10. FIN DEL SCRIPT
    // =========================================

});
