import { GenericForm } from 'components/Generics/GenericForm';
import React from 'react';
import { ConnectionFormService } from './ConnectionFormService';

interface Props {
}

const ConnectionForm: React.FunctionComponent<Props> = () => {


    return (
        <div className="form-demo">
            <div className="flex justify-content-center">
                <div className="card">
                    <GenericForm service={ConnectionFormService} />
                </div>
            </div>
        </div>
    );
}

export default ConnectionForm; 