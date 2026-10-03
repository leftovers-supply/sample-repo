<script setup>
defineProps({
  resource: { type: Object, required: true },
})
</script>

<template>
  <article :id="resource.id" class="resource-card">
    <div class="card-topline">
      <span class="resource-icon" :class="`tone-${resource.tone}`" aria-hidden="true">{{ resource.initials }}</span>
      <span class="category">{{ resource.category }}</span>
    </div>
    <h3>{{ resource.title }}</h3>
    <p>{{ resource.description }}</p>
    <a class="resource-link" :href="resource.url">
      Explore resource <span class="sr-only">: {{ resource.title }}</span><span aria-hidden="true">↗</span>
    </a>
  </article>
</template>
