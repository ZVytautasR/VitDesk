import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

const EXE = "https://github.com/ZVytautasR/VitDesk/raw/main/VitDesk.exe";
const REPO = "https://github.com/ZVytautasR/VitDesk";
const LOGO = "https://raw.githubusercontent.com/ZVytautasR/VitDesk/cfg/Logo.png";

export const Route = createFileRoute("/thanks")({
  head: () => ({
    meta: [
      { title: "Спасибо за загрузку — VitDesk" },
      { name: "description", content: "Скачивание VitDesk.exe началось. Удалённый доступ к компьютерам с Windows и Android." },
      { property: "og:title", content: "Спасибо за загрузку — VitDesk" },
      { property: "og:description", content: "Скачивание VitDesk.exe началось. Следуйте шагам установки." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Thanks,
});

function Thanks() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = EXE;
      link.download = "VitDesk.exe";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }, 1500);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3 font-display text-xl font-bold">
          <img src={LOGO} alt="" className="h-9 w-9" /> VitDesk
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">На главную</Link>
          <a href={REPO} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="hero-glow pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-2xl px-6 pb-24 pt-16 text-center">
          <div className="text-7xl">🎉</div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-5xl">
            Благодарим вас за <span className="text-gradient">загрузку!</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Вы выбрали <b className="text-foreground">VitDesk</b> — быстрый и безопасный удалённый доступ.
          </p>

          <div className="mt-10 rounded-2xl border border-border bg-card p-8 shadow-glow">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl">
              ⬇️
            </div>
            <p className="mt-4 font-semibold">Файл VitDesk.exe уже скачивается…</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Если скачивание не началось автоматически — нажмите кнопку ниже.
            </p>
            <a href={EXE} className="btn-primary mt-6">📥 Скачать VitDesk.exe</a>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-card p-8 text-left">
            <h2 className="font-display text-xl font-semibold">Что дальше</h2>
            <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                <b className="text-foreground">1. Запустите VitDesk.exe</b> — установщик предложит стандартную или портативную установку.
              </li>
              <li>
                <b className="text-foreground">2. Программе сразу присваивается ID</b> — сообщите его партнёру или введите ID сами.
              </li>
              <li>
                <b className="text-foreground">3. Подтвердите запрос на подключение</b> — и вы на связи: экран, мышь, клавиатура, файлы и чат.
              </li>
            </ol>
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Автор и разработчик: Витаутас Жаситис ·{" "}
            <a href={REPO} target="_blank" rel="noreferrer" className="text-primary hover:underline">
              GitHub
            </a>
          </p>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 VitDesk · <a href={REPO} className="hover:text-foreground">GitHub</a>
      </footer>
    </div>
  );
}
