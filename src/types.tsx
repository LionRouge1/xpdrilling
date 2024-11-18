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