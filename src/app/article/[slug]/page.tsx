interface IParams {
  slug: string;
  searchParams: string;
}

interface IArticle {
  params: IParams;
}

export default function Article({ params }: IArticle) {
  const slug = params.slug;
  return <h1>Article: {slug}</h1>;
}
