import { ObjectFitType } from "../../../types";
import { Main } from "./styles";

interface ImageProps {
    src: string;
    alt: string;
    maxHeight?: number;
    objectFit?: ObjectFitType;
}

const Image: React.FC<ImageProps> = ({ src, alt, maxHeight, objectFit }: ImageProps) => {

    return (
        <Main maxHeight={maxHeight} objectFit={objectFit}>
            <div className="WrapAnchorPicture">
                <div className="AnchorPicture">
                    <div className="WrapPicture">
                        <picture>
                            <img
                                src={src}
                                alt={alt}
                            />
                        </picture>

                    </div>
                </div>
            </div>
        </Main>
    )
}

export { Image };