import nptelCert from '../assets/pdf/nptel-cloud.pdf'

export const achievementData = {
    bio: "I'm always eager to learn and apply new technologies. Here are a few achievements that reflect my interest in cloud computing and active participation in technical events.",
    achievements: [
        {
            id: 1,
            title: 'NPTEL Cloud Computing Certification',
            details: 'Secured 85% in the NPTEL Cloud Computing course and ranked among the top 5% of learners nationwide.',
            date: 'March 2025',
            field: 'Cloud Computing',
            certificate: nptelCert
        },
        {
            id: 2,
            title: 'Innogen 2K25 Finalist',
            details: 'Shortlisted among top 120 teams in Innogen 2K25, an intra-college technical innovation event held on 21.01.2025.',
            date: 'January 2025',
            field: 'Innovation & Events',
            image: 'https://img.icons8.com/fluency/96/idea.png'  // Optional: change image if needed
        }
    ]
};
