const Koa = require('koa');
const KoaRouter = require('koa-router');
const path = require('path');
const render = require('koa-ejs')


const app = new Koa();
const router = new KoaRouter();

// app.use(async ctx => (ctx.body = "hello wrold" ))
render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false,
})

router.get('/', async ctx => {
    await ctx.render('index')
})

router.get('/test', ctx => ( ctx.body = "TEst page"))
app.use (router.routes()).use(router.allowedMethods())

app.listen(3000, () => console.log("server started"))