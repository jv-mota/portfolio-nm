import React from 'react';

const Meteorologist = () => {
  return (
    /* meteorologist */
    <div className="skills__content">           

        {/* title-skills */}
        <h3 className="skills__title">
        {/* meteorologist-icon */}       
        <i class='bx bx-cloud-lightning skills__icon'></i>  
            Meteorologist
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
                    <h3 className="skills__name">Nowcasting</h3>
                    {/* level */}
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                {/* data-02 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">WRF</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                {/* data-03 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">Sub-seasonal</h3>
                    {/* level */}
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                {/* data-04 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">Seazonal Forecast</h3>
                    {/* level */}
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                {/* data-05 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">Climate change</h3>
                    {/* level */}
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                {/* data-06 */}
                <div className="skills__data">
                <i class='bx bx-badge-check skills__check'></i>

                <div>
                    {/* name */}
                    <h3 className="skills__name">ML-Model</h3>
                    {/* level */}
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Meteorologist;
