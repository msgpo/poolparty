module.exports = {
    "acronym":"Pool",
    "entityTypes": ["string"],
    "logging": { level: 'info'},
    "styles":[
        "./styles/poolparty.less"
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
            "userCanEdit" : true,
            "adminOnly"    : false
        },
        {
            "key"         : "project",
            "name"        : "Project Name",
            "description" : "",
            "default"     : "",
            "type"        : "text",
            "userCanEdit" : true,
            "adminOnly"    : false
        },
        {
            "key"         : "username",
            "name"        : "Username",
            "description" : "PoolParty Account Username",
            "default"     : "",
            "type"        : "text",
            "userCanEdit" : true,
            "adminOnly"    : false
        },
        {
            "key"         : "password",
            "name"        : "password",
            "description" : "PoolParty Account Password",
            "default"     : "",
            "type"        : "password",
            "userCanEdit" : true,
            "adminOnly"    : false
        },
        {
            "key"         : "showBroaderConcepts",
            "name"        : "Show Broader Concepts",
            "description" : "If checked, the integration will show broader concepts",
            "default"     : true,
            "type"        : "boolean",
            "userCanEdit" : true,
            "adminOnly"    : false
        },
        {
            "key"         : "showNarrowerConcepts",
            "name"        : "Show Narrower Concepts",
            "description" : "If checked, the integration will show narrower concepts",
            "default"     : true,
            "type"        : "boolean",
            "userCanEdit" : false,
            "adminOnly"    : true
        },
        {
            "key"         : "showRelatedConcepts",
            "name"        : "Show Related Concepts",
            "description" : "If checked, the integration will show related concepts",
            "default"     : true,
            "type"        : "boolean",
            "userCanEdit" : false,
            "adminOnly"    : true
        }
    ]
};