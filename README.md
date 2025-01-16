# 🐉 Youtube Playlist Download 
Uma aplicação web para facilitar o download de áudios do YouTube de maneira prática e eficiente.
Desenvolvido com tecnologias Node.js, React. De bibliotecas tailwindcss, fastify, distube/ytdl-core, vite.

# 🎇Funcionalidades 
Pesquisar vídeos do YouTube por URL.
Download rápido de vídeo, áudio, playlist no formato mp3.
Interface responsiva e amigável.

# 📦 Instalação e Uso Local
Clone o repositório:
```sh
git clone https://github.com/BarreraPeres/yt-playlist-download.git
cd yt-playlist-download
npm install
````
Inicie o back e o frontend
```sh
chmod +x ./run.sh
./run.sh
```
# 🐳 Ou use o docker 

```
docker build .
docker-compose up
```

# 📂 Estrutura do Projeto
```plaintext
yt-playlist-download/
├── .github/workflows/
|   ├── run.e2e.test.yaml
|   └── run.unit.test.yaml
|  
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── use-cases/
│   │   ├── utils/
│   │   └── server.js
│   ├── tests/
│   │   ├── controllers/
│   │   └── units/use-cases/
│   ├── .env.exemple
│   ├── Dockerfile  # gerado pelo fly.io
│   ├── dockerfile
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── functions/
│   │   ├── lib/
│   │   ├── utils/
│   │   ├── index.css
│   │   └── main.js
│   ├── index.html
│   ├── dockerfile
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite-env.d.ts
│
│
├── README.md
├── docker-compose.yaml
└── run.sh

```

# 🤝 Contribuindo
``` plaitext
Faça um fork do projeto
Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)
Commit suas mudanças (git commit -m 'feat: new functionality')
Push para a branch (git push origin feature/AmazingFeature)
Abra um Pull Request
```
