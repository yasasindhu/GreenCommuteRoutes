import React from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { Step, Stepper, StepLabel,StepConnector,Button, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import customtheme from '../../theme';
import Select from '../select/select';
import SearchSkills from '../select field/select';
import Divider from '@material-ui/core/Divider';
import DropDown from '../dropdown/select';
import { useDispatch,useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const QontoConnector = withStyles({
    active: {
      '& $line': {
        borderColor: '#ffffff',
      },
    },
    completed: {
      '& $line': {
        borderColor: '#ffffff',
      },
    },
    line: {
      borderColor: '#ffffff',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })(StepConnector);

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    button: {
      // marginRight: theme.spacing(1),
      // marginTop:'30px',
      // marginTop: '80px',
      // margingRight:'20px',
      // marginLeft:'80px',
    width: '136px',
    height: '50px',
  //  margin: '30px 20px 370px 80px',
    borderRadius: '10px',
    marginTop:'30px',
    marginRight:'10px',
    marginBottom:'370px',
    marginLeft:'80px',
    gap:''
    },
    buttonSkip: {
      // marginRight: theme.spacing(1),
      // marginTop:'30px',
      // marginTop: '80px',
      // margingRight:'20px',
      // marginLeft:'80px',
    width: '136px',
    height: '50px',
  //  margin: '30px 20px 370px 80px',
    borderRadius: '10px',
    marginTop:'30px',
    marginRight:'10px',
    marginBottom:'370px',
    marginLeft:'10px',
    gap:''
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    iconContainer: { // define styles for icon container
        transform: 'scale(2)',
    },
    inputField:{
    // border: '1.5px solid #5ac568',
    // borderRadius: '6px',
    paddingLeft:'4px',
    width: '500px',
  height: '60px',
  margin: '20px 210px 0px 80px',
  borderColor: ' #fff',
  backgroundColor: '#fff',
  borderRadius: '100px',
  padding: '1px',
  display: 'flex',
  flexWrap: 'wrap',
    },
    stepperLabel:{
      marginLeft:' 60px',
    }

    
  }));

export default function HorizontalLinearStepper(props) {
  const history = useHistory();
  const dispatch=useDispatch();
    const classes = useStyles();
    console.log(props.steps);
    let index=useSelector((state => state.ShowStepper));
    console.log('Hi i am in stepper and my count is ',index.activeStepper);
   const yourLocation=useSelector((state=>state.showYourLocation))
   console.log("your active location is"+yourLocation.currentLocation);
   console.log("your active location length is"+yourLocation.currentLocation.length);
   const skills=useSelector((state => state.showSkills));
   console.log('Your skills are'+skills.activeSkills);
 
   const jobPlace=useSelector((state=>state.showJobLocation));

   const handleNextBasedOnSelection=()=>{ 
    if(index.activeStepper==0 && yourLocation.currentLocation.length>0){
      dispatch({type:"stepNext",stepper:(index.activeStepper)});
    }
    else  if(index.activeStepper==1 && jobPlace.jobLocation.length>0){
      dispatch({type:"stepNext",stepper:(index.activeStepper)});
    }
    else  if(index.activeStepper==2 &&  skills.activeSkills.length>0){
      console.log("boom4",skills.activeSkills)
      dispatch({type:"stepNext",stepper:(index.activeStepper)});
    }

   };
    const steps = props.steps;
  
    
    const isStepSkipped = (step) => {
      return skipped.has(step);
    };
  
   
    const handleBack = () => {
      dispatch({type:"stepBack",stepper:(index.activeStepper)})
    };
  
    return (
    <ThemeProvider theme = {customtheme}>
      <div data-testid = "maindivincustomstepper">
            <Stepper data-testid = "stepperincustomstepper" className={classes. stepperLabel} activeStep={index.activeStepper}  connector={<QontoConnector />}>
            {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
            
                if (isStepSkipped(index)) {
                stepProps.completed = false;
                }
                return (
                <Step key={label} {...stepProps} data-testid = "stepincustomstepper">
                    <StepLabel {...labelProps} ><Typography  variant="overline" data-testid = "steplabelincustomstepper">{label}</Typography></StepLabel>
                    
                </Step>
                );
            })}
            </Stepper>
            <Divider  light/>
        <div data-testid = "div2customstepper">
       {index.activeStepper==0 &&
       
       <div >
       <DropDown />
             </div>
       }
        {index.activeStepper==1 && 
        <div>
        {/* <Select handleOnClickBackButton=
        {
          handleBack}/> */}
          <Select handleOnClickBackButton={()=>{
            console.log("hi");
            handleBack()}} />


        {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button> */}
        </div>}
        {index.activeStepper==2 && 
        <SearchSkills 
          handleOnClickBackButton={()=>{
            console.log("hi");
            handleBack()}} />
          }
          {index.activeStepper === steps.length ? (
           
            history.push("/showJobs")
          ) : (
            <div data-testid = "div4incustomstepper">
              <div data-testid = "div5incustomstepper">
  
                <Button
                  variant="contained"
                  color="primary"
                 onClick={ handleNextBasedOnSelection}
                  className={classes.button}
                  data-testid = "skipincustomstepper"
                >
                  {index.activeStepper === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
                {index.activeStepper<2 && (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={()=>dispatch({type:"stepNext",stepper:(index.activeStepper)})}
                    className={classes.buttonSkip}
                    data-testid = "finishincustomstepper"
                  >
                    Skip
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      </ThemeProvider>
    );
  }