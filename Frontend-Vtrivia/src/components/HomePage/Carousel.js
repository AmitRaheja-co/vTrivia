import React, { useState } from 'react';
 
const Carousel = () => {
    const [angle, setAngle] = useState(0);
 
    const galleryspin = (sign) => {
        let newAngle;
        if (!sign) {
            newAngle = angle + 45;
        } else {
            newAngle = angle - 45;
        }
        setAngle(newAngle);
    };
 
    return (
       
        <div id="carousel" style={{
            perspective: '1200px',
            background: 'linear-gradient(to bottom, #4338ca, #38bdf8)',
            paddingTop: '10%',
            fontSize: 0,
            marginBottom: '0rem',
            overflow: 'hidden'
        }}>
            <figure id="spinner" style={{
                transformStyle: 'preserve-3d',
                height: '300px',
                transformOrigin: '50% 50% -500px',
                transition: '1s',
                transform: `rotateY(${angle}deg)`,
                WebkitTransform: `rotateY(${angle}deg)`,
                MozTransform: `rotateY(${angle}deg)`
            }}>
               <img src="https://img.freepik.com/premium-vector/editable-text-effect-quiz-time-3d-cartoon-template-style-premium-vector_480443-1506.jpg" alt="" style={{
                    width: '40%',
                    height:'275px',
                    maxWidth: '425px',
                    position: 'absolute',
                    left: '30%',
                    transformOrigin: '50% 50% -500px',
                    outline: '1px solid transparent'
                }} />
                <img src="https://i.pinimg.com/originals/db/34/d4/db34d40b271fb59477621550bf73ea0b.jpg" alt="" style={{
                    width: '40%',
                    height:'275px',
                    maxWidth: '425px',
                    position: 'absolute',
                    left: '30%',
                    transformOrigin: '50% 50% -500px',
                    outline: '1px solid transparent',
                    transform: 'rotateY(-45deg)'
                }} />
                <img src="https://t4.ftcdn.net/jpg/05/14/11/33/360_F_514113385_bPH3A7S3GclJnnavjzImG8R0u8i7CO2K.jpg" alt="" style={{
                    width: '40%',
                    height:'275px',
                    maxWidth: '425px',
                    position: 'absolute',
                    left: '30%',
                    transformOrigin: '50% 50% -500px',
                    outline: '1px solid transparent',
                    transform: 'rotateY(-90deg)'
                }} />
                <img src="https://images.freeimages.com/images/large-previews/a73/quiz-2-1189415.jpg?fmt=webp&w=500" alt="" style={{
                    width: '40%',
                    height:'275px',
                    maxWidth: '425px',
                    position: 'absolute',
                    left: '30%',
                    transformOrigin: '50% 50% -500px',
                    outline: '1px solid transparent',
                    transform: 'rotateY(-135deg)'
                }} />
                <img src="https://cdn.pixabay.com/photo/2022/02/02/10/56/questions-6988157_1280.png" alt="" style={{
                    width: '40%',
                    height:'275px',
                    maxWidth: '425px',
                    position: 'absolute',
                    left: '30%',
                    transformOrigin: '50% 50% -500px',
                    outline: '1px solid transparent',
                    transform: 'rotateY(-180deg)'
                }} />
                <img src="https://media.istockphoto.com/id/1398132096/vector/question-mark-icon.jpg?s=612x612&w=0&k=20&c=pugL7du4lXu_GVox1Zl_k_TFev6FrTCaMoeaJd8q9tI=" alt="" style={{
                    width: '40%',
                    height:'275px',
                    maxWidth: '425px',
                    position: 'absolute',
                    left: '30%',
                    transformOrigin: '50% 50% -500px',
                    outline: '1px solid transparent',
                    transform: 'rotateY(-225deg)'
                }} />
                <img src="https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg" alt="" style={{
                    width: '40%',
                    height:'275px',
                    maxWidth: '425px',
                    position: 'absolute',
                    left: '30%',
                    transformOrigin: '50% 50% -500px',
                    outline: '1px solid transparent',
                    transform: 'rotateY(-270deg)'
                }} />
                <img src="https://www.shutterstock.com/shutterstock/photos/749036347/display_1500/stock-vector-quiz-line-concept-vector-illustration-element-template-for-design-749036347.jpg" alt="" style={{
                    width: '40%',
                    height:'275px',
                    maxWidth: '425px',
                    position: 'absolute',
                    left: '30%',
                    transformOrigin: '50% 50% -500px',
                    outline: '1px solid transparent',
                    transform: 'rotateY(-315deg)'
                }} />
                {/* Repeat for other images */}
            </figure>
            <span style={{ float: 'left', color: '#fff', margin: '5%', display: 'inline-block', textDecoration: 'none', fontSize: '2rem', transition: '0.6s color', position: 'relative', marginTop: '-6rem', borderBottom: 'none', lineHeight: 0 }} className="ss-icon" onClick={() => galleryspin('-')}>&lt;</span>
            <span style={{ float: 'right', color: '#fff', margin: '5%', display: 'inline-block', textDecoration: 'none', fontSize: '2rem', transition: '0.6s color', position: 'relative', marginTop: '-6rem', borderBottom: 'none', lineHeight: 0 }} className="ss-icon" onClick={() => galleryspin('')}>&gt;</span>
           
        </div>
       
       
    );
};
 
export default Carousel;