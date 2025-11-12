# Node.js Starting point

## About
Node.js is a free, open-source, cross-platform javascript runtime environment that lets developers create servers, web apps, command line tools and scripts.

## How to install
Pull the Node.js from Docker image and run:
```bash
docker pull node:24-alpine
docker run -it --rm --entrypoint sh node:24-alpine
```

From native ubuntu repository
```bash
sudo apt update
sudo apt upgrade
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt install nodejs -y
```

Verify the Node.js version:
```bash
node -v
npm -v
```


## References
- The official website https://nodejs.org/en
- Good video to unsderstand and start.https://www.youtube.com/watch?v=TlB_eWDSMt4

