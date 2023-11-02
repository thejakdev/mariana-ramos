import { styled } from "@mui/material/styles";
import { ObjectFitType } from "../../../types";

interface WapperProps {
    maxHeight?: number;
    objectFit?: ObjectFitType;
    children: React.ReactNode;
}

export const Main: React.FC<WapperProps> = styled('div')<WapperProps>(({
    maxHeight, objectFit,
}) => `
    & > .WrapAnchorPicture {
        height: 100vh;
        max-height: ${maxHeight ?? 120}px;
        cursor: pointer;

        & > .AnchorPicture {
            display: block;
            height: 100%;
            width: 100%;
            overflow: hidden;

            & > .WrapPicture {
                height: 100%;
                width: 100%;
                picture {
                    source,
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: ${objectFit ?? 'cover'};
                        border: 0;
                        max-width: 100%;
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
                video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border: 0;
                    max-width: 100%;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
        }
    }
`);
