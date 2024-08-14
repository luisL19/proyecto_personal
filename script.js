document.addEventListener("DOMContentLoaded", function() {
    const formRegistro = document.getElementById('form-registro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obtener datos del formulario
            const nombre = document.getElementById('nombre-dulce').value;
            const categoria = document.getElementById('categoria-dulce').value;
            const region = document.getElementById('region-dulce').value;
            const precio = document.getElementById('precio-dulce').value;
            
            // Crear un nuevo objeto dulce
            const nuevoDulce = {
                nombre: nombre,
                categoria: categoria,
                region: region,
                precio: precio,
                descripcion: 'Descripción no disponible'
            };
            
            // Agregar el nuevo dulce al array de productos
            productos.push(nuevoDulce);
            
            // Mostrar el nuevo dulce en la vista
            mostrarProductos(productos);
            
            // Confirmar el registro
            alert('Dulce registrado correctamente');
            formRegistro.reset(); // Resetear el formulario
            closeRegisterModal(); // Cerrar el modal después del envío
        });
    }

    const formRegistroCliente = document.getElementById('form-registro-cliente');
    if (formRegistroCliente) {
        formRegistroCliente.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Confirmar la compra
            alert('Compra realizada correctamente');
            
            // Vaciar el carrito
            carrito.length = 0;
            
            // Actualizar la vista del carrito
            mostrarCarrito();
            
            // Cerrar el modal después del envío
            closeModal();
        });
    }

    loadPage('home'); // Cargar la página principal al iniciar
});

const productos = [
    { nombre: 'Arequipe', categoria: 'dulce', region: 'andina', precio: 'medio', descripcion: 'Delicioso arequipe artesanal' },
    { nombre: 'Chocoramo', categoria: 'dulce', region: 'andina', precio: 'bajo', descripcion: 'Pastel de chocolate cubierto de azúcar' },
    { nombre: 'Bocadillo', categoria: 'dulce', region: 'caribe', precio: 'bajo', descripcion: 'Bocadillo de guayaba' },
    // Agrega más productos según sea necesario
];

const dulcesPorRegion = {
    andina: [
        { nombre: 'Arequipe', descripcion: 'Delicioso arequipe artesanal' },
        { nombre: 'Chocoramo', descripcion: 'Pastel de chocolate cubierto de azúcar' },
        { nombre: 'Bocadillo', descripcion: 'Bocadillo de guayaba' },
        { nombre: 'Galleta de Sal', descripcion: 'Galleta crujiente con un toque salado' },
        { nombre: 'Café Caramelo', descripcion: 'Caramelo con sabor a café' }
    ],
    caribe: [
        { nombre: 'Bocadillo', descripcion: 'Bocadillo de guayaba' },
        { nombre: 'Arequipe', descripcion: 'Delicioso arequipe artesanal' },
        { nombre: 'Chocoramo', descripcion: 'Pastel de chocolate cubierto de azúcar' },
        { nombre: 'Galleta de Sal', descripcion: 'Galleta crujiente con un toque salado' },
        { nombre: 'Café Caramelo', descripcion: 'Caramelo con sabor a café' }
    ],
    pacifica: [
        { nombre: 'Chocoramo', descripcion: 'Pastel de chocolate cubierto de azúcar' },
        { nombre: 'Galleta de Sal', descripcion: 'Galleta crujiente con un toque salado' },
        { nombre: 'Cuca', descripcion: 'Dulce a base de panela y nueces' },
        { nombre: 'Tamarindo', descripcion: 'Dulce de tamarindo muy popular' },
        { nombre: 'Arequipe', descripcion: 'Delicioso arequipe artesanal' }
    ],
    amazonia: [
        { nombre: 'Cuca', descripcion: 'Dulce a base de panela y nueces' },
        { nombre: 'Tamarindo', descripcion: 'Dulce de tamarindo muy popular' },
        { nombre: 'Arequipe', descripcion: 'Delicioso arequipe artesanal' },
        { nombre: 'Chocoramo', descripcion: 'Pastel de chocolate cubierto de azúcar' },
        { nombre: 'Café Caramelo', descripcion: 'Caramelo con sabor a café' }
    ],
    orinoquia: [
        { nombre: 'Galleta de Sal', descripcion: 'Galleta crujiente con un toque salado' },
        { nombre: 'Cuca', descripcion: 'Dulce a base de panela y nueces' },
        { nombre: 'Arequipe', descripcion: 'Delicioso arequipe artesanal' },
        { nombre: 'Chocoramo', descripcion: 'Pastel de chocolate cubierto de azúcar' },
        { nombre: 'Bocadillo', descripcion: 'Bocadillo de guayaba' }
    ]
};

function loadPage(page) {
    const mainContent = document.getElementById('main-content');
    if (page === 'registro') {
        fetch('registro.html')
            .then(response => response.text())
            .then(data => mainContent.innerHTML = data)
            .catch(error => console.error('Error loading page:', error));
    } else if (page === 'carrito') {
        mainContent.innerHTML = `
            <section id="carrito">
                <h2>Carrito de Compras</h2>
                <div id="lista-carrito">
                    <!-- Aquí se mostrarán los productos en el carrito -->
                </div>
            </section>
        `;
        mostrarCarrito();
    } else if (page === 'regiones') {
        mainContent.innerHTML = `
            <section id="regiones">
                <h2>Regiones</h2>
                <div id="lista-regiones">
                    <!-- Aquí se mostrarán los dulces por región -->
                </div>
            </section>
        `;
        mostrarRegiones();
    } else if (page === 'precios') {
        mainContent.innerHTML = `
            <section id="precios">
                <h2>Filtrar por Precio</h2>
                <!-- Agregar contenido relevante para precios aquí -->
            </section>
        `;
    } else {
        mainContent.innerHTML = `
            <section id="productos">
                <h2>Productos Típicos Colombianos</h2>
                <div id="filtros">
                    <select id="categoria">
                        <option value="">Categoría</option>
                        <option value="dulce">Dulce</option>
                        <option value="salado">Salado</option>
                    </select>
                    <select id="region">
                        <option value="">Región</option>
                        <option value="andina">Andina</option>
                        <option value="caribe">Caribe</option>
                        <option value="pacifica">Pacífica</option>
                        <option value="amazonia">Amazonia</option>
                        <option value="orinoquia">Orinoquía</option>
                    </select>
                    <select id="precio">
                        <option value="">Precio</option>
                        <option value="bajo">Bajo</option>
                        <option value="medio">Medio</option>
                        <option value="alto">Alto</option>
                    </select>
                    <button onclick="filtrarProductos()">Filtrar</button>
                    <button onclick="reiniciarFiltros()">Reiniciar Filtros</button>
                </div>
                <div id="lista-productos">
                    <!-- Aquí se mostrarán los productos -->
                </div>
            </section>
        `;
        mostrarProductos(productos);
    }

    // Mostrar animación de texto en la página de inicio
    if (page === 'home') {
        document.getElementById('animacion-texto').style.display = 'block';
    } else {
        document.getElementById('animacion-texto').style.display = 'none';
    }
}

function mostrarRegiones() {
    const listaRegiones = document.getElementById('lista-regiones');
    listaRegiones.innerHTML = '';

    for (const [region, dulces] of Object.entries(dulcesPorRegion)) {
        const regionElement = document.createElement('div');
        regionElement.classList.add('region');
        regionElement.innerHTML = `
            <h3>Región ${region.charAt(0).toUpperCase() + region.slice(1)}</h3>
            <ul>
                ${dulces.map(dulce => `
                    <li>
                        <strong>${dulce.nombre}</strong>: ${dulce.descripcion}
                    </li>
                `).join('')}
            </ul>
        `;
        listaRegiones.appendChild(regionElement);
    }
}

function filtrarProductos() {
    const categoria = document.getElementById('categoria').value;
    const region = document.getElementById('region').value;
    const precio = document.getElementById('precio').value;

    const productosFiltrados = productos.filter(producto => {
        return (categoria === "" || producto.categoria === categoria) &&
               (region === "" || producto.region === region) &&
               (precio === "" || producto.precio === precio);
    });

    mostrarProductos(productosFiltrados);
}

function reiniciarFiltros() {
    document.getElementById('categoria').value = '';
    document.getElementById('region').value = '';
    document.getElementById('precio').value = '';

    mostrarProductos(productos);
}

function mostrarProductos(productos) {
    const listaProductos = document.getElementById('lista-productos');
    listaProductos.innerHTML = '';

    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        productoElement.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Categoría: ${producto.categoria}</p>
            <p>Región: ${producto.region}</p>
            <p>Precio: ${producto.precio}</p>
            <button onclick="agregarAlCarrito('${producto.nombre}')">Agregar al Carrito</button>
        `;
        listaProductos.appendChild(productoElement);
    });
}

const carrito = [];

function agregarAlCarrito(nombreProducto) {
    const producto = productos.find(p => p.nombre === nombreProducto);
    if (producto) {
        carrito.push(producto);
        alert(`${producto.nombre} ha sido añadido al carrito.`);
    }
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    listaCarrito.innerHTML = '';

    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<p>No hay productos en el carrito.</p>';
    } else {
        carrito.forEach(producto => {
            const productoElement = document.createElement('div');
            productoElement.classList.add('producto');
            productoElement.innerHTML = `
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>Categoría: ${producto.categoria}</p>
                <p>Región: ${producto.region}</p>
                <p>Precio: ${producto.precio}</p>
            `;
            listaCarrito.appendChild(productoElement);
        });
    }
}

// Funciones para abrir y cerrar los modales
function openModal() {
    document.getElementById('modal-cliente').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal-cliente').style.display = 'none';
}

function openRegisterModal() {
    document.getElementById('modal-registro-dulce').style.display = 'block';
}

function closeRegisterModal() {
    document.getElementById('modal-registro-dulce').style.display = 'none';
}
