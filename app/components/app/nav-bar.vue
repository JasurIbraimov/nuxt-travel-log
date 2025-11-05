<template>
    <nav class="navbar bg-primary text-primary-content">
        <div class="navbar-start">
            <NuxtLink class="btn btn-ghost text-xl" to="/">
                Travel Log
            </NuxtLink>
        </div>

        <div class="navbar-end">
            <AppThemeToggler />
            <button class="btn btn-accent">
                Sign in <Icon name="tabler:brand-github" size="24" />
            </button>
        </div>
    </nav>
</template>
