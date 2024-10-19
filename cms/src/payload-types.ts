/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Breadcrumbs".
 */
export type Breadcrumbs = {
  slug: string;
  path: string;
  label: string;
  id?: string | null;
}[];

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  collections: {
    users: User;
    pages: Page;
    projects: Project;
    testimonials: Testimonial;
    media: Media;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  db: {
    defaultIDType: number;
  };
  globals: {};
  locale: 'de' | 'en';
  user: User & {
    collection: 'users';
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: number;
  slug: string;
  parent?: (number | null) | Page;
  path: string;
  breadcrumbs: Breadcrumbs;
  title: string;
  hero: {
    title: string;
    subtitle: string;
    links?:
      | {
          label: string;
          page: number | Page;
          id?: string | null;
        }[]
      | null;
  };
  sections?:
    | {
        title: string;
        subTitle?: string | null;
        blocks?: (RichTextBlock | ServicesBlock | TestimonialsBlock)[] | null;
        id?: string | null;
      }[]
    | null;
  meta: SeoMetadata;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "RichTextBlock".
 */
export interface RichTextBlock {
  text: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  id?: string | null;
  blockName?: string | null;
  blockType: 'rich-text';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ServicesBlock".
 */
export interface ServicesBlock {
  services?:
    | {
        title: string;
        description: string;
        page: number | Page;
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'services';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TestimonialsBlock".
 */
export interface TestimonialsBlock {
  id?: string | null;
  blockName?: string | null;
  blockType: 'testimonials';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "SeoMetadata".
 */
export interface SeoMetadata {
  title: string;
  description: string;
  image?: (number | null) | Media;
  alternatePaths: {
    hreflang: string;
    path: string;
    id?: string | null;
  }[];
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  cloudinaryPublicId?: string | null;
  cloudinaryURL?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: number;
  slug: string;
  parent?: (number | null) | Page;
  path: string;
  breadcrumbs: Breadcrumbs;
  startDate: string;
  endDate?: string | null;
  featured: boolean;
  title: string;
  excerpt: string;
  tags: ('web-app' | 'website' | 'app' | 'seo')[];
  image: number | Media;
  body: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  meta: SeoMetadata;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "testimonials".
 */
export interface Testimonial {
  id: number;
  title: string;
  author: {
    name: string;
    company: string;
    companyUrl: string;
    image: number | Media;
  };
  project: number | Project;
  text: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'pages';
        value: number | Page;
      } | null)
    | ({
        relationTo: 'projects';
        value: number | Project;
      } | null)
    | ({
        relationTo: 'testimonials';
        value: number | Testimonial;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}