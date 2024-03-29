import React from 'react';

const Others = () => {
  return (
    /* others */
    <div className="skills__content">           

        {/* title-skills */}
        <h3 className="skills__title">
        {/* others-icon */}       
        <i class='bx bx-list-plus skills__icon'></i>
            Others
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
                    <h3 className="skills__name">Excel</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                {/* data-02 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">CDO</h3>
                    {/* level */}
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                {/* data-03 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">QGIS</h3>
                    {/* level */}
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                {/* data-04 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">ArcGIS</h3>
                    {/* level */}
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                {/* data-05 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">Dinamica EGO</h3>
                    {/* level */}
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                {/* data-06 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">Git / ShellScript</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Others;
