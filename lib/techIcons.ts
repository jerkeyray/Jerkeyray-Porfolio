// lib/techIcons.ts
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaGitAlt,
  FaPython,
  FaAws,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaWordpress,
  FaJava,
  FaLinux,
  FaWindows,
  FaApple,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiFirebase,
  SiTailwindcss,
  SiStripe,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGraphql,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiBootstrap,
  SiJquery,
  SiSass,
  SiWebpack,
  SiVite,
  SiNpm,
  SiYarn,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiJest,
  SiCypress,
  SiEslint,
  SiPrettier,
  SiFigma,
  SiAdobe,
  SiKotlin,
  SiCplusplus,
  SiGo,
  SiRuby,
  SiDjango,
  SiFlask,
  SiSpring,
  SiKubernetes,
  SiTerraform,
  SiAnsible,
  SiJenkins,
  SiTravisci,
  SiCircleci,
  SiDigitalocean,
  SiGooglecloud,
  SiReduxsaga,
  SiElectron,
  SiFlutter,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiSolidity,
  SiRust,
  SiScala,
  SiHaskell,
  SiRedis,
  SiElasticsearch,
  SiRabbitmq,
  SiNginx,
  SiApache,
  SiUnity,
  SiUnrealengine,
  SiBlender,
  SiWebassembly,
  SiWebgl,
  SiSupabase, // Import Supabase icon
} from "react-icons/si";
import { IconType } from "react-icons";

export const techIcons: Record<string, IconType> = {
  // Front-End
  React: FaReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  Angular: SiAngular,
  Svelte: SiSvelte,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  JavaScript: FaJsSquare,
  TypeScript: SiTypescript,
  Redux: SiRedux,
  "Redux Saga": SiReduxsaga,
  jQuery: SiJquery,
  "Tailwind CSS": SiTailwindcss,
  Bootstrap: SiBootstrap,
  Sass: SiSass,

  // Back-End
  "Node.js": FaNodeJs,
  Express: SiExpress,
  PHP: FaPhp,
  Python: FaPython,
  Django: SiDjango,
  Flask: SiFlask,
  Spring: SiSpring,
  Firebase: SiFirebase,
  Stripe: SiStripe,
  Kotlin: SiKotlin,
  "C++": SiCplusplus,
  Go: SiGo,
  Ruby: SiRuby,
  Java: FaJava,
  Rust: SiRust,
  Scala: SiScala,
  Haskell: SiHaskell,
  Supabase: SiSupabase, // Add Supabase icon

  // Databases
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  GraphQL: SiGraphql,
  Redis: SiRedis,
  Elasticsearch: SiElasticsearch,
  RabbitMQ: SiRabbitmq,

  // DevOps & Cloud
  Docker: FaDocker,
  Kubernetes: SiKubernetes,
  Terraform: SiTerraform,
  Ansible: SiAnsible,
  Jenkins: SiJenkins,
  TravisCI: SiTravisci,
  CircleCI: SiCircleci,
  AWS: FaAws,
  Vercel: SiVercel,
  Netlify: SiNetlify,
  Heroku: SiHeroku,
  DigitalOcean: SiDigitalocean,
  "Google Cloud": SiGooglecloud,

  // Tools
  Git: FaGitAlt,
  GitHub: FaGithub,
  Webpack: SiWebpack,
  Vite: SiVite,
  NPM: SiNpm,
  Yarn: SiYarn,
  ESLint: SiEslint,
  Prettier: SiPrettier,

  // Testing
  Jest: SiJest,
  Cypress: SiCypress,

  // Design
  Figma: SiFigma,
  Adobe: SiAdobe,

  // Blockchain
  Solidity: SiSolidity,

  // AI/ML
  TensorFlow: SiTensorflow,
  PyTorch: SiPytorch,
  OpenAI: SiOpenai,

  // Game Development
  Unity: SiUnity,
  UnrealEngine: SiUnrealengine,
  Blender: SiBlender,
  WebAssembly: SiWebassembly,
  WebGL: SiWebgl,

  // CMS
  WordPress: FaWordpress,

  // Operating Systems
  Linux: FaLinux,
  Windows: FaWindows,
  macOS: FaApple,

  // Web Servers
  Nginx: SiNginx,
  Apache: SiApache,

  // Electron
  Electron: SiElectron,

  // Mobile Development
  Flutter: SiFlutter,
};

// Fallback icon for unmapped tech
export const fallbackIcon = FaJsSquare; // Generic JS icon as fallback
