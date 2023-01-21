type AvatarProps = {
    /** the url of an image to render for the Avatar */
    url: string;
    /** the alt text to use for the url image */
    alt: string;
  }

const Avatar = ({url, alt}: AvatarProps) => {
  return <img src={url} alt={alt} />
}

export default Avatar
