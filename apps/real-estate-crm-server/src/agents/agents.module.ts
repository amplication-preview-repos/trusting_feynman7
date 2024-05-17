import { Module } from "@nestjs/common";
import { AgentsModuleBase } from "./base/agents.module.base";
import { AgentsService } from "./agents.service";
import { AgentsController } from "./agents.controller";
import { AgentsResolver } from "./agents.resolver";

@Module({
  imports: [AgentsModuleBase],
  controllers: [AgentsController],
  providers: [AgentsService, AgentsResolver],
  exports: [AgentsService],
})
export class AgentsModule {}
