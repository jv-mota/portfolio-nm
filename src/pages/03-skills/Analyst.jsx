import React from 'react';

const Analyst = () => {
  return (
    /* analyst */
    <div className="skills__content">           

        {/* title-skills */}
        <h3 className="skills__title">
        {/* analyst-icon */}       
        <i class='bx bx-bar-chart-alt-2 skills__icon'></i>
            System analyst
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
                    <h3 className="skills__name">HTML</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                {/* data-02 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">CSS</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                {/* data-03 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">JavaScript</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                {/* data-04 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">Bootstrap</h3>
                    {/* level */}
                    <span className="skills__level">Basic</span>
                </div>
                </div>

                {/* data-05 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">React</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                {/* data-06 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">Git</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Analyst;
