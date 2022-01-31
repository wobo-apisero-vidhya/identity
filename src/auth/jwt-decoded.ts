export interface JwtDecoded {
    iss: string;
    aud: string[];
    iat: number;
    sub: string;
    tenantId: string;
    admin: string;
}