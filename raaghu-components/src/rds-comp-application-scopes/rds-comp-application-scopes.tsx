import React, { FC, useEffect, useState } from 'react';
import { RdsCompApplicationScopesWrapper } from './rds-comp-application-scopes.styled';
import { RdsCheckbox, RdsCheckboxGroup } from '../rds-elements';

interface RdsCompApplicationScopesProps {
    scopesList: any[];
}


const RdsCompApplicationScopes = (props: RdsCompApplicationScopesProps) => {

   return (
      <>
         <RdsCheckboxGroup
            itemList={props.scopesList}
         />
      </>
   );
};

export default RdsCompApplicationScopes;
