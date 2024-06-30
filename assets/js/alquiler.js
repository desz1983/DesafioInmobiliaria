const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: "2 Habitaciones |",
        baños: "2 Baños",
        costo: "200.000 USD",
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: "3 Habitaciones |",
        baños: "3 Baños",
        costo: "250.000 USD",
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: "2 Habitaciones |",
        baños: "2 Baños",
        costo: "220.000 USD",
        smoke: false,
        pets: false
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: "2 Habitaciones |",
        baños: "2 Baños",
        costo: "220.000 USD",
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: "2 Habitaciones |",
        baños: "2 Baños",
        costo: "220.000 USD",
        smoke: false,
        pets: true
    }
];

const alquilerProp = document.querySelector(".propiedades-alquiler");

let html2 = "";

for (let alquiler of propiedadesAlquiler) {
    
    let fumar = "";
    let animales = "";

    if (alquiler.smoke === true) {
        fumar = `<p style="color: green"><i class="fa-solid fa-smoking"></i>Permitido fumar</p>`
    } else {
        fumar = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permite fumar</p>`
    }

    if (alquiler.pets === true) {
        animales = `<p style="color: green"><i class="fa-solid fa-dog"></i>Mascotas permitidas</p>`
    } else {
        animales = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permiten mascotas</p>`
    }

    html2 += `
        <div class="cards">
            <img class="ventas-img" src="${alquiler.src}">
            <div class="ventas-cuerpo">
                <h3 class="ventas-tittle">${alquiler.nombre}</h3>
                <p>${alquiler.descripcion}</p>
                <div class="ventas-ubicacion">
                    <img class="ventas-icon" src="../img/map.svg"><p>${alquiler.ubicacion}</p>
                </div>
                <div class="ventas-habitaciones">
                    <img class="ventas-icon" src="../img/habitacion.png"><p>${alquiler.habitaciones}</p>
                    <img class="ventas-icon" src="../img/baños.png"><p>${alquiler.baños}</p>
                </div>
                <div class="ventas-costo">
                    <img class="ventas-icon" src="../img/precio.png"><p>${alquiler.costo}</p>
                </div>
                <strong>${fumar}</strong>
                <strong>${animales}</strong>
            </div>
        </div>
    `
}

alquilerProp.innerHTML = html2;
