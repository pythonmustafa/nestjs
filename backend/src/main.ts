import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1. API isteklerini ayırmak için bir ön ek ekle
  app.setGlobalPrefix('api'); 

  app.enableCors({
    origin: '*',
  });

  await app.listen(process.env.PORT || 3000);
}
bootstrap();