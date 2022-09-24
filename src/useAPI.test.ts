import { renderHook, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import useAPI from "./useAPI";

const server = setupServer(
  rest.get("/api", (req, res, ctx) => {
    return res(ctx.json({ name: "Karina" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should return name", async () => {
  const { result } = renderHook(() => useAPI());

  await waitFor(() => expect(result.current).toEqual({ name: "Karina" }));
});
