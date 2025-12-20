import { it, vi, expect, describe } from 'vitest';
import DemoComponent from '../demo-component';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('DemoComponent', () => {
  it('should render', () => {
    render(<DemoComponent onClick={vi.fn()} header={'Test header'} />);
    expect(screen.getByText('Test header')).toBeInTheDocument();
  });

  it('should call onClick', () => {
    const onClick = vi.fn();
    render(<DemoComponent onClick={onClick} header={'Test header'} />);
    screen.getByRole('button').click();
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  // user fire event from user events this simulates user interaction / similar to actual user
  it('should call onClick with userEvent', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(<DemoComponent onClick={onClick} header={'Test header'} />);
    await user.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
