// 'use client';
// import { GetStaticProps, GetStaticPaths } from 'next';
// import { useRouter } from 'next/router';
// import { InfoCursos } from '../../types/inforCursos.types';
// import infoCursos from '../../data/infoCursosaData';
// import CursoCard from '../../components/CursoCard';

// interface Props {
//   curso: InfoCursos;
// }

// const CursoSlugPage: React.FC<Props> = ({ curso }) => {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Carregando...</div>;
//   }

//   return (
//     <div className="container mx-auto py-10">
//       <CursoCard curso={curso} />
//     </div>
//   );
// };

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = infoCursos.map((curso) => ({
//     params: { slug: curso.slug },
//   }));

//   return { paths, fallback: true };
// };

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   const slug = params?.slug as string;
//   const curso = infoCursos.find((curso) => curso.slug === slug);

//   if (!curso) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       curso,
//     },
//     revalidate: 1,
//   };
// };

// export default CursoSlugPage;
