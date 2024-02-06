import { test, expect } from "@playwright/test";

test("get one user", async ({ request }) => {
  const answear = await request.get("https://reqres.in/api/users/2");
  expect(answear.ok()).toBeTruthy();

  const user = await answear.json();
  expect(await user.data).toEqual(
    expect.objectContaining({
      id: 2,
      email: "janet.weaver@reqres.in",
      first_name: "Janet",
      last_name: "Weaver",
      avatar: "https://reqres.in/img/faces/2-image.jpg",
    })
  );
});

test("get empty object", async ({ request }) => {
  const answear = await request.get("https://reqres.in/api/users/23");
  const data = await answear.json();

  expect(Object.keys(data).length).toBe(0);
});

test("delete element", async ({ request }) => {
  const answear = await request.get("https://reqres.in/api/users/2");
  const status = answear.status();

  expect(status).toBe(200);
});
