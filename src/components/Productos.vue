<template>
    <div class="container">
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="../assets/electronicos.jpeg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Electronicos</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="../assets/juegos.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Accesorios para juegos</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="../assets/ofertas.jpg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Ofertas y promociones</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
        <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="../assets/electronicos.jpeg" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">Electronicos</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "productosV"
}
</script>
<style>
.container{
    display: flex;
    border:1px solid red;
    width: 100%;
}
.card{
    display:flex ;
    top:20px;
    width: 100%;
    margin: auto;
}
</style>