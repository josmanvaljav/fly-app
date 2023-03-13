For instalation:
1) npm create vite@latest fly-app -- --template react

2) Now run:
cd fly-app
npm install
npm run dev


For prepare React.js environment:
1. in vite.config.js add:
 server: {
    watch: {
        usePolling: true
    }
  },


For Deploy:
0) in vite.config.js add:
    base: "/fly-app/",
1) Run: npm install gh-pages --save-dev
2) At the end of package.json add: , "homepage": "https://josmanvaljav.github.io/fly-app"
3) At package.json add in scripts section add: "predeploy": "npm run build" and "deploy": "gh-pages -d dist"
4) Run: npm run deploy
5) in the Github Pages configuration you must follow the steps from the document "https://vitejs.dev/guide/static-deploy.html" and section "GitHub Pages".

