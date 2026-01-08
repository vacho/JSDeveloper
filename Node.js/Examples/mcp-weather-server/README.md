# MCO example

## How to init
```bash
npm init -y
npm install @modelcontextprotocol/zdk zod
npm install -D @types/node typescript
```

## Configuration in Claude
C:\Users\some_user_name\AppData\Roaming\Claude\claude_desktop_config.json
```json
{
  "mcpServers": {
    "weather": {
      "command": "C:\\Windows\\System32\\wsl.exe",
      "args": [
        "bash",
        "-c",
        "cd /home/vacho/projects/JSDeveloper/Node.js/Examples/mcp-weather-server && /usr/bin/node build/index.js"
      ]
    }
  }
}
```