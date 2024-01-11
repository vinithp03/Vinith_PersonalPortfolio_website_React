
import React from 'react';
import './Skills.css'; // Import your CSS file for styling

const Skills = () => {
  return (
    <div className='skills-container'>
    <div className="outerSkill">
      <h2 className='skl'  style={{ color: '#FFA500'}}>Skills</h2>
      <h3>Frontend Development</h3>
      <div className="skill-category">
        <div className="skill-box">
          <p>HTML5</p>
        </div>
        <div className="skill-box">
          <p>CSS3</p>
        </div>
        <div className="skill-box">
          <p>JavaScript</p>
        </div>
        <div className="skill-box">
          <p>React.js</p>
        </div>
      </div>
      <h3>Backend Development</h3>
      <div className="skill-category">
        <div className="skill-box">
          <p>Java</p>
        </div>
        <div className="skill-box">
          <p>C++</p>
        </div>
      </div>
      <h3>Database</h3>
      <div className="skill-category">
        <div className="skill-box">
          <p>SQL</p>
        </div>
               <span className='orange'></span>
      </div>
    </div>
    <div className="skillImgae">
      <p className='code'>  
      <span className='orange'>def</span> success(dedication, persistence, passion):<br/>
          dedication += 1  <span className='comment'> # dedicate yourself </span> <br/>
          persistence += 1 <span className='comment'> # be persistent </span> <br/>
          passion = True  <span className='comment'> # have passion</span> <br/><br/>
          <span className='orange'>if</span> passion == True: <br/>
          magic = dedication + persistence <br/>
          <span className='orange'>return</span> magic <br/>
          else: <br/>
          magic = 0 <br/>
          return magic <br/>

          <span className='comment' style={ {wordSpacing:'10px'} }> #love_It.  #make_mistakes.  #learn.  #keep_Grinding. </span>
    </p>
    </div>

    </div>
  );
};

export default Skills;
