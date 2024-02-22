import React from 'react';

const DataScience = () => {
  return (
    /* data-scientist */
    <div className="skills__content">           

        {/* title-skills */}
        <h3 className="skills__title">
        {/* scientist-icon */}       
        <i class='bx bx-data skills__icon'></i>
            Data Scientist
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
                    <h3 className="skills__name">NCL</h3>
                    {/* level */}
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                {/* data-03 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">SQL</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                {/* data-04 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">Machine Learning</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                {/* data-05 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">Tableau</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                {/* data-06 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">Power BI and ETL</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate <br/> Advanced</span>
                </div>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default DataScience;
