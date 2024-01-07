// import { fetchQuiitaItems } from '@/utils/fetch-data';
// import { PrismaClient } from '@prisma/client';
// import puppeteer from "puppeteer";
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient();
export const dynamic = 'force-dynamic'

export async function GET() {

//   // Qiitaの記事を取得
//   const items = await fetchQuiitaItems();
//   const storedItems = await prisma.blog.findMany();

//   // 取得した記事をDBに保存
//   // すでに保存済みの記事は、Qiitaの更新日時がDBの更新日時より新しい場合のみ更新
//   const now = new Date();
//   await Promise.all(items.map(async (item: any) => {
//     const storedItem = storedItems.find((storedItem) => storedItem.blog_id === item.id);
//     const tagsArray = item.tags.map((tag: any) => tag.name);
//     if (!storedItem) {
//       let ogImageUrl = await getMetaOgImage(item.url);

//       await prisma.blog.create({
//         data: {
//           blog_id: item.id,
//           title: item.title,
//           tags: tagsArray,
//           url: item.url,
//           og_url: ogImageUrl!,
//           created_at: item.created_at,
//           updated_at: now.toISOString(),
//         },
//       });
//     } else if (storedItem.updated_at < item.updated_at) {
//       let ogImageUrl = await getMetaOgImage(item.url);
//       await prisma.blog.update({
//         where: {
//           id: storedItem.id,
//         },
//         data: {
//           blog_id: item.id,
//           title: item.title,
//           tags: tagsArray,
//           url: item.url,
//           og_url: ogImageUrl!,
//           created_at: item.created_at,
//           updated_at: now.toISOString(),
//         },
//       });
//     }
//   }));

//   // DBに保存されているが、Qiitaから削除された記事を削除
//   storedItems.forEach(async (storedItem) => {
//     const item = items.find((item: any) => item.id === storedItem.blog_id);
//     if (!item) {
//       await prisma.blog.delete({
//         where: {
//           id: storedItem.id,
//         },
//       });
//     }
//   })

//   return NextResponse.json({ 
//     message: 'success',
//   });
// }


// // urlを元に、meta OG imageを取得
// async function getMetaOgImage(url: string) {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()

//   await page.goto(url)
//   const ogImage = await page.$eval('meta[property="og:image"]', (element) => {
//     return element.getAttribute('content')
//   })

//   await browser.close()

//   return ogImage;
}

