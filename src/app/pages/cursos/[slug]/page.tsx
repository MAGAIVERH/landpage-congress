// Importe os módulos necessários
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { InfoCursos } from '../../../types/inforCursos.types';
import infoCursos from '../../../data/infoCursosaData';
import CursoCard from '../../../components/CursoCard';

// Interface para as props do componente
interface Props {
  curso: InfoCursos;
}

// Componente da página [slug]
const CursoSlugPage: React.FC<Props> = ({ curso }) => {
  const router = useRouter();

  // Verifica se está em fallback mode (carregando)
  if (router.isFallback) {
    return <div>Carregando...</div>;
  }

  // Renderiza o componente de detalhes do curso
  return (
    <div className="container mx-auto py-10">
      <CursoCard curso={curso} />
    </div>
  );
};

// Função getStaticPaths para gerar os caminhos estáticos
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = infoCursos.map((curso) => ({
    params: { slug: curso.slug },
  }));

  return { paths, fallback: true };
};

// Função getStaticProps para buscar os dados do curso baseado no slug
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const curso = infoCursos.find((curso) => curso.slug === slug);

  // Se o curso não for encontrado, retorna notFound: true
  if (!curso) {
    return {
      notFound: true,
    };
  }

  // Retorna as props do curso e configura o revalidate para 1 segundo
  return {
    props: {
      curso,
    },
    revalidate: 1,
  };
};

// Exporta o componente da página [slug] como padrão
export default CursoSlugPage;
