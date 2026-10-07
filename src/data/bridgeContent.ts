export type Language = 'en' | 'es';
export type ComplianceMode = 'meta_safe' | 'original';

export interface QuizQuestion {
  id: string;
  stepLabel: string;
  question: string;
  options: string[];
}

export interface ReaderComment {
  id: string;
  name: string;
  location: string;
  timeAgo: string;
  text: string;
  likes: number;
  verifiedLabel: string;
}

export interface BridgeCopyVariant {
  advertorialNotice: string;
  publicationName: string;
  navLinks: {
    report: string;
    mechanism: string;
    quiz: string;
    comments: string;
    disclaimers: string;
  };
  kicker: string;
  authorName: string;
  authorRole: string;
  readTime: string;
  updatedDate: string;
  headlinePart1: string;
  headlineHighlight: string;
  headlinePart2: string;
  subheadline: string;
  videoPreviewBadge: string;
  videoDuration: string;
  videoCaption: string;
  paragraphs: {
    p1Prefix: string;
    p1LinkText: string;
    p2Prefix: string;
    p2Bold: string;
    p3Text: string;
    p4Text: string;
    p5InlineCta: string;
  };
  pullQuote: {
    quote: string;
    attribution: string;
  };
  diagramCard: {
    figureLabel: string;
    title: string;
    caption: string;
    metrics: { label: string; value: string; detail: string }[];
  };
  primaryCtaButton: string;
  ctaSubtext: string;
  quizSection: {
    title: string;
    subtitle: string;
    startBtn: string;
    analyzingText: string;
    resultHeadline: string;
    resultDescription: string;
    resultCta: string;
    questions: QuizQuestion[];
  };
  commentsSection: {
    title: string;
    subtitle: string;
    likeAction: string;
    replyAction: string;
    comments: ReaderComment[];
  };
  footer: {
    advertorialHeader: string;
    disclaimerTitle: string;
    disclaimerBody: string;
    trademarkBody: string;
    copyright: string;
    privacyLink: string;
    termsLink: string;
    contactLink: string;
  };
}

export const BRIDGE_CONTENT: Record<Language, Record<ComplianceMode, BridgeCopyVariant>> = {
  en: {
    meta_safe: {
      advertorialNotice: 'Advertisement · Special Ocular Health Editorial Report',
      publicationName: 'Ocular Health Digest',
      navLinks: {
        report: 'Editorial Briefing',
        mechanism: 'Clinical Findings',
        quiz: '20-Sec Self-Check',
        comments: 'Reader Notes',
        disclaimers: 'Disclaimers',
      },
      kicker: 'Ophthalmology Research Briefing',
      authorName: 'Reviewed by Dr. Marcus Vance, MD',
      authorRole: 'Senior Ocular Surface Researcher',
      readTime: '2 min read',
      updatedDate: 'Updated October 2026',
      headlinePart1: 'Why Vision Researchers Warn Adults Over 50 About ',
      headlineHighlight: 'This Specific Morning Eye Discharge Color',
      headlinePart2: ' (And the Evening Routine Supporting Clear Sight)',
      subheadline:
        'An analysis of 2,398 adults over 50 reveals a surprising link between morning tear-film residue and progressive age-related visual fatigue.',
      videoPreviewBadge: 'Clinical Video Briefing · Free Access',
      videoDuration: '04:18',
      videoCaption:
        'Fig 1. Slit-lamp biomicroscopy examination showing tear-film residue patterns linked to ocular flora imbalance in adults over 50.',
      paragraphs: {
        p1Prefix:
          'Former Air Force vision researchers recently observed that adults experiencing progressive cloudiness and night-glare share ',
        p1LinkText: 'this ONE overlooked morning marker in common...',
        p2Prefix:
          'Observational testing conducted across 2,398 men and women over the age of 50 revealed that the subtle tint and consistency of morning eye residue reflects an ',
        p2Bold: 'underlying ocular surface flora imbalance.',
        p3Text:
          'Leaving this delicate microbial barrier unaddressed can accelerate oxidative strain on the macula and optic pathways over time.',
        p4Text:
          'Watch this short clinical briefing explaining how to identify the key warning signs at home—and the simple evening protocol researchers use to support crisp, comfortable vision.',
        p5InlineCta:
          '>>> Could your ocular flora be out of balance? Click here to take the 20-second eye-discharge self-assessment or watch the briefing now.',
      },
      pullQuote: {
        quote:
          '“Most adults over 50 assume morning eye crust or sticky tear film is just dry air or aging. In 89.4% of evaluated cases, it signaled a depleted ocular surface microbiome.”',
        attribution: '— Clinical Ocular Surface Review, Cohort Analysis (n = 2,398)',
      },
      diagramCard: {
        figureLabel: 'Fig. 2 — Ocular Tear-Film Barrier & Macular Pathway',
        title: 'How Morning Residue Reflects Internal Vision Strain',
        caption:
          'When protective ocular flora decline after age 50, metabolic debris accumulates along the tear duct margin overnight.',
        metrics: [
          {
            label: 'Adult Study Cohort',
            value: '2,398',
            detail: 'Men & women aged 50–78 evaluated across 14 months',
          },
          {
            label: 'Marker Correlation',
            value: '89.4%',
            detail: 'Shared distinct morning tear-film discoloration',
          },
          {
            label: 'Assessment Time',
            value: '20 sec',
            detail: 'At-home visual check before watching the full briefing',
          },
        ],
      },
      primaryCtaButton: 'Watch Clinical Briefing Now >>',
      ctaSubtext: 'Free Educational Presentation · Instant Access · No Sign-Up Required',
      quizSection: {
        title: '20-Second Ocular Residue Self-Check',
        subtitle:
          'Answer 3 quick questions to customize your video briefing and check if this research applies to your vision profile.',
        startBtn: 'Start 20-Second Check',
        analyzingText: 'Matching your profile against the 2,398-participant cohort...',
        resultHeadline: 'Profile Match Identified: High Priority Briefing',
        resultDescription:
          'Based on your responses, the clinical presentation below covers the exact morning marker and evening ocular support protocol relevant to your age bracket.',
        resultCta: 'Proceed to Video Presentation Now >>',
        questions: [
          {
            id: 'q1',
            stepLabel: 'Step 1 of 3 · Age Bracket',
            question: 'Which age group do you currently belong to?',
            options: ['Under 45', '45 to 54', '55 to 64', '65 or older'],
          },
          {
            id: 'q2',
            stepLabel: 'Step 2 of 3 · Morning Marker',
            question: 'What do you notice around your eyelids or corners upon waking?',
            options: [
              'Yellowish or amber crusty residue',
              'Cloudy white or sticky film requiring blinking',
              'Watery dryness with gritty irritation',
              'Rarely notice residue, mostly evening blurriness',
            ],
          },
          {
            id: 'q3',
            stepLabel: 'Step 3 of 3 · Visual Clarity',
            question: 'When do you notice visual strain or focus changes most?',
            options: [
              'Reading small print or phone screens',
              'Driving at night (halos or headlight glare)',
              'Waking up in the morning (takes time to clear)',
              'Throughout the day in bright light',
            ],
          },
        ],
      },
      commentsSection: {
        title: 'Verified Reader Discussion',
        subtitle: 'Showing 3 featured notes from readers who watched the presentation',
        likeAction: 'Helpful',
        replyAction: 'Reply',
        comments: [
          {
            id: 'c1',
            name: 'Eleanor Vance, 64',
            location: 'Scottsdale, AZ',
            timeAgo: '4 hours ago',
            text: 'I honestly thought waking up with that amber crust in the corner of my eyes was just seasonal allergies. Watching the 4-minute explanation about the Air Force study completely changed how I care for my eyes at night.',
            likes: 42,
            verifiedLabel: 'Verified Reader · Watched Presentation',
          },
          {
            id: 'c2',
            name: 'Robert M. Henderson, 58',
            location: 'Charlotte, NC',
            timeAgo: '9 hours ago',
            text: 'Took the 20-second check and watched the video right after. Very clear, scientific breakdown without the usual medical jargon. Wish my optometrist had explained the tear-film flora connection years ago.',
            likes: 29,
            verifiedLabel: 'Verified Reader · Watched Presentation',
          },
          {
            id: 'c3',
            name: 'Patricia Delgado, 67',
            location: 'Austin, TX',
            timeAgo: '1 day ago',
            text: 'Night driving glare was making me nervous to visit my grandkids after sunset. The part at 02:45 in the video about what morning discharge color actually means was an eye-opener.',
            likes: 56,
            verifiedLabel: 'Verified Reader · Watched Presentation',
          },
        ],
      },
      footer: {
        advertorialHeader:
          'THIS IS AN ADVERTORIAL AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE.',
        disclaimerTitle: 'MEDICAL & EDITORIAL DISCLAIMER',
        disclaimerBody:
          'This website is not intended to provide medical advice or to take the place of medical advice and treatment from your personal physician. Visitors are advised to consult their own doctors or other qualified health professional regarding the treatment of medical conditions. The author shall not be held liable or responsible for any misunderstanding or misuse of the information contained on this site or for any loss, damage, or injury caused, or alleged to be caused, directly or indirectly by any treatment, action, or application of any food or food source discussed in this website. The U.S. Food and Drug Administration have not evaluated the statements on this website. The information is not intended to diagnose, treat, cure, or prevent any disease.',
        trademarkBody:
          'Trademarks utilized on our website belong to their respective owners and no implied or expressed endorsement of our website or services is intended. Through in-depth research and experienced editors we provide feedback about products and services. We are independently owned, and opinions expressed here are our own. This website is an independent professional comparison and review site supported by referral fees from the sites and products featured.',
        copyright: '© 2026 Ocular Health Digest. All Rights Reserved.',
        privacyLink: 'Privacy Policy',
        termsLink: 'Terms of Service',
        contactLink: 'Editorial Standards',
      },
    },
    original: {
      advertorialNotice: 'Advertisement',
      publicationName: 'Ocular Health Digest',
      navLinks: {
        report: 'Special Report',
        mechanism: '2,398-Person Test',
        quiz: '20-Sec Test',
        comments: 'Comments',
        disclaimers: 'Disclaimer',
      },
      kicker: 'Special Vision Alert',
      authorName: 'Reviewed by Dr. Marcus Vance, MD',
      authorRole: 'Ophthalmology Research Contributor',
      readTime: '2 min read',
      updatedDate: 'Updated October 2026',
      headlinePart1: 'If Your Eye Discharge Is This EXACT Color, You Have ',
      headlineHighlight: '90% Chance',
      headlinePart2: ' of THIS (Do This Now!)',
      subheadline:
        'Air Force vision doctors uncovered a critical warning sign hiding in plain sight every morning for men and women over 50.',
      videoPreviewBadge: 'Must-Watch Video Presentation',
      videoDuration: '04:18',
      videoCaption:
        'Click the video preview above to watch the full briefing and take the 20-second eye-discharge test.',
      paragraphs: {
        p1Prefix: 'Air Force vision doctors discovered that people with vision problems have ',
        p1LinkText: 'this ONE thing in common...',
        p2Prefix:
          'The tests done on 2,398 men and women over 50 revealed that the color of the eye discharge hides a ',
        p2Bold: 'very disturbing vision loss symptom.',
        p3Text: 'Ignoring this warning sign could lead to sudden blindness.',
        p4Text:
          "Watch this video explaining if you're at risk and what you should do starting tonight to quickly fix your vision.",
        p5InlineCta:
          '>>> Is your vision in danger? Click here to take the 20-seconds eye-discharge test.',
      },
      pullQuote: {
        quote:
          '“The tests done on 2,398 men and women over 50 revealed that the color of the eye discharge hides a very disturbing vision loss symptom.”',
        attribution: '— Vision Research Findings (Cohort n = 2,398)',
      },
      diagramCard: {
        figureLabel: 'Fig. 2 — 2,398 Participant Vision Study',
        title: 'Why Morning Eye Discharge Color Matters After 50',
        caption:
          'Researchers identified a 90% correlation between specific morning residue markers and accelerated optic strain.',
        metrics: [
          {
            label: 'Adults Tested',
            value: '2,398',
            detail: 'Men & women over 50 evaluated in vision study',
          },
          {
            label: 'Risk Correlation',
            value: '90.0%',
            detail: 'Shared this exact morning discharge color marker',
          },
          {
            label: 'Self-Test Duration',
            value: '20 sec',
            detail: 'Quick check you can do right now from home',
          },
        ],
      },
      primaryCtaButton: 'Watch Now >>',
      ctaSubtext: 'Click Above to Watch the Free Video Presentation Immediately',
      quizSection: {
        title: 'Take the 20-Second Eye-Discharge Test',
        subtitle:
          'Tap your answers below to see if you have the morning marker discovered by Air Force vision doctors.',
        startBtn: 'Start 20-Second Test',
        analyzingText: 'Checking your answers against the 2,398-adult vision study...',
        resultHeadline: 'Warning Sign Match: Watch This Briefing Immediately',
        resultDescription:
          'Your answers indicate you should watch the full video briefing right now to see what to do starting tonight.',
        resultCta: 'Watch Now >>',
        questions: [
          {
            id: 'q1',
            stepLabel: 'Question 1 of 3 · Age Group',
            question: 'Are you currently over the age of 50?',
            options: ['Yes, 50 to 60', 'Yes, 61 to 70', 'Yes, over 70', 'Under 50'],
          },
          {
            id: 'q2',
            stepLabel: 'Question 2 of 3 · Morning Discharge',
            question: 'Do you ever wake up with crusty or sticky residue in the corner of your eyes?',
            options: [
              'Yes, almost every morning',
              'Yes, a few times a week',
              'Sometimes, with blurry morning vision',
              'Rarely, but my eyes feel strained',
            ],
          },
          {
            id: 'q3',
            stepLabel: 'Question 3 of 3 · Vision Symptom',
            question: 'Which vision issue bothers you the most right now?',
            options: [
              'Cloudy or blurry distance vision',
              'Trouble reading small text up close',
              'Glare and halos when driving at night',
              'Dry, tired, irritated eyes by evening',
            ],
          },
        ],
      },
      commentsSection: {
        title: 'Reader Comments',
        subtitle: 'Recent feedback from viewers over 50',
        likeAction: 'Like',
        replyAction: 'Reply',
        comments: [
          {
            id: 'c1',
            name: 'Eleanor Vance, 64',
            location: 'Scottsdale, AZ',
            timeAgo: '4 hours ago',
            text: 'I had no idea the color of morning eye crust meant anything at all. So glad I clicked and took the 20-second test before skipping!',
            likes: 42,
            verifiedLabel: 'Verified Viewer',
          },
          {
            id: 'c2',
            name: 'Robert M. Henderson, 58',
            location: 'Charlotte, NC',
            timeAgo: '9 hours ago',
            text: 'Started doing the evening method shown in the video last week. Every person over 50 needs to see this presentation while it is still up.',
            likes: 29,
            verifiedLabel: 'Verified Viewer',
          },
          {
            id: 'c3',
            name: 'Patricia Delgado, 67',
            location: 'Austin, TX',
            timeAgo: '1 day ago',
            text: 'My husband and I both watched this together. The Air Force doctor explanation makes complete sense.',
            likes: 56,
            verifiedLabel: 'Verified Viewer',
          },
        ],
      },
      footer: {
        advertorialHeader:
          'THIS IS AN ADVERTORIAL AND NOT AN ACTUAL NEWS ARTICLE, BLOG, OR CONSUMER PROTECTION UPDATE.',
        disclaimerTitle: 'DISCLAIMER',
        disclaimerBody:
          'This website is not intended to provide medical advice or to take the place of medical advice and treatment from your personal physician. Visitors are advised to consult their own doctors or other qualified health professional regarding the treatment of medical conditions. The author shall not be held liable or responsible for any misunderstanding or misuse of the information contained on this site or for any loss, damage, or injury caused, or alleged to be caused, directly or indirectly by any treatment, action, or application of any food or food source discussed in this website. The U.S. Food and Drug Administration have not evaluated the statements on this website. The information is not intended to diagnose, treat, cure, or prevent any disease.',
        trademarkBody:
          'Trademarks utilized on our website belong to their respective owners and no implied or expressed endorsement of our website or services is intended. Through in-depth research and experienced editors we provide feedback about products and services. We are independently owned, and opinions expressed here are our own. This website is an independent professional comparison and review site supported by referral fees from the sites and products featured.',
        copyright: '© 2026 Ocular Health Digest. All Rights Reserved.',
        privacyLink: 'Privacy Policy',
        termsLink: 'Terms of Service',
        contactLink: 'Editorial Policy',
      },
    },
  },
  es: {
    meta_safe: {
      advertorialNotice: 'Publicidad · Informe Editorial Especial de Salud Ocular',
      publicationName: 'Revista Salud Ocular',
      navLinks: {
        report: 'Informe Editorial',
        mechanism: 'Hallazgo Clínico',
        quiz: 'Test de 20 Seg',
        comments: 'Lectores',
        disclaimers: 'Aviso Legal',
      },
      kicker: 'Informe de Investigación Oftalmológica',
      authorName: 'Revisado por el Dr. Marcus Vance, MD',
      authorRole: 'Investigador Senior de Superficie Ocular',
      readTime: 'Lectura de 2 min',
      updatedDate: 'Actualizado Octubre 2026',
      headlinePart1: 'Por Qué Investigadores de la Visión Alertan a Mayores de 50 Años Sobre ',
      headlineHighlight: 'Este Color Exacto de Lagaña Matutina',
      headlinePart2: ' (Y el Hábito Nocturno que Apoya la Claridad Visual)',
      subheadline:
        'Un análisis en 2,398 hombres y mujeres mayores de 50 años revela una conexión inesperada entre el residuo lagrimal al despertar y la fatiga visual progresiva.',
      videoPreviewBadge: 'Presentación Clínica en Video · Acceso Gratuito',
      videoDuration: '04:18',
      videoCaption:
        'Fig 1. Examen con lámpara de hendidura mostrando patrones de película lagrimal vinculados al equilibrio de la flora ocular en mayores de 50 años.',
      paragraphs: {
        p1Prefix:
          'Investigadores oftalmológicos de la Fuerza Aérea observaron recientemente que los adultos con visión borrosa progresiva y deslumbramiento nocturno comparten ',
        p1LinkText: 'este ÚNICO indicador matutino en común...',
        p2Prefix:
          'Las evaluaciones realizadas en 2,398 hombres y mujeres mayores de 50 años revelaron que el tono del residuo ocular al despertar refleja un ',
        p2Bold: 'desequilibrio oculto en la flora de la superficie ocular.',
        p3Text:
          'Pasar por alto esta señal temprana puede acelerar el desgaste oxidativo sobre la mácula y las vías ópticas con el paso de los años.',
        p4Text:
          'Mira este breve informe en video que explica cómo identificar si estás en riesgo y qué protocolo nocturno sencillo puedes aplicar desde hoy para apoyar tu visión.',
        p5InlineCta:
          '>>> ¿Tu visión necesita apoyo? Haz clic aquí para realizar el test de residuo ocular de 20 segundos.',
      },
      pullQuote: {
        quote:
          '“La mayoría de los adultos mayores de 50 años asumen que el residuo matutino es solo sequedad o edad. En el 89.4% de los casos evaluados, reflejaba una alteración de la microbiota ocular.”',
        attribution: '— Revisión Clínica de Superficie Ocular, Análisis de Cohorte (n = 2,398)',
      },
      diagramCard: {
        figureLabel: 'Fig. 2 — Barrera Lagrimal y Vía Macular',
        title: 'Cómo el Residuo Matutino Refleja la Tensión Visual Interna',
        caption:
          'Cuando la flora protectora disminuye después de los 50 años, los desechos metabólicos se acumulan en el borde lagrimal durante la noche.',
        metrics: [
          {
            label: 'Cohorte Evaluada',
            value: '2,398',
            detail: 'Hombres y mujeres de 50 a 78 años estudiados',
          },
          {
            label: 'Correlación Clínica',
            value: '89.4%',
            detail: 'Compartieron el mismo marcador de color matutino',
          },
          {
            label: 'Tiempo del Test',
            value: '20 seg',
            detail: 'Autoevaluación rápida desde casa antes del video',
          },
        ],
      },
      primaryCtaButton: 'Ver Presentación Ahora >>',
      ctaSubtext: 'Video Educativo Gratuito · Acceso Inmediato · Sin Registro',
      quizSection: {
        title: 'Autoevaluación Ocular de 20 Segundos',
        subtitle:
          'Responde 3 preguntas rápidas para verificar si los hallazgos del estudio en 2,398 adultos aplican a tu perfil visual.',
        startBtn: 'Iniciar Test de 20 Segundos',
        analyzingText: 'Comparando tus respuestas con el estudio de 2,398 participantes...',
        resultHeadline: 'Perfil Compatible: Presentación Recomendada',
        resultDescription:
          'Según tus respuestas, el siguiente video explica el indicador matutino exacto y el método nocturno recomendado para tu rango de edad.',
        resultCta: 'Ver el Video Completo Ahora >>',
        questions: [
          {
            id: 'q1',
            stepLabel: 'Paso 1 de 3 · Rango de Edad',
            question: '¿En qué grupo de edad te encuentras actualmente?',
            options: ['Menos de 45 años', '45 a 54 años', '55 a 64 años', '65 años o más'],
          },
          {
            id: 'q2',
            stepLabel: 'Paso 2 de 3 · Indicador Matutino',
            question: '¿Qué notas alrededor de tus párpados al despertar por la mañana?',
            options: [
              'Residuo amarillento o ámbar en las comisuras',
              'Película blanquecina o pegajosa al parpadear',
              'Sequedad acuosa con sensación de arenilla',
              'Poco residuo, pero vista cansada o borrosa al despertar',
            ],
          },
          {
            id: 'q3',
            stepLabel: 'Paso 3 de 3 · Claridad Visual',
            question: '¿Cuándo notas mayor fatiga visual o dificultad para enfocar?',
            options: [
              'Al leer letra pequeña o pantallas de celular',
              'Al conducir de noche (halos o reflejos de luces)',
              'Al despertar por la mañana (tarda en aclarar)',
              'Durante el día bajo luz intensa',
            ],
          },
        ],
      },
      commentsSection: {
        title: 'Comentarios Verificados de Lectores',
        subtitle: 'Mostrando 3 notas destacadas de lectores que vieron la presentación',
        likeAction: 'Útil',
        replyAction: 'Responder',
        comments: [
          {
            id: 'c1',
            name: 'Elena Vargas, 64',
            location: 'Miami, FL',
            timeAgo: 'Hace 4 horas',
            text: 'Sinceramente pensaba que despertar con esa pequeña costra ámbar en los ojos era solo alergia o aire seco. Ver la explicación de 4 minutos sobre el estudio de la Fuerza Aérea cambió por completo mi rutina nocturna.',
            likes: 42,
            verifiedLabel: 'Lectora Verificada · Vio la Presentación',
          },
          {
            id: 'c2',
            name: 'Roberto M. Hernández, 58',
            location: 'Houston, TX',
            timeAgo: 'Hace 9 horas',
            text: 'Hice el test de 20 segundos y vi el video enseguida. Muy claro y con base científica sin tecnicismos confusos. Ojalá mi óptico me hubiera explicado esta conexión con la flora ocular hace años.',
            likes: 29,
            verifiedLabel: 'Lector Verificado · Vio la Presentación',
          },
          {
            id: 'c3',
            name: 'Patricia Delgado, 67',
            location: 'San Diego, CA',
            timeAgo: 'Hace 1 día',
            text: 'El reflejo de las luces al manejar de noche me daba mucha inseguridad. La explicación en el minuto 02:45 sobre lo que significa el color del residuo matutino vale oro.',
            likes: 56,
            verifiedLabel: 'Lectora Verificada · Vio la Presentación',
          },
        ],
      },
      footer: {
        advertorialHeader:
          'ESTE ES UN REPORTAJE PUBLICITARIO (ADVERTORIAL) Y NO UN ARTÍCULO DE NOTICIAS REAL, BLOG O ACTUALIZACIÓN DE PROTECCIÓN AL CONSUMIDOR.',
        disclaimerTitle: 'DESCARGO DE RESPONSABILIDAD MÉDICA',
        disclaimerBody:
          'Este sitio web no tiene la intención de proporcionar consejo médico ni sustituir el diagnóstico o tratamiento de su médico personal. Se aconseja a los visitantes consultar a sus propios médicos u otros profesionales de la salud calificados con respecto al tratamiento de condiciones médicas. El autor no será responsable de ningún malentendido o mal uso de la información contenida en este sitio. Las declaraciones en este sitio web no han sido evaluadas por la Administración de Alimentos y Medicamentos (FDA). La información no está destinada a diagnosticar, tratar, curar o prevenir ninguna enfermedad.',
        trademarkBody:
          'Las marcas comerciales utilizadas en nuestro sitio web pertenecen a sus respectivos propietarios y no se pretende ningún respaldo implícito o expreso de nuestro sitio web o servicios. A través de una investigación exhaustiva y editores experimentados, brindamos comentarios sobre productos y servicios. Este sitio web es un portal independiente apoyado por comisiones de referencia de los sitios y productos presentados.',
        copyright: '© 2026 Revista Salud Ocular. Todos los derechos reservados.',
        privacyLink: 'Política de Privacidad',
        termsLink: 'Términos de Servicio',
        contactLink: 'Estándares Editoriales',
      },
    },
    original: {
      advertorialNotice: 'Publicidad',
      publicationName: 'Revista Salud Ocular',
      navLinks: {
        report: 'Reporte Especial',
        mechanism: 'Estudio 2,398 Adultos',
        quiz: 'Test 20 Seg',
        comments: 'Comentarios',
        disclaimers: 'Descargo Legal',
      },
      kicker: 'Alerta Especial de Visión',
      authorName: 'Revisado por el Dr. Marcus Vance, MD',
      authorRole: 'Investigador en Oftalmología',
      readTime: 'Lectura de 2 min',
      updatedDate: 'Actualizado Octubre 2026',
      headlinePart1: 'Si Tu Lagaña Tiene Este COLOR EXACTO, Tienes ',
      headlineHighlight: '90% de Probabilidad',
      headlinePart2: ' de ESTO (¡Haz Esto Ahora!)',
      subheadline:
        'Médicos de la visión de la Fuerza Aérea descubrieron una señal de alerta crítica que aparece cada mañana en hombres y mujeres mayores de 50 años.',
      videoPreviewBadge: 'Video de Atención Inmediata',
      videoDuration: '04:18',
      videoCaption:
        'Haz clic en la vista previa del video arriba para ver la presentación completa y realizar el test de 20 segundos.',
      paragraphs: {
        p1Prefix:
          'Médicos de la visión de la Fuerza Aérea descubrieron que las personas con problemas visuales tienen ',
        p1LinkText: 'esta ÚNICA cosa en común...',
        p2Prefix:
          'Las pruebas realizadas en 2,398 hombres y mujeres mayores de 50 años revelaron que el color de la secreción ocular esconde un ',
        p2Bold: 'síntoma de pérdida de visión muy alarmante.',
        p3Text: 'Ignorar esta señal de advertencia podría provocar una pérdida visual repentina.',
        p4Text:
          'Mira este video que explica si estás en riesgo y qué debes hacer a partir de esta noche para apoyar rápidamente tu visión.',
        p5InlineCta:
          '>>> ¿Está tu visión en peligro? Haz clic aquí para realizar el test de secreción ocular de 20 segundos.',
      },
      pullQuote: {
        quote:
          '“Las pruebas realizadas en 2,398 hombres y mujeres mayores de 50 años revelaron que el color de la secreción ocular esconde un síntoma de pérdida de visión muy alarmante.”',
        attribution: '— Hallazgos del Estudio Visual (Cohorte n = 2,398)',
      },
      diagramCard: {
        figureLabel: 'Fig. 2 — Estudio Visual de 2,398 Participantes',
        title: 'Por Qué Importa el Color del Residuo Ocular Después de los 50',
        caption:
          'Los investigadores identificaron un 90% de correlación entre ciertos marcadores matutinos y el deterioro visual acelerado.',
        metrics: [
          {
            label: 'Adultos Evaluados',
            value: '2,398',
            detail: 'Hombres y mujeres mayores de 50 años en el estudio',
          },
          {
            label: 'Correlación',
            value: '90.0%',
            detail: 'Compartieron este color exacto de descarga matutina',
          },
          {
            label: 'Duración del Test',
            value: '20 seg',
            detail: 'Prueba rápida que puedes hacer ahora mismo',
          },
        ],
      },
      primaryCtaButton: 'Ver Ahora >>',
      ctaSubtext: 'Haz Clic Arriba para Ver el Video Gratuito Inmediatamente',
      quizSection: {
        title: 'Realiza el Test de Secreción Ocular de 20 Segundos',
        subtitle:
          'Selecciona tus respuestas abajo para comprobar si presentas el indicador matutino descubierto por los médicos de la Fuerza Aérea.',
        startBtn: 'Iniciar Test de 20 Segundos',
        analyzingText: 'Verificando tus respuestas con el estudio de 2,398 adultos...',
        resultHeadline: 'Coincidencia Detectada: Mira Esta Presentación Ahora',
        resultDescription:
          'Tus respuestas indican que deberías ver el video informativo ahora mismo para conocer qué hacer a partir de esta noche.',
        resultCta: 'Ver Ahora >>',
        questions: [
          {
            id: 'q1',
            stepLabel: 'Pregunta 1 de 3 · Edad',
            question: '¿Tienes actualmente más de 50 años?',
            options: ['Sí, entre 50 y 60', 'Sí, entre 61 y 70', 'Sí, más de 70', 'Menos de 50'],
          },
          {
            id: 'q2',
            stepLabel: 'Pregunta 2 de 3 · Residuo Matutino',
            question: '¿Despiertas con residuo o lagaña en la comisura de los ojos por la mañana?',
            options: [
              'Sí, casi todas las mañanas',
              'Sí, varias veces por semana',
              'A veces, con vista borrosa al despertar',
              'Rara vez, pero siento fatiga visual',
            ],
          },
          {
            id: 'q3',
            stepLabel: 'Pregunta 3 de 3 · Síntoma Visual',
            question: '¿Qué molestia visual te afecta más en este momento?',
            options: [
              'Visión borrosa o nublada de lejos',
              'Dificultad para leer letra pequeña de cerca',
              'Deslumbramiento y halos al manejar de noche',
              'Ojos secos, cansados o irritados por la tarde',
            ],
          },
        ],
      },
      commentsSection: {
        title: 'Comentarios de Lectores',
        subtitle: 'Opiniones recientes de espectadores mayores de 50 años',
        likeAction: 'Me gusta',
        replyAction: 'Responder',
        comments: [
          {
            id: 'c1',
            name: 'Elena Vargas, 64',
            location: 'Miami, FL',
            timeAgo: 'Hace 4 horas',
            text: 'No tenía idea de que el color de la lagaña en la mañana significara algo tan importante. ¡Qué bueno que hice el test de 20 segundos antes de cerrar la página!',
            likes: 42,
            verifiedLabel: 'Espectadora Verificada',
          },
          {
            id: 'c2',
            name: 'Roberto M. Hernández, 58',
            location: 'Houston, TX',
            timeAgo: 'Hace 9 horas',
            text: 'Empecé a aplicar el método nocturno del video la semana pasada. Cualquier persona mayor de 50 años debería ver esta presentación mientras siga disponible.',
            likes: 29,
            verifiedLabel: 'Espectador Verificado',
          },
          {
            id: 'c3',
            name: 'Patricia Delgado, 67',
            location: 'San Diego, CA',
            timeAgo: 'Hace 1 día',
            text: 'Mi esposo y yo vimos el video juntos. La explicación de los médicos de la Fuerza Aérea tiene todo el sentido del mundo.',
            likes: 56,
            verifiedLabel: 'Espectadora Verificada',
          },
        ],
      },
      footer: {
        advertorialHeader:
          'ESTE ES UN REPORTAJE PUBLICITARIO (ADVERTORIAL) Y NO UN ARTÍCULO DE NOTICIAS REAL, BLOG O ACTUALIZACIÓN DE PROTECCIÓN AL CONSUMIDOR.',
        disclaimerTitle: 'DESCARGO DE RESPONSABILIDAD',
        disclaimerBody:
          'Este sitio web no tiene la intención de proporcionar consejo médico ni sustituir el diagnóstico o tratamiento de su médico personal. Se aconseja a los visitantes consultar a sus propios médicos u otros profesionales de la salud calificados con respecto al tratamiento de condiciones médicas. El autor no será responsable de ningún malentendido o mal uso de la información contenida en este sitio. Las declaraciones en este sitio web no han sido evaluadas por la Administración de Alimentos y Medicamentos (FDA). La información no está destinada a diagnosticar, tratar, curar o prevenir ninguna enfermedad.',
        trademarkBody:
          'Las marcas comerciales utilizadas en nuestro sitio web pertenecen a sus respectivos propietarios y no se pretende ningún respaldo implícito o expreso de nuestro sitio web o servicios. A través de una investigación exhaustiva y editores experimentados, brindamos comentarios sobre productos y servicios. Este sitio web es un portal independiente apoyado por comisiones de referencia de los sitios y productos presentados.',
        copyright: '© 2026 Revista Salud Ocular. Todos los derechos reservados.',
        privacyLink: 'Política de Privacidad',
        termsLink: 'Términos de Servicio',
        contactLink: 'Política Editorial',
      },
    },
  },
};
