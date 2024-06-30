const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: "4 Habitaciones |",
        baños: "4 baños",
        costo: "500.000 USD",
        smoke: true,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: "2 Habitaciones |",
        baños: "1 Baño",
        costo: "120.000 USD",
        smoke: true,
        pets: true
    }, 
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: "3 Habitaciones |",
        baños: "3 Baños",
        costo: "450.000 USD",
        smoke: false,
        pets: true
    },
    {
        nombre: 'Chalet de lujo en centro de Buenos Aires',
        src: 'https://images.unsplash.com/photo-1586354822120-bf910e563cdf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este chalet exclusivo ofrece una vista panoramica de la ciudad de Buenos Aires',
        ubicacion: '886 Av. Cordoba, entre Gorriti y Saveedra',
        habitaciones: "3 Habitaciones |",
        baños: "2 Baños",
        costo: "250.000 USD",
        smoke: false,
        pets: false
    },
    {
        nombre: 'Chalet de lujo en centro de Buenos Aires',
        src: 'https://images.unsplash.com/photo-1586354822120-bf910e563cdf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este chalet exclusivo ofrece una vista panoramica de la ciudad de Buenos Aires',
        ubicacion: '886 Av. Cordoba, entre Gorriti y Saveedra',
        habitaciones: "3 Habitaciones |",
        baños: "2 Baños",
        costo: "250.000 USD",
        smoke: false,
        pets: false
    }
];

// Creando la galeria de propiedades en venta

const ventasProp = document.querySelector(".propiedades-venta");

let html1 = "";

for (let ventas of propiedadesVenta) {
    
    let fumar = "";
    let animales = "";

    if (ventas.smoke === true) {
        fumar = `<p style="color: green"><i class="fa-solid fa-smoking"></i>Permitido fumar</p>`
    } else {
        fumar = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permite fumar</p>`
    }

    if (ventas.pets === true) {
        animales = `<p style="color: green"><i class="fa-solid fa-dog"></i>Mascotas permitidas</p>`
    } else {
        animales = `<p style="color: red"><i class="fa-solid fa-ban"></i>No se permiten mascotas</p>`
    }

    html1 += `
        <div class="cards">
            <img class="ventas-img" src="${ventas.src}">
            <div class="ventas-cuerpo">
                <h3 class="ventas-tittle">${ventas.nombre}</h3>
                <p>${ventas.descripcion}</p>
                <div class="ventas-ubicacion">
                    <img class="ventas-icon" src="../img/map.svg"><p>${ventas.ubicacion}</p>
                </div>
                <div class="ventas-habitaciones">
                    <img class="ventas-icon" src="../img/habitacion.png"><p>${ventas.habitaciones}</p>
                    <img class="ventas-icon" src="../img/baños.png"><p>${ventas.baños}</p>
                </div>
                <div class="ventas-costo">
                    <img class="ventas-icon" src="../img/precio.png"><p>${ventas.costo}</p>
                </div>
                <strong>${fumar}</strong>
                <strong>${animales}</strong>
            </div>
        </div>
    `
}

ventasProp.innerHTML = html1;