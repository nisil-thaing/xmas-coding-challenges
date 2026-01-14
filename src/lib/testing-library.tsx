import type { ComponentType, ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { RenderOptions, RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';

type WrapperComponent = ComponentType<{ children: ReactNode }>;

const composeWrappers = (wrappers: WrapperComponent[]) => {
  return ({ children }: { children: ReactNode }) =>
    wrappers.reduceRight((acc, Wrapper) => <Wrapper>{acc}</Wrapper>, children);
};

const renderWithWrappers = (ui: ReactNode, wrappers: WrapperComponent[], options?: RenderOptions): RenderResult => {
  const Wrapper = composeWrappers(wrappers);
  return render(<Wrapper>{ui}</Wrapper>, options);
};

const RouterWrapper: WrapperComponent = ({ children }) => <MemoryRouter>{children}</MemoryRouter>;

export const renderTestWithRoutersWrapper = (ui: ReactNode, options?: RenderOptions): RenderResult => {
  return renderWithWrappers(ui, [RouterWrapper], options);
};

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

const QueryClientWrapper: WrapperComponent = ({ children }) => (
  <QueryClientProvider client={createTestQueryClient()}>{children}</QueryClientProvider>
);

export const renderTestWithQueryClientWrapper = (ui: ReactNode, options?: RenderOptions): RenderResult => {
  return renderWithWrappers(ui, [QueryClientWrapper], options);
};

export const renderTestWithAllProviders = (ui: ReactNode, options?: RenderOptions): RenderResult => {
  return renderWithWrappers(ui, [QueryClientWrapper, RouterWrapper], options);
};
