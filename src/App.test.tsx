import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from './App'

describe("App", () => {
  it("should render with the title visible", () => {
    render(<App />)
    expect(screen.getByText(/Avatar Component using TypeScript and TDD using Vitest/i)).toBeInTheDocument();
  })
})
