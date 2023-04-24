<template>
<div class="navbar bg-base-100">
  <div >
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li tabindex="0">
          <a class="justify-between">
            Parent
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Oferta fin semana</a></li>
      
      <li><a>Servicio al cliente</a></li>
      <li><a>Tarjeta de regalo</a></li>
      <li><a>Vender</a></li>
      <li><a>Comprar las ofertas de Electronicos</a></li>

      </ul>
    </div>

  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu mynav menu-horizontal px-1">
        <li class="nav-izquierdo" tabindex="0">
        <a>
          Parent
          <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul class="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li class="uno"><a>Oferta fin semana</a></li>
      
      <li class="uno"><a>Servicio al cliente</a></li>
      <li class="uno"><a>Tarjeta de regalo</a></li>
      <li class="uno"><a>Vender</a></li>
      <li class="nav-derecho"><a>Comprar las ofertas de Electronicos</a></li>

    </ul>
  </div>
</div>
</template>
<script>
export default{
    name: "headnaV"
}
</script>