# Ludens Homepage

<img src="https://img.shields.io/badge/nextdotjs-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"><img src="https://img.shields.io/badge/15.1.7-515151?style=for-the-badge">&nbsp;&nbsp;
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/19.0.0-515151?style=for-the-badge">

<br>

## 🛠️ How to start

1. **Prerequisites**
- Node.js@22.12.0.

2. **Run npm install**
   ```sh
   npm install
   ```

3. **Run npm run dev**
   ```sh
   npm run dev
   ```

<br>

## 📦 Libraries
| Library | Version | Description |
|:-----:|:-----:|:-----:|
| **@svgr/webpack** | 8.1.0 | SVG 파일 사용 시 필요 |
| **embla-carousel-react** | 8.5.2 | carousel UI 적용하는데 사용 |
| **embla-carousel-autoplay** | 8.5.2 | carousel autoplay 위해 사용 |
| **framer-motion** | 12.4.5 | animation 적용하는데 사용 |
| **tailwind-scrollbar-hide** | 2.0.0 | 일부 tab 에서 가로 scrollbar 숨기는 용도로 사용 |
| **react-countup** | 6.5.3 | count up 효과 적용하는데 사용 |
| **tailwindcss** | 3.4.17 |  |

<br>

## 📂 Project Structure

[**Bulletproof Filestructure**](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md)를 따릅니다.

```
src
|
+-- app               # application layer containing:
|   |                 
|   +-- pages         # application pages
|   +-- layout.tsx    # main application component
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- config            # global configurations, exported env variables etc.
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- lib               # reusable libraries preconfigured for the application
|
+-- stores            # global state stores
|
+-- testing           # test utilities and mocks
|
+-- types             # shared types used across the application
|
+-- utils             # shared utility functions
```

