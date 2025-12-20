import { it, vi, expect, describe } from 'vitest';
import DemoComponent from '../demo-component';
import { render  , screen} from '@testing-library/react';

describe('DemoComponent', () => {
  it('should render', () => {
    render(
      <DemoComponent onClick={vi.fn()} header={'Test header'} />,
    );
    expect(screen.getByText('Test header')).toBeInTheDocument();
  });
});
