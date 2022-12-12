import React, { useEffect } from 'react';
import lightGallery from 'lightgallery';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export function Gallery() {
    
    React.useEffect(() => {
        
        const nodes = Array.prototype.slice.call(document.querySelectorAll('[class^="blog-module--blog__body--"] img'))
        
        lightGallery(document.querySelector('[class^="blog-module--blog__body--"]'), {
            plugins: [lgZoom, lgThumbnail],
            speed: 500,
            selector: '[class^="blog-module--blog__body--"] img',
            exThumbImage: 'src'
        });
    }, [])
    return null;
}
