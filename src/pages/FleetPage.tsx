import PageBanner from "../components/PageBanner";
import BannerImg from '../assets/about_us.jpg';
import mission from '../assets/mission.jpg';
import fleet1 from '../assets/fleet-01.jpg';
import fleet2 from '../assets/fleet-02.jpg';
import ContentForPage from "./ContentForPage";

const Fleet = () => {
  const postBanner = {
    title: 'Explore Our Fleet of Advanced Drilling Machines',
    image: fleet2,
    description: ["XP Drilling Services places a premium on cutting-edge equipment and technology. Our investment in modern rigs and advanced drilling technology showcases our dedication to precision and efficiency. We're committed to delivering the best-in-class services, even as a new player on the scene."],
  };

  const pageOptions = [
    {
      title: 'Reverse Circulation (RC) Machine',
      description: ['Epiroc Explorac 235'],
      image: mission,
      lists: [
        "C18 Cat engine (550 hp) twin turbo",
        "Epiroc two stage compressor: 2000cfm @ 525psi",
        "Depth capabilities: 450 meters (4.5” RC rods) 5.5” drill ",
        "Automatic rod handling and breakout system",
        "Fully remote control",
        "35 tonne pullback",
      ]
    },
    {
      title: 'Diamond Drilling (DD) Machine',
      description: ["Epiroc Boyles C6/C6C"],
      image: fleet1,
      lists: [
        "PQ depth of 770 meters",
        "HQ depth of 1,100 meters, NQ depth of 1,381 meters",
        "PQ chuck drive rotation head (3.5 meter stroke)",
        "6 meter pull, Drilling angle –45* to -90*",
        "Cummins Engine OBS 6.7 litre",
        "Safety rod guarding with automatic rotation",
      ]
    },
    {
      title: 'Underground coring drill',
      description: ['LM 90'],
      image: mission,
      lists: [
        "C18 Cat engine (550 hp) twin turbo",
        "Equipped with a 130 kN feed frame",
        "Reversible feed cylinder",
        "Semi-automated rod handling",
        "High torque breakout",
        "Fail safe rod clamp",
      ]
    },
    {
      title: 'Core drilling',
      description: ["Diamec Smart 4"],
      image: fleet1,
      lists: [
        "Drilling diameters: A,B,N",
        "Depth capacity: Vertical down, AO/AT = 1 125 m (3 691 ft) Vertical up, AO/AT = 750 m (2 461 ft)",
        "Feed force/pull force: 52 kN (11 742 lbs)",
        "6 meter pull, Drilling angle –45* to -90*, AO/AT = 750 m (2 461 ft)",
        "180-degree movement of the feed frame."
      ]
    },
    {
      title: 'Underground coring drill',
      description: ['LM 110'],
      image: mission,
      lists: [
        "Equipped with a 128 kN feed frame",
        "Reversible feed cylinder",
        "Semi-automated rod handling",
        "High torque breakout",
        "Fail safe rod clamp",
      ]
    }
  ];
  return (
    <>
      <PageBanner
        title="Fleet Overview"
        sousTitle="Our Advanced Drilling Fleet"
        image={BannerImg}
      />
      <main className="fleet-page">
        <ContentForPage
          pageOptions={pageOptions}
          postBanner={postBanner}
          page={{title: 'Our Fleet', url:'/fleet'}}
          callForAction={null}
          have = {{sideBar: true, horizontalBar: true}}
        />
      </main>
    </>
  );
};

export default Fleet;