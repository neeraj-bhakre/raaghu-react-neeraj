import React, { useEffect, useState } from "react";
import RdsCompApiScopeResource from "../../../../../raaghu-components/src/rds-comp-api-scope-resource";
import {
  RdsBadge,
  RdsInput,
  RdsButton,
  RdsOffcanvas,
  RdsNavtabs,
} from "../../../../../raaghu-elements/src";

import {
  RdsCompDatatable,
  RdsCompClientResource,
  RdsCompIdentityClientBasic
} from "../../../rds-components";


interface RdsPageScopeProps { }

const Client = (props: RdsPageScopeProps) => {

  const [activeNavTabId, setActiveNavTabId] = useState();
  const [activeNavTabIdEdit, setActiveNavTabIdEdit] = useState();
  const resources =[
    {
      id: 1,
      displayName: "A - E",
      selected: false,
      select: false,
      children: [
        {
          id: 1,
          p_id: 1,
          displayName: "Availability",
          selected: false,
        },
        {
          id: 2,
          p_id: 1,
          displayName: "Apiopolis",
          selected: false,
        },
        {
          id: 3,
          p_id: 1,
          displayName: "Apigenix",
          selected: false,
        },
        {
          id: 4,
          p_id: 1,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 5,
          p_id: 1,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 6,
          p_id: 1,
          displayName: "Creative",
          selected: false,
        },
        {
          id: 7,
          p_id: 1,
          displayName: "ALT Genix Api",
          selected: false,
        },
        {
          id: 8,
          p_id: 1,
          displayName: "Dev Support Api",
          selected: false,
        },
      ],
    },
    {
      id: 2,
      displayName: "F - O",
      selected: false,
      select: false,
      children: [
        {
          id: 1,
          p_id: 2,
          displayName: "Availability",
          selected: false,
        },
        {
          id: 2,
          p_id: 2,
          displayName: "Apiopolis",
          selected: false,
        },
        {
          id: 3,
          p_id: 2,
          displayName: "Apigenix",
          selected: false,
        },
        {
          id: 4,
          p_id: 2,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 5,
          p_id: 2,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 6,
          p_id: 2,
          displayName: "Creative",
          selected: false,
        },
        {
          id: 7,
          p_id: 2,
          displayName: "ALT Genix Api",
          selected: false,
        },
        {
          id: 8,
          p_id: 2,
          displayName: "Dev Support Api",
          selected: false,
        },
      ],
    },
    {
      id: 3,
      displayName: "P - Z",
      selected: false,
      select: false,
      children: [
        {
          id: 1,
          p_id: 3,
          displayName: "Availability",
          selected: false,
        },
        {
          id: 2,
          p_id: 3,
          displayName: "Apiopolis",
          selected: false,
        },
        {
          id: 3,
          p_id: 3,
          displayName: "Apigenix",
          selected: false,
        },
        {
          id: 4,
          p_id: 3,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 5,
          p_id: 3,
          displayName: "Best Selector",
          selected: false,
        },
        {
          id: 6,
          p_id: 3,
          displayName: "Creative",
          selected: false,
        },
        {
          id: 7,
          p_id: 3,
          displayName: "ALT Genix Api",
          selected: false,
        },
        {
          id: 8,
          p_id: 3,
          displayName: "Dev Support Api",
          selected: false,
        },
      ],
    },
  ];

  const tableHeaders = [
    {
      displayName: ("Client ID"),
      key: "clientId",
      datatype: "text",
      sortable: false,
    },
    {
      displayName: ("Name"),
      key: "name",
      datatype: "text",
      sortable: false,
    },
  
    {
      displayName: ("Description"),
      key: "description",
      datatype: "text",
      sortable: false,
    },
  ];
  const scopeData =[
    { id: 1, clientId: "1232", description: "Description about client here", name: "Abp_value" },
		{ id: 2, clientId: "4235", description: "Address as described as the documents", name: "Abp_dualtone" },
		{ id: 3, clientId: "1578", description: "Email Id associated", name: "Containervalue" },

  ];
  
  const navtabsItemsEdit = [
    { label: "User Information", tablink: "#nav-home", id: 0 },
    { label: "Roles", tablink: "#nav-role", id: 1 },
    { label: "Permissions", tablink: "#nav-profile", id: 2 },
  ];
  const navtabsItems = [
    { label: "Basics", tablink: "#nav-home", id: 0 },
    { label: "Secrets", tablink: "#nav-role", id: 1 },
    { label: "Resources", tablink: "#nav-role", id: 2 },
  ];


  const actions = [
    { id: "edit", displayName: "Edit", offId: "entity-edit-off" },
    { id: "history", displayName: "Change History", modalId: "change_history" },
    { id: "delete", displayName: "Delete", modalId: "dynamic_delete_off" },
  ];
  const offCanvasHandler = () => { 
    
  };

  return (
    <div>
      <div className="row align-items-center">
      <div className="d-flex justify-content-between">
        <h4>Clients </h4>
        <div className="d-flex justify-content-end">
        <RdsOffcanvas
              canvasTitle={("New Client")}
              onclick={offCanvasHandler}
              placement="end"
              offcanvaswidth={550}
              offcanvasbutton={
                <div>
                  <RdsButton
                    icon="plus"
                    label={("New Client") || ""}
                    iconColorVariant="light"
                    iconHeight="15px"
                    iconWidth="15px"
                    iconFill={false}
                    iconStroke={true}
                    block={false}
                    size="small"
                    type="button"
                    colorVariant="primary"
                  ></RdsButton>
                </div>
              }
              backDrop={false}
              scrolling={false}
              preventEscapeKey={false}
              offId={"client"}
            >
                   <RdsNavtabs
          navtabsItems={navtabsItems}
          type={"tabs"}
          activeNavTabId={activeNavTabId}
          activeNavtabOrder={(activeNavTabId) => {
            setActiveNavTabId(activeNavTabId);
          }}
          justified={false}
        >
          {activeNavTabId == 0 && (
          <RdsCompIdentityClientBasic
          clientData="naemsef"
          />
          )}
          {activeNavTabId == 1 && (
            <>            
            </>
          )}
           {activeNavTabId == 2 && (
           <RdsCompApiScopeResource role="advanced"  resources={[resources]}></RdsCompApiScopeResource>
          )}
        </RdsNavtabs>

             

            </RdsOffcanvas>
        </div>
      </div>
        </div>
        <div className="card p-2 h-100 border-0 rounded-0 card-full-stretch mt-3">
        <RdsCompDatatable
            tableHeaders={tableHeaders}
            actions={actions}
            tableData={scopeData}
            pagination={true}
            recordsPerPage={10}
            recordsPerPageSelectListOption={true}
            //onActionSelection={scopeSelection}
          ></RdsCompDatatable>
          
        </div>
    </div>
  );
};

export default Client;
