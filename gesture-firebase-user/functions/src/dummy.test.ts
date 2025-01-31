describe("Dummy", () => {
	test("Check 5", async () => {
		await new Promise((resolve) => setTimeout(resolve, 2000));
		expect(5).toBe(5);
	});
});