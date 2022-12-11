import { Request } from "express";
import * as DocumentController from "./documentController";
import * as Document from "./document";

jest.mock("./document");

describe("DocumentController", () => {
  it("Should send correct data from body to model", () => {
    const mockedCreate = <jest.Mock<typeof Document.create>>Document.create;
    DocumentController.Create({
      body: { title: "titlMye", content: "content" },
    } as Request<any>);
    expect(mockedCreate).toHaveBeenCalledWith("titlMye", "content");
  });
});
