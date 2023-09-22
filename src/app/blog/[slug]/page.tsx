import { match } from 'ts-pattern';
import { A, O, S, pipe } from '@mobily/ts-belt';
import { getSiteMap } from '@/lib/get-site-map';
import { NotionAPI } from 'notion-client';
import { NotionPage } from '@/components/notion/NotionPage';
import SiteConfig from '~/site.config';

const notionApi = new NotionAPI();

const BlogContent = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const pageId: string = slug.split('-').pop() || SiteConfig.rootNotionPageId;

  const recordMap = await notionApi.getPage(pageId);
  const siteMap = await getSiteMap();

  return (
    <NotionPage
      recordMap={recordMap}
      site={siteMap.site}
      error={O.None}
      pageId={O.None}
    />
  );
};

export default BlogContent;
