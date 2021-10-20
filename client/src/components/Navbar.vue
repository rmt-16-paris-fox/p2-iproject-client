<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow sticky-top">
            <div class="container-fluid">
                <label class="navbar-brand" aria-current="page">👩‍🚀 Todoin</label>
                <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/todos" class="nav-link active" aria-current="page">Todos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/chat" class="nav-link active" aria-current="page">Chat</router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
</style>
