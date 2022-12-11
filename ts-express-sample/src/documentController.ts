import * as Document from "./document";
import { Request } from "express";
export function Create(request: Request<any>) {
  Document.create(request.body.title, request.body.content);
}
