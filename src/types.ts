export type BannerProps = {
  title: string;
  sousTitle: string;
  image: any;
}

export type SocialMediaProps = {
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
};

export type TeamMemberProps = {
  role: string;
  image: any;
  fullName: string;
  socialMedia: SocialMediaProps;
};

export type CallForActionProps = {
  title: string;
  description: string[];
  image: any;
  butonText: string;
};

export type PostBannerProps = {
  title: string;
  image: any;
  description: string[];
};

export type PageOptionProps = {
  title: string;
  image: any;
  description: string[];
  lists: string[];
}

export type ContentPageProps = {
  postBanner: PostBannerProps;
  pageOptions: PageOptionProps[];
  page: {title: string, url: string};
  callForAction: CallForActionProps | null;
  haveSideBar?: boolean;
}

export type WehaveProps = {
  title: string;
  sousTitle: string;
  description: string[];
  image: any;
  reasons: {
    title: string;
    image: any;
    text: string;
  }[];
}