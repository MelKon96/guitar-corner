export default {
  async afterCreate(event: any) {
    const { result } = event;

    // ─── Gmail (фоновая отправка, не блокирует ответ) ──────
    strapi.plugins["email"].services.email.send({
      to: process.env.OWNER_EMAIL,
      subject: `📩 Новая заявка от ${result.name}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px">
          <h2 style="color:#333">Новая заявка с сайта</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:8px 0;color:#666;width:100px">Имя</td>
              <td style="padding:8px 0;font-weight:500">${result.name}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666">Email</td>
              <td style="padding:8px 0"><a href="mailto:${result.email}">${result.email}</a></td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#666">Телефон</td>
              <td style="padding:8px 0">${result.phone || "—"}</td>
            </tr>
          </table>
          <div style="margin-top:12px;padding:12px;background:#f5f5f5;border-radius:8px">
            <p style="color:#666;margin:0 0 6px">Сообщение:</p>
            <p style="margin:0">${result.message}</p>
          </div>
          <p style="color:#aaa;font-size:12px;margin-top:16px">
            ${new Date().toLocaleString("ru-RU")}
          </p>
        </div>
      `,
    }).catch((emailError: unknown) => strapi.log.error("Email error:", emailError));

    // ─── Telegram (фоновая отправка, не блокирует ответ) ───
    const text = ["📩 *Новая заявка с сайта*", "", `👤 *Имя:* ${result.name}`, `📧 *Email:* ${result.email}`, `📞 *Телефон:* ${result.phone || "—"}`, "", "💬 *Сообщение:*", result.message].join("\n");

    fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text,
        parse_mode: "Markdown",
      }),
    }).catch((tgError: unknown) => strapi.log.error("Telegram error:", tgError));
  },
};
