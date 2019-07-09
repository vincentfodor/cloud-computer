import React from 'react';

import './index.css';

const Log = ({ log }) => {
    const renderLog = log.map((entry, index) => (
        <p key={index} className="log-entry">
            <span className="log-entry-reference">
                <span className="log-entry-reference-displayname">{ entry.user }@{ entry.host } > </span>
                { entry.command }
            </span>
            <span className="log-entry-response">{ entry.response }</span>
        </p>
    ));
    
    return (
        <div className="log">
            <p className="log-entry">
                <span className="log-entry-reference">
                    <span className="log-entry-reference-displayname">root@vfodor.de > </span>
                    help
                </span>
                <span className="log-entry-response">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, soluta quasi. Quidem velit tempora molestiae laudantium quaerat, sit itaque obcaecati minima, consectetur, commodi totam tempore incidunt unde a. Eius blanditiis laborum aliquam, id in repellendus nostrum accusantium excepturi magni labore delectus ipsum minima voluptatum, asperiores fugit dicta provident quia harum omnis pariatur ducimus quo eos ad quam? Sapiente sequi exercitationem nisi nulla repudiandae velit voluptates dolores blanditiis, totam laboriosam. Temporibus quod aliquam laboriosam? Ipsum saepe alias officia adipisci voluptas minus molestias sunt, assumenda eligendi doloribus quam quas facilis dolorum odio aperiam cumque deleniti impedit qui quasi nulla quo atque. Iusto fuga veniam labore eius, dolore necessitatibus. Distinctio, deserunt non ratione laudantium voluptatibus dolorum molestiae quisquam nulla sint asperiores error ullam?</span>
            </p>
            { renderLog }
        </div>
    )
}

export default Log;