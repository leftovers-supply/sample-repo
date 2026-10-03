<script setup>
import ResourceCard from './components/ResourceCard.vue'
import { resources } from './data/resources.js'
</script>

<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="site-shell">
    <header class="site-header">
      <a class="brand" href="#" aria-label="Supply Lab home">
        <svg class="brand-mark" aria-hidden="true" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="12" fill="currentColor" />
          <path d="m20 9 10 6v11l-10 6-10-6V15Zm0 0v12m10-6-10 6-10-6m10 6v11" stroke="#e2eeaf" stroke-width="1.7" stroke-linejoin="round" />
        </svg>
        <span>Supply Lab<span class="brand-dot">.</span></span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#collection">The collection</a>
        <a href="#about">About the lab <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <main id="main">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-copy">
          <p class="eyebrow"><span class="status-dot" aria-hidden="true"></span> A LITTLE SPACE TO BUILD</p>
          <h1 id="hero-title">Small ideas.<br /><span>Useful things.</span></h1>
          <p class="hero-description">A growing shelf of tools, guides, and good starting points. Pick something up. Make something of it.</p>
          <a class="primary-link" href="#collection">Explore the collection <span aria-hidden="true">↓</span></a>
        </div>
        <div class="hero-art" aria-hidden="true">
          <div class="art-grid"></div>
          <div class="art-note note-back"><span class="note-label">THE NEXT GOOD IDEA</span><span class="note-line"></span><span class="note-line short"></span></div>
          <div class="art-note note-front"><span class="note-symbol">✳</span><span class="note-title">Start small.<br />Build together.</span><span class="note-footer">SUPPLY LAB / 001 <span>↗</span></span></div>
          <span class="art-caption">A work in progress, by design.</span>
        </div>
      </section>

      <section id="collection" class="collection" aria-labelledby="collection-title">
        <div class="section-heading">
          <div><p class="eyebrow">GOOD PLACES TO BEGIN</p><h2 id="collection-title">The collection<span class="item-count">{{ resources.length }}</span></h2></div>
          <p>Handpicked for curious builders.</p>
        </div>
        <div class="resource-grid">
          <ResourceCard v-for="resource in resources" :key="resource.id" :resource="resource" />
        </div>
      </section>

      <section id="about" class="about" aria-labelledby="about-title">
        <div class="about-symbol" aria-hidden="true">↳</div>
        <div><p class="eyebrow">ROOM FOR YOUR IDEAS</p><h2 id="about-title">A small lab. An open invitation.</h2><p>This is a sample project for practicing open-source contributions. Every useful improvement starts with a small, thoughtful change.</p></div>
        <span class="about-label">ALWAYS IN THE MAKING <span aria-hidden="true">✳</span></span>
      </section>
    </main>

    <footer class="site-footer"><p>Supply Lab<span class="brand-dot">.</span> <span class="footer-description">Made to be made better.</span></p><p>Built with Vue <span aria-hidden="true">↗</span></p></footer>
  </div>
</template>
