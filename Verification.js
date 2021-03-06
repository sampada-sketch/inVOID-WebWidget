//export default verification;
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import mainLogo from'./gg.png';
import something from'./v.gif';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['General Details', 'Verification of details'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <div className="steper">
          <center><h2>Enter Your Details</h2></center>
     <div>
      <label>Enter Full Name

      </label>
      <input
      type="text"
      autoFocus
      placeholder="Enter Your Full Name"
      
      />
      </div>
      <div>
      <label>Select id Proof

      </label>
      <select  class="form-field" formControlName="gender" id="gender" required>
              <option value="" disabled selected>Select your option</option>
              <option value="">Aadhar card</option>
               <option> Pan Card </option>
               <option> Passport </option>
  
              
             </select>
    
      </div>
      <div>
      <label>Enter your ID

      </label>
      <input
      type="text"
      autoFocus
      placeholder="Enter Id Proof no"
      />
      </div>
      <div>
      <label>Enter Phone no

      </label>
      <input
      type="text"
      autoFocus
      placeholder="Enter Phone no"
      
      />
      
      </div>
    

  </div>;
    case 1:
      return <div className="steper">
      <center><h2>Confirm Your Details</h2></center>
<br></br>
  <div><center><img  src={mainLogo} alt="fireSpot"width= "450px"/></center></div>
  
  <div>
  <label>Enter OTP

  </label>
  <input
  type="text"
  autoFocus
  placeholder="A OTP has been sent to xxxxxxx789"
  />
  </div>
  <div>
  <label>Upload your own document 

  </label>
  <input
  type="file"
  autoFocus
  placeholder="Enter Phone number"
  
  />
  
  </div>


</div>;
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
                
            <div className="steper">
         <center> <h2>e-KYC Verified </h2></center>
          <br></br>
    
          <div><img  src={something} alt="fireSpot" width="350px"/></div>

  </div>;
                
                
                </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button  variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}