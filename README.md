## installed project with vite
```
npm create vite@latest name-of-your-project -- --template react
[cd to ....]
npm install react-router-dom localforage match-sorter sort-by
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
### tailwind config
```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## More installed
```
npm install react-simple-captcha
npm install react-hook-form
npm i @tanstack/react-query

```




## Web tools
* [simple React Captcha](https://www.npmjs.com/package/react-simple-captcha)
* [This is swiper auto](https://codesandbox.io/p/devbox/swiper-react-autoplay-progress-y29vdk?file=%2Fsrc%2FApp.jsx%3A58%2C1)