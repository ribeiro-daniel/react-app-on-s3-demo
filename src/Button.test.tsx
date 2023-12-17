import { expect, test, vi } from 'vitest';
import { fireEvent, render } from '@testing-library/react'
import Button from './Button';

test('renders button with correct label', () => {
  const label = 'Click me';
  const { getByText } = render(<Button label={label} />);
  const button = getByText(label);

  expect(button).toBeInTheDocument();
});

test('calls onClick prop when button is clicked', () => {
  const onClickMock = vi.fn();
  const { getByText } = render(<Button label="Click me" onClick={onClickMock} />);
  const button = getByText('Click me');

  fireEvent.click(button);

  expect(onClickMock).toHaveBeenCalled();
});