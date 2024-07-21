import { Injectable } from "@nestjs/common";
import { LoginInput } from "../authentication/LoginInput";

@Injectable()
export class AuthenticationService {
  constructor() {}
  async Login(args: LoginInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
