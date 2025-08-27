export const staticHtml = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Markmap Server API 文档</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      margin: 0;
      padding: 20px;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      animation: fadeIn 0.8s ease-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes slideIn {
      from { opacity: 0; transform: translateX(-20px); }
      to { opacity: 1; transform: translateX(0); }
    }
    
    .container {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(20px);
      border-radius: 24px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.08);
      padding: 48px 40px;
      max-width: 900px;
      width: 100%;
      text-align: left;
      border: 1px solid rgba(255, 255, 255, 0.2);
      animation: slideIn 0.6s ease-out 0.2s both;
    }
    
    h1 {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 16px;
      font-size: 2.8rem;
      font-weight: 700;
      letter-spacing: -0.5px;
      text-align: center;
      line-height: 1.2;
    }
    
    .subtitle {
      text-align: center;
      color: #64748b;
      font-size: 1.1rem;
      margin-bottom: 32px;
      font-weight: 400;
    }
    
    h2 {
      color: #1e293b;
      margin: 40px 0 20px 0;
      font-size: 1.5rem;
      font-weight: 600;
      position: relative;
      padding-left: 16px;
    }
    
    h2::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 2px;
    }
    
    p {
      color: #475569;
      margin-bottom: 20px;
      font-size: 1rem;
      line-height: 1.6;
      font-weight: 400;
    }
    
    .intro {
      background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
      border-radius: 16px;
      padding: 24px;
      margin-bottom: 32px;
      border-left: 4px solid #667eea;
    }
    
    code {
      background: linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%);
      color: #7c3aed;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 0.9rem;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      font-weight: 500;
      border: 1px solid #e2e8f0;
    }
    
    pre {
      background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
      color: #e2e8f0;
      padding: 20px;
      margin: 16px 0 24px 0;
      font-size: 0.9rem;
      border-radius: 12px;
      overflow-x: auto;
      font-family: 'JetBrains Mono', 'Fira Code', monospace;
      line-height: 1.5;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid #475569;
    }
    
    .api-section {
      background: #ffffff;
      border-radius: 16px;
      padding: 24px;
      margin: 24px 0;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
      border: 1px solid #e2e8f0;
      transition: all 0.3s ease;
    }
    
    .api-section:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    }
    
    .endpoint {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.1rem;
      color: #1e293b;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    
    .method {
      font-weight: 600;
      color: #fff;
      border-radius: 8px;
      padding: 6px 12px;
      font-size: 0.85rem;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      transition: all 0.2s ease;
    }
    
    .method:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }
    
    .get { 
      background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    }
    
    .post { 
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
    }
    
    .put { 
      background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
    }
    
    .delete { 
      background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
    }
    
    ul {
      padding-left: 20px;
    }
    
    li {
      margin-bottom: 8px;
      color: #475569;
      line-height: 1.5;
    }
    
    .tech-stack {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin: 25px 0;
    }
    
    .tech-item {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      color: white;
      padding: 20px;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 8px 25px rgba(240, 147, 251, 0.3);
      transition: all 0.3s ease;
    }
    
    .tech-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(240, 147, 251, 0.4);
    }
    
    .tech-item strong {
      display: block;
      font-size: 18px;
      margin-bottom: 8px;
    }
    
    .tech-item small {
      opacity: 0.9;
      font-size: 14px;
    }
    
    .tip {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 20px;
      border-radius: 12px;
      margin: 30px 0;
      text-align: center;
      font-weight: 500;
      box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
    }
    
    .footer {
      text-align: center;
      margin-top: 40px;
      padding: 30px 0;
      border-top: 2px solid #e1e8ed;
      color: #657786;
      font-size: 14px;
    }
    
    .footer p {
      margin: 8px 0;
    }
    
    .footer strong {
      color: #1da1f2;
    }
    
    .badge {
      display: inline-block;
      background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
      color: #92400e;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 500;
      margin-left: 12px;
      border: 1px solid #fbbf24;
    }
    
    @media (max-width: 768px) {
      .container {
        margin: 10px;
        padding: 32px 24px;
      }
      
      h1 {
        font-size: 2.2rem;
      }
      
      .tech-stack {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🧠 Markmap Server API</h1>
    <div class="subtitle">现代化的 Markdown 思维导图转换服务</div>
    
    <div class="intro">
      <p>
        欢迎使用 <strong>Markmap Server</strong>！这是一个基于 Express + TypeScript 构建的高性能 Markmap 服务器，专为将 Markdown 文档转换为精美的交互式思维导图而设计。
      </p>
      <p>
        ✨ 支持在线和离线两种模式，让您的思维导图随时随地可访问
      </p>
    </div>

    <h2>📋 API 接口</h2>
    
    <!-- 健康检查接口 -->
    <div class="api-section">
      <div class="endpoint">
        <span class="method get">GET</span>
        <span>/api/probe</span>
      </div>
      <p>🔍 <strong>健康检查接口</strong> - 快速检测服务运行状态</p>
      <pre>{
  "code": 200,
  "data": { "status": "alive" },
  "message": "success"
}</pre>
    </div>

    <!-- Markmap 生成接口 -->
    <div class="api-section">
      <div class="endpoint">
        <span class="method post">POST</span>
        <span>/api/generate</span>
      </div>
      <p>
        🎨 <strong>思维导图生成接口</strong> - 将 Markdown 内容转换为交互式思维导图
      </p>
      
      <h4>📝 请求参数</h4>
      <pre>{
  "markdown": "# 我的思维导图\\n\\n## 分支1\\n- 内容1\\n- 内容2\\n\\n## 分支2\\n- 内容3\\n- 内容4",
  "offline": true  // 可选，是否生成离线版本
}</pre>
      
      <h4>⚙️ 参数说明</h4>
      <ul>
        <li><code>markdown</code> <span class="badge">必需</span> - Markdown 格式的文本内容</li>
        <li><code>offline</code> <span class="badge">可选</span> - 生成模式选择：
          <ul>
            <li><code>true</code> - 生成完全离线的 HTML 文件（包含所有资源）</li>
            <li><code>false</code> - 生成在线版本（依赖 CDN 资源，文件更小）</li>
          </ul>
        </li>
      </ul>
      
      <h4>📤 响应结果</h4>
      <p>直接返回生成的思维导图 HTML 文件（二进制流，自动下载，默认文件名：<code>markmap.html</code>）</p>
    </div>



    <h2>💡 使用示例</h2>
    
    <div class="api-section">
      <h4>🌐 生成在线版本思维导图</h4>
      <p>适合网络环境良好的场景，文件体积更小，加载速度更快</p>
      <pre>curl -X POST http://localhost:1337/api/generate \
  -H "Content-Type: application/json" \
  -d '{"markdown": "# 我的思维导图\\n\\n## 分支1\\n- 内容1\\n- 内容2\\n\\n## 分支2\\n- 内容3\\n- 内容4"}' \
  --output mindmap.html</pre>
    </div>

    <div class="api-section">
      <h4>📱 生成离线版本思维导图</h4>
      <p>完全自包含，无需网络连接即可查看，适合离线环境或分享</p>
      <pre>curl -X POST http://localhost:1337/api/generate \
  -H "Content-Type: application/json" \
  -d '{"markdown": "# 离线思维导图\\n\\n## 特点\\n- 无需网络\\n- 完全自包含\\n- 可离线查看", "offline": true}' \
  --output offline-mindmap.html</pre>
    </div>

    <h2>⚠️ 错误处理</h2>
    
    <div class="api-section">
      <p>所有接口在发生错误时都会返回统一的 JSON 错误格式：</p>
      <pre>{"code": 400, "data": null, "message": "具体的错误描述信息"}</pre>
      
      <h4>📋 常见错误代码</h4>
      <ul>
        <li><code>400</code> - 请求参数错误或格式不正确</li>
        <li><code>500</code> - 服务器内部错误</li>
      </ul>
    </div>

    <h2>🛠️ 技术栈</h2>
    
    <div class="tech-stack">
      <div class="tech-item">
        <strong>Express</strong><br>
        <small>高性能 Web 应用框架</small>
      </div>
      <div class="tech-item">
        <strong>TypeScript</strong><br>
        <small>类型安全的 JavaScript 超集</small>
      </div>
      <div class="tech-item">
        <strong>Zod</strong><br>
        <small>运行时类型验证库</small>
      </div>
      <div class="tech-item">
        <strong>Markmap CLI</strong><br>
        <small>Markdown 思维导图转换引擎</small>
      </div>
      <div class="tech-item">
        <strong>Helmet</strong><br>
        <small>Web 安全防护中间件</small>
      </div>
      <div class="tech-item">
        <strong>CORS</strong><br>
        <small>跨域资源共享支持</small>
      </div>
    </div>

    <div class="tip">
      🚀 想了解更多功能和配置选项？请查看项目 README 文档或联系我们的开发团队获取技术支持！
    </div>
    
    <div class="footer">
      <p>🎯 <strong>Markmap Server</strong> - 让思维可视化变得简单高效</p>
      <p>&copy; 2025 Powered by Express + TypeScript | 用 ❤️ 构建</p>
    </div>
  </div>
</body>
</html>
`