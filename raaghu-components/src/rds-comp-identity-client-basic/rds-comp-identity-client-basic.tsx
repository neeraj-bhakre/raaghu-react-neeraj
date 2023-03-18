import { RdsButton, RdsCheckbox, RdsInput, RdsTextArea } from 'raaghu-react-elements'
import React, { useState } from 'react'


export interface RdsCompIdentityClientBasicProps {
    clientData?: any;
}



const RdsCompIdentityClientBasic = (props: RdsCompIdentityClientBasicProps) => {


const [clientData, setClientData] = useState<any>(props.clientData)


  return (
    <>
      <form className="p-2 mt-2">
        <div className="row">
            <div className="col-lg-6 col-md-6">
              <div>
              <RdsInput
                value={clientData.id}
                placeholder="Enter ID"
                inputType="text"
                label="Client ID"
                name="name"
                required={false}
                // onChange={(e)=>{setName(e)}}
              ></RdsInput>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div>
              <RdsInput
                value={clientData.name}
                placeholder="Enter Client Name"
                inputType="text"
                label="Client Name"
                name="name"
                required={false}
                // onChange={(e)=>{setName(e)}}
              ></RdsInput>
              </div>
            </div>

        </div>
        <div className="row">
            <div className="col-md-12 mb-4">
            <RdsTextArea
						label='Description'
						placeholder='Enter Description'
					    // onChange = {messagehandleChange}
						rows ={4}
						value = {clientData.Description}

					/>            
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6">
              <div>
              <RdsInput
                value={clientData.url}
                placeholder="Enter URL"
                inputType="text"
                label="Client URL"
                name="name"
                required={false}
                // onChange={(e)=>{setName(e)}}
              ></RdsInput>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div>
              <RdsInput
                value={clientData.name}
                placeholder="Enter URL"
                inputType="text"
                label="Logo URL"
                name="name"
                required={false}
                // onChange={(e)=>{setName(e)}}
              ></RdsInput>
              </div>
            </div>

        </div>
        <div className="row">
            <div className="col-lg-6 col-md-6">
              <div>
              <RdsInput
                value={clientData.url}
                placeholder="Enter URL"
                inputType="text"
                label="CallBack URL"
                name="name"
                required={false}
                // onChange={(e)=>{setName(e)}}
              ></RdsInput>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div>
              <RdsInput
                value={clientData.name}
                placeholder="Enter URL"
                inputType="text"
                label="Logout URL"
                name="name"
                required={false}
                // onChange={(e)=>{setName(e)}}
              ></RdsInput>
              </div>
            </div>

        </div>
        <div className="row">
        <RdsCheckbox
            label="Required Consent"
            // onChange={(e) => {
            //   setSelfRegistration(e.target.checked);
            // }}
            checked={false}
          ></RdsCheckbox>
        </div>
        <div className="mt-3 d-flex footer-buttons">
						<RdsButton
							class="me-2"
							tooltipTitle={""}
							type={"button"}
							label={("Cancel") || ""}
							colorVariant="outline-primary"
							size="small"
							databsdismiss="offcanvas"
						></RdsButton>
						<RdsButton
							class="me-2"
							label={("Save") || ""}
							size="small"
							colorVariant="primary"
							tooltipTitle={""}
							type={"submit"}
							databsdismiss="offcanvas"
							// onClick={()=>props.onSuccess(data)}
							// isDisabled={!isFormValid}
						></RdsButton>
					</div>
      </form>
    </>
  )
}

export default RdsCompIdentityClientBasic