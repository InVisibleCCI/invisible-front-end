import { GenericForm } from 'components/Generics/GenericForm';
import React from 'react';
import { ConnectionFormService } from './ConnectionFormService';
import { ConnectionFormWrapper } from './styles';

interface Props {
}

const ConnectionForm: React.FunctionComponent<Props> = () => {


    return (
        <ConnectionFormWrapper>
            <div className="form-demo">
                <div className="flex justify-content-center">
                    <div className="card">
                        <GenericForm service={ConnectionFormService} />
                    </div>
                </div>
            </div>
        </ConnectionFormWrapper>
    );
}

export default ConnectionForm; 