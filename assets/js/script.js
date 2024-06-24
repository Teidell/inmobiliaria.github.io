const propiedades_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: true
    },

    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    banos: 2,
    costo: 2500,
    smoke: true,
    pets: true
    },

    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: false
    },

    {
    nombre: 'Moderna casa cerca de la gran ciudad',
    src: 'https://s.oneroof.co.nz/image/17/7a/177a56137693ccc0fa247418ed5d0b1e.jpg?x-oss-process=image/quality,q_80/resize,w_1080/format,webp',
    descripcion: '',
    ubicacion: '24 George Deane Place, North Shore City, New Zealand',
    habitaciones: 6,
    banos: 3,
    costo: 1650,
    smoke: false,
    pets: false
    }

]

const propiedades_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false
    },

    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true
    },

    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true
    },

    {
    nombre: 'Casa a metros del lago con vista a las montañas',
    src: 'https://s.oneroof.co.nz/image/fc/88/fc8802d312c6b5bf487d22c777bed19d.jpg?x-oss-process=image/quality,q_80/resize,w_1080/format,webp',
    descripcion: '',
    ubicacion: '16 Panners Way, Queenstown, New Zealand',
    habitaciones: 6,
    banos: 5,
    costo: 1950,
    smoke: false,
    pets: true
    }

    ]
    
const venta = document.querySelector("#seccionventas");
const alquiler = document.querySelector("#seccionalquiler");

if(venta !== null ){
    let html = ''
    for(let enventa of propiedades_venta){
    html += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img src="${propiedades_venta.src}" class="card-img-top" alt="Imagen del departamento"/>
    <div class="card-body">
    <h5 class="card-title">${propiedades_venta.nombre}</h5>
    <p class="card-text">${propiedades_venta.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedades_venta.ubicacion}</p>
    <p><i class="fas fa-bed"></i> ${propiedades_venta.habitaciones} Habitaciones |<i class="fas fa-bath"></i> ${propiedades_venta.banos} Baños</p>
    <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta.costo}</p>
    <p class="${propiedades_venta.smoke ? 'text-success' : 'text-danger'}"><i class="fas ${propiedades_venta.smoke ? 'fa-smoking' : 'fa-smoking-ban'} "></i> ${propiedades_venta.smoke ? 'Permitido fumar' : 'No se permite fumar'} </p>
    <p class="${propiedades_venta.pets ? 'text-success' : 'text-danger'}"><i class="fas ${propiedades_venta.pets ? 'fa-paw' : 'fa-ban'} "></i> ${propiedades_venta.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'} </p>
    </div>
    </div>
    </div>
    `;
    }
    venta.innerHTML = html
}
if(alquiler !== null){
    let html = ''
    for(let enalquiler of propiedades_alquiler){
    html += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img src="${propiedades_alquiler.src}" class="card-img-top" alt="Imagen del departamento"/>
    <div class="card-body">
    <h5 class="card-title">${propiedades_alquiler.nombre}</h5>
    <p class="card-text">${propiedades_alquiler.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedades_alquiler.ubicacion}</p>
    <p><i class="fas fa-bed"></i> ${propiedades_alquiler.habitaciones} Habitaciones |<i class="fas fa-bath"></i> ${propiedades_alquiler.banos} Baños</p>
    <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler.costo}</p>
    <p class="${propiedades_alquiler.smoke ? 'text-success' : 'text-danger'}"><i class="fas ${propiedades_alquiler.smoke ? 'fa-smoking' : 'fa-smoking-ban'} "></i> ${propiedades_alquiler.smoke ? 'Permitido fumar' : 'No se permite fumar'} </p>
    <p class="${propiedades_alquiler.pets ? 'text-success' : 'text-danger'}"><i class="fas ${propiedades_alquiler.pets ? 'fa-paw' : 'fa-ban'} "></i> ${propiedades_alquiler.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'} </p>
    </div>
    </div>
    </div>
    `;
    }
    alquiler.innerHTML = html
}
if(venta !== null && alquiler !== null){
    let htmlventa = ''
    for(let enventa of propiedades_venta.slice(0, 3)){
    htmlventa += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img src="${propiedades_venta.src}" class="card-img-top" alt="Imagen del departamento"/>
    <div class="card-body">
    <h5 class="card-title">${propiedades_venta.nombre}</h5>
    <p class="card-text">${propiedades_venta.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedades_venta.ubicacion}</p>
    <p><i class="fas fa-bed"></i> ${propiedades_venta.habitaciones} Habitaciones |<i class="fas fa-bath"></i> ${propiedades_venta.banos} Baños</p>
    <p><i class="fas fa-dollar-sign"></i> ${propiedades_venta.costo}</p>
    <p class="${propiedades_venta.smoke ? 'text-success' : 'text-danger'}"><i class="fas ${propiedades_venta.smoke ? 'fa-smoking' : 'fa-smoking-ban'} "></i> ${propiedades_venta.smoke ? 'Permitido fumar' : 'No se permite fumar'} </p>
    <p class="${propiedades_venta.pets ? 'text-success' : 'text-danger'}"><i class="fas ${propiedades_venta.pets ? 'fa-paw' : 'fa-ban'} "></i> ${propiedades_venta.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'} </p>
    </div>
    </div>
    </div>
    `;
       }
    venta.innerHTML = htmlventa 
    
    let htmlAlquiler = ''
    for(let enalquiler of propiedades_alquiler.slice(0, 3)){
    htmlAlquiler += `
    <div class="col-md-4 mb-4">
    <div class="card">
    <img src="${propiedades_alquiler.src}" class="card-img-top" alt="Imagen del departamento"/>
    <div class="card-body">
    <h5 class="card-title">${propiedades_alquiler.nombre}</h5>
    <p class="card-text">${propiedades_alquiler.descripcion}</p>
    <p><i class="fas fa-map-marker-alt"></i> ${propiedades_alquiler.ubicacion}</p>
    <p><i class="fas fa-bed"></i> ${propiedades_alquiler.habitaciones} Habitaciones |<i class="fas fa-bath"></i> ${propiedades_alquiler.banos} Baños</p>
    <p><i class="fas fa-dollar-sign"></i> ${propiedades_alquiler.costo}</p>
    <p class="${propiedades_alquiler.smoke ? 'text-success' : 'text-danger'}"><i class="fas ${propiedades_alquiler.smoke ? 'fa-smoking' : 'fa-smoking-ban'} "></i> ${propiedades_alquiler.smoke ? 'Permitido fumar' : 'No se permite fumar'} </p>
    <p class="${propiedades_alquiler.pets ? 'text-success' : 'text-danger'}"><i class="fas ${propiedades_alquiler.pets ? 'fa-paw' : 'fa-ban'} "></i> ${propiedades_alquiler.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'} </p>
    </div>
    </div>
    </div>
    `;
   }
alquiler.innerHTML = htmlAlquiler
}