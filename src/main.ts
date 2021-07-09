import { NestFactory } from '@nestjs/core'
import { MainModule } from './main.module'

async function bootstrap() {
  const app = await NestFactory.create(MainModule)

  // Enable CORS by whitelist origin
  app.enableCors({
    origin: process.env.CORS_WHITELIST_ORIGINS,
  })

  await app.listen(process.env.PORT || 5001)
}
bootstrap()
