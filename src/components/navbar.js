import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import Button from "@material-ui/core/Button"
import useMediaQuery from "@material-ui/core/useMediaQuery"
// import { Link } from "gatsby-theme-material-ui"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
}))

const Navbar = props => {
  const { history } = props
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClick = pageURL => {
    setAnchorEl(null)
  }

  // const handleButtonClick = pageURL => {
  //   history.push(pageURL)
  // }

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "Contact",
      pageURL: "/contact",
    },
    {
      menuTitle: "About",
      pageURL: "/about",
    },
  ]

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Career.HMIF
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  )
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button href="/">Home</Button>
              <Button href="/article">Article</Button>
              <Button href="/mentoring">Mentoring</Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
