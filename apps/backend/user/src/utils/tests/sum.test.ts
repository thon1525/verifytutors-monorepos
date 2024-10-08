export function sum(a: number, b: number): number {
  return a + b;
}
describe("sum function", () => {
  it("should correctly add two numbers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, -2)).toBe(-3);
    expect(sum(-1, 1)).toBe(0);
  });
});
