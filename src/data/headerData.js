import resume from '../assets/pdf/resume.pdf'
import photo from '../assets/png/photo.png';  // Adjust path if needed
<div
  style={{
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    overflow: 'hidden',
  }}
>
  <img
    src={photo}
    alt="Profile"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',         // 👈 Zoom/crop without distorting
      objectPosition: 'center top', // 👈 Focus on the top (your face)
    }}
  />
</div>




export const headerData = {
    name: 'Aishwarya K',
    title: "Software  Developer",
    desciption:"A passionate software developer skilled in Java, MySQL, and React. I enjoy building clean, user-friendly applications and exploring Machine Learning. With a love for logical problem-solving, I aim to create impactful projects, keep learning every day, and grow through both backend logic and smart systems.",
    image: photo,
    resumePdf: resume
}
