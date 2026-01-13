import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import type { RenderOptions, RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';

export const renderTestWithRoutersWrapper = (ui: ReactNode, options?: RenderOptions): RenderResult => {
  return render(<MemoryRouter>{ui}</MemoryRouter>, options);
};
