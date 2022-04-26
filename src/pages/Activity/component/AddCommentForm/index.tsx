import React, { useState } from 'react';
import { AddCommentFormWrapper} from './styles';
import {AddCommentFormService} from "./AddCommentFormService";
import {GenericForm} from "../../../../components/Generics/GenericForm";


const AddCommentForm = () => {

  return (
    <AddCommentFormWrapper>
      <GenericForm service={AddCommentFormService} />
    </AddCommentFormWrapper>
  );
}

export default AddCommentForm;