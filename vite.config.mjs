import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({plugins:[react()],base:'/projects/green-scent/',build:{outDir:'dist'},server:{host:'127.0.0.1',port:4193,strictPort:true}});
