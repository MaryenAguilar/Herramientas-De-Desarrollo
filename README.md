# 🛍️ Joyería Online - E-commerce  

 **Joyeria Marly** - El proyecto de desarrollo de una aplicación web para Marly Handmade Jewelry nace como respuesta a la necesidad de modernizar y optimizar los procesos internos y externos de la empresa. Esta iniciativa busca no solo mejorar la gestión de ventas y el control administrativo, sino también elevar la calidad de la atención al cliente, brindando una experiencia más ágil, accesible y personalizada.

En un entorno en el que el comercio electrónico ha adquirido un rol protagónico, resulta indispensable que los negocios se adapten a las nuevas dinámicas del mercado digital. La implementación de esta plataforma representa una estrategia clave para competir en un mercado cada vez más globalizado, dinámico y exigente, donde los consumidores valoran la rapidez, eficiencia y facilidad de acceso a productos y servicios.

De esta manera, la aplicación web no solo se convierte en una herramienta tecnológica, sino en un motor de transformación digital que permitirá a Joyería Marly fortalecer su presencia en línea, ampliar su alcance comercial y consolidar relaciones más sólidas con sus clientes actuales y potenciales.

### Requerimientos funcionales
 - El aplicativo web debe permitir al usuario poder registrarse y logearse
 - El aplicativo web debe permitir al usuario visualizar el catalogo de productos 
 - El aplicativo web debe permitir al usuario realizar una compra
 - El aplicativo web debe permitir al usuario descargar la boleta de su compra
 - El aplicativo web debe permitir al usuario visualizar los términos y condiciones
 - El aplicativo web debe permitir al usuario realizar un reclamo
 - El aplicativo web debe permitir al usuario tener acceso al carrito de compras
 - El aplicativo web debe permitir al administrador eliminar productos 
 - El aplicativo web debe permitir al administrador editar productos
 - El aplicativo web debe permitir al administrador agregar productos
 - El aplicativo web debe permitir al administrador eliminar clientes
 - El aplicativo web debe permitir al administrador editar clientes
 - El aplicativo web debe permitir al administrador editar estado del reclamo
 - El aplicativo web debe permitir al administrador Visualizar listado de clientes
 - El aplicativo web debe permitir al administrador Visualizar listado de productos
 - El aplicativo web debe permitir al administrador Visualizar listado de reclamos
 ### Requerimientos no funcionales
 - Usabilidad: La plataforma debe ser intuitiva y fácil de usar incluso para clientes no familiarizados con compras online.
 - Compatibilidad: Diseño responsive, debe adaptarse a computadoras, tabletas y móviles.
 - Seguridad: Protección de datos personales, cifrado de contraseñas y seguridad en transacciones.
 - Rendimiento: Buen rendimiento, carga rápida de páginas, especialmente en catálogo y carrito.
 - Escalabilidad: Posibilidad de integrar en el futuro pasarelas de pago, envío internacional o tracking de pedidos.
---

## 🚀 Tecnologías utilizadas  

### Backend  
- **Spring Boot** (Java) – Framework principal para la lógica de negocio y APIs REST.  
- **IntelliJ IDEA** – IDE de desarrollo.  
- **MySQL** – Base de datos relacional para almacenamiento de información.  

### Frontend  
- **Vite + React** – Framework moderno para el desarrollo de la interfaz de usuario.  
- **CSS/Tailwind** – Estilos y diseño responsivo.  

---

## 📦 Instalación y ejecución  

### Backend (Spring Boot)  
```bash
# Clonar repositorio
git clone https://github.com/MaryenAguilar/Herramientas-De-Desarrollo.git

# Entrar al proyecto backend
cd backend

# Compilar y ejecutar
./mvnw spring-boot:run
```

### Frontend (React + Vite)
```bash
# Entrar al proyecto frontend
cd Herramientas-De-Desarrollo

# Instalar dependencias
npm install

# Ejecutar en entorno local
npm run dev
```

### Base de datos (MySQL)
- Crear una base de datos llamada joyeriaBD.
- Ejecutar el script SQL de creación de tablas (disponible en /db).
- Configurar credenciales en application.properties de Spring Boot.

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/joyeriaBD
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
```

## 👥 Roles y Créditos
| Nombre | Rol | Funciones |
|--------|-----|-----------|
| Edson | Dev FullStack | Productos |
| Giancarlo | Dev FullStack | Login y Registro |
| Maryen | Git Master y Dev FullStack | Control de versiones |
| Nayeli | Dev FullStack | Reclamos |
| Anthony | Dev FullStack | Base de Datos |

## 👥 Roles del sistema  

### Cliente  
- Registrar un usuario nuevo
- Ver productos disponibles
- Agregar/quitar productos del carrito
- Visualizar el total de compra
- Realizar una compra
- Descargar la boleta de compra
- Realizar un reclamo.
- Visualizar los términos y condiciones

### Administrador  
- Gestionar clientes (visualizar, editar, eliminar, buscar por DNI).  
- Gestionar productos (visualizar, agregar, modificar, eliminar, buscar por código).  
- Visualizar ventas realizadas y acceder a boletas.  
- Visualizar y editar productos.  
- Consultar pedidos por cliente (DNI o código de venta).   

---

## 📂 Arquitectura  

El proyecto sigue el **patrón de diseño MVC (Modelo - Vista - Controlador)**:  
- **Modelo**: Entidades como Producto, Pedido, Venta, Usuario, etc.  
- **Vista**: Interfaz desarrollada con React + Vite.  
- **Controlador**: Endpoints REST con Spring Boot.  

---

## 🗄️ Base de datos  

Se implementó en **MySQL**, con tablas principales como:  
- `Usuario`, `Roles`  , `Usuario_Rol`  
- `Producto`, `CategoriaProducto`, `Material`, `Coleccion`  
- `Pedido`, `DetallePedido`, `EstadoPedido`  
- `Venta`, `Boleta`

---

## 🔄 Flujo de Trabajo en Git
### Estructura de ramas: 
Rama feature: 
Se usa cuando necesitas desarrollar una nueva funcionalidad para el proyecto.\
Rama fix: Se usa cuando detectas un bug o error en el código existente y necesitas solucionarlo.
### Comandos en Git:
- Con `git init` se inicia un nuevo repositorio, luego con `git clone <url-del-repositorio>` se copia un proyecto existente en la máquina local, y finalmente con `git config user.name "Tu Nombre"` y `git config user.email "tu_email@example.com"` se define la identidad del programador que quedará registrada en los commits del proyecto.
  ```bash
  git init
  git clone "Link del proyecto"
  git config --global user.name "Nombre"
  git config --global user.email "Correo"
<p align="center">
  <img src="![Evidencia Add](./screenshots/GitClone.jpeg)" alt="Descripción"/>
</p>
- Se implementó touch/mkdir para crear los archivos que contengan el LICENSE, .gitignore, README y la carpeta de screenshots. 
  ```bash
  touch .gitignore
  touch LICENSE
  touch README.MD
  mkdir "NombreCarpeta"
<p align="center">
  <img src="![Evidencia touch](./screenshots/Touch.jpeg)" alt="Descripción"/>
  <img src="![Evidencia mkdir](./screenshots/MkDir.jpeg)" alt="Descripción"/>
</p>
- Se usó el comando add para seleccionar los cambios realizados y mandarlos a Stage, para posteriormente realizar un commit. También, podemos modificar los commits realizados o visualizar todo el listado de commits previos. Finalmente, usamos status para mostrar el estado del repositorio: archivos modificados, en Stage y sin seguimiento.
  ```bash
  git add .
  git commit -m "Mensaje"
  git commit --amend -m "Mensaje"
  git log --oneline
  git status
<p align="center">
  <img src="![Evidencia Add](./screenshots/gitAdd.jpeg)" alt="Descripción"/>
  <img src="![Evidencia Commit](./screenshots/gitCommit.jpeg)" alt="Descripción"/>
</p>
- Se implementó git push y git pull para sincronizar el repositorio local con el repositorio remoto, permitiendo subir los cambios realizados localmente (push) y obtener las actualizaciones realizadas por otros colaboradores (pull). Esto garantiza que el equipo trabaje siempre con la versión más reciente del código y evita conflictos durante el desarrollo colaborativo. 
  ```bash
  git push origin "Rama"
  git pull origin "Rama"
<p align="center">
  <img src="![Evidencia gitPush](./screenshots/gitPush.jpeg)" alt="Descripción"/>
  <img src="![Evidencia gitPull](./screenshots/gitPull.jpeg)" alt="Descripción"/>
</p>
- En Git, una rama (branch) es una línea de desarrollo independiente dentro de un repositorio. Usando el comando branch se pueden crear ramas nuevas. Además, Con el comando switch se puede cambiar de una rama a otra fácilmente. También, utilizamos --no-merged para visualizar las ramas no unidas al main. Por ultimo, checkout -b seria otra opción para crear y cambiar a la rama nueva, evitando usar dos lineas como branch y switch. 
  ```bash
  git branch "Rama"
  git switch "Rama"
  git branch --no-merged
  git branch -d "Rama"
  git checkout -b "Rama"
<p align="center">
  <img src="![Evidencia RamaFuncionalidad](./screenshots/RamaFuncionalidad.jpeg)" alt="Descripción"/>
</p>

- En Git, reflog guarda un registro de todos los movimientos en el repositorio, incluso los que no aparecen en el historial de commits, y sirve para recuperar cambios perdidos. Por otro lado, git merge se usa para combinar el trabajo de una rama con otra, uniendo sus cambios en una sola línea de desarrollo
  ```bash
  git reflog
  git merge "Rama"
<p align="center">
  <img src="![Evidencia Conflict1](./screenshots/Conflict1.jpeg)" alt="Descripción"/>
</p>

### Pull Request/Merge Request:
Un Pull Request es una solicitud que haces en plataformas como GitHub o GitLab para pedir que los cambios de tu rama se integren en otra (normalmente en main o develop).
Un Merge Request es lo mismo que un Pull Request, pero con el nombre usado en GitLab. Utilizamos Pull Request para pedir un merge de los cambios realizados en una rama hacia el Main, todos los colaboradores pueden verificar y confirmar el Merge.
<p align="center">
  <img src="![Evidencia PullRequest](./screenshots/Request1.jpeg)" alt="Descripción"/>
  <img src="![Evidencia PullRequest](./screenshots/Request2.jpeg)" alt="Descripción"/>  
  <img src="![Evidencia PullRequest](./screenshots/Request3.jpeg)" alt="Descripción"/>
  <img src="![Evidencia PullRequest](./screenshots/Request4.jpeg)" alt="Descripción"/>
</p>

### Resolución de problemas: 
Durante el desarrollo, surgió un conflicto de merge porque dos ramas diferentes habían modificado el archivo README.md en las mismas secciones.
- En una rama, se habían agregado instrucciones con la ruta del repositorio MaryenAguilar/Herramientas-De-Desarrollo.
- En la otra, se usaba el repositorio nayy123/JoyeriaMarly-App y nombres de carpetas distintas para el frontend.
Al intentar unir ambas ramas con git merge, Git detectó que no podía decidir automáticamente qué cambios mantener, por lo que marcó las líneas en conflicto dentro del archivo.
Solución:
1. Se revisaron manualmente las diferencias en el archivo marcado por Git.
2. Se eligieron y combinaron las partes correctas de cada versión (repositorio, carpetas y credenciales).
3. Finalmente, se guardó el archivo corregido, se usó:
  git add README.md
  git commit
para confirmar la resolución.
De esta forma, el repositorio quedó actualizado y sin conflictos, manteniendo una sola versión consolidada del README.md.
<p align="center">
  <img src="![Evidencia Conflict2](./screenshots/Conflict2.jpeg)" alt="Descripción"/>
  <img src="![Evidencia Conflict3](./screenshots/Conflict3.jpeg)" alt="Descripción"/>  
</p>

### Historial de puntos de control: 
En Git, los puntos de control o checkpoints son todos los commits realizados hasta el momento.
<p align="center">
  <img src="![Evidencia PuntosDeControl](./screenshots/PuntosDeControl.jpeg)" alt="Descripción"/>
</p>

### Historial de HEAD:
En Git, la cabecera o HEAD es un puntero especial que indica en qué commit estás trabajando actualmente.

<p align="center">
  <img src="![Evidencia Cabeceras](./screenshots/Cabeceras.jpeg)" alt="Descripción"/>
</p>

### 🖼️ Capturas de Pantalla
---

### 🏠 Pantalla Principal
![Index](./screenshots/paginaprincipal.png)
---

### Pagina Login
![Login](./screenshots/paginalogin.png)
---

### 🛍️ Lista de Productos
![Productos](./screenshots/paginaproductos.png)
---

### Página de Nosotros
![Nosotros](./screenshots/paginaabout.png)
---

### Página de Reclamos/Términos y condiciones
![Reclamos](./screenshots/paginareclamos.png)
![TYC](./screenshots/paginatyc.png)
---