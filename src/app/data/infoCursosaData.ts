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
    oferta: '10% de Desconto',
    status: 'Aberto',
    preco: 'R$ 600,00',
    data: '26 de abril de 2024',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'jornada-multiprofissional-da-saude',
  },
  {
    titulo:
      'XLIII JORNADA DE GINECOLOGIA E OBSTETRÍCIA E VII JORNADA IGUATUENSE DE GINECOLOGIA E OBSTETRÍCIA.',
    oferta: '10% de Desconto',
    status: 'Fechado',
    preco: 'R$ 100,00',
    data: '26 de abril de 2024',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'jornada-de-ginecologia-e-obstetricia',
  },
  {
    titulo: 'INSCREVA-SE NOS CURSOS DE ATUALIZAÇÃO',
    oferta: '10% de Desconto',
    status: 'Fechado',
    preco: 'R$ 200,00',
    data: '26 de abril de 2024',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'cursos-de-atualizacao',
  },
  {
    titulo: 'MÉDICO ASSOCIADO QUITE',
    oferta: '10% de Desconto',
    status: 'Em Andamento',
    preco: 'R$ 100,00',
    data: '27 de abril de 2024',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'medico-associado-quite',
  },
  {
    titulo: 'MÉDICO NÃO ASSOCIADO / NÃO QUITE',
    oferta: '10% de Desconto',
    status: 'Pre-inscricções',
    preco: 'R$ 200,00',
    data: '30 de abril de 2024',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'medico-nao-associado-nao-quite',
  },
  {
    titulo: 'RESIDENTE-QUITE',
    oferta: '10% de Desconto',
    status: 'Aberto',
    preco: 'R$ 50,00',
    data: '01 de maio de 2024',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'residente',
  },
  {
    titulo: 'RESIDENTE NÃO-QUITE',
    oferta: '10% de Desconto',
    status: 'Fechado',
    preco: 'R$ 100,00',
    data: '27 de abril de 2024',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'residente-nao-quite',
  },
  {
    titulo: 'ESTUDANTES',
    oferta: '10% de Desconto',
    status: 'Em Andamento',
    preco: 'R$ 50,00',
    data: '27 de abril de 2024',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'estudantes',
  },
  {
    titulo: 'OUTROS PROFISSIONAIS',
    oferta: '10% de Desconto',
    status: 'Fechado',
    preco: 'R$ 200,00',
    data: '01 de maio de 2024',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'outros-profissionais',
  },
  {
    titulo:
      'CURSO DE ATUALIZAÇÃO EM PATOLOGIA DO TRATO GENITAL INFERIOR (PTGI)',
    oferta: '10% de Desconto',
    status: 'Aberto',
    preco: 'R$ 100,00',
    data: '27 de abril de 2024 9h às 12h',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'patologia-do-trato-genital-inferior',
  },
  {
    titulo:
      'CURSO DE ATUALIZAÇÃO EM PATOLOGIA DO TRATO GENITAL INFERIOR (PTGI)',
    oferta: '10% de Desconto',
    status: 'Aberto',
    preco: 'R$ 200,00',
    data: '27 de abril de 2024 9h às 12h',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'curso-de-atualizacao-em-patologia',
  },
  {
    titulo: 'Curso de Atualização em Ultrassom em GO',
    oferta: '10% de Desconto',
    status: 'Aberto',
    preco: 'R$ 100,00',
    data: '27 de abril de 2024',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
    slug: 'atualizacao-em-ultrassom-em-go',
  },
  {
    titulo: 'Não Associado / Não Quite',
    oferta: '20% de Desconto',
    status: 'Aberto',
    preco: 'R$ 200,00',
    data: '01 de maio de 2024',
    descricao:
      'Certificado será emitido de acordo com os dados fornecidos durante sua inscrição e será enviado para o e-mail cadastrado. Vale ressaltar que o certificado é online, facilitando o acesso e a distribuição digitalmente. Após o pagamento verifique a caixa de entrada ou spam do e-mail. Pagamento em boleto, o prazo para a sua compensação é de até 3 dias úteis. Lembramos: certifique-se de que o seu endereço de e-mail fornecido no formulário está correto, pois ele será utilizado em todas as comunicações do evento.',
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
