import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Soliman from "./Soliman";
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props} />
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const NavTabs = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChangeTab = (event, newValue) => { setValue(newValue) };

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChangeTab}
                    aria-label="Navigation tabs">
                    <LinkTab label="Soliman" />
                    <LinkTab label="Adnane" />
                    <LinkTab label="Ali" />
                    <LinkTab label="Oualid" />
                    <LinkTab label="Hamza" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Soliman />
            </TabPanel>
            <TabPanel value={value} index={1}>

            </TabPanel>
            <TabPanel value={value} index={2}>

            </TabPanel>
            <TabPanel value={value} index={3}>

            </TabPanel>
            <TabPanel value={value} index={4}>

            </TabPanel>
        </div>
    );
};

export default NavTabs;