export type BannerProps = {
  title: string;
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
  pageUrl: string;
  callForAction: CallForActionProps | null;
}