// PM2 process config. Production runs on 3005; port 3000 is reserved for `npm run dev`.
// Rebuild before restarting: npm run build && pm2 restart umesh-portfolio
module.exports = {
  apps: [
    {
      name: "umesh-portfolio",
      cwd: __dirname,
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3005",
      env: {
        NODE_ENV: "production",
        PORT: 3005,
      },
      autorestart: true,
      max_memory_restart: "512M",
    },
  ],
};
