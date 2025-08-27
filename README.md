# Markmap Server

一个基于 Express + TypeScript 的 Markmap 服务器，提供 Markdown 到思维导图的转换服务。支持在线和离线模式，可以将 Markdown 文档转换为交互式的思维导图 HTML 文件。

## ✨ 特性

- 🚀 **TypeScript 支持** - 完整的类型安全和开发体验
- 🧠 **Markmap 集成** - 将 Markdown 转换为交互式思维导图
- 🌐 **在线/离线模式** - 支持生成在线版本或完全离线的 HTML 文件
- 🛡️ **安全防护** - 内置 Helmet 安全中间件
- 🔒 **CORS 支持** - 可配置的跨域资源共享
- 📝 **日志系统** - 基于 Pino 的高性能日志记录
- 🔐 **会话管理** - 支持用户登录和会话状态
- ⚙️ **环境配置** - 基于 dotenv 和 envalid 的环境变量管理
- 🐳 **Docker 支持** - 提供完整的 Docker 部署方案
- 🔄 **热重载** - 开发环境支持代码热重载

## 🏗️ 项目结构

```
src/
├── app.ts                 # 应用程序入口点
├── controller/             # 控制器层
│   ├── markmap/           # Markmap 相关控制器
│   └── user/              # 用户相关控制器
├── model/                 # 数据模型和验证
│   ├── markmap/           # Markmap 数据模型
│   └── user/              # 用户数据模型
├── routes/                # 路由配置
│   ├── index.ts           # 主路由配置
│   ├── markmap.ts         # Markmap 路由
│   ├── user.ts            # 用户路由
│   └── middleware/        # 中间件
├── service/               # 业务逻辑层
│   ├── markmap/           # Markmap 服务
│   └── user/              # 用户服务
├── types/                 # TypeScript 类型定义
└── utils/                 # 工具函数
    ├── db.ts              # 数据库连接
    ├── env.ts             # 环境变量配置
    ├── logger.ts          # 日志工具
    └── response.ts        # 响应格式化
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18
- pnpm (推荐) 或 npm
- MariaDB/MySQL (可选，用于用户系统)

### 安装依赖

```bash
# 安装 pnpm（如未安装）
npm install -g pnpm

# 安装项目依赖
pnpm install
```

### 环境配置

在项目根目录创建 `.env` 文件：

```bash
# 服务配置
NODE_ENV=development          # 运行环境：development/production
HOST=localhost               # 服务主机地址
PORT=1337                    # 服务端口
CORS_ORIGIN=*                # CORS 配置
SESSION_SECRET=your-secret-key  # Session 密钥

# 数据库配置（可选）
DB_HOST=127.0.0.1            # 数据库主机
DB_PORT=3306                 # 数据库端口
DB_USER=your-db-user         # 数据库用户名
DB_PASSWORD=your-db-password # 数据库密码
DB_NAME=your-db-name         # 数据库名称
```

### 启动开发服务器

```bash
# 启动开发服务器（支持热重载）
pnpm dev

# 测试服务是否正常运行
curl http://localhost:1337/api/probe
```

## 📖 API 文档

### 基础接口

#### 健康检查
```http
GET /api/probe
```

响应：
```json
{
  "code": 200,
  "data": {
    "status": "alive"
  },
  "message": "success"
}
```

### Markmap 接口

#### 生成思维导图
```http
POST /api/generate
Content-Type: application/json

{
  "markdown": "# 标题\n\n## 子标题\n\n- 列表项1\n- 列表项2",
  "offline": true  // 可选，是否生成离线版本
}
```

响应：直接返回 HTML 文件下载

**参数说明：**
- `markdown` (string, 必需): Markdown 内容
- `offline` (boolean, 可选): 是否生成离线版本
  - `true`: 生成包含所有资源的离线 HTML 文件
  - `false` 或未提供: 生成依赖 CDN 资源的在线版本



## 🐳 Docker 部署

### 构建镜像

```bash
# 构建 Docker 镜像
docker build -t markmap-server .
```

### 运行容器

```bash
# 运行容器
docker run -d \
  --name markmap-server \
  -p 1337:1337 \
  -e NODE_ENV=production \
  -e SESSION_SECRET=your-production-secret \
  markmap-server
```

### 使用 Docker Compose

```yaml
# docker-compose.yml
version: '3.8'
services:
  markmap-server:
    build: .
    ports:
      - "1337:1337"
    environment:
      - NODE_ENV=production
      - SESSION_SECRET=your-production-secret
      - CORS_ORIGIN=https://yourdomain.com
    restart: unless-stopped
```

```bash
# 启动服务
docker-compose up -d
```

## 🛠️ 开发指南

### 项目脚本

```bash
# 开发模式（热重载）
pnpm dev

# 构建生产版本
pnpm build

# 运行测试
pnpm test
```

### 代码规范

项目使用 ESLint 和 TypeScript 进行代码规范检查：

- 使用 TypeScript 严格模式
- 遵循 ESLint 推荐规则
- 使用 Zod 进行运行时类型验证

### 添加新功能

1. **添加数据模型**: 在 `src/model/` 中定义 Zod schema
2. **创建服务**: 在 `src/service/` 中实现业务逻辑
3. **添加控制器**: 在 `src/controller/` 中处理 HTTP 请求
4. **配置路由**: 在 `src/routes/` 中定义 API 端点

## 🔧 技术栈

### 核心框架
- **Express** - Web 应用框架
- **TypeScript** - 类型安全的 JavaScript
- **Zod** - 运行时类型验证

### 中间件
- **Helmet** - 安全防护中间件
- **CORS** - 跨域资源共享
- **express-session** - 会话管理

### 工具库
- **Pino** - 高性能日志系统
- **dotenv & envalid** - 环境变量管理
- **markmap-cli** - Markdown 到思维导图转换
- **MariaDB** - 数据库连接

### 开发工具
- **ts-node-dev** - TypeScript 开发服务器
- **ESLint** - 代码规范检查
- **PM2** - 生产环境进程管理

## 📝 使用示例

### 基本用法

```bash
# 生成在线版本思维导图
curl -X POST http://localhost:1337/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "markdown": "# 我的思维导图\n\n## 分支1\n- 内容1\n- 内容2\n\n## 分支2\n- 内容3\n- 内容4"
  }' \
  --output mindmap.html

# 生成离线版本思维导图
curl -X POST http://localhost:1337/api/generate \
  -H "Content-Type: application/json" \
  -d '{
    "markdown": "# 离线思维导图\n\n## 特点\n- 无需网络\n- 完全自包含\n- 可离线查看",
    "offline": true
  }' \
  --output offline-mindmap.html
```

### JavaScript 客户端示例

```javascript
// 生成思维导图
async function generateMindmap(markdown, offline = false) {
  const response = await fetch('http://localhost:1337/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ markdown, offline })
  });
  
  if (response.ok) {
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    
    // 创建下载链接
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mindmap.html';
    a.click();
    
    URL.revokeObjectURL(url);
  }
}

// 使用示例
const markdown = `
# 项目规划

## 第一阶段
- 需求分析
- 技术选型
- 架构设计

## 第二阶段
- 核心功能开发
- 单元测试
- 集成测试

## 第三阶段
- 性能优化
- 部署上线
- 监控运维
`;

generateMindmap(markdown, true); // 生成离线版本
```

## 🤝 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 ISC 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- [Markmap](https://markmap.js.org/) - 优秀的思维导图库
- [Express](https://expressjs.com/) - 快速、极简的 Web 框架
- [TypeScript](https://www.typescriptlang.org/) - JavaScript 的超集