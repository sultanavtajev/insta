Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json
npm install -g npm-check-updates
ncu -u
npm install
npm cache clean --force
npm run build
npm run dev
