import fs from 'fs';
import { exec } from 'child_process';


class MarkmapService {
  async generate(markdown: string): Promise<Blob> {
    // 生成时间戳
    const timestamp = Date.now();
    // 构建文件路径
    const filePath = `./files/markdown-${timestamp}.md`;
    
    // 确保目录存在
    await fs.promises.mkdir('./files', { recursive: true });
    
    // 写入markdown内容到文件
    await fs.promises.writeFile(filePath, markdown, 'utf-8');
    
    // 执行markmap-cli命令
    await new Promise((resolve, reject) => {
      exec(`npx markmap-cli ${filePath} --no-open`, (error, stdout, stderr) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(stdout);
      });
    });

    // 读取生成的html文件
    const htmlPath = filePath.replace('.md', '.html');
    const htmlContent = await fs.promises.readFile(htmlPath, 'utf-8');

    // 删除临时文件
    await fs.promises.unlink(filePath);
    await fs.promises.unlink(htmlPath);

    // 将html内容转换为Blob
    return new Blob([htmlContent], { type: 'text/html' });
  }
}

export const markmapService = new MarkmapService();
