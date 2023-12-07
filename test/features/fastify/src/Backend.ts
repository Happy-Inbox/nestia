import core from "@nestia/core";
import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";

export class Backend {
  private application_?: NestFastifyApplication;

  public async open(): Promise<void> {
    const adaptor = new FastifyAdapter();
    adaptor.useBodyParser("application/octet-stream", true);

    this.application_ = await NestFactory.create(
      await core.EncryptedModule.dynamic(__dirname + "/controllers", {
        key: "A".repeat(32),
        iv: "B".repeat(16),
      }),
      adaptor,
      { logger: false },
    );
    await this.application_.listen(37_000);
  }

  public async close(): Promise<void> {
    if (this.application_ === undefined) return;

    const app = this.application_;
    await app.close();

    delete this.application_;
  }
}
