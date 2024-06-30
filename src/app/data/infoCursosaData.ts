import { InfoCursos } from '../types/inforCursos.types';
// import { initializeApp } from 'firebase/app';
// import { addDoc, collection, getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyC_r8wd7y0WTMh4mtnnhJVSp3J3mn_me7I',
//   authDomain: 'congresso-med.firebaseapp.com',
//   projectId: 'congresso-med',
//   storageBucket: 'congresso-med.appspot.com',
//   messagingSenderId: '353045510195',
//   appId: '1:353045510195:web:c4b9305de426b40dfccb46',
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const infoCursos: InfoCursos[] = [
  {
    titulo: 'III JORNADA MULTIPROFISSIONAL DA SAÚDE - ESTÁCIO-IDOMED',
    oferta: 'GRATUITO',
    status: '',
    preco: '',
    data: '26 de abril de 2024',
    descricao: '',
    slug: 'jornada-multiprofissional-da-saude',
  },
  {
    titulo:
      'XLIII JORNADA DE GINECOLOGIA E OBSTETRÍCIA E VII JORNADA IGUATUENSE DE GINECOLOGIA E OBSTETRÍCIA.',
    oferta: '',
    status: '',
    preco: '',
    data: '26 de abril de 2024',
    descricao: '',
    slug: 'jornada-de-ginecologia-e-obstetricia',
  },
  {
    titulo: 'INSCREVA-SE NOS CURSOS DE ATUALIZAÇÃO',
    oferta: '',
    status: '',
    preco: '',
    data: '26 de abril de 2024',
    descricao: '',
    slug: 'cursos-de-atualizacao',
  },
  {
    titulo: 'MÉDICO ASSOCIADO QUITE',
    oferta: '',
    status: '',
    preco: 'R$ 100,00',
    data: '27 de abril de 2024',
    descricao: '',
    slug: 'medico-associado-quite',
  },
  {
    titulo: 'MÉDICO NÃO ASSOCIADO / NÃO QUITE',
    oferta: '',
    status: '',
    preco: 'R$ 200,00',
    data: '30 de abril de 2024',
    descricao: '',
    slug: 'medico-nao-associado-nao-quite',
  },
  {
    titulo: 'RESIDENTE-QUITE',
    oferta: '',
    status: '',
    preco: 'R$ 50,00',
    data: '01 de maio de 2024',
    descricao: '',
    slug: 'residente',
  },
  {
    titulo: 'RESIDENTE NÃO-QUITE',
    oferta: '',
    status: '',
    preco: 'R$ 100,00',
    data: '27 de abril de 2024',
    descricao: '',
    slug: 'residente-nao-quite',
  },
  {
    titulo: 'ESTUDANTES',
    oferta: '',
    status: '',
    preco: 'R$ 50,00',
    data: '27 de abril de 2024',
    descricao: '',
    slug: 'estudantes',
  },
  {
    titulo: 'OUTROS PROFISSIONAIS',
    oferta: '',
    status: '',
    preco: 'R$ 200,00',
    data: '01 de maio de 2024',
    slug: 'outros-profissionais',
    descricao: '',
  },
  {
    titulo:
      'CURSO DE ATUALIZAÇÃO EM PATOLOGIA DO TRATO GENITAL INFERIOR (PTGI)',
    oferta: 'Associado Quite',
    status: '',
    preco: 'R$ 100,00',
    data: '27 de abril de 2024 9h às 12h',
    descricao: '',
    slug: 'patologia-do-trato-genital-inferior',
  },
  {
    titulo:
      'CURSO DE ATUALIZAÇÃO EM PATOLOGIA DO TRATO GENITAL INFERIOR (PTGI)',
    oferta: 'Não Associado / Não Quite',
    status: '',
    preco: 'R$ 200,00',
    data: '27 de abril de 2024 9h às 12h',
    descricao: '',
    slug: 'curso-de-atualizacao-em-patologia',
  },
  {
    titulo: 'Curso de Atualização em Ultrassom em GO',
    oferta: 'Associado Quite',
    status: '',
    preco: 'R$ 100,00',
    data: '27 de abril de 2024',
    descricao: '',
    slug: 'atualizacao-em-ultrassom-em-go',
  },
  {
    titulo: 'Curso de Atualização em Ultrassom em GO',
    oferta: 'Não Associado / Não Quite',
    status: '',
    preco: 'R$ 200,00',
    data: '01 de maio de 2024',
    descricao: '',
    slug: 'atualizacao-em-ultrassom',
  },
];

// const main = async () => {
//   await Promise.all(
//     infoCursos.map(async (curso) => {
//       await addDoc(collection(db, 'infoCursos'), curso);
//     }),
//   );
//   process.exit();
// };

// main().catch((error) => {
//   console.error('Erro ao adicionar documentos ao Firestore:', error);
//   process.exit(1);
// });

export default infoCursos;
