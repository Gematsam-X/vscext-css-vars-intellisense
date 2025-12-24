# CSS Vars IntelliSense

CSS Vars IntelliSense provides intelligent autocompletion for custom variables defined in the style files referenced by an Angular project configuration.

The extension is specifically built for Angular projects and focuses on variables coming from the global styles configured in the project setup.

The extension provides IntelliSense for CSS variables defined in files whivh are imported in angular.json configuration file.

---

## ✨ Features

- 🔍 Automatically reads global style files declared in the Angular project configuration  
- ✍️ Provides intelligent autocompletion for custom variables  
- 📁 Works across the entire Angular workspace  
- ⚡ Updates suggestions when style files change  
- 🎯 Purpose-built for Angular projects  
- 🔧 No manual configuration required

---

## 🧠 How It Works

The extension analyzes the Angular project configuration to locate the global style files used by the application.

All custom variables declared in those files are collected and registered with the editor’s IntelliSense engine, making them available everywhere styles are written within the project.

Only the files explicitly included in the Angular configuration are considered.

---

## 🚀 Usage

Once installed, the extension activates automatically inside Angular projects.

When editing style files that rely on global variables defined in the project configuration, variable suggestions appear as you start typing a variable reference.

There is no need to import files manually or duplicate variable definitions.

---

## 🔒 Performance & Privacy

- 🚀 Lightweight and efficient  
- 📴 No network access  
- 🛡️ No telemetry or data collection  
- 🖥️ All analysis is performed locally  

---

## 📦 Requirements

- Visual Studio Code version 1.80.0 or later  
- An Angular project with global style files defined in its configuration  

---

## ⚠️ Known Limitations

- Only style files referenced by the Angular configuration are supported  
- Variables defined outside of those files are intentionally ignored  
- Dynamically generated variables are not supported  

These constraints are by design to ensure correctness and predictability.

---

## 🛠️ Roadmap

Planned improvements include:

- 🎯 More robust parsing of complex style structures  
- 🎨 Optional value previews in completion suggestions  
- 🗂️ Improved handling of large Angular workspaces  

Feedback and feature requests are welcome.

---

## 👤 Author

Developed by **Gematsam-X (Gionatan Venturi)**  
Focused on Angular tooling, performance, and clean developer experience 🐧

---

## 📄 License

MIT License — free to use, modify, and distribute.
