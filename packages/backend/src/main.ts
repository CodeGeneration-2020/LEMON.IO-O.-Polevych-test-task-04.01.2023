import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import * as session from 'express-session';
import * as passport from 'passport';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.use(json({ limit: '2mb' }));
  app.use(urlencoded({ extended: true, limit: '2mb' }));

  app.use(
    session({
      cookie: {
        maxAge: 60000 * 60 * 24,
      },
      secret: process.env.SECRET_COOKIE,
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(+process.env.PORT || 4888);
}

bootstrap();
