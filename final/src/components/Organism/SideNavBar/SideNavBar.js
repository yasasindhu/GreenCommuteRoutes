import React  from 'react';
import { Grid, List, ListItem, ListItemIcon, ListItemText, ThemeProvider,Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import ContactPhoneOutlinedIcon from '@material-ui/icons/ContactPhoneOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import customtheme from '../../theme';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { changeTabInSideNavBar } from '../../../store/actions/actionsForSideNavBar'




function Boom (props){
    console.log(props)
    const {comp} = props
    return class extends React.Component {
        render() {
           return <comp />;
       }
     };
}



const sideNavItems = [
    {
        icon: DashboardOutlinedIcon ,
        label: "Dashboard"
    },
    {
        icon: WorkOutlineOutlinedIcon,
        label: "Find Jobs"
    },
    {
        icon: TurnedInNotOutlinedIcon,
        label: "Saved Jobs"
    },
    {
        icon: MenuBookOutlinedIcon,
        label: "Practice Test"
    },
    {
        icon: DateRangeOutlinedIcon,
        label: "News & Events"
    },
    {
        icon: HelpOutlineOutlinedIcon,
        label: "Need Help?"
    },
    {
        icon: ContactPhoneOutlinedIcon,
        label: "Contact Us"
    },
    {
        icon: SettingsOutlinedIcon,
        label: "Settings"
    }
]


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 270,
        backgroundColor: theme.palette.background.paper,
    },
    headerStyle: {
        padding: '10px',
        paddingLeft: '5px',
        display: 'flex',
        justifyContent: 'center',
    },
    listItemStyle: {
        '&:hover' : {
            backgroundColor: 'rgba(90, 197, 104, 0.15)'
        }	,
        justifyContent: 'center',
        height: '50px',
        width: '240px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 10px',
        cursor: 'pointer',
        marginTop: '2px',
        marginBottom: '2px',
    },
    selectedItemStyle: {
        backgroundColor: 'rgba(90, 197, 104, 0.15)',
        borderRadius: '10px',
        height: '50px',
        width: '240px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '8px 10px',
        cursor: 'pointer',
        marginTop: '2px',
        marginBottom: '2px',
    },
    headerTextStyle: {
        fontSize: '20px',
        color: '#5ac568',
        fontFamily: 'Montserrat',
        lineHeight: '24px',
        letterSpacing: '0.1px',
        fontWeight: 'bold'
    },
    listItemTextStyle: {
        fontSize: '16px',
        color: '#324552',
        fontFamily: 'Montserrat',
        lineHeight: '26px',
        letterSpacing: '0.2px',
    },
    icon: {
        color: '#9bbdcb',
        width: '24px',
        height: '24px', 
    },
    selectedIcon: {
        color: '#5ac568',
        width: '24px',
        height: '24px', 
    },
    typographyStyle: {
        fontSize: '16px',
        color: '#5f7381',
        fontFamily: 'Montserrat',
        lineHeight: '24px',
        letterSpacing: '0.1px',
    },
    selectedTypographyStyle: {
        fontSize: '16px',
        color: '#5ac568',
        fontFamily: 'Montserrat',
        lineHeight: '24px',
        letterSpacing: '0.1px',
    },
    heading5:{
        fontFamily: 'Montserrat',
        fontSize: '20px',
        fontWeight: 600,
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.3,
        letterSpacing: '0.2px',
        color: '#5ac568',
        justifyContent: 'center',
        alignItems: 'center',
    },
}));






export default function SideNavBar (props){

    const classes = useStyles();
    const stateForSideNavBarTab = useSelector((state => state.sideNavBar))
    const dispatch = useDispatch();
    const history = useHistory();

    const selectedIndex = stateForSideNavBarTab.selectedTab

    const handleListItemClick = (index) => {
        dispatch(changeTabInSideNavBar(index))
    };

    

    
    return (

        <div  data-testid='main' className={classes.root} >
            <div className={classes.headerStyle}>
                <Typography className = { classes.heading5 }>Green Commute</Typography>
            </div>
            <div data-testid='headingName'>
                <List>
                    <ThemeProvider theme={customtheme}>

{/* 
                        {
                            sideNavItems.map((item,index) => {
                                const {icon:Icon} = item
                                if(index === 5){
                                    
                                    <Grid>
                                        <Divider style = {{ width: '240px', marginTop:'5px', marginBottom: '5px' }}/>
                                        <Grid direction = "column" container className={selectedIndex === index ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(index);  }} >
                                            <ListItem >
                                                <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> 
                                                <Icon className={selectedIndex === index ? classes.selectedIcon : classes.icon}/>
                                                </ListItemIcon>
                                                <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === index ? classes.selectedTypographyStyle : classes.typographyStyle}>{ item.label }</Typography>} />
                                                </ListItem>
                                            </Grid>
                                    </Grid>
                                    
                                }
                                else if( index == 1){
                                    <Grid direction = "column" container className={selectedIndex === index ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(index);  }} >
                                        <ListItem >
                                            <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> 
                                                <Icon className={selectedIndex === index ? classes.selectedIcon : classes.icon}/>   
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === index ? classes.selectedTypographyStyle : classes.typographyStyle}>{ item.label }</Typography>} />
                                        </ListItem>
                                    </Grid>
                                }
                                else if( index == 2){
                                    <Grid direction = "column" container className={selectedIndex === index ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(index); console.log("Saved Jobs"); history.replace("/savedJobs")  }} >
                                        <ListItem >
                                            <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> 
                                                <Icon className={selectedIndex === index ? classes.selectedIcon : classes.icon}/>   
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === index ? classes.selectedTypographyStyle : classes.typographyStyle}>{ item.label }</Typography>} />
                                        </ListItem>
                                    </Grid>
                                }
                                return(
                                    <Grid direction = "column" container className={selectedIndex === index ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(index); }} >
                                        <ListItem >
                                            <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> 
                                                <Icon className={selectedIndex === index ? classes.selectedIcon : classes.icon}/>   
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === index ? classes.selectedTypographyStyle : classes.typographyStyle}>{ item.label }</Typography>} />
                                        </ListItem>
                                    </Grid>
                                )
                            })
                        } */}
                        <Grid direction = "column" container className={selectedIndex === 0 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(0); }} >
                                        <ListItem >
                                            <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> */}
                                                <DashboardOutlinedIcon className={selectedIndex === 0 ? classes.selectedIcon : classes.icon}/>   
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === 0 ? classes.selectedTypographyStyle : classes.typographyStyle}>{ sideNavItems[0].label }</Typography>} />
                                        </ListItem>
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 1 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(1); history.replace("/") }} >
                                        <ListItem >
                                            <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> */}
                                                <WorkOutlineOutlinedIcon className={selectedIndex === 1 ? classes.selectedIcon : classes.icon}/>   
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === 1 ? classes.selectedTypographyStyle : classes.typographyStyle}>{ sideNavItems[1].label }</Typography>} />
                                        </ListItem>
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 2 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(2); console.log("CLicked Saved Jobs"); history.replace("/savedJobs") }} >
                                        <ListItem >
                                            <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> */}
                                                <TurnedInNotOutlinedIcon className={selectedIndex === 2 ? classes.selectedIcon : classes.icon}/>   
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === 2 ? classes.selectedTypographyStyle : classes.typographyStyle}>{ sideNavItems[2].label }</Typography>} />
                                        </ListItem>
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 3 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(3); }} >
                                        <ListItem >
                                            <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> */}
                                                <MenuBookOutlinedIcon className={selectedIndex === 3 ? classes.selectedIcon : classes.icon}/>   
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === 3 ? classes.selectedTypographyStyle : classes.typographyStyle}>{ sideNavItems[3].label }</Typography>} />
                                        </ListItem>
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 4 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(4); }} >
                                        <ListItem >
                                            <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> */}
                                                <DateRangeOutlinedIcon className={selectedIndex === 4 ? classes.selectedIcon : classes.icon}/>   
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === 4 ? classes.selectedTypographyStyle : classes.typographyStyle}>{ sideNavItems[4].label }</Typography>} />
                                        </ListItem>
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 5 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(5); }} >
                                        <ListItem >
                                            <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> */}
                                                <HelpOutlineOutlinedIcon className={selectedIndex === 5 ? classes.selectedIcon : classes.icon}/>   
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === 5 ? classes.selectedTypographyStyle : classes.typographyStyle}>{ sideNavItems[5].label }</Typography>} />
                                        </ListItem>
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 6 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(6); }} >
                                        <ListItem >
                                            <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> */}
                                                <ContactPhoneOutlinedIcon className={selectedIndex === 6 ? classes.selectedIcon : classes.icon}/>   
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === 6 ? classes.selectedTypographyStyle : classes.typographyStyle}>{ sideNavItems[6].label }</Typography>} />
                                        </ListItem>
                        </Grid>
                        <Grid direction = "column" container className={selectedIndex === 7 ? classes.selectedItemStyle : classes.listItemStyle} onClick={() => {handleListItemClick(7); }} >
                                        <ListItem >
                                            <ListItemIcon>
                                                {/* <Boom comp={item.icon}  /> */}
                                                <SettingsOutlinedIcon className={selectedIndex === 7 ? classes.selectedIcon : classes.icon}/>   
                                            </ListItemIcon>
                                            <ListItemText primary={<Typography variant="subtitle1" className={selectedIndex === 7 ? classes.selectedTypographyStyle : classes.typographyStyle}>{ sideNavItems[7].label }</Typography>} />
                                        </ListItem>
                        </Grid>
                    </ThemeProvider>
                </List>
            </div>
        </div>
    );

}
