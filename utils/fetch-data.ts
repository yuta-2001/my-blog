import { microCmsClient } from "./cms-client";

export const fetchQuiitaItems = async () => {
  const res = await fetch('https://qiita.com/api/v2/authenticated_user/items?per_page=100', {
    headers: {
      'Authorization': `Bearer ${process.env.QIITA_ACCESS_TOKEN}`
    }
  });

  const data = await res.json();

  return data;
}

export const fetchWorkItems = async () => {
  const data = await microCmsClient.get({
    endpoint: 'works',
    queries: {
      fields: ['id', 'img', 'category', 'name', 'publishedAt'],
      orders: '-publishedAt',
    }
  });

  return data.contents;
}

export const fetchWorkItem = async (id: string) => {
  const data = await microCmsClient.get({ endpoint: 'works', contentId: id });

  return data;
}
