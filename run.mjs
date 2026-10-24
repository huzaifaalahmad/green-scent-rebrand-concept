import {pathToFileURL,fileURLToPath} from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
const root=path.dirname(fileURLToPath(import.meta.url));
// Reuse the already installed workspace toolchain; no packages are downloaded.
const modules=path.resolve(root,'../portfolio-rebuild/huzaifa-portfolio-frontend/node_modules');
const {build,createServer}=await import(pathToFileURL(path.join(modules,'vite/dist/node/index.js')));
const {default:react}=await import(pathToFileURL(path.join(modules,'@vitejs/plugin-react/dist/index.js')));
const config={root,configFile:false,base:'/projects/green-scent/',plugins:[react()],resolve:{alias:{react:path.join(modules,'react'), 'react-dom':path.join(modules,'react-dom')}},server:{host:'127.0.0.1',port:4193,strictPort:true,fs:{allow:[root,modules]}},build:{outDir:'dist',emptyOutDir:true}};
if(process.argv.includes('build')){await build(config);await fs.copyFile(path.join(root,'dist/index.html'),path.join(root,'dist/404.html'));console.log('Built the original-design restoration for Social Vision /projects/green-scent/.');}
else{const server=await createServer(config);await server.listen();server.printUrls();}
