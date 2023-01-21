import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

import Avatar from './Avatar'

describe("Avatar", () => {
    it("should render an image with an alt text", () => {
        const url = "https://cataas.com/cat/says/hello%20world";
        const alt = "@github-handle";
        render(<Avatar url={url} alt={alt}/>)
        // grab the image element by it's alt text
        const img = screen.getByAltText("@github-handle")
        expect(img).toBeInTheDocument();
        expect(img.tagName).toBe("IMG")
    })

    it("should render the url and alt passed in", () => {
        const url = "https://cataas.com/cat/says/hello%20world";
        const alt = "a beautiful cat";
        render(<Avatar url={url} alt={alt} />)

        const img = screen.getByAltText(alt);
        expect(img).toHaveAttribute("src", url);
    })
})
