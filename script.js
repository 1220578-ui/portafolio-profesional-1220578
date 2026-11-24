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

            puesto: "Líder de equipo | Gerente general (2022-2026)",

            herramientas: [
                "HTML, CSS y JavaScript para el desarrollo de la página web",
                "Excel y herramientas de gestión de proyectos",
                "Investigación de mercados y análisis del consumidor",
                "Planeación estratégica y desarrollo de modelos de negocio",
                "Liderazgo, coordinación de equipos y toma de decisiones"
            ],

            programas: [
                "Desarrollo de XËPI, emprendimiento de skincare con una propuesta basada en las necesidades de la piel y las condiciones climáticas",
                "Investigación de mercado y análisis del consumidor para definir la propuesta de valor y el portafolio de productos",
                "Diseño y desarrollo de la página web del emprendimiento utilizando HTML, CSS y JavaScript"
            ],

            habituales: [
                "Dirección y coordinación del equipo de trabajo",
                "Gestión de actividades, asignación de responsabilidades y seguimiento de avances",
                "Desarrollo estratégico del modelo de negocio, desde la investigación de mercado hasta la planeación financiera",
                "Coordinación de las distintas áreas del proyecto y seguimiento al cumplimiento de objetivos",
                "Participación en la toma de decisiones y resolución de situaciones durante el desarrollo del emprendimiento"
            ],

            extraordinarias: [
                "Diseño y desarrollo de la página web del emprendimiento mediante HTML, CSS y JavaScript, integrando la identidad visual de la marca y elementos interactivos"
            ],

            fotos: [
                "xepi1.jpeg",
                "xepi2.jpeg",
                "xepi3.jpeg"
            ]
        },


adventus: {

    puesto: "Asistente editorial y administrativa",

    herramientas: [
        "Excel para el control de ventas, inventario y seguimiento de pagos",
        "HTML y CSS para edición y mantenimiento de sitios web",
        "WordPress para gestión y actualización de contenidos digitales",
        "Herramientas digitales para organización y gestión documental"
    ],

    programas: [
        "Gestión administrativa y operativa de una empresa editorial",
        "Digitalización y organización de información administrativa",
        "Mantenimiento y actualización de plataformas web editoriales",
        "Seguimiento de operaciones comerciales y control de recursos"
    ],

    habituales: [
        "Control y actualización de registros de ventas e inventario",
        "Seguimiento de pagos y elaboración de reportes administrativos",
        "Realización de conciliaciones sencillas y revisión de registros",
        "Edición y mantenimiento de sitios web mediante HTML, CSS y WordPress",
        "Actualización y organización de contenidos digitales",
        "Organización de información administrativa y seguimiento de pendientes",
        "Apoyo en actividades operativas y coordinación de tareas administrativas"
    ],

    extraordinarias: [
        "Apoyo en la continuidad de las actividades administrativas durante cambios en el equipo de trabajo, asumiendo nuevas responsabilidades y colaborando directamente con la gerencia de Recursos Humanos."
    ],

    fotos: [
        "adventus1.jpeg",
        "adventus2.jpeg",
        "adventus3.jpeg"
    ]

},


enactus: {

    puesto: "Vicepresidenta de Marketing | Enactus Hub UM (Oct 2025-Ago 2026)",

    herramientas: [
        "Comunicación organizacional y seguimiento individual",
        "Articulación de equipos y coordinación de iniciativas",
        "Planeación y seguimiento de programas",
        "Organización de actividades mediante comisiones y equipos de trabajo",
        "Gestión de recursos y adaptación ante cambios organizacionales"
    ],

    programas: [
        "Recuperación de la continuidad operativa del Hub junto con la nueva presidencia",
        "Integración y mantenimiento de una comunidad de más de 45 integrantes, mayoritariamente nuevos",
        "Organización de actividades y distribución de responsabilidades con una estructura operativa reducida"
    ],

    habituales: [
        "Comunicación individual 1:1 para mantener informados y vinculados a los integrantes",
        "Seguimiento de la participación y atención de inquietudes",
        "Identificación de habilidades e intereses para vincular miembros con actividades y comisiones",
        "Coordinación de iniciativas de comunicación interna",
        "Adaptación de programas heredados de la administración anterior",
        "Colaboración con la nueva presidencia en la organización y continuidad operativa del Hub"
    ],

    extraordinarias: [
        "Junto con la nueva presidencia, asumimos la continuidad del Hub durante una etapa de crisis organizacional. La mayoría de los integrantes eran nuevos, por lo que contábamos con poco soporte operativo y era necesario acompañarlos en su integración y participación. Gestionamos los programas heredados, identificando aquellos que demandaban demasiado tiempo y recursos, y reorganizamos los esfuerzos según las capacidades y prioridades del equipo. Mediante el seguimiento individual, la comunicación y la distribución de actividades por comisiones, conseguimos mantener activa una comunidad de más de 45 integrantes, con un equipo central de dos personas y apoyo ocasional de colaboradores."
    ],

    fotos: [
        "enactus1.jpeg",
        "enactus2.jpeg",
        "enactus3.jpeg"
    ]

},


     
jybsa: {

    puesto: "Practicante de Recursos Humanos (Oct-Nov 2026)",

    herramientas: [
        "Excel para el control, revisión y seguimiento de información",
        "Organización, integración y digitalización de expedientes",
        "Gestión documental para procesos de auditoría",
        "Comunicación y seguimiento con colaboradores y candidatos"
    ],

    programas: [
        "Preparación documental y atención de requerimientos para auditoría",
        "Revisión, integración y actualización de expedientes del personal",
        "Organización de información laboral, fiscal y administrativa",
        "Apoyo en la documentación relacionada con la NOM-035-STPS-2018"
    ],

    habituales: [
        "Recopilación, revisión y organización de evidencias documentales para auditoría",
        "Integración, digitalización y actualización de expedientes del personal",
        "Verificación y seguimiento de información de nómina fiscal e interna",
        "Control de documentación laboral y administrativa",
        "Apoyo en reclutamiento y comunicación con candidatos",
        "Seguimiento de requerimientos y pendientes del área de Recursos Humanos"
    ],

    extraordinarias: [
        "Asunción temporal de responsabilidades de Recursos Humanos tras la salida de la gerente, brindando apoyo directo a la gerente administrativa en la preparación de auditoría, recopilación de evidencias e integración de información y documentación requerida."
    ],

    fotos: [
        "jybsa1.jpg",
        "jybsa2.jpeg",
        "jybsa3.jpeg"
    ]

},



club: {

    puesto: "Subdirectora (2025) | Directora (2026)",

    herramientas: [
        "Planeación estratégica y coordinación institucional",
        "Excel y Google Sheets para el control de información",
        "Google Apps Script para automatización de procesos administrativos",
        "Generación automatizada de informes en Google Docs",
        "Organización y gestión documental"
    ],

    programas: [
        "Planeación anual del Club Aventureros Shaddai en coordinación con su directiva",
        "Participación en la planeación institucional de la iglesia mediante su junta directiva",
        "Desarrollo de programas formativos y actividades para niños y jóvenes",
        "Organización de iniciativas de servicio comunitario"
    ],

    habituales: [
        "Participación en reuniones de directiva para establecer objetivos, programas y calendarios de trabajo",
        "Planeación y coordinación de actividades conforme a los acuerdos establecidos",
        "Participación en la junta directiva de la iglesia para planificar iniciativas entre ministerios",
        "Distribución de responsabilidades y seguimiento de los planes acordados",
        "Supervisión de programas y evaluación de actividades",
        "Gestión de permisos, autorizaciones y expedientes de participantes",
        "Comunicación y seguimiento con padres de familia y consejeros"
    ],

    extraordinarias: [
        "Desarrollo de un sistema automatizado de generación de informes mediante Google Apps Script, integrando información de hojas de cálculo con plantillas de Google Docs para agilizar la elaboración de reportes administrativos."
    ],

    fotos: [
        "club1.jpeg",
        "club2.jpeg",
        "club3.jpeg"
    ]

},


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
            titulo: "Fe y propósito",
            descripcion: "He fortalecido esta competencia al reconocer que Dios puede dirigir mis decisiones y propósitos a través de personas y oportunidades externas a la iglesia. Quienes no comparten nuestras creencias no deben ser considerados ajenos a nuestra misión, pues también pueden convertirse en aliados estratégicos para impulsar proyectos y contribuir a su desarrollo.",
            fotos: [
                "cosmovision1.png",
                "cosmovision11.png",
                "cosmovision12.png"
            ],
            documento: "https://drive.google.com/file/d/1YUPW-MJ10kEBSWKeIqphEqYPTwGgpeTS/view?usp=sharing"
        },

        a2: {
            titulo: "Desarrollo integral",
            descripcion: "Comprendí que el propósito de mi liderazgo no está en los cargos que alcance o en la posición que ocupe, sino en la huella que dejo en las personas con las que convivo. Esta reflexión me llevó a reconocer la importancia de escuchar, comprender y acompañar a quienes enfrentan dificultades, procurando que mi manera de relacionarme con los demás refleje el ejemplo de Jesús.",
            fotos: [
                "cosmovision2.jpeg",
                "cosmovision21.jpeg"
            ],
            documento: "https://drive.google.com/file/d/1Hqxd2IjOOGnM5e1XnBPzR6Y1jA8MzOZI/view?usp=sharing"
        },

        b1: {
            titulo: "Fintech ante la IA",
            descripcion: "Investigué el mercado FINTECH en México, China, Estados Unidos y Reino Unido, recopilando y comparando sus respectivos marcos regulatorios. Revisé las disposiciones legales aplicables al sector e identifiqué diferencias en los requisitos de operación, supervisión y prestación de servicios financieros. El análisis me permitió comprender cómo la regulación influye en las oportunidades de expansión y las condiciones de competencia de las empresas FINTECH.",
            fotos: [
                "conocimiento11.png",
                "conocimiento12.png",
                "conocimiento13.png"
            ],
            documento: "https://drive.google.com/file/d/1BE8lqbZhlTMMYh3V04Qag19mSONjrDDq/view?usp=sharing"
        },

        b2: {
            titulo: "Indicadores Unión Europea",
            descripcion: "Recopilamos y analizamos los principales indicadores económicos de la Unión Europea, identificando tendencias y diferencias entre sus países. Desarrollamos un dashboard interactivo en R para consultar, comparar y visualizar información de los 27 países durante el periodo 2010-2023. El trabajo implicó organizar las bases de datos, seleccionar indicadores, construir visualizaciones e interpretar los resultados para identificar cambios y comportamientos económicos a lo largo del tiempo.",
            fotos: [
                "conocimiento21.png",
                "conocimiento22.png",
                "conocimiento23.png",
                "conocimiento24.png"
            ],
            documento: "https://drive.google.com/file/d/1B7oA3hCzEZQvasTFQ_Miri7LrBLFgFde/view?usp=sharing"
        },

        c1: {
            titulo: "Jaztea en el mercado tunecino",
            descripcion: "Analizamos las condiciones del mercado tunecino para determinar la viabilidad de introducir JAZTEA en el país. Investigamos los hábitos de consumo, las preferencias locales, la competencia y las barreras de entrada, identificando las diferencias respecto al mercado de origen. Con base en estos hallazgos, evaluamos los ajustes necesarios en la propuesta comercial y las alternativas para facilitar su ingreso al mercado.",
            fotos: [
                "investigacion12.png",
                "investigacion13.png",
                "investigacion11.png"
            ],
            documento: "https://drive.google.com/drive/folders/1BGzgYqBVwwcUP37FwWYNnX8UETQwwlkw?usp=sharing"
        },

        c2: {
            titulo: "Pensamiento crítico",
            descripcion: "Participé en el análisis estadístico de una investigación sobre resiliencia y desempeño laboral en PyMEs. El trabajo incluyó la revisión y preparación de datos, aplicación de pruebas estadísticas, análisis de relaciones entre variables y segmentación mediante clústeres. A partir de los resultados, identificamos patrones y agrupaciones que facilitaron la interpretación de los datos y la elaboración de conclusiones.",
            fotos: [
                "investigacion21.png",
                "investigacion22.png",
                "investigacion23.png"
            ],
            documento: "https://drive.google.com/drive/folders/1OMrRjrpNggmaY368UEyCps4DdhcRWMNJ?usp=sharing"
        },

        d1: {
            titulo: "Proyecto integrador: Xëpi",
            descripcion: "Organizamos el proyecto por áreas de trabajo, distribuyendo las actividades de acuerdo con los conocimientos y habilidades de cada integrante. Definimos responsabilidades, establecimos una secuencia de trabajo y coordinamos los avances para integrar las distintas aportaciones. Durante el desarrollo, mantuvimos comunicación para resolver pendientes, revisar resultados y asegurar que cada área aportara a la construcción del proyecto completo.",
            fotos: [
                "integracion13.jpeg",
                "integracion11.jpeg",
                "integracion12.jpeg"
            ],
            documento: "https://drive.google.com/file/d/1t1vi8V6j7gCY7gejg2Fe4yVqnTEKZIuT/view?usp=sharing"
        },

        d2: {
            titulo: "Servicio comunitario UPS",
            descripcion: "Aunque teníamos un plan basado en el programa Salud en Casa, enfocado en la salud física, la situación de la familia, que atravesaba un duelo, nos llevó a replantear la actividad. Aprendí que gestionar un proyecto también implica reconocer cuándo las actividades planeadas no responden a las necesidades de las personas y ajustar lo previsto para aprovechar mejor el tiempo y atender su situación.",
            fotos: [
                "integracion23.jpeg",
                "integracion21.jpeg",
                "integracion22.jpeg"
            ],
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
                enlaceDoc.target = "_blank";
                enlaceDoc.rel = "noopener";
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