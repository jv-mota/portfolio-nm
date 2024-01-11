import React from 'react';

const BackEnd = () => {
  return (
    /* backend */
    <div className="skills__content">    

      {/* title-skills */}
      <h3 className="skills__title">
      {/* backend-icon */}        
      <i class='bx bx-code-block skills__icon'></i>   
          Backend developer
      </h3>    

      {/* skills-box */}
      <div className="skills__box">

          {/* skills-group */}
          <div className="skills__group">

              {/* data-01 */}
              <div className="skills__data">
              {/* icon */}
              <i class='bx bx-badge-check skills__check'></i>

              <div>
                  {/* name */}
                  <h3 className="skills__name">Python</h3>
                  {/* level */}
                  <span className="skills__level">Advanced</span>
              </div>
              </div>

              {/* data-02 */}
              <div className="skills__data">
              <i class='bx bx-badge-check skills__check'></i>

              <div>
                  {/* name */}
                  <h3 className="skills__name">PHP</h3>
                  {/* level */}
                  <span className="skills__level">Basic</span>
              </div>
              </div>

              {/* data-03 */}
              <div className="skills__data">
              <i class='bx bx-badge-check skills__check'></i>

              <div>
                  {/* name */}
                  <h3 className="skills__name">Node Js</h3>
                  {/* level */}
                  <span className="skills__level">Intermediate</span>
              </div>
              </div>

              {/* data-04 */}
              <div className="skills__data">
              <i class='bx bx-badge-check skills__check'></i>

              <div>
                  {/* name */}
                  <h3 className="skills__name">MySQL</h3>
                  {/* level */}
                  <span className="skills__level">Advanced</span>
              </div>
              </div>

              {/* data-05 */}
              <div className="skills__data">
              <i class='bx bx-badge-check skills__check'></i>

              <div>
                  {/* name */}
                  <h3 className="skills__name">C#</h3>
                  {/* level */}
                  <span className="skills__level">Basic</span>
              </div>
              </div>

              {/* data-06 */}
              <div className="skills__data">
              <i class='bx bx-badge-check skills__check'></i>

              <div>
                  {/* name */}
                  <h3 className="skills__name">Firebase</h3>
                  {/* level */}
                  <span className="skills__level">Intermediate</span>
              </div>
              </div>

          </div>
          
      </div>

    </div>
  )
}

export default BackEnd;
