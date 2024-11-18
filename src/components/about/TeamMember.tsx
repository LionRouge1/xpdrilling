import { FC } from 'react';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { TeamMemberProps } from '../../types';

const TeamMember: FC<TeamMemberProps> = (teamMember) => {
  return (
    <div className="team-card">
      <img src={teamMember.image} alt={teamMember.fullName} />
      <p>{teamMember.role}</p>
      <h3>{teamMember.fullName}</h3>
      <ul className="social-media">
        <li><a href={teamMember.socialMedia.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookSquare /></a></li>
        <li><a href={teamMember.socialMedia.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
        <li><a href={teamMember.socialMedia.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        <li><a href={teamMember.socialMedia.youtube} target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
      </ul>
    </div>
  );
};

export default TeamMember;