import Koa from "koa";
import Router from "koa-router";
import cors from "koa2-cors";

const app = new Koa();
const router = new Router();
app.use(cors()).use(router.routes()).use(router.allowedMethods());
app.listen(8080);

router.get("/", (ctx, next) => {
  ctx.body = {
    data: {
      id: "1",
      name: "Baker",
      age: 18,
    },
  };
});
router.post("/", (ctx, next) => {
  ctx.body = {
    data: {
      id: "1",
    },
  };
});
