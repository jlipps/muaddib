import {JSONSchemaType} from 'ajv'
import {resolve} from 'node:path'
import * as url from 'node:url'

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const FIXT_PATH = resolve(__dirname, 'fixtures')

export const F1_PATH = resolve(FIXT_PATH, '1')
export const F2_PATH = resolve(FIXT_PATH, '2')

export interface Article {
  author: Author,
  title: string,
  date?: number,
}
export const ARTICLE_NAME = 'article'
export const ARTICLE_SCHEMA: JSONSchemaType<Omit<Article, 'author'>> = {
  type: 'object',
  properties: {
    title: {type: 'string'},
    date: {type: 'integer', nullable: true},
  },
  required: ['title'],
}

export interface Author {
    name: string,
    articles: Article[]
}
export const AUTHOR_NAME = 'author'
export const AUTHOR_SCHEMA: JSONSchemaType<Omit<Author, 'articles'>> = {
    type: 'object',
    properties: {
        name: {type: 'string'},
    },
    required: ['name'],
}
