import { isEmpty } from "./auth.validation";

describe("Auth validation tests", () => {
  it("should test isEmpty validator", () => {
    const empty = isEmpty(undefined);
    const emptyObj = isEmpty({});
    const emptyArr = isEmpty([]);
    const emptyNull = isEmpty(null);
    const emptyStr = isEmpty(" ");

    expect(empty).toBeTruthy();
    expect(emptyObj).toBeTruthy();
    expect(emptyArr).toBeTruthy();
    expect(emptyNull).toBeTruthy();
    expect(emptyStr).toBeTruthy();
  });
});
