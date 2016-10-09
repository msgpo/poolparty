module.exports = {
    "css":[
        "./css/poolparty.css"
    ],
    "block": {
        "component": {
            "file": "./components/poolparty.js"
        },
        "template": {
            "file": "./templates/poolparty.hbs"
        }
    },
    "options":[
        {
            "key"         : "url",
            "name"        : "Concept URL",
            "description" : "",
            "default"     : "",
            "type"        : "text",
            "user-can-edit" : true,
            "admin-only"    : false
        },{
            "key"         : "project",
            "name"        : "Project Name",
            "description" : "",
            "default"     : "CocktailsTaxonomie",
            "type"        : "text",
            "user-can-edit" : true,
            "admin-only"    : false
        },{
            "key"         : "username",
            "name"        : "Username",
            "description" : "PoolParty Account Username",
            "default"     : "",
            "type"        : "text",
            "user-can-edit" : true,
            "admin-only"    : false
        },{
            "key"         : "password",
            "name"        : "password",
            "description" : "PoolParty Account Password",
            "default"     : "",
            "type"        : "password",
            "user-can-edit" : true,
            "admin-only"    : false
        }
    ]
};