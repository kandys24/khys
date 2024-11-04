import React from 'react';

const CompanyInfos = ({title, paragraph}) => {
    return (
        <div className='companyinfos'>
            <h1>{title}</h1>
            <p>{paragraph}</p>
        </div>
    )
}

export default CompanyInfos;