<template>
    <nav class="navbar bg-primary text-primary-content">
        <div class="navbar-start">
            <NuxtLink class="btn btn-ghost text-xl" to="/">
                Travel Log
            </NuxtLink>
        </div>

        <div class="navbar-end">
            <AppThemeToggler />
            <AuthButton />
        </div>
    </nav>
</template>
