export type User = {
    email: string;
    email_verified: boolean;
    family_name: string;
    given_name: string;
    locale: string;
    name: string;
    nickname: string;
    picture: string;
    sid: string;
    sub: string;
    updated_at: string;
  };

export type Data = DataInstance[];

export type DataInstance = {
        name: Date,
        Performance: string,
        Accessibility: string,
        SEO: string,
        BestPractices: string,
}

