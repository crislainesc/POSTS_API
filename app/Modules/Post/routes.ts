import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.resource('posts', 'PostsController')
    .apiOnly()
    .middleware({
      index: ['auth'],
      store: ['auth'],
      show: ['auth'],
      update: ['auth'],
      destroy: ['auth'],
    })
}).prefix('v1')
