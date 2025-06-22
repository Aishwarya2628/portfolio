import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Road Pothole Detection using YOLOv8',
        projectDesc: 'Developed a Machine Learning system using YOLOv8 segmentation model to detect potholes on roads. Dataset annotated and trained using Roboflow with OpenCV integration.',
        tags: ['Python', 'YOLOv8', 'OpenCV', 'Machine Learning'],
        code: 'https://github.com/Aishwarya2628/RoadPotholeDetectionUsingYOLOv8',
        demo: '',
        image: one
    },
    {
        id: 2,
        projectName: 'Developer Portfolio Website',
        projectDesc: 'Personal developer portfolio built using React, showcasing skills, resume, achievements, and projects with a modern UI and GitHub Pages deployment.',
        tags: ['React', 'CSS', 'Material-UI'],
        code: 'https://github.com/YOUR_USERNAME/developer-portfolio', // 🔁 update if deployed
        demo: 'https://YOUR_USERNAME.github.io/developer-portfolio/', // 🔁 update if deployed
        image: two
    },
];
