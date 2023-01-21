import {describe, expect, it} from 'vitest'
import {render, screen} from '@testing-library/react'

import Avatar from './Avatar'

describe("Avatar", () => {
    it("should render an image with an alt text", () => {
        render(<Avatar />)
        // grab the image element by it's alt text
        const img = screen.getByAltText("@github-handle")
        expect(img).toBeInTheDocument();
        expect(img.tagName).toBe("IMG")
      })
  })
