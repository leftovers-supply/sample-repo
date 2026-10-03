import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createServer } from 'vite'
import { resources } from '../src/data/resources.js'

let server
let html

before(async () => {
  server = await createServer({ server: { middlewareMode: true }, logLevel: 'error' })
  const { default: App } = await server.ssrLoadModule('/src/App.vue')
  html = await renderToString(createSSRApp(App))
})

after(async () => {
  await server?.close()
})

test('catalog entries have stable, unique IDs and complete display content', () => {
  assert.ok(resources.length > 0, 'The collection should not be empty')
  assert.equal(new Set(resources.map(({ id }) => id)).size, resources.length)
  for (const resource of resources) {
    assert.match(resource.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/)
    for (const field of ['title', 'description', 'category', 'initials', 'tone']) {
      assert.ok(typeof resource[field] === 'string' && resource[field].trim(), `${resource.id}: missing ${field}`)
    }
  }
})

test('resource destinations use HTTPS without embedded credentials', () => {
  for (const resource of resources) {
    const url = new URL(resource.url)
    assert.equal(url.protocol, 'https:', resource.id)
    assert.equal(url.username, '', resource.id)
    assert.equal(url.password, '', resource.id)
  }
})

test('the Vue page renders each resource as a named, usable link', () => {
  for (const resource of resources) {
    assert.ok(html.includes(`id="${resource.id}"`), `${resource.id}: missing card anchor`)
    assert.ok(html.includes(`href="${resource.url}"`), `${resource.id}: missing destination`)
    assert.ok(html.includes(`<h3>${resource.title}</h3>`), `${resource.id}: missing heading`)
    assert.ok(html.includes(`: ${resource.title}</span>`), `${resource.id}: missing accessible link name`)
  }
})

test('the page has one main heading and working in-page navigation targets', () => {
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1)
  assert.ok(html.includes('<main id="main">'))
  const targets = [...html.matchAll(/href="#([^"\s]+)"/g)].map((match) => match[1])
  assert.ok(targets.includes('main'), 'The skip link should reach main content')
  for (const target of targets) {
    assert.ok(html.includes(`id="${target}"`), `Missing navigation target: ${target}`)
  }
})
