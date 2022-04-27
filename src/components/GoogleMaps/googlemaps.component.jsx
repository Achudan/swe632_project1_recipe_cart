import React from 'react'

const GoogleMap = () => {

    return (
        <div style={{padding:18}}>
            <iframe
                title='googlemap'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1186.859238558487!2d-77.30810072286029!3d38.82993741036932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e607b427ebd%3A0xd766a653e6557544!2sGeorge%20Mason%20University!5e0!3m2!1sen!2sus!4v1651060374622!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{border:0}}
                // allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>

    );
}

export default GoogleMap