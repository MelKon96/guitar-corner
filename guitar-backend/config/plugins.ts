import type { Core } from "@strapi/strapi";

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: env("SMTP_EMAIL"),
          pass: env("SMTP_APP_PASSWORD"),
        },
      },
      settings: {
        defaultFrom: env("SMTP_EMAIL"),
        defaultReplyTo: env("SMTP_EMAIL"),
      },
    },
  },
});

export default config;
