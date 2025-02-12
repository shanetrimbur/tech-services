import yaml from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';

const configPath = path.resolve('./src/config.yaml');
const configYaml = yaml.load(fs.readFileSync(configPath, 'utf8')) as Record<string, any>;

export const SITE = {
  name: configYaml.site.name,
  site: configYaml.site.site,
  base: configYaml.site.base,
  trailingSlash: configYaml.site.trailingSlash,
  googleSiteVerificationId: configYaml.site.googleSiteVerificationId
};

export const APP_BLOG = configYaml.apps.blog; 