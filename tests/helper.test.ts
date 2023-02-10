import { getList, scanFiles } from "../src/helper";
const fs = require("fs");
jest.mock("fs");

describe("testing getList", () => {
  test("expected otput is  strict equal", () => {
    const dirData = ["File1.jpg", "File2.jpg", "File3.jpg"];

    fs.readdirSync.mockReturnValue(dirData);

    expect(getList()).toEqual(
      expect.arrayContaining([
        { active: true, name: "File1.jpg" },
        { active: true, name: "File2.jpg" },
        { active: true, name: "File3.jpg" },
      ])
    );
  });
});

describe("testing getList", () => {
  test("expected otput is  strict equal", () => {
    let state = [
      { active: true, name: "File1.jpg" },
      { active: true, name: "File2.jpg" },
      { active: true, name: "File3.jpg" },
    ];
    const dirData = ["File1.jpg", "File2.jpg", "File4.jpg"];

    fs.readdirSync.mockReturnValue(dirData);

    expect(scanFiles()).toEqual(
      expect.arrayContaining([
        { active: true, name: "File1.jpg" },
        { active: true, name: "File2.jpg" },
        { active: false, name: "File3.jpg" },
        { active: true, name: "File4.jpg" },
      ])
    );
  });
});
