import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgentsService } from "./agents.service";
import { AgentsControllerBase } from "./base/agents.controller.base";

@swagger.ApiTags("agents")
@common.Controller("agents")
export class AgentsController extends AgentsControllerBase {
  constructor(protected readonly service: AgentsService) {
    super(service);
  }
}
