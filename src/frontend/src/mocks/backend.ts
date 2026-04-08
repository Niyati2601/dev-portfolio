import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  getContacts: async () => [
    {
      id: BigInt(1),
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Great portfolio! Would love to connect.",
      timestamp: BigInt(Date.now()),
    },
  ],
  submitContact: async (_name: string, _email: string, _message: string) => ({
    __kind__: "ok" as const,
    ok: "Message sent successfully!",
  }),
};
