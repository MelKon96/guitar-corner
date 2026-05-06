import { factories } from "@strapi/strapi";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default factories.createCoreController("api::contact.contact", () => ({
  async create(ctx) {
    const body = ctx.request.body as { data?: { name?: string; email?: string } };
    const data = body?.data ?? {};

    if (!data.name?.trim()) {
      return ctx.badRequest("Name is required");
    }
    if (!data.email?.trim() || !EMAIL_RE.test(data.email)) {
      return ctx.badRequest("Valid email is required");
    }

    return super.create(ctx);
  },
}));
