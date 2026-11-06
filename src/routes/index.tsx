import { createFileRoute } from "@tanstack/react-router";

const LOGO = "https://raw.githubusercontent.com/ZVytautasR/VitDesk/cfg/Logo.png";
const DOWNLOAD = "/thanks";
const REPO = "https://github.com/ZVytautasR/VitDesk";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VitDesk — удалённый доступ к компьютерам" },
      { name: "description", content: "Быстрый и безопасный удалённый доступ к вашим компьютерам с Windows и Android." },
      { property: "og:title", content: "VitDesk — удалённый доступ" },
      { property: "og:description", content: "Экран, файлы, чат и звонки — как будто вы рядом." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const features = [
  ["🖥️", "Удалённый рабочий стол", "Плавная картинка с аппаратным H.264 и адаптивным битрейтом"],
  ["⚡", "Быстрое подключение", "Прямое соединение через NAT и поиск устройств в локальной сети"],
  ["🔒", "Безопасность", "Сквозное шифрование, TOTP‑двухфакторка, хранилище паролей"],
  ["📁", "Файловый менеджер", "Двухпанельный обмен файлами между компьютерами"],
  ["📋", "Общий буфер обмена", "Копируйте на одном устройстве — вставляйте на другом"],
  ["💬", "Чат и видеозвонки", "Текст, звук (Opus) и камера прямо в сессии"],
  ["🖨️", "Удалённая печать", "Печать с удалённого компьютера на локальный принтер"],
  ["🔌", "USB по сети", "Проброс USB‑устройств на удалённую машину"],
  ["🎥", "Запись сессий", "Сохраняйте сеансы для отчётов и обучения"],
  ["📒", "Адресная книга", "Группы, карточки устройств, облачная синхронизация"],
  ["🌙", "Wake‑on‑LAN", "Разбудите спящий компьютер одним кликом"],
  ["🛎️", "Служба поддержки", "Режим ServiceDesk для работы с обращениями"],
];

const steps = [
  ["Запустите VitDesk", "на обоих устройствах — каждому сразу присваивается свой ID."],
  ["Сообщите ID", "тому, кто будет подключаться, или введите ID партнёра сами."],
  ["Подтвердите запрос", "— и вы на связи: экран, мышь, клавиатура, файлы и чат."],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#" className="flex items-center gap-3 font-display text-xl font-bold">
          <img src={LOGO} alt="" className="h-9 w-9" /> VitDesk
        </a>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#features" className="hidden hover:text-foreground sm:inline">Возможности</a>
          <a href="#how" className="hidden hover:text-foreground sm:inline">Как это работает</a>
          <a href={REPO} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-16 text-center">
          <span className="inline-block rounded-full border border-border bg-card px-4 py-1 text-xs text-muted-foreground">
            Windows · Android · версия 2026.10.31
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-bold leading-tight md:text-7xl">
            Ваш компьютер — <span className="text-gradient">где угодно</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Видите экран, управляете мышью и клавиатурой, передаёте файлы и общаетесь — как будто сидите рядом.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href={DOWNLOAD} className="btn-primary">📥 Скачать VitDesk</a>
            <a href="#how" className="btn-ghost">Как это работает</a>
          </div>
          <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-card p-6 text-left shadow-glow">
            <div className="mb-4 flex gap-2">
              <span className="h-3 w-3 rounded-full bg-muted" /><span className="h-3 w-3 rounded-full bg-muted" /><span className="h-3 w-3 rounded-full bg-muted" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-secondary p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Ваш ID</p>
                <p className="mt-2 font-mono text-3xl font-bold text-primary">482 951 307</p>
              </div>
              <div className="rounded-xl bg-secondary p-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">ID партнёра</p>
                <div className="mt-2 flex gap-2">
                  <div className="flex-1 rounded-lg border border-border bg-background px-3 py-2 font-mono text-muted-foreground">_ _ _ _ _ _ _ _ _</div>
                  <div className="rounded-lg bg-primary px-4 py-2 font-semibold text-primary-foreground">→</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-4xl font-bold">Возможности</h2>
        <p className="mt-3 text-muted-foreground">Всё для удалённой работы и поддержки — в одной программе.</p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(([icon, title, desc]) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-primary">
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-4 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="font-display text-4xl font-bold">Как это работает</h2>
        <p className="mt-3 text-muted-foreground">Установка и настройка сети не нужны.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-8">
              <div className="font-display text-5xl font-bold text-gradient">0{i + 1}</div>
              <p className="mt-4"><b>{t}</b> <span className="text-muted-foreground">{d}</span></p>
            </div>
          ))}
        </div>
        <p className="mt-8 rounded-xl bg-secondary p-5 text-sm text-muted-foreground">
          💡 Для постоянного доступа без подтверждения задайте пароль — и подключайтесь к своему компьютеру из любой точки мира.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-border bg-card p-12 text-center shadow-glow">
          <img src={LOGO} alt="VitDesk" className="mx-auto h-20 w-20" />
          <h2 className="mt-6 font-display text-4xl font-bold">Готовы подключиться?</h2>
          <p className="mt-3 text-muted-foreground">Скачайте VitDesk.exe, запустите и следуйте инструкциям мастера.</p>
          <a href={DOWNLOAD} className="btn-primary mt-8 inline-flex">📥 Скачать последнюю версию</a>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 VitDesk · <a href={REPO} className="hover:text-foreground">GitHub</a>
      </footer>
    </div>
  );
}
