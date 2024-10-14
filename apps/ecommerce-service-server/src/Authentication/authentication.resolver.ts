import * as graphql from "@nestjs/graphql";
import { LoginInput } from "../authentication/LoginInput";
import { AuthenticationService } from "./authentication.service";

export class AuthenticationResolver {
  constructor(protected readonly service: AuthenticationService) {}

  @graphql.Mutation(() => String)
  async Login(
    @graphql.Args()
    args: LoginInput
  ): Promise<string> {
    return this.service.Login(args);
  }
}
