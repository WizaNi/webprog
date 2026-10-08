const NAVBAR_COLLAPSE_ID = "main-navbar-collapse";
const BRAND = {text: "Navbar", href: "#"};
const NAV_ITEMS = [
    {type: "link", text: "Home", href: "#", active: true},
    {type: "link", text: "Link", href: "#"},
    {
        type: "dropdown",
        text: "Dropdown",
        items:  [
            {text: "action", href: "#"},
            {text: "action 2", href: "#"},
            {devider: true},
            {text: "action 3", href: "#"}, 
                ],
    },
    {type: "link", text: "Disabled", disabled: true},
];

const SEARCH = {placeholder: "Search", buttotText: "Search"}