'use client';

import infoCursos from '../../data/infoCursosaData';
import CursoCard from '../../components/CursoCard';
import { redirect } from 'next/navigation';

interface Props {
  params: {
    slug: string;
  };
}

const getData = async (slug: string) => {
  return infoCursos.find((item) => item.slug === slug);
};

const CursosSlugPage = async (props: Props) => {
  const slug = decodeURI(props.params.slug);
  const curso = await getData(slug);

  if (!curso) redirect('/');

  return (
    <div>
      <CursoCard curso={curso} />
    </div>
  );
};

export default CursosSlugPage;
