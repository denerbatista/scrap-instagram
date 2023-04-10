import { Injectable } from '@nestjs/common';
import { launch, Browser, Page } from 'puppeteer';
import * as cheerio from 'cheerio';

@Injectable()
export class InstagramCommentScraperService {
  async scrapeComments(url: string): Promise<any[]> {
    const browser: Browser = await launch({ headless: true });
    const page: Page = await browser.newPage();
    await page.goto(url);

    // Aguarda a presença de pelo menos uma das classes _a9ym ou _a9zj na página
    await page.waitForFunction(
      'document.querySelector("._a9ym, ._a9zj") !== null',
    );

    // Aguarda 5 segundos após a página ter carregado completamente
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const html = await page.content();
    const $ = cheerio.load(html);
    const comentarios = $('._a9ym, ._a9zj'); // Classes CSS que contêm os comentários

    console.log(comentarios.length);

    const results = [];

    // Extrair os comentários usando Cheerio
    comentarios.each((index, elemento) => {
      const usuario = $(elemento).find('.x1i10hfl').text();
      const fotoPerfil = $(elemento).find('.xnz67gz img').attr('src');
      const texto = $(elemento).find('._aacl').text();

      // Verificar se o item já existe nos resultados antes de adicionar
      if (
        !results.find(
          (result) =>
            result.usuario === usuario &&
            result.fotoPerfil === fotoPerfil &&
            result.texto === texto,
        )
      ) {
        results.push({ usuario, fotoPerfil, texto });
      }
    });

    await browser.close();
    return results;
  }
}
