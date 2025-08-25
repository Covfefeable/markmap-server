import { RequestHandler, Request, Response } from "express";
import { commonError } from "../../utils/response";
import { MarkmapSchema } from "../../model/markmap";
import { markmapService } from "../../service/markmap";

class MarkmapController {
  public generate: RequestHandler = async (req: Request, res: Response) => {
    try {
      const validatedData = MarkmapSchema.parse(req.body);
      const { markdown } = validatedData;
      const serviceResponse = await markmapService.generate(markdown);
      
      // 设置响应头，让浏览器直接下载文件
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('Content-Disposition', 'attachment; filename="markmap.html"');
      
      // 将Blob转换为Buffer并直接返回二进制流
      const arrayBuffer = await serviceResponse.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      
      res.send(buffer);
    } catch (error) {
      res.status(200).send(commonError(400, error as string));
      return;
    }
  };
}

export const markmapController = new MarkmapController();
