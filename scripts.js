var modal = document.getElementById('LoginForm');
var modal2 = document.getElementById('RegisterForm');

const toggleBtn = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector("#navbarNav");

toggleBtn.addEventListener("click", () => {
  navbarCollapse.classList.toggle("show");
});

function openLoginForm() {
    document.getElementById('LoginForm').style.display = "flex";
  }
  
  function closeLoginForm() {
    document.getElementById('LoginForm').style.display = "none";
  }
  
  function openRegisterForm() {
    document.getElementById('RegisterForm').style.display = "flex";
  }
  
  function closeRegisterForm() {
    document.getElementById('RegisterForm').style.display = "none";
  }
  
  document.getElementById('login').onclick = openLoginForm;
  document.getElementsByClassName("close")[0].onclick = closeLoginForm;
  
  document.getElementById('register').onclick = openRegisterForm;
  document.getElementsByClassName("close")[1].onclick = closeRegisterForm;
  window.onclick = function(event) {
    if (event.target == document.getElementById('LoginForm') || event.target == document.getElementById('RegisterForm')) {
      modal.style.display = "none";
    }
  }
// Asegúrate de que el modal está oculto cuando la página se carga
window.onload = function() {
    document.getElementById('LoginForm').style.display = "none";
    document.getElementById('RegisterForm').style.display = "none";
    document.getElementById('searchModal').style.display = 'none'; // Asegúrate de que el modal de búsqueda también está oculto
};

// Manejador para abrir el modal de búsqueda
document.getElementById('searchButton').addEventListener('click', function() {
    document.getElementById('searchModal').style.display = 'flex';
});

// Manejador para cerrar el modal de búsqueda
document.getElementById('closeSearch').addEventListener('click', function() {
    document.getElementById('searchModal').style.display = 'none';
});

// Cierra el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == document.getElementById('searchModal')) {
        document.getElementById('searchModal').style.display = 'none';
    }
}
