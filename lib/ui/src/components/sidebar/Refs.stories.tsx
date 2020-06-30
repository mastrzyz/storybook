import React from 'react';

import { Ref } from './Refs';
import { standardData as standardHeaderData } from './Heading.stories';
import { mockDataset } from './mockdata';
import { RefType } from './RefHelpers';

export default {
  component: Ref,
  title: 'UI/Sidebar/Refs',
  excludeStories: /.*Data$/,
};

const { menu } = standardHeaderData;
const stories = mockDataset.withRoot;
const storyId = '1-12-121';

export const simpleData = { menu, stories, storyId };
export const loadingData = { menu, stories: {} };

const refs: Record<string, RefType> = {
  optimized: {
    id: 'optimized',
    title: 'It is optimized',
    url: 'https://example.com',
    ready: false,
    type: 'lazy',
    stories,
  },
  empty: {
    id: 'empty',
    title: 'It is empty because no stories were loaded',
    url: 'https://example.com',
    ready: false,
    type: 'lazy',
    stories: {},
  },
  startInjected_unknown: {
    id: 'startInjected_unknown',
    title: 'It started injected and is unknown',
    url: 'https://example.com',
    type: 'unknown',
    ready: false,
    stories,
  },
  startInjected_loading: {
    id: 'startInjected_loading',
    title: 'It started injected and is loading',
    url: 'https://example.com',
    type: 'auto-inject',
    ready: false,
    stories,
  },
  startInjected_ready: {
    id: 'startInjected_ready',
    title: 'It started injected and is ready',
    url: 'https://example.com',
    type: 'auto-inject',
    ready: true,
    stories,
  },
  versions: {
    id: 'versions',
    title: 'It has versions',
    url: 'https://example.com',
    type: 'lazy',
    stories,
    versions: { '1.0.0': 'https://example.com/v1', '2.0.0': 'https://example.com' },
  },
  versionsMissingCurrent: {
    id: 'versions_missing_current',
    title: 'It has versions',
    url: 'https://example.com',
    type: 'lazy',
    stories,
    versions: { '1.0.0': 'https://example.com/v1', '2.0.0': 'https://example.com/v2' },
  },
  error: {
    id: 'error',
    title: 'This has problems',
    url: 'https://example.com',
    type: 'lazy',
    stories: {},
    error: (() => {
      try {
        throw new Error('There was a severe problem');
      } catch (e) {
        return e;
      }
    })(),
  },
  auth: {
    id: 'Authentication',
    title: 'This requires a login',
    url: 'https://example.com',
    type: 'lazy',
    stories: {},
    loginUrl: 'https://example.com',
  },
  long: {
    id: 'long',
    title: 'This storybook has a very very long name for some reason',
    url: 'https://example.com',
    stories,
    type: 'lazy',
    versions: {
      '111.111.888-new': 'https://example.com/new',
      '111.111.888': 'https://example.com',
    },
  },
};

export const Optimized = () => <Ref {...refs.optimized} storyId="" filter="" isHidden={false} />;
export const IsEmpty = () => <Ref {...refs.empty} storyId="" filter="" isHidden={false} />;
export const StartInjectedUnknown = () => (
  <Ref {...refs.startInjected_unknown} storyId="" filter="" isHidden={false} />
);
export const StartInjectedLoading = () => (
  <Ref {...refs.startInjected_loading} storyId="" filter="" isHidden={false} />
);
export const StartInjectedReady = () => (
  <Ref {...refs.startInjected_ready} storyId="" filter="" isHidden={false} />
);
export const Versions = () => <Ref {...refs.versions} storyId="" filter="" isHidden={false} />;
export const VersionsMissingCurrent = () => (
  <Ref {...refs.versionsMissingCurrent} storyId="" filter="" isHidden={false} />
);
export const Error = () => <Ref {...refs.error} storyId="" filter="" isHidden={false} />;
export const Auth = () => <Ref {...refs.auth} storyId="" filter="" isHidden={false} />;
export const Long = () => <Ref {...refs.long} storyId="" filter="" isHidden={false} />;
