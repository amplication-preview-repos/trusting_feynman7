import * as graphql from "@nestjs/graphql";
import { AgentsResolverBase } from "./base/agents.resolver.base";
import { Agents } from "./base/Agents";
import { AgentsService } from "./agents.service";

@graphql.Resolver(() => Agents)
export class AgentsResolver extends AgentsResolverBase {
  constructor(protected readonly service: AgentsService) {
    super(service);
  }
}
