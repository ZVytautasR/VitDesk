<div align="center">

<img src="android/assets/logo/vitdesk_res_256x256.png" width="128" alt="VitDesk logo"/>

# VitDesk

**Быстрый и безопасный удалённый доступ к вашим компьютерам — с Windows и Android**

![Platform](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)
![Delphi](https://img.shields.io/badge/Delphi-EE1F35?style=for-the-badge&logo=delphi&logoColor=white)
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Version](https://img.shields.io/badge/version-2.6.0-4CAF50?style=for-the-badge)

[📥 Скачать](#-установка) • [✨ Возможности](#-возможности) • [🧩 Компоненты](#-компоненты) • [🛠 Сборка](#-сборка-из-исходников)

</div>

---

## 💡 Что такое VitDesk

VitDesk соединяет ваше текущее устройство с тем, к которому нужно подключиться: видите экран, управляете мышью и клавиатурой, передаёте файлы и общаетесь — как будто сидите рядом.

## ✨ Возможности

| | Возможность | Описание |
|---|---|---|
| 🖥️ | **Удалённый рабочий стол** | Плавная картинка с аппаратным кодированием H.264 и адаптивным битрейтом |
| ⚡ | **Быстрое подключение** | Соединение напрямую через NAT, поиск устройств в локальной сети |
| 🔒 | **Безопасность** | Сквозное шифрование, TOTP‑двухфакторка, хранилище паролей |
| 📁 | **Файловый менеджер** | Двухпанельный обмен файлами между компьютерами |
| 📋 | **Общий буфер обмена** | Копируйте на одном устройстве — вставляйте на другом |
| 💬 | **Чат и видеозвонки** | Текст, звук (Opus) и камера прямо в сессии |
| 🖨️ | **Удалённая печать** | Печать с удалённого компьютера на локальный принтер |
| 🔌 | **USB по сети** | Проброс USB‑устройств на удалённую машину |
| 🎥 | **Запись сессий** | Сохраняйте сеансы для отчётов и обучения |
| 📒 | **Адресная книга** | Группы, карточки устройств, облачная синхронизация |
| 🌙 | **Wake‑on‑LAN** | Разбудите спящий компьютер одним кликом |
| 🛎️ | **Служба поддержки** | Режим ServiceDesk для работы с обращениями |

## 📥 Установка

1. Откройте раздел **[Releases](../../releases)**.
2. Скачайте последнюю версию `VitDesk.exe` (Windows) или APK (Android).
3. Запустите и следуйте инструкциям мастера установки.

> [!TIP]
> Чтобы подключиться, сообщите партнёру свой **ID** — и примите входящий запрос.

## 🧩 Компоненты

```
VitDesk           — основной клиент (просмотр и управление)
VitDeskHub        — сервер-координатор: ID, контакты, облако
VitDeskDispatch   — диспетчер подключений
VitDeskFix        — утилита диагностики и восстановления
android/          — мобильный клиент на Flutter
```

## 🛠 Сборка из исходников

**Windows:** откройте `VitDesk.groupproj` в RAD Studio (Delphi) и соберите все проекты (`Win32`).

**Android:**
```bash
cd android
flutter pub get
flutter build apk --release
```

## 🙌 Благодарности

- [Opus](https://opus-codec.org/) — аудиокодек
- [OpenH264](https://www.openh264.org/) — видеокодек

<div align="center">

Сделано с ❤️ на Delphi и Flutter • © ZVytautasR

</div>
