// This file was added by xdn init.
// You should commit this file to source control.

const { Router } = require('@edgio/core/router')
const { nuxtRoutes } = require('@edgio/nuxt')

export default new Router()
  .use(nuxtRoutes)
  .match('/:path*', ({ setResponseHeader }) => {
    setResponseHeader(
      'Content-Security-Policy',
      "frame-ancestors 'self' https://*.wellcertified.com http://*.wellcertified.com http://localhost:3000 https://*.storyblok.com http://*.storyblok.com"
    )
  })
  .match('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('.nuxt/dist/client/service-worker.js')
  })
  .get('/:version/en/overview', ({ redirect }) => {
    return redirect('/en/:version/overview', { statusCode: 301 })
  })
  .get('/:version/en/glossary', ({ redirect }) => {
    return redirect('/en/:version/glossary', { statusCode: 301 })
  })
  .get('/:version/en/appendix/:id', ({ redirect }) => {
    return redirect('/en/:version/appendix/:id', { statusCode: 301 })
  })
  .get('/:version/en/:conceptName', ({ redirect }) => {
    return redirect('/en/:version/:conceptName', { statusCode: 301 })
  })
  .get('/:version/en/:conceptName/feature/:featureId', ({ redirect }) => {
    return redirect('/en/:version/:conceptName/feature/:featureId', {
      statusCode: 301,
    })
  })
  .get('/:version/cn/overview', ({ redirect }) => {
    return redirect('/cn/:version/overview', { statusCode: 301 })
  })
  .get('/:version/cn/glossary', ({ redirect }) => {
    return redirect('/cn/:version/glossary', { statusCode: 301 })
  })
  .get('/:version/cn/appendix/:id', ({ redirect }) => {
    return redirect('/cn/:version/appendix/:id', { statusCode: 301 })
  })
  .get('/:version/cn/:conceptName', ({ redirect }) => {
    return redirect('/cn/:version/:conceptName', { statusCode: 301 })
  })
  .get('/:version/cn/:conceptName/feature/:featureId', ({ redirect }) => {
    return redirect('/cn/:version/:conceptName/feature/:featureId', {
      statusCode: 301,
    })
  })
  .get('/static/resources/:fileName', ({ redirect }) => {
    return redirect('/resources/:fileName', {
      statusCode: 301,
    })
  })
