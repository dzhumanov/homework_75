export interface stateProps {
    encoded: string;
    decoded: string;
    password: string;
}

export interface postProps {
    message: string;
    password: string;
}

export interface mutationEncodeProps {
    encode: string;
}

export interface mutationDecodeProps {
    decode: string;
}