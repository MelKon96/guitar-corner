Сайт-визитка школы игры на гитаре. Fullstack проект с CMS для управления контентом.

Стек
Frontend (guitar-frontend)

Next.js 16 — React фреймворк
Tailwind CSS 4 — стили
Framer Motion — анимации
next-intl — мультиязычность (EN / RU)
TanStack Query — управление запросами
shadcn/ui — UI компоненты
Backend (guitar-backend)

Strapi 5 — headless CMS
SQLite — база данных
Nodemailer (Gmail SMTP) — отправка email при заявке
Telegram Bot API — уведомления в Telegram при заявке
Инфраструктура

Ubuntu 24.04 (DigitalOcean)
Nginx — reverse proxy
PM2 — управление процессами
Контент-типы Strapi
Тип	Описание
Teacher	Информация о преподавателе
Price	Прайс-лист
Video	Видео-примеры
Review	Отзывы учеников
Photo	Галерея фотографий
Promo	Промо-баннер
Contact	Заявки с сайта
Локальный запуск
# Backend
cd guitar-backend
cp .env.example .env   # заполни переменные
npm install
npm run dev            # http://localhost:1337

# Frontend
cd guitar-frontend
npm install
npm run dev            # http://localhost:3000
Переменные окружения
guitar-backend/.env

HOST=0.0.0.0
PORT=1337
APP_KEYS=...
API_TOKEN_SALT=...
ADMIN_JWT_SECRET=...
TRANSFER_TOKEN_SALT=...
JWT_SECRET=...
ENCRYPTION_KEY=...
PUBLIC_URL=http://localhost:1337
CORS_ORIGINS=http://localhost:3000
OWNER_EMAIL=your@email.com
SMTP_EMAIL=your@gmail.com
SMTP_APP_PASSWORD=xxxx xxxx xxxx xxxx
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...
guitar-frontend/.env.local

NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
Деплой на сервер
# Backend — собрать локально и загрузить
cd guitar-backend
npm run build
scp -r dist root@YOUR_IP:/var/www/guitar/guitar-backend/

# Frontend
cd guitar-frontend
npm run build
# или через git pull на сервере
Nginx
Конфиг находится в nginx.conf в корне проекта. Маршрутизация:

/admin, /api, /content-manager и др. → Strapi (порт 1337)
/ → Next.js (порт 3000)


Бэкенд часть (Strapi CMS, контент-типы, lifecycle хуки, конфигурация сервера)  частично разработана с помощью Claude сode.
