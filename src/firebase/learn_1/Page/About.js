import { useSelector } from 'react-redux';
import { Typewriter } from 'react-simple-typewriter';
import Navbar from './Navbar';

const About = () => {
  const { current } = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '150px' }}>
        <h2>
          <div style={{ paddingTop: '3rem', margin: 'auto 0', fontSize: '30px' }}>
            I am a
            <span style={{ color: 'red', fontWeight: 'bold', marginLeft: '10px' }}>
              <Typewriter
                loop
                cursor
                cursorStyle={'_'}
                delaySpeed={20}
                deleteSpeed={1000}
                words={['developer', 'Front-End Full Stack ReactJs 😍']}
              />
            </span>
          </div>
        </h2>
        <h2>Hello,{current.displayName}</h2>
        <img src={current.photoURL} alt="" height="60rem" width="60rem" />
      </div>
    </>
  );
};

export default About;
