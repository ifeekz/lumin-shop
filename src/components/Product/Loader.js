import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = props => (
    <ContentLoader viewBox="0 0 900 700" height={900} width={1100} {...props}>
        <rect x="30" y="20" rx="8" ry="8" width="250" height="250" />
        <rect x="30" y="275" rx="0" ry="0" width="250" height="18" />
        <rect x="30" y="300" rx="0" ry="0" width="120" height="20" />
        
        <rect x="300" y="20" rx="8" ry="8" width="250" height="250" />
        <rect x="300" y="275" rx="0" ry="0" width="250" height="18" />
        <rect x="300" y="300" rx="0" ry="0" width="120" height="20" />
        
        <rect x="570" y="20" rx="8" ry="8" width="250" height="250" />
        <rect x="570" y="275" rx="0" ry="0" width="250" height="18" />
        <rect x="570" y="300" rx="0" ry="0" width="120" height="20" />

        <rect x="30" y="340" rx="8" ry="8" width="250" height="250" />
        <rect x="30" y="595" rx="0" ry="0" width="250" height="18" />
        <rect x="30" y="620" rx="0" ry="0" width="120" height="20" />
        
        <rect x="300" y="340" rx="8" ry="8" width="250" height="250" />
        <rect x="300" y="595" rx="0" ry="0" width="250" height="18" />
        <rect x="300" y="620" rx="0" ry="0" width="120" height="20" />
        
        <rect x="570" y="340" rx="8" ry="8" width="250" height="250" />
        <rect x="570" y="595" rx="0" ry="0" width="250" height="18" />
        <rect x="570" y="620" rx="0" ry="0" width="120" height="20" />
    </ContentLoader>
)

export default Loader