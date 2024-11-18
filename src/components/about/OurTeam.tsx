import { TeamMemberProps } from "../../types";
import TeamMember from "./TeamMember";

const OurTeam = () => {
  const teamMembers: TeamMemberProps[] = [
    {
      role: "CEO",
      image: "https://via.placeholder.com/150",
      fullName: "John Doe",
      socialMedia: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com",
        youtube: "https://www.youtube.com"
      }
    },
    {
      role: "CTO",
      image: "https://via.placeholder.com/150",
      fullName: "Jane Doe",
      socialMedia: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com",
        youtube: "https://www.youtube.com"
      }
    },
    {
      role: "CFO",
      image: "https://via.placeholder.com/150",
      fullName: "Jack Doe",
      socialMedia: {
        facebook: "https://www.facebook.com",
        twitter: "https://www.twitter.com",
        instagram: "https://www.instagram.com",
        youtube: "https://www.youtube.com"
      }
    }
  ];

  return (
    <section className="our-team">
      <h4>Our Team</h4>
      <p>
        Behind every successful project is a team of dedicated and experienced professionals.
        Our people are the heart of XP Drilling Services, bringing a wealth of expertise in 
        drilling operations, project management, and safety. We are proud of our strong culture 
        of collaboration, where every team member plays a critical role in delivering the best 
        outcomes for our clients.
      </p>
      <div className="team-members">
        {teamMembers.map((teamMember, index) => (
          <TeamMember key={index} {...teamMember} />
        ))}
      </div>
    </section>
  );
}

export default OurTeam;