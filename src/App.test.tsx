import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
    it('renders Hello World', () => {
        render(<App />);
        expect(screen.getByText(/hello world/i)).toBeInTheDocument();
    });
});
