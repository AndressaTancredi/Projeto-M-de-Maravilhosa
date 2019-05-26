const clone = require('clone')
const config = require('./config')

const db = {}

const defaultData = {
  content: [
    {
      category: "biography",
      description: "<p>Mariana Crioula foi l&iacute;der de uma das maiores revoltas de escravos no Rio de Janeiro, na regi&atilde;o do Vale do Caf&eacute;, Mariana Crioula foi aclamada como rainha do seu povo ao lado de Manoel Congo, chamado de rei.</p>",
      id: "5af8b1f64b197941cd524e35",
      order: 0,
      slug: "mariana-crioula",
      title: "Mariana Crioula"
    },
    {
      description: "<p>A princesa angolana Zacimba Gaba foi vendida como escrava e acabou no estado do Esp&iacute;rito Santo, onde sofreu extrema viol&ecirc;ncia do senhor da escravos que a comprou e sentia inveja do seu t&iacute;tulo de realeza. Apesar disso tudo, foi uma guerreira que resistiu, vingou-se e provocou uma revolta das pessoas escravizadas contra a Casa Grande, liderando seu povo at&eacute; um quilombo onde foi rainha.</p>",
      id: "5af8b1a14b197941cd524e22",
      metadata: {
        birthdate: "Não informado",
        country: "Angola",
        credits: "Jarid Arraes",
        deathdate: "Não informado",
        image: ""
    },
      order: 1,
      slug: "zacimba-gaba",
      title: "Zacimba Gaba"
    },
    {
      category: "biography",
      description: "<p>A princesa angolana Zacimba Gaba foi vendida como escrava e acabou no estado do Esp&iacute;rito Santo, onde sofreu extrema viol&ecirc;ncia do senhor da escravos que a comprou e sentia inveja do seu t&iacute;tulo de realeza. Apesar disso tudo, foi uma guerreira que resistiu, vingou-se e provocou uma revolta das pessoas escravizadas contra a Casa Grande, liderando seu povo at&eacute; um quilombo onde foi rainha.</p>",
      id: "5af8b1a14b197941cd524e22",
      metadata: {
          birthdate: "Não informado",
          country: "Angola",
          credits: "Jarid Arraes",
          deathdate: "Não informado",
          image: ""
      },
      order: 1,
      slug: "zacimba-gaba",
      title: "Zacimba Gaba"
    },
    {
      category: "biography",
      description: "<p>Hil&aacute;ria Batista de Almeida, conhecida como Tia Ciata foi uma cozinheira e m&atilde;e de santo brasileira, considerada por muitos como uma das figuras influentes para o surgimento do samba carioca. Foi iniciada no candombl&eacute; em Salvador por Bangbosh&ecirc; Obitik&ocirc; e era filha de Oxum. No Rio de Janeiro, era Iyakeker&ecirc; na casa de Jo&atilde;o Alab&aacute;. Tamb&eacute;m ficou marcada como uma das principais animadoras da cultura negra nas nascentes favelas cariocas. Em sua casa na Pra&ccedil;a Onze era onde os sambistas se reuniam, foi criado o primeiro samba gravado em disco - &quot;Pelo Telefone&quot;- , uma composi&ccedil;&atilde;o de Donga e Mauro de Almeida, na voz do cantor Baiano, tamb&eacute;m nascido em Santo Amaro da Purifica&ccedil;&atilde;o.</p>",
      id: "5af8a330275ae72452d8460e",
      metadata: {
          birthdate: 1854,
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: 1924,
          image: {
              url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/9d601dc0-56ed-11e8-a098-e1c5d0edce44-download%20(3).jpg?alt=media&token=48d81a18-52c8-4230-aaca-752bde1dc7e9"
          }
      },
      order: 2,
      slug: "tia-ciata",
      title: "Tia Ciata"
  },
  {
      category: "biography",
      description: "<p>Teresa de Benguela foi uma l&iacute;der quilombola que viveu no atual estado de Mato Grosso, no Brasil, durante o s&eacute;culo XVIII. Foi esposa de Jos&eacute; Piolho, que chefiava o Quilombo do Piolho (ou do Quariter&ecirc;re, entre o rio Guapor&eacute; (a atual fronteira entre Mato Grosso e Bol&iacute;via) e a atual cidade de Cuiab&aacute;. Com a morte de Jos&eacute; Piolho, Teresa se tornou a rainha do quilombo, e, sob sua lideran&ccedil;a, a comunidade negra e ind&iacute;gena resistiu &agrave; escravid&atilde;o por duas d&eacute;cadas, sobrevivendo at&eacute; 1770, quando o quilombo foi destru&iacute;do pelas for&ccedil;as de Lu&iacute;s Pinto de Sousa Coutinho e a popula&ccedil;&atilde;o (79 negros e 30 &iacute;ndios), morta ou aprisionada.</p>",
      id: "5af88737df4525364fa5187e",
      metadata: {
          birthdate: "Não informado",
          country: "Brasil",
          credits: "Wikipedia",
          deathdate: "Não informado",
          image: {
              url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/6cff4530-56dd-11e8-89f3-035ad9474095-download%20(2).jpg?alt=media&token=4e6cc12b-6279-459f-b70e-28e281b0dda2"
          }
      },
      order: 3,
      slug: "teresa-de-benguela",
      title: "Teresa de Benguela"
  },
  {
      category: "biography",
      description: "<p>Maria Firmina dos Reis nasceu em S&atilde;o Lu&iacute;s, no Maranh&atilde;o, no dia 11 de outubro de 1825. Filha bastarda de Jo&atilde;o Pedro Esteves e Leonor Felipe dos Reis. Foi uma escritora brasileira, considerada a primeira romancista brasileira.</p><p>O romance &ldquo;&Uacute;rsula&rdquo; consagrou Maria Firmina como escritora e tamb&eacute;m foi o primeiro romance da literatura afro-brasileira, entendida esta como produ&ccedil;&atilde;o de autoria afrodescendente. Em 1887, no auge da campanha abolicionista, a escritora publica o livro &ldquo;A Escrava&rdquo;, refor&ccedil;ando sua postura antiescravista. Ao aposentar-se, em 1880, fundou uma escola mista e gratuita. Maria morre aos 92 anos, na cidade de Guimar&atilde;es, no dia 11 de novembro de 1917.</p>",
      id: "5af88505275ae72452d845fc",
      metadata: {
          birthdate: "11-10-1825",
          country: "Brasil",
          credits: "Fundação Cultural Palmares",
          deathdate: "11-11-1917",
          image: {
              url: "https://firebasestorage.googleapis.com/v0/b/theblackwomanhistory.appspot.com/o/1a9ab320-56dc-11e8-a098-e1c5d0edce44-200px-Maria_Firmina_dos_Reis-_Maranha%CC%83o.jpg?alt=media&token=4a843e13-588c-4c96-b1ad-8acab33ad1b0"
          }
      },
      order: 4,
      slug: "maria-firmina-dos-reis",
      title: "Maria Firmina dos Reis"
  },
  ]
}

const get = (token) => {
  let data = db[token]

  if (data == null) {
    data = db[token] = clone(defaultData)
  }

  return data
}

const add = (token, maravilhosa) => {
  if (!maravilhosa.id) {
    maravilhosa.id = Math.random().toString(36).substr(-8)
  }

  get(token).content.push(maravilhosa)

  return maravilhosa
}

const remove = (token, id) => {
  const data = get(token)
  const maravilhosa = data.content.find(c => c.id === id)

  if (maravilhosa) {
    data.content = data.content.filter(c => c !== maravilhosa)
  }

  return { content: maravilhosa }
}

module.exports = {
  get,
  add,
  remove
}
