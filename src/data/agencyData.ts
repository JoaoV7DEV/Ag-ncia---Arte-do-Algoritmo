import { ServicePillar, WebsiteProject, GraphicDesignProject, TestimonialFeedback, ProcessStep, FaqItem } from '../types';

export const AGENCY_INFO = {
  name: 'Arte do Algoritmo',
  tagline: 'Design, Tecnologia e Estratégia Digital',
  headline: 'Design, tecnologia e estratégia para fortalecer sua presença digital.',
  subheadline: 'Unimos a sensibilidade artística do design e da identidade visual com a precisão dos sistemas digitais. Criamos sites de alta performance, marcas memoráveis e soluções pensadas para gerar resultados reais para o seu negócio.',
  phoneDisplay: '(71) 99184-5299',
  phoneRaw: '5571991845299',
  whatsappUrl: 'https://wa.me/5571991845299?text=Ol%C3%A1!%20Conheci%20a%20Arte%20do%20Algoritmo%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto.',
  instagramHandle: '@arte_do_algoritmo',
  instagramUrl: 'https://instagram.com/arte_do_algoritmo',
  facebookHandle: 'Arte do Algoritmo',
  facebookUrl: 'https://facebook.com/artedoalgoritmo',
  city: 'Salvador',
  state: 'Bahia',
  country: 'Brasil',
  locationDisplay: 'Salvador, Bahia • Atendimento para todo o Brasil',
  pricingNote: 'Projetos a partir de R$ 500, com soluções personalizadas conforme a necessidade do seu negócio.',
};

export const BENEFITS = [
  {
    id: 'design',
    title: 'Design Estratégico',
    description: 'Criamos identidades visuais e layouts pensados para comunicar credibilidade imediata e diferenciar sua marca no mercado.',
    iconName: 'Palette',
    badge: 'Criatividade Humana'
  },
  {
    id: 'performance',
    title: 'Sites com Foco em Resultado',
    description: 'Páginas rápidas, responsivas e otimizadas para guiar o visitante diretamente ao contato e à contratação do seu serviço.',
    iconName: 'Rocket',
    badge: 'Alta Conversão'
  },
  {
    id: 'agile',
    title: 'Entrega Ágil e Organizada',
    description: 'Metodologia estruturada em etapas transparentes, cronograma cumprido à risca e prévias claras em cada fase do projeto.',
    iconName: 'CheckCircle2',
    badge: 'Processo Claro'
  },
  {
    id: 'proximity',
    title: 'Comunicação Clara e Atendimento Próximo',
    description: 'Sem termos técnicos complicados ou enrolação. Você conversa diretamente com quem desenvolve seu projeto pelo WhatsApp.',
    iconName: 'MessageSquareText',
    badge: 'Atendimento Direto'
  }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'desenvolvimento',
    pillarNumber: '01',
    title: 'Desenvolvimento Digital',
    tagline: 'Sua empresa com um endereço digital rápido, seguro e profissional',
    description: 'Desenvolvemos páginas web modernas projetadas para carregar em segundos, funcionar com perfeição no celular e transformar visitantes em clientes.',
    accentColor: 'cyan',
    services: [
      {
        name: 'Sites Institucionais',
        description: 'Apresente sua empresa, histórico, equipe e serviços com autoridade e elegância.',
        features: ['100% responsivo para mobile', 'Otimização para Google (SEO básico)', 'Integração com WhatsApp e formulários', 'Painel fácil para atualizações']
      },
      {
        name: 'Landing Pages de Alta Conversão',
        description: 'Páginas de vendas diretas com copywriting persuasivo, ideais para anúncios e lançamentos.',
        features: ['Foco total em ação (WhatsApp/Lead)', 'Design visual de alto impacto', 'Velocidade de carregamento extrema', 'Integração com tags de tráfego pago']
      },
      {
        name: 'Lojas Virtuais & Catálogos',
        description: 'Venda produtos físicos ou digitais com sistema de pedidos direto e organizado.',
        features: ['Catálogo organizado por categorias', 'Integração de checkout e frete', 'Gestão simples de estoque e pedidos', 'Layout intuitivo para compradores']
      },
      {
        name: 'Sites Personalizados',
        description: 'Sistemas sob medida para necessidades específicas de captação, agendamento ou apresentação.',
        features: ['Arquitetura personalizada', 'Fluxos de agendamento online', 'Integração com APIs e bancos de dados', 'Identidade sob medida']
      }
    ]
  },
  {
    id: 'design',
    pillarNumber: '02',
    title: 'Design Estratégico',
    tagline: 'Identidade que encanta, posiciona e gera valor para o seu negócio',
    description: 'O design não é apenas estética: é como o seu cliente percebe o profissionalismo e a seriedade da sua empresa antes mesmo de falar com você.',
    accentColor: 'magenta',
    services: [
      {
        name: 'Identidade Visual Completa',
        description: 'Criação da alma visual da sua marca: logotipo, paleta de cores, tipografia e diretrizes de uso.',
        features: ['Manual de aplicação da marca', 'Arquivos em vetor (SVG, PDF, PNG)', 'Variações para fundos claros e escuros', 'Tipografia e paleta institucional']
      },
      {
        name: 'Design de Logotipos',
        description: 'Símbolos originais e memoráveis, construídos a partir da história e proposta de valor da sua marca.',
        features: ['Pesquisa de público e mercado', 'Desenvolvimento de conceitos exclusivos', 'Aplicações digitais e impressas', 'Direitos autorais 100% do cliente']
      },
      {
        name: 'Materiais Gráficos & Papelaria',
        description: 'Cartões de visita digitais e interativos, flyers, pastas corporativas, uniformes e banners.',
        features: ['Pronto para impressão em gráfica', 'Versões digitais para envio no WhatsApp', 'Padrão estético alinhado ao site', 'Acabamento refinado']
      },
      {
        name: 'Artes para Redes Sociais',
        description: 'Design consistente para feed, stories e destaques do Instagram que elevam a percepção de autoridade.',
        features: ['Templates reutilizáveis e organizados', 'Identidade visual padronizada', 'Composição focada em retenção e leitura', 'Formatos para feed e stories']
      }
    ]
  },
  {
    id: 'presenca',
    pillarNumber: '03',
    title: 'Presença e Marketing Digital',
    tagline: 'Colocando sua marca na frente de quem procura pelos seus serviços',
    description: 'Ter um site incrível é o primeiro passo. Conectar seu negócio com clientes locais e nas buscas do Google faz sua operação crescer.',
    accentColor: 'purple',
    services: [
      {
        name: 'Google Meu Negócio Otimizado',
        description: 'Configuração profissional para que sua empresa apareça no mapa e nas buscas de Salvador e região.',
        features: ['Cadastro completo e verificado', 'Catálogo de produtos e serviços', 'Otimização com fotos profissionais', 'Estratégia para receber mais avaliações']
      },
      {
        name: 'Suporte a Tráfego Pago',
        description: 'Estruturação técnica de pixels, tags e páginas preparadas para receber campanhas de Meta Ads e Google Ads.',
        features: ['Instalação correta de pixels de conversão', 'Páginas calibradas para menor custo por clique', 'Alinhamento da promessa do anúncio com o site', 'Apoio estratégico de público']
      },
      {
        name: 'SEO (Otimização para Buscas)',
        description: 'Boas práticas estruturais e semânticas para ajudar seu site a ser indexado organicamente pelo Google.',
        features: ['Metatags e títulos otimizados', 'Tempo de carregamento reduzido', 'Indexação garantida no Google Search Console', 'Estrutura semântica correta']
      },
      {
        name: 'Apoio Contínuo de Presença Digital',
        description: 'Suporte próximo para ajustes, novas páginas, atualizações de campanhas e acompanhamento de métricas.',
        features: ['Contato direto sem burocracia', 'Manutenção preventiva de domínios e hospedagem', 'Adição de novas seções e banners', 'Aconselhamento para expansão digital']
      }
    ]
  }
];

export const FLAGSHIP_PROJECT: WebsiteProject = {
  id: '01s-mobilidade',
  title: '01S Mobilidade',
  category: 'SITE INSTITUCIONAL',
  niche: 'Mobilidade Urbana & Transporte',
  description: 'Projeto completo de reposicionamento de marca e desenvolvimento web da MOB3L para 01S Mobilidade. Estruturação institucional com páginas dedicadas para motoristas parceiros e passageiros, gerando credibilidade e aumento expressivo de acessos validados pelo Google.',
  tags: ['Rebranding Completo', 'Identidade Visual', 'Website Institucional', 'Páginas Motorista & Passageiro', 'SEO & Google Meu Negócio'],
  client: '01S Mobilidade (Antiga MOB3L)',
  year: '2026',
  isFlagship: true,
  deliverables: [
    'Transição e apresentação do Rebranding (da MOB3L para 01S Mobilidade)',
    'Página Inicial institucional com narrativa de credibilidade e diferenciais',
    'Página exclusiva de captação e requisitos para Motoristas Parceiros',
    'Página exclusiva para Passageiros com fluxo de 3 passos e QR Code do App',
    'Design responsivo mobile-first com paleta verde e laranja institucional',
    'Otimização completa de presença e indexação no Google'
  ],
  sectionsPreview: [
    'Página Inicial: Apresentação da marca, transição de cara nova e diferenciais de segurança',
    'Página de Motorista: Como se cadastrar, documentação exigida e vantagens financeiras',
    'Página de Passageiro: Download do aplicativo, transparência de preços e suporte local'
  ],
  fullHeightPreview: {
    heroHeading: 'Mobilidade inteligente. Agora, de cara nova.',
    heroSub: 'A 01S Mobilidade evoluiu para oferecer mais eficiência, organização e confiança com a mesma operação que você já conhece.',
    themeColor: '#0c2214',
    accentColor: '#10b981',
    sections: [
      {
        type: 'hero',
        title: 'Mobilidade Inteligente. Agora, de cara nova.',
        description: 'A 01S Mobilidade evoluiu para oferecer mais eficiência, organização e confiança com a mesma operação que você já conhece.',
        items: ['Botão: Sou Motorista', 'Botão: Sou Passageiro', 'Visual 3D de fitas energéticas verde e laranja']
      },
      {
        type: 'rebrand',
        title: 'Estamos de cara nova — De MOB3L para 01S Mobilidade',
        description: 'Mudamos nossa marca para oferecer uma experiência ainda melhor, mantendo a mesma equipe e o mesmo coração.',
        items: ['Mesmo aplicativo', 'Mesmos motoristas', 'Mesmo atendimento', 'Mesma qualidade']
      },
      {
        type: 'differentials',
        title: 'Por que escolher a 01S Mobilidade?',
        items: ['Organização real de frotas', 'Pontualidade garantida', 'Serviço profissional verificado', 'Suporte humanizado direto']
      },
      {
        type: 'drivers',
        title: 'Página de Motoristas: Dirija e Ganhe Mais',
        description: 'Área com requisitos claros (CNH com EAR, documento do veículo), fluxo de análise em 3 passos e cadastro simplificado.',
        items: ['Requisitos Pessoais', 'Documentos Necessários', 'Veículo Aprovado', 'Cadastro Direto na Plataforma']
      },
      {
        type: 'passengers',
        title: 'Página de Passageiros: Sua corrida mais simples e confiável',
        description: 'Apresentação do app para iOS e Android, escaneamento de QR Code na tela e valores prévios transparentes.',
        items: ['Motoristas verificados', 'Atendimento ágil', 'Preços transparentes', 'Suporte local']
      },
      {
        type: 'social-proof',
        title: 'Depoimentos de Passageiros & Motoristas',
        description: 'Avaliações reais validadas no lançamento da marca.',
        items: ['Carlos Henrique (Motorista Parceiro)', 'Fernanda Souza (Passageira)', 'Juliana Ribeiro (Passageira)']
      }
    ]
  }
};

export const WEBSITE_GALLERY: WebsiteProject[] = [
  FLAGSHIP_PROJECT,
  {
    id: 'dra-camila-valente',
    title: 'Dra. Camila Valente',
    category: 'LANDING PAGE',
    niche: 'Nutrição & Saúde Integrativa',
    description: 'Landing page focada na conversão de novos pacientes para consultório de nutrição clínica e esportiva. Estruturada com método de atendimento, depoimentos em vídeo e agendamento direto pelo WhatsApp.',
    tags: ['Saúde & Nutrição', 'Landing Page', 'Agendamento WhatsApp', 'Copywriting Médico'],
    client: 'Dra. Camila Valente',
    year: '2026',
    fullHeightPreview: {
      heroHeading: 'Transforme sua relação com a comida e conquiste sua melhor versão.',
      heroSub: 'Atendimento nutricional humanizado, sem dietas restritivas malucas. Plano alimentar individualizado para sua rotina.',
      themeColor: '#1c241e',
      accentColor: '#10b981',
      sections: [
        { type: 'hero', title: 'Nutrição Clínica & Performance', description: 'Planos alimentares adaptados à rotina real de quem trabalha e treina.' },
        { type: 'method', title: 'O Método em 4 Etapas', items: ['Avaliação Bioimpedância', 'Plano 100% Personalizado', 'Acompanhamento por App', 'Ajustes Quinzenais'] },
        { type: 'cta', title: 'Agende sua Consulta pelo WhatsApp', description: 'Vagas limitadas para início este mês com suporte direto.' }
      ]
    }
  },
  {
    id: 'silva-castro-adv',
    title: 'Silva & Castro Advogados',
    category: 'SITE INSTITUCIONAL',
    niche: 'Advocacia Empresarial & Tributária',
    description: 'Site institucional corporativo transmitindo sobriedade, segurança jurídica e tradição. Arquitetura estruturada por áreas de atuação e canal confidencial de consulta prévia.',
    tags: ['Direito & Advocacia', 'Site Institucional', 'Identidade Corporativa', 'Canal de Contato'],
    client: 'Silva & Castro Advogados Associados',
    year: '2025',
    fullHeightPreview: {
      heroHeading: 'Segurança jurídica e estratégia para proteger e expandir seu patrimônio.',
      heroSub: 'Assessoria jurídica empresarial, compliance e direito tributário com foco em resultados sustentáveis.',
      themeColor: '#1a1f2c',
      accentColor: '#38bdf8',
      sections: [
        { type: 'hero', title: 'Advocacia de Precisão Empresarial', description: 'Mais de 15 anos de atuação defendendo interesses corporativos com ética.' },
        { type: 'areas', title: 'Áreas de Atuação', items: ['Direito Tributário', 'Contratos Empresariais', 'Recuperação de Créditos', 'Direito Trabalhista Patronal'] },
        { type: 'partners', title: 'Sócios & Equipe Especializada', description: 'Corpo jurídico formado pelas principais instituições de direito.' }
      ]
    }
  },
  {
    id: 'pet-amor-vet',
    title: 'Pet & Amor Clínica Veterinária',
    category: 'SITE INSTITUCIONAL',
    niche: 'Saúde Animal & Centro de Estética Pet',
    description: 'Site acolhedor e informativo com apresentação da infraestrutura clínica 24 horas, especialidades cirúrgicas, hotelzinho e agendamento rápido de banho e tosa.',
    tags: ['Clínica Veterinária', 'Site Institucional', 'Agendamento Fácil', 'Design Acolhedor'],
    client: 'Pet & Amor Veterinária',
    year: '2025',
    fullHeightPreview: {
      heroHeading: 'O cuidado e a atenção médica que seu melhor amigo merece.',
      heroSub: 'Atendimento emergencial 24h, consultas preventivas, vacinação e centro de estética com carinho e responsabilidade.',
      themeColor: '#241a24',
      accentColor: '#f43f5e',
      sections: [
        { type: 'hero', title: 'Hospital Veterinário 24 Horas', description: 'Equipe de plantão e UTI veterinária completa para socorrer seu pet.' },
        { type: 'services', title: 'Nossos Cuidados', items: ['Consultas e Vacinas', 'Cirurgias Especializadas', 'Exames Laboratoriais', 'Banho & Tosa com Câmera'] },
        { type: 'booking', title: 'Agende um Horário', description: 'Confirmação rápida pelo WhatsApp da recepção.' }
      ]
    }
  },
  {
    id: 'trattoria-bella-vista',
    title: 'Trattoria Bella Vista',
    category: 'LANDING PAGE',
    niche: 'Gastronomia & Restaurante',
    description: 'Página visual rica para restaurante italiano contemporâneo. Integração de cardápio digital por QR code, fotos imersivas dos pratos assinados pelo chef e sistema de reservas.',
    tags: ['Gastronomia', 'Cardápio Digital', 'Reservas de Mesas', 'Experiência Visual'],
    client: 'Trattoria Bella Vista',
    year: '2025',
    fullHeightPreview: {
      heroHeading: 'A verdadeira alma da culinária italiana artesanal.',
      heroSub: 'Massas frescas preparadas diariamente, vinhos selecionados e um ambiente acolhedor para momentos inesquecíveis.',
      themeColor: '#221915',
      accentColor: '#f59e0b',
      sections: [
        { type: 'hero', title: 'Trattoria Artesanal Contemporânea', description: 'Tradição italiana trazida com ingredientes frescos e amor.' },
        { type: 'menu', title: 'Pratos em Destaque', items: ['Tagliolini al Tartufo', 'Ossobuco Tradizionale', 'Risotto ai Funghi Porcini', 'Tiramisù Clássico'] },
        { type: 'reservations', title: 'Reserve sua Mesa Online', description: 'Garanta seu lugar para almoço executivo ou jantar especial.' }
      ]
    }
  },
  {
    id: 'solar-prime-bahia',
    title: 'Solar Prime Bahia',
    category: 'LANDING PAGE',
    niche: 'Energia Solar Fotovoltaica',
    description: 'Landing page focada em captação de leads residenciais e comerciais interessados em reduzir até 95% na conta de luz. Inclui simulador visual de economia e cálculo prévio.',
    tags: ['Energia Solar', 'Captação de Leads', 'Simulador de Economia', 'Alta Conversão'],
    client: 'Solar Prime Bahia',
    year: '2026',
    fullHeightPreview: {
      heroHeading: 'Reduza em até 95% sua conta de luz com energia solar inteligente.',
      heroSub: 'Projetos completos com engenharia própria, homologação na concessionária e garantia de 25 anos nos painéis solares.',
      themeColor: '#19262b',
      accentColor: '#00FFFF',
      sections: [
        { type: 'hero', title: 'Energia Limpa & Economia Real', description: 'Investimento com retorno garantido e valorização do seu imóvel.' },
        { type: 'calculator', title: 'Simule sua Economia Mensal', items: ['Conta de R$ 500 -> Pague ~R$ 60', 'Conta de R$ 1.200 -> Pague ~R$ 95', 'Financiamento que se paga com a economia'] },
        { type: 'contact', title: 'Solicite um Estudo Gratuito', description: 'Engenheiro analisa sua fatura sem compromisso pelo WhatsApp.' }
      ]
    }
  }
];

export const GRAPHIC_DESIGN_PROJECTS: GraphicDesignProject[] = [
  {
    id: 'mob3l-rebranding',
    title: '01S Mobilidade / MOB3L Rebranding',
    category: 'Identidade Visual & Rebranding',
    classification: 'PROJETO COMERCIAL',
    description: 'Desenvolvimento do novo posicionamento de marca, redesenho de símbolo, aplicação em frotas e materiais institucionais para aplicativo de mobilidade.',
    deliverables: ['Novo Logotipo e Símbolo', 'Manual de Identidade Visual', 'Mockups de Aplicativo', 'Comunicação da Transição da Marca'],
    colors: ['#047857', '#F97316', '#FFFFFF', '#1F2937'],
    thumbnailGradient: 'from-emerald-600 via-teal-700 to-orange-500',
    details: 'Trabalho real de rebranding conduzido em Salvador para estruturar a expansão da empresa no setor de transporte de passageiros e motoristas parceiros.'
  },
  {
    id: 'topioca-dona-moca',
    title: 'Tapiocaria Dona Moça / Topioca',
    category: 'Branding & Embalagens',
    classification: 'PROJETO COMERCIAL',
    description: 'Criação de identidade visual artesanal e moderna para franquia regional de tapiocas gourmets. Identidade que honra as raízes nordestinas com acabamento contemporâneo.',
    deliverables: ['Identidade Visual Completa', 'Design de Embalagens Térmicas', 'Cardápio para Ponto de Venda', 'Aventais e Uniformes'],
    colors: ['#D97706', '#92400E', '#FEF3C7', '#78350F'],
    thumbnailGradient: 'from-amber-600 via-orange-600 to-yellow-500',
    details: 'Projeto comercial com aplicação física em quiosques, sacolas kraft ecológicas e comunicação visual no Instagram.'
  },
  {
    id: 'social-media-pack-pro',
    title: 'Social Media Pack & Templates Estratégicos',
    category: 'Design de Redes Sociais',
    classification: 'PROJETO COMERCIAL',
    description: 'Sistema modular de artes para feed, stories e carrosséis desenvolvido para marcas que buscam constância e sofisticação no Instagram.',
    deliverables: ['Templates Editáveis no Figma / Canva', 'Identidade Padronizada para Destaques', 'Paleta Cromática de Conteúdo', 'Guia de Uso para Equipe Interna'],
    colors: ['#00FFFF', '#E71870', '#272727', '#FFFFFF'],
    thumbnailGradient: 'from-pink-600 via-purple-700 to-cyan-500',
    details: 'Solução sob medida que permite aos clientes manterem a estética profissional do perfil sem perder tempo na criação do dia a dia.'
  },
  {
    id: 'dr-felipe-rocha',
    title: 'Dr. Felipe Rocha — Cirurgia & Medicina',
    category: 'Branding Médico & Papelaria',
    classification: 'ESTUDO VISUAL',
    description: 'Estudo aprofundado de identidade visual médica refinada. Monograma exclusivo, receituários elegantes e presença digital discreta e autoritária.',
    deliverables: ['Monograma e Tipografia', 'Receituários e Papelaria Timbrada', 'Placa de Consultório', 'Apresentação Institucional'],
    colors: ['#0F172A', '#38BDF8', '#94A3B8', '#F8FAFC'],
    thumbnailGradient: 'from-slate-900 via-sky-900 to-cyan-700',
    details: 'Desenvolvido como estudo visual demonstrativo de boas práticas de design para a área da saúde de alta renda.'
  },
  {
    id: 'studio-solar-bahia',
    title: 'Studio Solar Arquitetura Sustentável',
    category: 'Conceito de Marca & Editorial',
    classification: 'CONCEITO',
    description: 'Conceito exploratório para escritório de arquitetura bioclimática. Linhas puras, tipografia geométrica refinada e paleta inspirada na luz natural da Bahia.',
    deliverables: ['Conceito de Marca', 'Diretrizes de Diagramação Editorial', 'Aplicações em Pranchas e Catálogo'],
    colors: ['#1E293B', '#F59E0B', '#E2E8F0', '#10B981'],
    thumbnailGradient: 'from-amber-600 via-stone-800 to-emerald-700',
    details: 'Exercício de linguagem visual explorando a intersecção de minimalismo e elementos tropicais baianos.'
  }
];

export const REAL_TESTIMONIALS: TestimonialFeedback[] = [
  {
    id: 'feedback-junior-mob3l',
    clientName: 'Junior',
    role: 'Sócio-Diretor',
    project: '01S Mobilidade / MOB3L',
    context: 'Mensagem após envio do comprovante de pagamento e validação dos resultados da transição da marca',
    messageText: 'João obrigado por tudo. Vc é um grande profissional 🥹. E bom saber que na minha bahia tem gente como vc competente . Abraço! Vamos nos falando.',
    time: '12:13',
    verified: true,
    avatarText: 'JN',
    attachmentName: 'Comprovante Sicredi & Projeto MOB3L'
  },
  {
    id: 'feedback-robson-junior-analytics',
    clientName: 'Robson & Junior',
    role: 'Sócios e Fundadores',
    project: 'Website 01S Mobilidade',
    context: 'Conversa no grupo de alinhamento de branding e performance no Google',
    messageText: 'O Google mandou um email parabenizando os acessos em menos de 1 mês tantas views la 👏 Top. Vamos cada vez melhora-la ....e o site tem muita participação nisso. Seu trabalho é muito profissional João! Meu irmão é da área e elogiou pra caramba !! 👏👏👏',
    time: '13:21',
    verified: true,
    avatarText: 'RJ',
    attachmentName: 'Métricas de Acesso Google'
  },
  {
    id: 'feedback-paulo-site',
    clientName: 'Paulo',
    role: 'Cliente de Projeto Web',
    project: 'Desenvolvimento de Novo Website',
    context: 'Feedback após entrega da versão final do site e alinhamento de expansão de novidades',
    messageText: 'Mas com relação ao site... Parabéns pelo trabalho João... ficou excelente... muito profissional! Uma pergunta... com relação às edições futuras, como você trabalha? Porque devemos colocar algumas novidades no lançamento... e provas sociais de parceiros e clientes...',
    time: '10:14',
    verified: true,
    avatarText: 'PL'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Briefing & Diagnóstico',
    subtitle: 'Entendendo a fundo o seu momento',
    description: 'Uma conversa descontraída e direta para compreender sua empresa, seu público-alvo, suas metas e o que você precisa alcançar com o projeto.',
    deliverable: 'Mapeamento de escopo e objetivos alinhados',
    duration: 'Dia 1'
  },
  {
    number: 2,
    title: 'Estratégia & Arquitetura',
    subtitle: 'Planejamento antes da execução',
    description: 'Definimos a estrutura ideal da página ou marca: quais seções devem existir, como será a jornada do visitante e qual mensagem guiará cada clique.',
    deliverable: 'Estrutura do site (wireframe) e estratégia de conversão',
    duration: 'Dias 2 a 3'
  },
  {
    number: 3,
    title: 'Direção Visual & Arte',
    subtitle: 'A identidade ganha vida',
    description: 'Criação visual com paleta de cores, tipografia, ícones e hierarquia estética que transmitem a autoridade da sua empresa com autenticidade.',
    deliverable: 'Design do layout para aprovação prévia',
    duration: 'Dias 4 a 6'
  },
  {
    number: 4,
    title: 'Desenvolvimento & Tecnologia',
    subtitle: 'Código limpo, rápido e responsivo',
    description: 'Transformamos o design em um site real, otimizado para celulares, com carregamento veloz, botões de WhatsApp ativos e segurança técnica.',
    deliverable: 'Versão navegável em link de testes exclusivo',
    duration: 'Dias 7 a 10'
  },
  {
    number: 5,
    title: 'Revisão & Ajustes Finos',
    subtitle: 'Aperfeiçoamento detalhe por detalhe',
    description: 'Você navega na página, testa os fluxos no seu próprio celular e nós realizamos todos os ajustes necessários para que fique 100% como você imaginou.',
    deliverable: 'Ajustes pontuais de textos, fotos e diagramação',
    duration: 'Dias 11 a 12'
  },
  {
    number: 6,
    title: 'Entrega & Publicação Oficial',
    subtitle: 'Seu endereço digital no ar',
    description: 'Configuramos seu domínio oficial (.com.br), instalamos o certificado de segurança SSL, conectamos as tags do Google e colocamos seu site ativo para o mundo.',
    deliverable: 'Site publicado e arquivos de alta resolução entregues',
    duration: 'Dia 13'
  },
  {
    number: 7,
    title: 'Suporte & Parceria Contínua',
    subtitle: 'Você nunca fica desamparado',
    description: 'Depois do lançamento, fornecemos orientação sobre como acompanhar os acessos e estamos sempre a uma mensagem no WhatsApp de distância para melhorias.',
    deliverable: 'Apoio técnico contínuo e orientação de crescimento',
    duration: 'Pós-lançamento'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'Como funciona o processo de desenvolvimento de um site?',
    answer: 'Nosso processo é simples e transparente, dividido em 7 etapas claras: Briefing inicial, Estratégia de conteúdo, Criação do layout visual, Desenvolvimento técnico responsivo, Revisão com você, Publicação no seu domínio e Suporte contínuo. Você acompanha a evolução em um link de teste antes de o site ir ao ar oficialmente.'
  },
  {
    question: 'Quais tipos de negócio a Arte do Algoritmo atende?',
    answer: 'Atendemos empresas de serviços, profissionais liberais (médicos, nutricionistas, advogados, consultores), empresas de transporte e mobilidade, clínicas, gastronomia, energia solar e e-commerces que buscam uma presença digital sólida, confiável e pensada para converter visitantes em clientes.'
  },
  {
    question: 'Vocês criam sites totalmente personalizados ou usam modelos prontos?',
    answer: 'Todos os nossos projetos são desenvolvidos de forma personalizada, respeitando as necessidades, cores e objetivos específicos do seu negócio. Não entregamos templates genéricos que parecem iguais a milhares de outros. Cada estrutura é pensada estrategicamente para o seu nicho.'
  },
  {
    question: 'Quanto tempo leva para desenvolver e colocar um site no ar?',
    answer: 'Uma Landing Page de alta conversão costuma ficar pronta entre 5 e 10 dias úteis. Sites institucionais completos com múltiplas páginas e seções detalhadas levam em média de 10 a 20 dias úteis, dependendo da rapidez no envio das informações e aprovações pelo cliente.'
  },
  {
    question: 'Vocês realizam projetos de design gráfico e identidade visual?',
    answer: 'Sim! Além do desenvolvimento web, a nossa vertente de "Arte" cuida de todo o design: criação e reformulação de logotipos (rebranding), manuais de identidade visual, cartões de visita digitais, apresentações comerciais, materiais para impressão e templates para redes sociais.'
  },
  {
    question: 'Como funciona o orçamento do projeto?',
    answer: 'Nossos projetos iniciam a partir de R$ 500, variando conforme a complexidade, número de páginas e recursos necessários. Trabalhamos com uma abordagem consultiva: analisamos o que você realmente precisa para não cobrar por coisas desnecessárias. O pagamento pode ser facilitado via Pix e parcelamento.'
  },
  {
    question: 'Vocês atendem clientes de outras cidades e estados fora da Bahia?',
    answer: 'Sim! Embora a Arte do Algoritmo tenha orgulho de ter suas raízes em Salvador, Bahia, todo o nosso fluxo de atendimento, alinhamento e homologação é 100% digital e funciona perfeitamente para clientes de qualquer região do Brasil ou do exterior.'
  },
  {
    question: 'O primeiro contato pode ser feito diretamente pelo WhatsApp?',
    answer: 'Com certeza! Preferimos e incentivamos o contato pelo WhatsApp. É rápido, direto e sem burocracias. Você clica no botão do site, conversa diretamente com o João e recebe uma orientação inicial e estimativa para o seu projeto em poucos minutos.'
  }
];
