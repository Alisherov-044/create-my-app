import { getCurrentRole } from ".";

describe("get current role", () => {
    it("should get current role", () => {
        expect(getCurrentRole([1023])).toEqual("admin");
        expect(getCurrentRole([1213])).toEqual("teacher");
        expect(getCurrentRole([1028])).toEqual("student");
    });
});
