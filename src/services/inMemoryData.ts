// Interfaces para os dados
interface ProjectCardData {
    title: string;
    tecnosUsed?: string[];
    description: string;
    urlName: string;
    produtionLink?: string;
    repositoryLink?: string;
  }
  
  interface SkillCardData {
    name: string;
    link?: string;
    type: string;
    label: string;
  }
  
  interface ExperienceCardData {
    title: string;
    imageName: string;
    description: string;
    skillsLearned: string[];
    link?: string;
  }
  
  interface LegendItem {
    label: string;
    color: string;
    type: string;
  }
  
  // Classe para armazenar os dados de tecnologias
  export class TagsData {
    public static tecnologies: { [key: string]: { category: string; link?: string; realName?: string } } = {
        react: { category: "frontend", link: "https://reactjs.org", realName: "React.js" },
        html: { category: "frontend", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", realName: "HTML5" },
        css: { category: "frontend", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", realName: "CSS3" },
        node: { category: "backend", link: "https://nodejs.org", realName: "Node.js" },
        express: { category: "backend", link: "https://expressjs.com", realName: "Express.js" },
        typescript: { category: "all", link: "https://www.typescriptlang.org", realName: "TypeScript" },
        mongodb: { category: "database", link: "https://www.mongodb.com", realName: "MongoDB" },
        prisma: { category: "database", link: "https://www.prisma.io", realName: "Prisma" },
        uml: { category: "default", link: "https://en.wikipedia.org/wiki/Unified_Modeling_Language", realName: "UML" },
        c: { category: "backend", link: "https://en.wikipedia.org/wiki/C_(programming_language)", realName: "C" },
        "c++": { category: "backend", link: "https://en.wikipedia.org/wiki/C%2B%2B", realName: "C++" },
        comunicacao: { category: "softskill", realName: "Comunicação" },
        oratoria: { category: "softskill", realName: "Oratória" },
        lideranca: { category: "softskill", realName: "Liderança" },
        design: { category: "softskill", realName: "Design" },
      };
  }
  
 // Classe para armazenar os dados de projetos
export class ProjectsData {
  public static projects: ProjectCardData[] = [
    {
      title: "Laranjada",
      tecnosUsed: ["react", "node", "prisma", "uml", "express", "typescript"],
      description: `Rede social e de gerenciamento de encontros periódicos da universidade.
      \n
      Suas principais funcionalidades são:
      - Criação e validação do login de usuário;
      - Contagem de laranjas;
      - Armazenamento das laranjas e ingredientes.
      
      Novas funcionalidades incluem:
      - Criação de um método de pagamento;
      - Localizador e criador de receitas por IA.`,
      urlName: "laranjada",
      produtionLink: "",
      repositoryLink: "",
    },
    {
      title: "Laranjada",
      tecnosUsed: ["react", "node", "prisma", "uml", "express"],
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      urlName: "laranjada",
      produtionLink: "",
      repositoryLink: "",
    },
  ];
}
  
  // Classe para armazenar os dados de habilidades
  export class SkillsData {
    public static skillsAll: SkillCardData[] = [
      { name: "react", link: "https://reactjs.org", type: "frontend", label: "React.js" },
      { name: "node", link: "https://nodejs.org", type: "backend", label: "Node.js" },
      { name: "typescript", link: "https://www.typescriptlang.org", type: "all", label: "TypeScript" },
      { name: "prisma", link: "https://www.prisma.io", type: "backend", label: "Prisma" },
      { name: "tailwind", link: "https://tailwindcss.com", type: "frontend", label: "Tailwind CSS" },
      { name: "c", link: "https://en.wikipedia.org/wiki/C_(programming_language)", type: "backend", label: "C" },
      { name: "c++", link: "https://en.wikipedia.org/wiki/C%2B%2B", type: "backend", label: "C++" },
      { name: "mongodb", link: "https://www.mongodb.com", type: "database", label: "MongoDB" },
      { name: "html", link: "https://developer.mozilla.org/en-US/docs/Web/HTML", type: "frontend", label: "HTML" },
      { name: "css", link: "https://developer.mozilla.org/en-US/docs/Web/CSS", type: "frontend", label: "CSS" },
      { name: "express", link: "https://expressjs.com", type: "backend", label: "Express.js" },
    ];
    
  
    public static legendItems: LegendItem[] = [
      { label: "Back-end", color: "bg-lime-600", type: "backend" },
      { label: "Front-end", color: "bg-rose-600", type: "frontend" },
      { label: "Data Base", color: "bg-amber-600", type: "database" },
      { label: "Front/Back-end", color: "bg-purple-700", type: "all" },
    ];
  }
  
  // Classe para armazenar os dados de experiências
  export class ExperiencesData {
    public static experiencies: ExperienceCardData[] = [
      {
        title: "Semea Code",
        imageName: "semeacode",
        description: `Co-fundador com meu professor lidando com documentação, contato com as escolas, recrutamento de membros, organização e realização das aulas e planejamento estratégico futuro.
        No primeiro semestre de 2025, impactamos a vida de 21 alunos ensinando Python para alunos do ensino médio.
        Temos a missão de impactar 50 estudantes semestralmente em 2026.`,
        skillsLearned: ["comunicacao", "lideranca"],
        link: "https://meuportfolio.com/frontend",
      },
      {
        title: "Atria Jr",
        imageName: "atria",
        description: `Na Atria Jr., entendi como funciona uma empresa de verdade na prática atuando no TI, Marketing e Comercial.
        Na área de projeto, atuei com WordPress e HTML/CSS em um site front-end e também com Node.js, Express, Prisma ORM e MongoDB, aplicando arquitetura DDD (Domain-Driven Design) e princípios SOLID.`,
        skillsLearned: ["node", "express", "mongodb"],
        link: "https://meuportfolio.com/backend",
      },
      {
        title: "Unicamp",
        imageName: "unicamp",
        description: `Durante minha formação na Unicamp, desenvolvi habilidades em análise de sistemas, programação e trabalho em equipe, aplicando conceitos de engenharia de software e POO.`,
        skillsLearned: ["typescript", "prisma", "docker"],
        link: "https://meuportfolio.com/software-engineer",
      },
    ];
  }