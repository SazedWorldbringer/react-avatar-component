import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Avatar from './Avatar'

describe("Avatar", () => {
    it("should render an <img />", () => {
        const url = "https://cataas.com/cat/says/hello%20world";
        const alt = "@github-handle";
        render(<Avatar url={url} alt={alt} />)
        // grab the image element by it's alt text
        const img = screen.getByAltText(alt)
        expect(img).toBeInTheDocument();
        expect(img.tagName).toBe("IMG")
    })

    it("should use the url and alt passed in", () => {
        const url = "https://cataas.com/cat/says/hello%20world";
        const alt = "a beautiful cat";
        render(<Avatar url={url} alt={alt} />)

        const img = screen.getByAltText(alt);
        expect(img).toHaveAttribute("src", url);
    })

    it("should use fallback image if no URL is passed in", () => {
        render(<Avatar />)

        const img = screen.getByAltText(FALLBACK_AVATAR_ALT_TEXT)
        expect(img).toHaveAttribute("src", FALLBACK_AVATAR_URL)
    })
})
