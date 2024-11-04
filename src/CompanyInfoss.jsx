import React from 'react'

const CompanyInfoss = ({title, paragraph, extra}) => {
    return (
        <div className='companyinfoss' style={{marginTop: '30px'}}>
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <div>
                <p>{extra}</p> 
            </div>
        </div>
    )
}

export default CompanyInfoss;