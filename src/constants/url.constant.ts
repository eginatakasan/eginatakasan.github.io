const RESUME_URL = `${process.env.NEXT_PUBLIC_BASE_URL}resume.pdf`;

const MAIL_URL = 'mailto:eginatakasan@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/eginata-kasan/';
const GITHUB_URL = 'https://github.com/eginatakasan/';
const GITHUB_IO_REPO_URL =
  'https://github.com/eginatakasan/eginatakasan.github.io';
const P5JS_URL = 'https://p5js.org/';

const url = {
  github: GITHUB_URL,
  githubIoRepo: GITHUB_IO_REPO_URL,
  linkedin: LINKEDIN_URL,
  mail: MAIL_URL,
  p5js: P5JS_URL,
  randomIslandsGeneratorRepo: `${GITHUB_IO_REPO_URL}/tree/main/app/projects/random-islands-generator`,
  resume: RESUME_URL,
};

export default url;
